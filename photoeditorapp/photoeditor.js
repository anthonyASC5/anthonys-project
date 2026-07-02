// Cache all interactive DOM hooks once so the editor logic can stay data-driven.
const elements = {
  canvas: document.querySelector("[data-canvas]"),
  video: document.querySelector("[data-video]"),
  empty: document.querySelector("[data-empty]"),
  status: document.querySelector("[data-status]"),
  dropzone: document.querySelector("[data-dropzone]"),
  fileInput: document.querySelector("[data-file-input]"),
  openFileButtons: Array.from(document.querySelectorAll("[data-open-file]")),
  sliders: Array.from(document.querySelectorAll("[data-control]")),
  startButtons: Array.from(document.querySelectorAll("[data-start-camera]")),
  stopButtons: Array.from(document.querySelectorAll("[data-stop-camera]")),
  captureButtons: Array.from(document.querySelectorAll("[data-capture]")),
  resetButtons: Array.from(document.querySelectorAll("[data-reset]")),
  downloadButtons: Array.from(document.querySelectorAll("[data-download]")),
  rotateLeftButtons: Array.from(document.querySelectorAll("[data-rotate-left]")),
  rotateRightButtons: Array.from(document.querySelectorAll("[data-rotate-right]")),
  flipXButtons: Array.from(document.querySelectorAll("[data-flip-x]")),
  flipYButtons: Array.from(document.querySelectorAll("[data-flip-y]")),
  undoButtons: Array.from(document.querySelectorAll("[data-undo]")),
  clearButtons: Array.from(document.querySelectorAll("[data-clear]")),
  sectionToggles: Array.from(document.querySelectorAll("[data-section-toggle]")),
  effectsHud: document.querySelector("[data-effects-hud]"),
  openEffectsHudButtons: Array.from(document.querySelectorAll("[data-open-effects-hud]")),
  closeEffectsHudButtons: Array.from(document.querySelectorAll("[data-close-effects-hud]")),
  effectButtons: Array.from(document.querySelectorAll("[data-effect]")),
  activeEffectLabel: document.querySelector("[data-active-effect]"),
  clearEffectButtons: Array.from(document.querySelectorAll("[data-clear-effect]"))
};

// User-facing effect labels are centralized here so button state and status copy stay aligned.
const EFFECT_LABELS = {
  none: "NO FX STACK ACTIVE.",
  "ordered-bayer-4": "ORDERED DITHERING ACTIVE (BAYER 4X4).",
  "floyd-steinberg": "FLOYD-STEINBERG ERROR DIFFUSION ACTIVE.",
  atkinson: "ATKINSON DITHERING ACTIVE.",
  "random-threshold": "RANDOM THRESHOLD DITHERING ACTIVE.",
  "blue-noise": "BLUE NOISE DITHERING ACTIVE.",
  "quantized-noise": "QUANTIZED COLOR + NOISE INJECTION ACTIVE.",
  "film-grain": "FILM GRAIN SIMULATION ACTIVE.",
  halftone: "HALFTONE DOTS ACTIVE.",
  "pixel-sort-dither": "PIXEL SORT + DITHER ACTIVE.",
  "crt-analog": "CRT / ANALOG NOISE STACK ACTIVE.",
  "salt-pepper": "SALT + PEPPER NOISE ACTIVE.",
  "dust-scratches": "DUST + SCRATCHES ACTIVE.",
  "multiplicative-grain": "MULTIPLICATIVE GRAIN ACTIVE.",
  misregistration: "NEWSPAPER MISREGISTRATION ACTIVE.",
  "gritty-stack": "GRITTY DIGITAL STACK ACTIVE."
};

// Runtime state tracks the active source, current control values, and reversible edit history.
const state = {
  sourceCanvas: document.createElement("canvas"),
  sourceLabel: "",
  sourceLoaded: false,
  stream: null,
  previewFrameId: 0,
  renderQueued: false,
  activeEffect: "none",
  controls: {
    brightness: 0,
    contrast: 0,
    saturation: 0,
    warmth: 0,
    sharpness: 0,
    highlights: 0,
    fade: 0,
    vignette: 0,
    grain: 0
  },
  history: []
};

// Basic UI helpers keep repeated button/status updates readable throughout the file.
function setButtonsDisabled(buttons, disabled) {
  buttons.forEach((button) => {
    button.disabled = disabled;
  });
}

function setStatus(message) {
  if (elements.status) {
    elements.status.textContent = message;
  }
}

function clampByte(value) {
  return Math.max(0, Math.min(255, Math.round(value)));
}

function fitWithinBounds(width, height, maxEdge = 1600) {
  if (!width || !height) return { width: 1, height: 1 };

  const scale = Math.min(1, maxEdge / Math.max(width, height));
  return {
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale))
  };
}

