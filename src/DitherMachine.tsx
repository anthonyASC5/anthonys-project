import React, { useState, useRef, useEffect, useCallback } from 'react';

/**
 * --- IMAGE PROCESSING ENGINE (PURE FUNCTIONS) ---
 * Logic for high-performance pixel manipulation
 */

interface Filters {
  brightness: number;
  contrast: number;
  exposure: number;
  saturation: number;
  gamma: number;
  grain: number;
  dither: boolean;
}

/**
 * Apply a sequence of filters to image data.
 * Pipeline: Brightness/Exposure -> Contrast -> Saturation -> Gamma -> Grain -> Dither
 */
function applyPipeline(imageData: ImageData, filters: Filters): void {
  const data = imageData.data;
  const len = data.length;

  const b = filters.brightness;
  const exp = Math.pow(2, filters.exposure / 50);
  const contrastFactor = (259 * (filters.contrast + 255)) / (255 * (259 - filters.contrast));
  const sat = filters.saturation / 100;
  const gam = 1 / filters.gamma;
  const grainStrength = filters.grain;

  for (let i = 0; i < len; i += 4) {
    let r = data[i];
    let g = data[i + 1];
    let b_val = data[i + 2];

    // 1. Brightness & Exposure
    r = (r + b) * exp;
    g = (g + b) * exp;
    b_val = (b_val + b) * exp;

    // 2. Contrast
    r = (r - 128) * contrastFactor + 128;
    g = (g - 128) * contrastFactor + 128;
    b_val = (b_val - 128) * contrastFactor + 128;

    // 3. Saturation (Luminance weights: 0.299, 0.587, 0.114)
    const gray = 0.299 * r + 0.587 * g + 0.114 * b_val;
    r = gray + sat * (r - gray);
    g = gray + sat * (g - gray);
    b_val = gray + sat * (b_val - gray);

    // 4. Gamma
    r = 255 * Math.pow(r / 255, gam);
    g = 255 * Math.pow(g / 255, gam);
    b_val = 255 * Math.pow(b_val / 255, gam);

    // 5. Grain
    if (grainStrength > 0) {
      const noise = (Math.random() - 0.5) * grainStrength * 2.55;
      r += noise;
      g += noise;
      b_val += noise;
    }

    // Clamp
    data[i] = Math.min(255, Math.max(0, r));
    data[i + 1] = Math.min(255, Math.max(0, g));
    data[i + 2] = Math.min(255, Math.max(0, b_val));
  }

  // 6. Dithering (Floyd-Steinberg)
  if (filters.dither) {
    applyFloydSteinberg(imageData);
  }
}

/**
 * Floyd-Steinberg Dithering
 * Distributes quantization error to neighboring pixels
 */
function applyFloydSteinberg(imageData: ImageData): void {
  const data = imageData.data;
  const w = imageData.width;
  const h = imageData.height;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;

      // Quantize R, G, B
      const oldR = data[i];
      const oldG = data[i + 1];
      const oldB = data[i + 2];

      const newR = oldR < 128 ? 0 : 255;
      const newG = oldG < 128 ? 0 : 255;
      const newB = oldB < 128 ? 0 : 255;

      data[i] = newR;
      data[i + 1] = newG;
      data[i + 2] = newB;

      const errR = oldR - newR;
      const errG = oldG - newG;
      const errB = oldB - newB;

      // Distribute error to neighbors
      distributeError(data, x + 1, y, w, h, errR, errG, errB, 7 / 16);
      distributeError(data, x - 1, y + 1, w, h, errR, errG, errB, 3 / 16);
      distributeError(data, x, y + 1, w, h, errR, errG, errB, 5 / 16);
      distributeError(data, x + 1, y + 1, w, h, errR, errG, errB, 1 / 16);
    }
  }
}

function distributeError(data: Uint8ClampedArray, x: number, y: number, w: number, h: number, er: number, eg: number, eb: number, weight: number): void {
  if (x < 0 || x >= w || y < 0 || y >= h) return;
  const i = (y * w + x) * 4;
  data[i] += er * weight;
  data[i + 1] += eg * weight;
  data[i + 2] += eb * weight;
}