function hashNoise(x, y, seed = 0) {
  const value = Math.sin((x * 127.1) + (y * 311.7) + (seed * 74.7)) * 43758.5453;
  return value - Math.floor(value);
}

function luminanceAt(data, index) {
  return (data[index] * 0.299) + (data[index + 1] * 0.587) + (data[index + 2] * 0.114);
}

function syncVisibility() {
  const hasSource = state.sourceLoaded || Boolean(state.stream);
  elements.empty.hidden = hasSource;
  elements.canvas.hidden = !hasSource;
  elements.video.hidden = true;
}

function syncToolButtons() {
  const enabled = state.sourceLoaded;
  setButtonsDisabled(elements.rotateLeftButtons, !enabled);
  setButtonsDisabled(elements.rotateRightButtons, !enabled);
  setButtonsDisabled(elements.flipXButtons, !enabled);
  setButtonsDisabled(elements.flipYButtons, !enabled);
  setButtonsDisabled(elements.clearButtons, !enabled);
  setButtonsDisabled(elements.undoButtons, !(enabled && state.history.length > 0));
}

function syncControls() {
  elements.sliders.forEach((slider) => {
    const key = slider.dataset.control;
    if (key) slider.value = String(state.controls[key]);
  });
}

function syncEffectUI() {
  const label = EFFECT_LABELS[state.activeEffect] || EFFECT_LABELS.none;
  if (elements.activeEffectLabel) {
    elements.activeEffectLabel.textContent = label;
  }

  elements.effectButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.effect === state.activeEffect);
  });

  setButtonsDisabled(elements.clearEffectButtons, state.activeEffect === "none");
}

function resetControls() {
  state.controls = {
    brightness: 0,
    contrast: 0,
    saturation: 0,
    warmth: 0,
    sharpness: 0,
    highlights: 0,
    fade: 0,
    vignette: 0,
    grain: 0
  };

  syncControls();
  queueRender();
}

function pushHistorySnapshot() {
  if (!state.sourceLoaded || !state.sourceCanvas.width || !state.sourceCanvas.height) return;
  if (state.history.length >= 20) {
    state.history.shift();
  }
  state.history.push(state.sourceCanvas.toDataURL("image/png"));
  syncToolButtons();
}

function applyTransform(transformer) {
  if (!state.sourceLoaded) return;
  const width = state.sourceCanvas.width;
  const height = state.sourceCanvas.height;
  if (!width || !height) return;

  pushHistorySnapshot();
  const output = transformer(state.sourceCanvas, width, height);
  state.sourceCanvas.width = output.width;
  state.sourceCanvas.height = output.height;
  const ctx = state.sourceCanvas.getContext("2d");
  if (!ctx) return;
  ctx.clearRect(0, 0, output.width, output.height);
  ctx.drawImage(output, 0, 0);
  queueRender();
  syncToolButtons();
}

function rotateSource(direction) {
  applyTransform((source, width, height) => {
    const canvas = document.createElement("canvas");
    canvas.width = height;
    canvas.height = width;
    const ctx = canvas.getContext("2d");
    if (!ctx) return source;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(direction * (Math.PI / 2));
    ctx.drawImage(source, -width / 2, -height / 2);
    return canvas;
  });
  setStatus(direction > 0 ? "ROTATED +90°." : "ROTATED -90°.");
}

function flipSource(axis) {
  applyTransform((source, width, height) => {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return source;
    ctx.save();
    if (axis === "x") {
      ctx.translate(width, 0);
      ctx.scale(-1, 1);
    } else {
      ctx.translate(0, height);
      ctx.scale(1, -1);
    }
    ctx.drawImage(source, 0, 0);
    ctx.restore();
    return canvas;
  });
  setStatus(axis === "x" ? "FLIPPED HORIZONTALLY." : "FLIPPED VERTICALLY.");
}

function undoEdit() {
  const snapshot = state.history.pop();
  if (!snapshot) return;
  const image = new Image();
  image.onload = () => {
    setSource(image, image.naturalWidth, image.naturalHeight, state.sourceLabel || "IMAGE");
    queueRender();
    setStatus("UNDO APPLIED.");
    syncToolButtons();
  };
  image.src = snapshot;
}

function clearSource() {
  stopCamera();
  state.sourceLoaded = false;
  state.sourceLabel = "";
  state.history = [];
  state.sourceCanvas.width = 1;
  state.sourceCanvas.height = 1;
  resetControls();
  setButtonsDisabled(elements.captureButtons, true);
  setButtonsDisabled(elements.downloadButtons, true);
  setButtonsDisabled(elements.resetButtons, true);
  syncToolButtons();
  syncVisibility();
  setStatus("NO IMAGE LOADED.");
}

// Core image adjustment math runs before any effect stack so every effect starts from the same base.
function applyAdjustments(sourceData, width, height) {
  const output = new Uint8ClampedArray(sourceData);
  const {
    brightness,
    contrast,
    saturation,
    warmth,
    sharpness,
    highlights,
    fade,
    vignette,
    grain
  } = state.controls;
  const brightnessOffset = brightness * 2.55;
  const contrastFactor = 1 + contrast / 100;
  const saturationFactor = 1 + saturation / 100;
  const highlightBoost = highlights / 100;
  const warmthShift = warmth * 1.8;
  const fadeFactor = fade / 100;
  const vignetteFactor = vignette / 100;
  const centerX = width / 2;
  const centerY = height / 2;
  const maxDistance = Math.sqrt((centerX * centerX) + (centerY * centerY)) || 1;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = ((y * width) + x) * 4;
      let red = output[index];
      let green = output[index + 1];
      let blue = output[index + 2];

      red = ((red - 128) * contrastFactor) + 128 + brightnessOffset;
      green = ((green - 128) * contrastFactor) + 128 + brightnessOffset;
      blue = ((blue - 128) * contrastFactor) + 128 + brightnessOffset;

      const luminance = (red + green + blue) / 3;
      red = luminance + ((red - luminance) * saturationFactor);
      green = luminance + ((green - luminance) * saturationFactor);
      blue = luminance + ((blue - luminance) * saturationFactor);

      red += warmthShift;
      blue -= warmthShift * 0.92;

      if (luminance > 150 && highlightBoost !== 0) {
        const influence = ((luminance - 150) / 105) * highlightBoost * 70;
        red += influence;
        green += influence;
        blue += influence;
      }

      if (fadeFactor > 0) {
        const fadeTarget = 212;
        red = (red * (1 - fadeFactor)) + (fadeTarget * fadeFactor);
        green = (green * (1 - fadeFactor)) + (fadeTarget * fadeFactor);
        blue = (blue * (1 - fadeFactor)) + (fadeTarget * fadeFactor);
      }

      if (grain > 0) {
        const noise = (Math.random() - 0.5) * grain * 1.8;
        red += noise;
        green += noise;
        blue += noise;
      }

      if (vignetteFactor > 0) {
        const dx = x - centerX;
        const dy = y - centerY;
        const distance = Math.sqrt((dx * dx) + (dy * dy));
        const normalized = Math.min(1, distance / maxDistance);
        const vignetteWeight = 1 - (normalized * normalized * vignetteFactor * 0.75);
        red *= vignetteWeight;
        green *= vignetteWeight;
        blue *= vignetteWeight;
      }

      output[index] = clampByte(red);
      output[index + 1] = clampByte(green);
      output[index + 2] = clampByte(blue);
    }
  }

  if (sharpness <= 0 || width <= 2 || height <= 2) {
    return output;
  }

  const original = new Uint8ClampedArray(output);
  const strength = (sharpness / 100) * 0.65;

  for (let y = 1; y < height - 1; y += 1) {
    for (let x = 1; x < width - 1; x += 1) {
      const index = (y * width + x) * 4;
      const left = index - 4;
      const right = index + 4;
      const up = index - (width * 4);
      const down = index + (width * 4);

      for (let channel = 0; channel < 3; channel += 1) {
        const sharpened = (original[index + channel] * 5)
          - original[left + channel]
          - original[right + channel]
          - original[up + channel]
          - original[down + channel];

        output[index + channel] = clampByte(
          original[index + channel] + ((sharpened - original[index + channel]) * strength)
        );
      }
    }
  }

  return output;
}

// Effect functions each return a fresh pixel buffer so the stack can swap without mutating the source.
function applyOrderedDither(sourceData, width, height, matrix) {
  const output = new Uint8ClampedArray(sourceData);
  const size = matrix.length;
  const norm = size * size;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = ((y * width) + x) * 4;
      const lum = luminanceAt(output, index);
      const threshold = ((matrix[y % size][x % size] + 0.5) / norm) * 255;
      const value = lum > threshold ? 255 : 0;
      output[index] = value;
      output[index + 1] = value;
      output[index + 2] = value;
    }
  }

  return output;
}

function applyFloydSteinberg(sourceData, width, height) {
  const working = new Float32Array(width * height);
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const srcIndex = ((y * width) + x) * 4;
      working[(y * width) + x] = luminanceAt(sourceData, srcIndex);
    }
  }

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = (y * width) + x;
      const oldPixel = working[index];
      const newPixel = oldPixel < 128 ? 0 : 255;
      const error = oldPixel - newPixel;
      working[index] = newPixel;

      if (x + 1 < width) working[index + 1] += error * (7 / 16);
      if (x - 1 >= 0 && y + 1 < height) working[index + width - 1] += error * (3 / 16);
      if (y + 1 < height) working[index + width] += error * (5 / 16);
      if (x + 1 < width && y + 1 < height) working[index + width + 1] += error * (1 / 16);
    }
  }

  const output = new Uint8ClampedArray(sourceData);
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = ((y * width) + x) * 4;
      const value = clampByte(working[(y * width) + x]);
      output[index] = value;
      output[index + 1] = value;
      output[index + 2] = value;
    }
  }

  return output;
}