/** --- REACT COMPONENT --- **/

interface ControlSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  filterKey: keyof Filters;
  disabled: boolean;
  onChange: (key: keyof Filters, val: number) => void;
}

const ControlSlider: React.FC<ControlSliderProps> = ({ label, value, min, max, step = 1, filterKey, disabled, onChange }) => (
  <div className="space-y-1.5">
    <div className="flex justify-between items-center">
      <label className="text-[10px] font-black uppercase tracking-widest text-white/30">{label}</label>
      <span className="text-[10px] font-mono text-white/60">{value}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(filterKey, parseFloat(e.target.value))}
      className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white disabled:opacity-30 disabled:cursor-not-allowed"
    />
  </div>
);

export const DitherMachine: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({
    brightness: 0,
    contrast: 0,
    exposure: 0,
    saturation: 100,
    gamma: 1.0,
    grain: 0,
    dither: false,
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const originalImgRef = useRef<HTMLImageElement | null>(null);
  const frameRef = useRef<number | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        originalImgRef.current = img;
        setImgSrc(event.target?.result as string);
        requestUpdate();
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const processImage = useCallback(() => {
    const canvas = canvasRef.current;
    const img = originalImgRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    // Maintain aspect ratio while ensuring manageable preview size
    const maxDim = 1200;
    let w = img.width;
    let h = img.height;
    if (w > maxDim || h > maxDim) {
      const ratio = w / h;
      if (w > h) {
        w = maxDim;
        h = maxDim / ratio;
      } else {
        h = maxDim;
        w = maxDim * ratio;
      }
    }

    canvas.width = w;
    canvas.height = h;

    // Draw original
    ctx.drawImage(img, 0, 0, w, h);

    // Get pixel data
    const imageData = ctx.getImageData(0, 0, w, h);

    // Apply filters
    applyPipeline(imageData, filters);

    // Put back
    ctx.putImageData(imageData, 0, 0);
  }, [filters]);

  const requestUpdate = useCallback(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(processImage);
  }, [processImage]);

  useEffect(() => {
    if (originalImgRef.current) {
      requestUpdate();
    }
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [filters, requestUpdate]);

  const handleFilterChange = (key: keyof Filters, val: number | boolean) => {
    setFilters(prev => ({ ...prev, [key]: val }));
  };

  const exportImage = () => {
    const img = originalImgRef.current;
    if (!img) return;

    // Process at full resolution for export
    const offscreen = document.createElement('canvas');
    offscreen.width = img.width;
    offscreen.height = img.height;
    const ctx = offscreen.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, img.width, img.height);
    applyPipeline(imageData, filters);
    ctx.putImageData(imageData, 0, 0);

    const link = document.createElement('a');
    link.download = `dither-machine-${Date.now()}.png`;
    link.href = offscreen.toDataURL('image/png');
    link.click();
  };

  const resetAll = () => {
    setImgSrc(null);
    originalImgRef.current = null;
    setFilters({
      brightness: 0,
      contrast: 0,
      exposure: 0,
      saturation: 100,
      gamma: 1.0,
      grain: 0,
      dither: false,
    });
  };

  return (
    <div className="flex flex-col md:flex-row h-full bg-[#080808] text-white selection:bg-white/20">
      {/* Sidebar Controls */}
      <div className="w-full md:w-[320px] bg-black/40 border-b md:border-b-0 md:border-r border-white/5 backdrop-blur-3xl p-6 flex flex-col gap-8 shrink-0 overflow-y-auto custom-scrollbar">
        <header>
          <h2 className="text-2xl font-black italic uppercase tracking-tighter">DitherMachine</h2>
          <p className="text-white/20 text-[9px] font-bold uppercase tracking-[0.2em]">Procedural Imaging Core v2.0</p>
        </header>

        <section className="space-y-6">
          <div className="space-y-3">
             <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Source Signal</label>
             <div className="relative group overflow-hidden rounded-xl">
               <input
                 type="file"
                 accept="image/*"
                 onChange={handleUpload}
                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
               />
               <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase text-center group-hover:bg-white/10 transition-colors">
                 {imgSrc ? 'Recalibrate Source' : 'Load Image File'}
               </div>
             </div>
          </div>

          <div className="pt-4 border-t border-white/5 space-y-5">
            <ControlSlider label="Exposure" value={filters.exposure} min={-100} max={100} filterKey="exposure" disabled={!imgSrc} onChange={handleFilterChange} />
            <ControlSlider label="Brightness" value={filters.brightness} min={-100} max={100} filterKey="brightness" disabled={!imgSrc} onChange={handleFilterChange} />
            <ControlSlider label="Contrast" value={filters.contrast} min={-100} max={100} filterKey="contrast" disabled={!imgSrc} onChange={handleFilterChange} />
            <ControlSlider label="Saturation" value={filters.saturation} min={0} max={200} filterKey="saturation" disabled={!imgSrc} onChange={handleFilterChange} />
            <ControlSlider label="Gamma" value={filters.gamma} min={0.5} max={2.5} step={0.1} filterKey="gamma" disabled={!imgSrc} onChange={handleFilterChange} />
            <ControlSlider label="Grain" value={filters.grain} min={0} max={100} filterKey="grain" disabled={!imgSrc} onChange={handleFilterChange} />

            <div className="flex items-center justify-between pt-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Error Dithering</label>
              <button
                onClick={() => handleFilterChange('dither', !filters.dither)}
                className={`w-10 h-5 rounded-full relative transition-colors ${filters.dither ? 'bg-blue-500' : 'bg-white/10'}`}
              >
                <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all ${filters.dither ? 'left-6' : 'left-1'}`} />
              </button>
            </div>
          </div>
        </section>

        <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-3">
          <button
            onClick={exportImage}
            disabled={!imgSrc}
            className="w-full py-3 bg-white text-black text-[11px] font-black uppercase rounded-lg hover:bg-white/90 active:scale-[0.98] transition-all disabled:opacity-20 disabled:scale-100"
          >
            Export Master Signal
          </button>
          <button
             onClick={resetAll}
             className="w-full py-2 bg-transparent border border-white/10 text-white/40 text-[9px] font-black uppercase rounded-lg hover:text-white hover:bg-white/5 transition-all"
          >
            Purge Buffer
          </button>
        </div>
      </div>

      {/* Main Preview Area */}
      <div className="flex-1 relative flex items-center justify-center p-4 md:p-12 overflow-hidden bg-[radial-gradient(circle_at_center,_#111_0%,_#000_100%)]">
        {!imgSrc ? (
          <div className="flex flex-col items-center gap-6 opacity-20 text-center max-w-xs">
            <div className="w-16 h-16 border border-white/20 rounded-2xl flex items-center justify-center animate-pulse">
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
               </svg>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Signal Loss Detected</span>
              <p className="text-[9px] font-medium leading-relaxed uppercase tracking-widest text-white/40">Feed is empty. Connect a visual source to initialize processing sequence.</p>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center">
            <canvas
              ref={canvasRef}
              className="max-w-full max-h-full object-contain shadow-[0_0_100px_rgba(0,0,0,0.5)] bg-[#050505] pixel-art"
            />
            {/* Histogram Overlay (Aesthetic Mock) */}
            <div className="absolute bottom-4 left-4 p-2 bg-black/60 border border-white/10 rounded-lg backdrop-blur-md hidden md:block">
              <div className="flex items-end gap-[1px] h-8 w-32">
                 {Array.from({length: 32}).map((_, i) => (
                   <div key={i} className="bg-white/20 w-full" style={{height: `${Math.random() * 100}%`}} />
                 ))}
              </div>
              <div className="text-[7px] font-mono text-white/30 uppercase mt-1">Luma Dist. Feed</div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .pixel-art { image-rendering: pixelated; image-rendering: crisp-edges; }
      `}</style>
    </div>
  );
};