function applyAtkinsonDither(sourceData, width, height) {
  const working = new Float32Array(width * height);
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const srcIndex = ((y * width) + x) * 4;
      working[(y * width) + x] = luminanceAt(sourceData, srcIndex);
    }
  }

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = (y * width) + x;
      const oldPixel = working[index];
      const newPixel = oldPixel < 128 ? 0 : 255;
      const error = (oldPixel - newPixel) / 8;
      working[index] = newPixel;

      if (x + 1 < width) working[index + 1] += error;
      if (x + 2 < width) working[index + 2] += error;
      if (y + 1 < height) {
        if (x - 1 >= 0) working[index + width - 1] += error;
        working[index + width] += error;
        if (x + 1 < width) working[index + width + 1] += error;
      }
      if (y + 2 < height) working[index + (2 * width)] += error;
    }
  }

  const output = new Uint8ClampedArray(sourceData);
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = ((y * width) + x) * 4;
      const value = clampByte(working[(y * width) + x]);
      output[index] = value;
      output[index + 1] = value;
      output[index + 2] = value;
    }
  }

  return output;
}

function applyRandomThreshold(sourceData, width, height) {
  const output = new Uint8ClampedArray(sourceData);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = ((y * width) + x) * 4;
      const lum = luminanceAt(output, index);
      const value = lum > Math.random() * 255 ? 255 : 0;
      output[index] = value;
      output[index + 1] = value;
      output[index + 2] = value;
    }
  }

  return output;
}

function applyBlueNoiseDither(sourceData, width, height) {
  const output = new Uint8ClampedArray(sourceData);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = ((y * width) + x) * 4;
      const lum = luminanceAt(output, index);
      const threshold = 128 + ((hashNoise(x, y, 0.42) - 0.5) * 86);
      const value = lum > threshold ? 255 : 0;
      output[index] = value;
      output[index + 1] = value;
      output[index + 2] = value;
    }
  }

  return output;
}

function applyQuantizedNoise(sourceData) {
  const output = new Uint8ClampedArray(sourceData);

  for (let index = 0; index < output.length; index += 4) {
    output[index] = clampByte((Math.floor(output[index] / 32) * 32) + ((Math.random() * 40) - 20));
    output[index + 1] = clampByte((Math.floor(output[index + 1] / 32) * 32) + ((Math.random() * 40) - 20));
    output[index + 2] = clampByte((Math.floor(output[index + 2] / 32) * 32) + ((Math.random() * 40) - 20));
  }

  return output;
}

function applyFilmGrain(sourceData, width, height) {
  const output = new Uint8ClampedArray(sourceData);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = ((y * width) + x) * 4;
      const lum = luminanceAt(output, index);
      const shadowWeight = 1.2 - (lum / 255);
      const baseNoise = (hashNoise(x, y, 1.1) - 0.5) * 44 * shadowWeight;
      const fineNoise = (hashNoise(x * 2, y * 2, 2.7) - 0.5) * 12;

      output[index] = clampByte(output[index] + baseNoise + fineNoise + 2);
      output[index + 1] = clampByte(output[index + 1] + baseNoise + fineNoise);
      output[index + 2] = clampByte(output[index + 2] + baseNoise + fineNoise - 2);
    }
  }

  return output;
}

function applyHalftoneDots(sourceData, width, height) {
  const output = new Uint8ClampedArray(sourceData.length);
  output.fill(255);
  const cell = 6;

  for (let blockY = 0; blockY < height; blockY += cell) {
    for (let blockX = 0; blockX < width; blockX += cell) {
      let luminanceTotal = 0;
      let sampleCount = 0;

      for (let y = blockY; y < Math.min(height, blockY + cell); y += 1) {
        for (let x = blockX; x < Math.min(width, blockX + cell); x += 1) {
          const index = ((y * width) + x) * 4;
          luminanceTotal += luminanceAt(sourceData, index);
          sampleCount += 1;
        }
      }

      const avgLum = sampleCount ? (luminanceTotal / sampleCount) : 255;
      const radius = ((255 - avgLum) / 255) * (cell * 0.5);
      const centerX = blockX + (cell / 2);
      const centerY = blockY + (cell / 2);

      for (let y = blockY; y < Math.min(height, blockY + cell); y += 1) {
        for (let x = blockX; x < Math.min(width, blockX + cell); x += 1) {
          const dx = x - centerX;
          const dy = y - centerY;
          const index = ((y * width) + x) * 4;
          const insideDot = (dx * dx) + (dy * dy) <= radius * radius;
          const value = insideDot ? 16 : 246;
          output[index] = value;
          output[index + 1] = value;
          output[index + 2] = value;
          output[index + 3] = 255;
        }
      }
    }
  }

  return output;
}

function applyPixelSortDither(sourceData, width, height) {
  const sorted = new Uint8ClampedArray(sourceData);

  for (let y = 0; y < height; y += 1) {
    let x = 0;
    while (x < width) {
      const start = x;
      while (x < width) {
        const index = ((y * width) + x) * 4;
        const lum = luminanceAt(sorted, index);
        if (lum < 60 || lum > 210) break;
        x += 1;
      }
      const end = x;

      if (end - start >= 3) {
        const pixels = [];
        for (let cursor = start; cursor < end; cursor += 1) {
          const index = ((y * width) + cursor) * 4;
          pixels.push([
            luminanceAt(sorted, index),
            sorted[index],
            sorted[index + 1],
            sorted[index + 2],
            sorted[index + 3]
          ]);
        }

        pixels.sort((a, b) => a[0] - b[0]);

        for (let cursor = start; cursor < end; cursor += 1) {
          const index = ((y * width) + cursor) * 4;
          const pixel = pixels[cursor - start];
          sorted[index] = pixel[1];
          sorted[index + 1] = pixel[2];
          sorted[index + 2] = pixel[3];
          sorted[index + 3] = pixel[4];
        }
      }

      x += 1;
    }
  }

  const bayer4 = [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5]
  ];

  return applyOrderedDither(sorted, width, height, bayer4);
}

function applyCrtAnalog(sourceData, width, height) {
  const output = new Uint8ClampedArray(sourceData);

  for (let index = 0; index < output.length; index += 4) {
    output[index] = Math.floor(output[index] / 42) * 42;
    output[index + 1] = Math.floor(output[index + 1] / 42) * 42;
    output[index + 2] = Math.floor(output[index + 2] / 42) * 42;

    const noise = (Math.random() - 0.5) * 24;
    output[index] = clampByte(output[index] + noise);
    output[index + 1] = clampByte(output[index + 1] + noise * 0.85);
    output[index + 2] = clampByte(output[index + 2] + noise * 1.1);
  }

  const dithered = applyOrderedDither(output, width, height, [
    [0, 2],
    [3, 1]
  ]);

  const shifted = new Uint8ClampedArray(dithered);

  for (let y = 0; y < height; y += 1) {
    const scanlineDarken = y % 2 === 0 ? 1 : 0.8;

    for (let x = 0; x < width; x += 1) {
      const index = ((y * width) + x) * 4;
      const leftX = Math.max(0, x - 1);
      const rightX = Math.min(width - 1, x + 1);
      const leftIndex = ((y * width) + leftX) * 4;
      const rightIndex = ((y * width) + rightX) * 4;

      const red = dithered[rightIndex];
      const green = dithered[index + 1];
      const blue = dithered[leftIndex + 2];

      shifted[index] = clampByte(red * scanlineDarken);
      shifted[index + 1] = clampByte(green * scanlineDarken);
      shifted[index + 2] = clampByte(blue * scanlineDarken);
      shifted[index + 3] = 255;
    }
  }

  return shifted;
}

function applySaltPepper(sourceData) {
  const output = new Uint8ClampedArray(sourceData);

  for (let index = 0; index < output.length; index += 4) {
    if (Math.random() < 0.05) {
      const value = Math.random() < 0.5 ? 0 : 255;
      output[index] = value;
      output[index + 1] = value;
      output[index + 2] = value;
    }
  }

  return output;
}

function applyDustAndScratches(sourceData, width, height) {
  const output = new Uint8ClampedArray(sourceData);
  const specks = Math.floor((width * height) * 0.006);

  for (let i = 0; i < specks; i += 1) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const index = ((y * width) + x) * 4;
    const value = Math.random() < 0.55 ? 235 : 12;
    output[index] = value;
    output[index + 1] = value;
    output[index + 2] = value;
  }

  const scratches = Math.max(3, Math.floor(width / 240));
  for (let i = 0; i < scratches; i += 1) {
    const startX = Math.floor(Math.random() * width);
    const startY = Math.floor(Math.random() * height);
    const length = Math.floor(Math.random() * (height * 0.6)) + 40;

    for (let offset = 0; offset < length; offset += 1) {
      const y = startY + offset;
      if (y >= height) break;
      const x = Math.min(width - 1, startX + ((Math.random() * 3) - 1));
      const index = ((y * width) + Math.round(x)) * 4;
      output[index] = clampByte(output[index] + 45);
      output[index + 1] = clampByte(output[index + 1] + 45);
      output[index + 2] = clampByte(output[index + 2] + 45);
    }
  }

  return output;
}

function applyMultiplicativeGrain(sourceData) {
  const output = new Uint8ClampedArray(sourceData);

  for (let index = 0; index < output.length; index += 4) {
    const scale = 0.7 + (Math.random() * 0.6);
    output[index] = clampByte(output[index] * scale);
    output[index + 1] = clampByte(output[index + 1] * scale);
    output[index + 2] = clampByte(output[index + 2] * scale);
  }

  return output;
}

function applyMisregistration(sourceData, width, height) {
  const output = new Uint8ClampedArray(sourceData);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = ((y * width) + x) * 4;
      const leftX = Math.max(0, x - 1);
      const rightX = Math.min(width - 1, x + 1);
      const leftIndex = ((y * width) + leftX) * 4;
      const rightIndex = ((y * width) + rightX) * 4;

      output[index] = sourceData[rightIndex];
      output[index + 1] = sourceData[index + 1];
      output[index + 2] = sourceData[leftIndex + 2];
      output[index + 3] = sourceData[index + 3];
    }
  }

  return output;
}

function applyGrittyDigitalStack(sourceData, width, height) {
  const desaturated = new Uint8ClampedArray(sourceData);

  for (let index = 0; index < desaturated.length; index += 4) {
    const lum = luminanceAt(desaturated, index);
    desaturated[index] = clampByte(lum + ((desaturated[index] - lum) * 0.72));
    desaturated[index + 1] = clampByte(lum + ((desaturated[index + 1] - lum) * 0.72));
    desaturated[index + 2] = clampByte(lum + ((desaturated[index + 2] - lum) * 0.72));
  }

  const blueNoise = applyBlueNoiseDither(desaturated, width, height);
  const quantized = new Uint8ClampedArray(blueNoise);

  for (let index = 0; index < quantized.length; index += 4) {
    quantized[index] = Math.floor(quantized[index] / 16) * 16;
    quantized[index + 1] = Math.floor(quantized[index + 1] / 16) * 16;
    quantized[index + 2] = Math.floor(quantized[index + 2] / 16) * 16;
  }

  const dithered = applyFloydSteinberg(quantized, width, height);
  const salted = applySaltPepper(dithered);
  return applyMisregistration(salted, width, height);
}

function applyEffect(sourceData, width, height, effectId) {
  switch (effectId) {
    case "ordered-bayer-4":
      return applyOrderedDither(sourceData, width, height, [
        [0, 8, 2, 10],
        [12, 4, 14, 6],
        [3, 11, 1, 9],
        [15, 7, 13, 5]
      ]);
    case "floyd-steinberg":
      return applyFloydSteinberg(sourceData, width, height);
    case "atkinson":
      return applyAtkinsonDither(sourceData, width, height);
    case "random-threshold":
      return applyRandomThreshold(sourceData, width, height);
    case "blue-noise":
      return applyBlueNoiseDither(sourceData, width, height);
    case "quantized-noise":
      return applyQuantizedNoise(sourceData);
    case "film-grain":
      return applyFilmGrain(sourceData, width, height);
    case "halftone":
      return applyHalftoneDots(sourceData, width, height);
    case "pixel-sort-dither":
      return applyPixelSortDither(sourceData, width, height);
    case "crt-analog":
      return applyCrtAnalog(sourceData, width, height);
    case "salt-pepper":
      return applySaltPepper(sourceData);
    case "dust-scratches":
      return applyDustAndScratches(sourceData, width, height);
    case "multiplicative-grain":
      return applyMultiplicativeGrain(sourceData);
    case "misregistration":
      return applyMisregistration(sourceData, width, height);
    case "gritty-stack":
      return applyGrittyDigitalStack(sourceData, width, height);
    default:
      return sourceData;
  }
}

// Rendering always starts from the source canvas, then layers adjustments and the active effect stack.
function render() {
  if (!elements.canvas || (!state.sourceLoaded && !state.stream)) {
    setButtonsDisabled(elements.downloadButtons, true);
    setButtonsDisabled(elements.resetButtons, !state.stream);
    syncVisibility();
    return;
  }

  const sourceContext = state.sourceCanvas.getContext("2d", { willReadFrequently: true });
  const targetContext = elements.canvas.getContext("2d");
  if (!sourceContext || !targetContext) return;

  let width = state.sourceCanvas.width;
  let height = state.sourceCanvas.height;

  if (!state.sourceLoaded && state.stream && elements.video.readyState >= 2) {
    const fitted = fitWithinBounds(elements.video.videoWidth, elements.video.videoHeight);
    state.sourceCanvas.width = fitted.width;
    state.sourceCanvas.height = fitted.height;
    sourceContext.clearRect(0, 0, fitted.width, fitted.height);
    sourceContext.drawImage(elements.video, 0, 0, fitted.width, fitted.height);
    width = fitted.width;
    height = fitted.height;
  }

  if (!width || !height) {
    syncVisibility();
    return;
  }

  const frame = sourceContext.getImageData(0, 0, width, height);
  const adjusted = applyAdjustments(frame.data, width, height);
  const effected = applyEffect(adjusted, width, height, state.activeEffect);

  elements.canvas.width = width;
  elements.canvas.height = height;
  targetContext.putImageData(new ImageData(effected, width, height), 0, 0);

  setButtonsDisabled(elements.downloadButtons, !state.sourceLoaded);
  setButtonsDisabled(elements.resetButtons, false);

  if (state.sourceLoaded) {
    setStatus(`${state.sourceLabel || "IMAGE"} READY. LIVE ADJUSTMENTS ACTIVE.`);
  }

  syncVisibility();
  syncToolButtons();
}

function queueRender() {
  if (state.renderQueued) return;

  state.renderQueued = true;
  window.requestAnimationFrame(() => {
    state.renderQueued = false;
    render();
  });
}

function stopPreviewLoop() {
  if (!state.previewFrameId) return;

  window.cancelAnimationFrame(state.previewFrameId);
  state.previewFrameId = 0;
}

function startPreviewLoop() {
  stopPreviewLoop();

  const tick = () => {
    if (!state.stream) {
      state.previewFrameId = 0;
      return;
    }

    render();
    state.previewFrameId = window.requestAnimationFrame(tick);
  };

  tick();
}

// Source loading accepts files and webcam captures, but both end up in the same normalized canvas.
function setSource(drawable, width, height, label) {
  const sourceContext = state.sourceCanvas.getContext("2d");
  if (!sourceContext) return;

  const fitted = fitWithinBounds(width, height);
  state.sourceCanvas.width = fitted.width;
  state.sourceCanvas.height = fitted.height;
  sourceContext.clearRect(0, 0, fitted.width, fitted.height);
  sourceContext.drawImage(drawable, 0, 0, fitted.width, fitted.height);

  state.sourceLoaded = true;
  state.sourceLabel = label;
  state.history = [];
  setButtonsDisabled(elements.captureButtons, !state.stream);
  resetControls();
  syncToolButtons();
}

function loadPhotoFile(file) {
  if (!file || !file.type.startsWith("image/")) return;

  stopCamera();

  const image = new Image();
  const objectUrl = URL.createObjectURL(file);

  image.onload = () => {
    setSource(image, image.naturalWidth, image.naturalHeight, file.name.toUpperCase());
    setStatus(`${file.name.toUpperCase()} LOADED.`);
    syncVisibility();
    URL.revokeObjectURL(objectUrl);
    elements.fileInput.value = "";
  };

  image.onerror = () => {
    setStatus("THAT IMAGE COULD NOT BE OPENED.");
    URL.revokeObjectURL(objectUrl);
    elements.fileInput.value = "";
  };

  image.src = objectUrl;
}

async function startCamera() {
  if (!navigator.mediaDevices?.getUserMedia) {
    setStatus("WEBCAM IS NOT AVAILABLE IN THIS BROWSER.");
    return;
  }

  try {
    stopCamera();
    state.stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    elements.video.srcObject = state.stream;
    await elements.video.play();
    state.sourceLoaded = false;
    state.sourceLabel = "";
    state.history = [];
    setButtonsDisabled(elements.captureButtons, false);
    setButtonsDisabled(elements.stopButtons, false);
    setButtonsDisabled(elements.downloadButtons, true);
    resetControls();
    syncVisibility();
    setStatus("WEBCAM LIVE. ADJUSTMENTS APPLY TO THE LIVE PREVIEW.");
    startPreviewLoop();
    syncToolButtons();
  } catch {
    setStatus("CAMERA ACCESS WAS BLOCKED.");
  }
}

function stopCamera() {
  stopPreviewLoop();

  if (state.stream) {
    state.stream.getTracks().forEach((track) => track.stop());
    state.stream = null;
  }

  elements.video.pause();
  elements.video.srcObject = null;
  setButtonsDisabled(elements.stopButtons, true);
  setButtonsDisabled(elements.captureButtons, !state.sourceLoaded);
  syncVisibility();
  syncToolButtons();
}

function captureFrame() {
  if (!state.stream || elements.video.readyState < 2) return;

  setSource(elements.video, elements.video.videoWidth, elements.video.videoHeight, "WEBCAM CAPTURE");
  stopCamera();
  setStatus("WEBCAM FRAME CAPTURED.");
}

function downloadImage() {
  if (!state.sourceLoaded || !elements.canvas) return;

  const link = document.createElement("a");
  link.href = elements.canvas.toDataURL("image/png");
  link.download = "photoeditor-export.png";
  link.click();
}

// Interface toggles and HUD controls are kept separate from the image pipeline for easier maintenance.
function toggleSection(toggleButton) {
  const section = toggleButton.closest("[data-section]");
  if (!section) return;
  const isOpen = section.classList.toggle("is-open");
  toggleButton.setAttribute("aria-expanded", String(isOpen));
}

function openEffectsHud() {
  if (!elements.effectsHud) return;
  elements.effectsHud.hidden = false;
  elements.effectsHud.setAttribute("aria-hidden", "false");
}

function closeEffectsHud() {
  if (!elements.effectsHud) return;
  elements.effectsHud.hidden = true;
  elements.effectsHud.setAttribute("aria-hidden", "true");
}

function setActiveEffect(effectId) {
  state.activeEffect = effectId in EFFECT_LABELS ? effectId : "none";
  syncEffectUI();
  queueRender();

  if (state.activeEffect === "none") {
    setStatus("EFFECT STACK CLEARED.");
    return;
  }

  setStatus(`${EFFECT_LABELS[state.activeEffect]} LIVE.`);
}

// Event wiring lives at the bottom so the editor behavior reads from helpers to bindings.
elements.sliders.forEach((slider) => {
  slider.addEventListener("input", () => {
    const key = slider.dataset.control;
    if (!key) return;
    state.controls[key] = Number(slider.value);
    queueRender();
  });
});

elements.fileInput?.addEventListener("change", () => {
  const [file] = Array.from(elements.fileInput.files || []);
  if (file) loadPhotoFile(file);
});

elements.openFileButtons.forEach((button) => {
  button.addEventListener("click", () => {
    elements.fileInput?.click();
  });
});

elements.startButtons.forEach((button) => {
  button.addEventListener("click", () => startCamera());
});

elements.stopButtons.forEach((button) => {
  button.addEventListener("click", () => {
    stopCamera();
    setStatus(state.sourceLoaded ? "CAMERA STOPPED." : "NO IMAGE LOADED.");
  });
});

elements.captureButtons.forEach((button) => {
  button.addEventListener("click", () => captureFrame());
});

elements.resetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    resetControls();
    setStatus(state.sourceLoaded ? "EDITS RESET." : "LIVE PREVIEW RESET.");
  });
});

elements.downloadButtons.forEach((button) => {
  button.addEventListener("click", () => downloadImage());
});

elements.rotateLeftButtons.forEach((button) => {
  button.addEventListener("click", () => rotateSource(-1));
});

elements.rotateRightButtons.forEach((button) => {
  button.addEventListener("click", () => rotateSource(1));
});

elements.flipXButtons.forEach((button) => {
  button.addEventListener("click", () => flipSource("x"));
});

elements.flipYButtons.forEach((button) => {
  button.addEventListener("click", () => flipSource("y"));
});

elements.undoButtons.forEach((button) => {
  button.addEventListener("click", () => undoEdit());
});

elements.clearButtons.forEach((button) => {
  button.addEventListener("click", () => clearSource());
});

elements.sectionToggles.forEach((toggleButton) => {
  toggleButton.addEventListener("click", () => toggleSection(toggleButton));
});

elements.openEffectsHudButtons.forEach((button) => {
  button.addEventListener("click", () => openEffectsHud());
});

elements.closeEffectsHudButtons.forEach((button) => {
  button.addEventListener("click", () => closeEffectsHud());
});

elements.effectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveEffect(button.dataset.effect || "none");
    closeEffectsHud();
  });
});

elements.clearEffectButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveEffect("none"));
});

["dragenter", "dragover"].forEach((eventName) => {
  elements.dropzone?.addEventListener(eventName, (event) => {
    event.preventDefault();
    elements.dropzone.classList.add("is-dragging");
  });
});

["dragleave", "dragend", "drop"].forEach((eventName) => {
  elements.dropzone?.addEventListener(eventName, (event) => {
    event.preventDefault();
    elements.dropzone.classList.remove("is-dragging");
  });
});

elements.dropzone?.addEventListener("drop", (event) => {
  const [file] = Array.from(event.dataTransfer?.files || []);
  if (file) loadPhotoFile(file);
});

window.addEventListener("paste", (event) => {
  const imageItem = Array.from(event.clipboardData?.items || []).find((item) => item.type.startsWith("image/"));
  const file = imageItem?.getAsFile();
  if (file) {
    event.preventDefault();
    loadPhotoFile(file);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && elements.effectsHud && !elements.effectsHud.hidden) {
    closeEffectsHud();
  }
});

// The initial sync keeps the empty state, control locks, and effect label consistent on first paint.
syncControls();
syncVisibility();
syncToolButtons();
syncEffectUI();
