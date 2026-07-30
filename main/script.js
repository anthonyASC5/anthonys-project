const PROJECTS = [
  {
    id: "blobtracker",
    group: "Selected Work",
    theme: "blobtracker",
    title: "Blob Tracker",
    category: "Interactive VFX",
    year: "2025 - Present",
    role: "Creative developer, UI/UX designer, front-end engineer.",
    stack: ["Next.js", "JavaScript", "p5.js", "WebGL", "HTML/CSS", "ffmpeg.wasm", "WebCodecs", "Canvas API"],
    summary: [
      "Blob Tracker is a browser-based computer vision and motion analysis studio. It processes webcam, image, and video inputs entirely in the browser to detect movement, track subjects, generate blob masks, and create reactive visual effects.",
      "Features include motion tracking, centroid tracking, temporal background subtraction, skin masking, bounding boxes, green screen tools, particle trails, edge effects, datamosh experiments, and export workflows. The project focuses on making experimental computer vision accessible without requiring desktop software or cloud processing."
    ],
    href: "https://anthonyasc5.github.io/blobbertrack/",
    linkLabel: "Open Blob Tracker",
    mediaLabel: "Live Motion Tracking Study",
    iconPath: "icons/blob-tracker.svg",
    iconAlt: "Blob Tracker icon",
    media: {
      type: "video",
      src: "assets/videos/blobtracker.mov"
    }
  },
  {
    id: "datamosh",
    group: "Selected Work",
    theme: "datamosh",
    title: "Datamosh",
    category: "Video Effects",
    year: "2025 - Present",
    role: "Creative technologist, product designer, front-end engineer.",
    stack: ["JavaScript", "ffmpeg.wasm", "WebCodecs", "HTML/CSS", "React", "Browser Media APIs"],
    summary: [
      "Datamosh is a browser-native glitch video editor focused on compression artifacts, broken-frame transitions, and corrupted visual aesthetics.",
      "The application allows users to manipulate video data and create stylized destruction effects inspired by early digital video errors. Research included frame prediction systems, keyframe structures, motion vectors, and real-time browser rendering techniques.",
      "The project explores how traditional desktop VFX workflows can be recreated entirely inside the browser."
    ],
    href: "https://anthonyasc5.github.io/datamoshme/html/datamosh.html",
    linkLabel: "Open Datamosh",
    mediaLabel: "Compression Glitch Studio",
    iconPath: "icons/datamosh.svg",
    iconAlt: "Datamosh icon",
    media: {
      type: "video",
      src: "assets/videos/Datamosh.mov"
    }
  },
  {
    id: "l4vfx",
    group: "Selected Work",
    theme: "l4vfx",
    title: "L4VFX",
    category: "Visual Effects",
    year: "2025 - Present",
    role: "Product designer, front-end engineer, creative developer.",
    stack: ["React", "Next.js", "JavaScript", "Canvas API", "WebGL", "ffmpeg.wasm", "CSS Animation Systems"],
    summary: [
      "L4VFX is a collection of browser-based visual effects and image-processing experiments. The platform serves as a testing ground for real-time filters, stylized rendering techniques, motion effects, and experimental visual workflows.",
      "Effects include image degradation, VHS simulations, edge enhancement, distortion systems, feedback loops, threshold effects, color transformations, and procedural visuals.",
      "The goal is to bring lightweight creative tools directly into the browser with no installation required."
    ],
    href: "https://anthonyasc5.github.io/L4VFX/html/motionvideo.html",
    linkLabel: "Open L4VFX",
    mediaLabel: "Fast Browser Video Effects",
    iconPath: "icons/l4vfx.svg",
    iconAlt: "L4VFX icon",
    media: {
      type: "video",
      src: "assets/videos/l4vfx.mov"
    }
  },
  {
    id: "lallsuite",
    group: "Selected Work",
    theme: "lallsuite",
    title: "LALLSUITE",
    category: "Creative Platform",
    year: "2025 - Present",
    role: "Founder, product designer, creative technologist.",
    stack: ["JavaScript", "Figma", "GitHub Pages"],
    summary: [
      "LALLSUITE is an umbrella platform that consolidates experimental creative software developed across multiple projects.",
      "The suite includes tools for computer vision, datamoshing, video processing, audio manipulation, 3D rendering, and creative coding. It functions as both a product ecosystem and a research environment for testing new ideas across media technologies.",
      "The platform reflects an ongoing effort to build accessible creative software that runs directly in the browser while maintaining professional-grade capabilities."
    ],
    href: "https://anthonyasc5.github.io/lallsuite/",
    linkLabel: "Open LALLSUITE",
    mediaLabel: "Creative Tools and Systems",
    iconPath: "icons/l4vfx.svg",
    iconAlt: "LALLSUITE icon",
    media: {
      type: "video",
      src: "assets/videos/Lall Suite.mov"
    }
  },
  {
    id: "audiomachine",
    group: "Selected Work",
    theme: "audiomachine",
    title: "Audio Machine",
    category: "Music Tools",
    year: "2025 - Present",
    role: "Product designer, audio tool developer.",
    stack: ["JavaScript", "Web Audio API", "React", "HTML/CSS", "DSP Concepts"],
    summary: [
      "Audio Machine is a browser-based audio processing workstation focused on music experimentation and sound manipulation.",
      "Features include slowed-and-reverb processing, vinyl emulation, bass enhancement, random audio chopping, pitch manipulation, and creative playback controls. The project investigates how digital audio workstation concepts can be translated into lightweight browser experiences.",
      "The platform is designed for musicians, producers, and content creators seeking fast creative workflows."
    ],
    href: "https://anthonyasc5.github.io/Audiomachine/#/",
    linkLabel: "Open Audio Machine",
    mediaLabel: "Slowed + Reverb Studio",
    iconPath: "icons/audiomachine.svg",
    iconAlt: "Audio Machine icon",
    media: {
      type: "video",
      src: "assets/videos/audiomachine.mov"
    }
  },
  {
    id: "lanzoid",
    group: "Selected Work",
    theme: "lanzoid",
    title: "Lanzoid",
    category: "3D Graphics",
    year: "2025 - Present",
    role: "Creative developer, 3D graphics engineer.",
    stack: ["Three.js", "WebGL", "JavaScript", "GLSL", "HTML/CSS"],
    summary: [
      "Lanzoid is a browser-based 3D typography and motion graphics tool. It enables users to generate, manipulate, and animate three-dimensional text and visual compositions directly in the browser.",
      "The project explores procedural graphics, spatial typography, real-time rendering, camera systems, and animation workflows. It serves as an experimental environment for creating stylized titles, visualizers, and motion assets without relying on traditional 3D software."
    ],
    href: "https://anthonyasc5.github.io/L4VFX/lanzoid/lanzoid.html",
    linkLabel: "Open Lanzoid",
    mediaLabel: "3D Video Editor",
    iconPath: "icons/lanzoid.svg",
    iconAlt: "Lanzoid icon",
    media: {
      type: "video",
      src: "assets/videos/lanzoid.mov"
    }
  },
  {
    id: "paath",
    group: "School Projects",
    theme: "paath",
    title: "Paath",
    category: "Financial Technology",
    year: "1 Year (2024-2025)",
    role: "UI/UX Designer",
    stack: ["Figma", "Adobe XD"],
    summary: [
      "Paath is a student-centered budgeting app empowering Cornell undergraduates to take control of their finances with clarity and confidence.",
      "Tailored for the unique financial lifestyle of college students, Paath simplifies expense tracking and provides campus-specific savings insights."
    ],
    href: "https://www.figma.com/proto/UZEY8tk5c8DYBgbSsmPeYU/4125-APP-PROTOTYPE?node-id=2044-217&node-type=canvas&t=U61WLU1kxodoVhAY-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2044%3A136",
    linkLabel: "Open Paath Prototype",
    mediaLabel: "Student Budgeting Solution",
    iconPath: "icons/paath.svg",
    iconAlt: "Paath icon",
    media: {
      type: "logo",
      src: "assets/legacy/paathlogo.png",
      alt: "Paath pixel logo"
    }
  },
  {
    id: "karebare",
    group: "School Projects",
    theme: "karebare",
    title: "KareBare",
    category: "Education / Well-being",
    year: "1 Year (2024-2025)",
    role: "UI/UX Designer",
    stack: ["Figma", "Research Notes"],
    summary: [
      "KareBare is a virtual chat box designed to improve social media literacy and promote healthy online interactions for young users.",
      "The concept helps teenagers learn safe digital behavior with a calm, approachable tone."
    ],
    href: "https://valberri121.wixsite.com/karebare",
    linkLabel: "Open KareBare",
    mediaLabel: "Social Media Literacy Companion",
    iconPath: "icons/karebare.svg",
    iconAlt: "KareBare icon",
    media: {
      type: "logo",
      src: "assets/legacy/karebare.png",
      alt: "KareBare pixel logo"
    }
  },
  {
    id: "coala",
    group: "School Projects",
    theme: "coala",
    title: "Coala",
    category: "Relationship Tech",
    year: "1 Semester Project",
    role: "UI/UX Designer",
    stack: ["Figma", "Design Research"],
    summary: [
      "Coala is designed to improve communication between college students in long-distance relationships.",
      "The concept focuses on emotional nuance, passive sharing, and creative bonding over distance."
    ],
    href: "https://www.figma.com/proto/9CHpMrXa2iunMF2O5GmseS/3450-Design-Final?node-id=1-55&starting-point-node-id=1%3A55&mode=design&t=cWCKuzKa3cECSVa5-1",
    linkLabel: "Open Coala Prototype",
    mediaLabel: "Long Distance App + Product",
    iconPath: "icons/coala.svg",
    iconAlt: "Coala icon",
    media: {
      type: "logo",
      src: "assets/legacy/projecticonshp/coala.png",
      alt: "Coala pixel logo"
    }
  },
  {
    id: "cmp",
    group: "School Projects",
    theme: "cmp",
    title: "Cornell Music Production",
    category: "Creative Web Identity",
    year: "In Progress",
    role: "Web Designer",
    stack: ["HTML", "CSS", "JavaScript"],
    summary: [
      "Cornell Music Production is a web identity project for a creative group that needs a clearer digital home.",
      "The site organizes music-related content into a simple, approachable structure that feels easy to navigate."
    ],
    href: "https://stphnmade.github.io/cuprod_web/",
    linkLabel: "Open CMP",
    mediaLabel: "Cornell Music Production Website",
    iconPath: "icons/cmp.svg",
    iconAlt: "Cornell Music Production icon",
    media: {
      type: "logo",
      src: "assets/legacy/projecticonshp/cmp.PNG",
      alt: "Cornell Music Production pixel logo"
    }
  },
  {
    id: "shotbyall",
    group: "Photography",
    theme: "shotbyall",
    title: "ShotByAll",
    category: "Photography",
    year: "Ongoing",
    role: "Photographer / Brand Owner",
    stack: ["Camera", "Pixieset"],
    summary: [
      "ShotByAll is the visual brand for my photography work, centered on portrait imagery and visual identity.",
      "The site and brand system give the portfolio a cleaner home for presenting work and directing viewers."
    ],
    href: "https://shotbylall.pixieset.com/",
    linkLabel: "Open Pixieset",
    mediaLabel: "Photography Brand",
    iconPath: "icons/shotbyall.svg",
    iconAlt: "ShotByAll icon",
    media: {
      type: "image",
      src: "assets/projectimages/SBAPhotos/IMG_0008.JPG",
      alt: "ShotByAll wide-angle photography"
    }
  },
  {
    id: "photoeditor",
    group: "Tooling",
    theme: "photoeditor",
    title: "In Web Photoeditor",
    category: "Browser Tool",
    year: "",
    role: "",
    stack: [],
    summary: [
      "Make quick photo edits right inside the browser.",
      "Open the editor, crop a shot, tune the image, and keep the workflow lightweight."
    ],
    href: "./photoeditorapp/photoeditor.html",
    linkLabel: "Open Photoeditor",
    mediaLabel: "Standalone Editing Surface",
    iconPath: "icons/me.svg",
    iconAlt: "Photoeditor preview",
    windowName: "photoeditor",
    media: {
      type: "image",
      src: "assets/projectimages/head.png",
      alt: "Photoeditor preview portrait"
    }
  }
];

const INVERSE_NAV_THEMES = new Set(["datamosh", "l4vfx", "lallsuite", "audiomachine", "cmp", "shotbyall"]);
const PROJECT_LAYOUTS = [
  { type: "single", id: "blobtracker" },
  { type: "single", id: "datamosh" },
  { type: "single", id: "l4vfx" },
  { type: "single", id: "lallsuite" },
  { type: "single", id: "audiomachine" },
  { type: "single", id: "lanzoid" },
  {
    type: "collection",
    id: "school-projects",
    navTone: "default",
    eyebrow: "School Projects",
    title: "Paath, KareBare, Coala, and Cornell Music Production.",
    summary: "",
    projectIds: ["paath", "karebare", "coala", "cmp"]
  },
  {
    type: "duo",
    id: "media-tools",
    navTone: "default",
    eyebrow: "Photography + Tooling",
    title: "ShotByAll and the in-browser photo editor.",
    summary: "One section for the photography brand and the lightweight editing tool that supports it.",
    projectIds: ["shotbyall", "photoeditor"]
  }
];

let activeWindow = null;

function resetScrollPosition() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

window.addEventListener("pageshow", resetScrollPosition);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderMeta(project) {
  const items = [
    { label: "Year", value: project.year },
    { label: "Role", value: project.role },
    { label: "Stack", value: project.stack.length ? project.stack.join(", ") : "" }
  ].filter((item) => item.value);

  if (!items.length) {
    return "";
  }

  return `
    <dl class="project-panel__meta">
      ${items.map((item) => `
        <div>
          <dt>${escapeHtml(item.label)}</dt>
          <dd>${escapeHtml(item.value)}</dd>
        </div>
      `).join("")}
    </dl>
  `;
}

function renderMedia(project) {
  if (project.media.type === "video") {
    return `
      <video
        class="project-panel__media-video"
        src="${escapeHtml(project.media.src)}"
        muted
        loop
        playsinline
        preload="metadata"
        data-project-video
      ></video>
    `;
  }

  if (project.media.type === "logo") {
    return `
      <div class="project-panel__logo-frame">
        <img src="${escapeHtml(project.media.src)}" alt="${escapeHtml(project.media.alt)}" loading="lazy">
      </div>
    `;
  }

  return `
    <img
      src="${escapeHtml(project.media.src)}"
      alt="${escapeHtml(project.media.alt)}"
      loading="lazy"
    >
  `;
}

function renderLinks(project) {
  const links = [];

  if (project.windowName) {
    links.push({ label: project.linkLabel, windowName: project.windowName });
  } else {
    links.push({ href: project.href, label: project.linkLabel, external: true });
  }

  if (project.githubHref) {
    links.push({ href: project.githubHref, label: "GitHub", external: true });
  }

  return `
    <div class="project-panel__links">
      ${links.map((link) => `
        ${link.windowName
          ? `<button class="text-link text-link--button" type="button" data-open-window="${escapeHtml(link.windowName)}">${escapeHtml(link.label)}</button>`
          : `<a
              class="text-link"
              href="${escapeHtml(link.href)}"
              ${link.external ? 'target="_blank" rel="noreferrer"' : ""}
            >${escapeHtml(link.label)}</a>`
        }
      `).join("")}
    </div>
  `;
}

function renderProjectTitleLink(project) {
  if (project.windowName) {
    return `
      <button
        class="project-title-link project-title-link--button"
        type="button"
        data-open-window="${escapeHtml(project.windowName)}"
      >
        ${escapeHtml(project.title)}
      </button>
    `;
  }

  return `
    <a
      class="project-title-link"
      href="${escapeHtml(project.href)}"
      target="_blank"
      rel="noreferrer"
    >
      ${escapeHtml(project.title)}
    </a>
  `;
}

function renderVideoFallback(title) {
  return `
    <button
      class="project-video-fallback"
      type="button"
      data-video-play
      hidden
      aria-label="Play ${escapeHtml(title)} preview"
    >
      Play preview
    </button>
  `;
}

function renderMediaWrapper(project, innerMarkup) {
  if (project.windowName) {
    return `
      <button
        class="project-panel__media-link project-panel__media-link--button"
        type="button"
        data-open-window="${escapeHtml(project.windowName)}"
        aria-label="${escapeHtml(project.linkLabel)}"
      >
        ${innerMarkup}
      </button>
    `;
  }

  return `
    <a
      class="project-panel__media-link"
      href="${escapeHtml(project.href)}"
      target="_blank"
      rel="noreferrer"
      aria-label="${escapeHtml(project.linkLabel)}"
    >
      ${innerMarkup}
    </a>
  `;
}

function renderProject(project) {
  const hasVideo = project.media.type === "video";
  const mediaFrame = `
    <figure class="project-panel__media-frame">
      ${renderMedia(project)}
    </figure>
  `;

  return `
    <section
      class="project-panel theme-${escapeHtml(project.theme)} reveal"
      id="project-${escapeHtml(project.id)}"
      data-nav-section="work"
      data-nav-tone="${INVERSE_NAV_THEMES.has(project.theme) ? "inverse" : "default"}"
      aria-labelledby="title-${escapeHtml(project.id)}"
    >
      <div class="section-shell project-panel__shell">
        <div class="project-panel__grid">
          <div class="project-panel__copy">
            <p class="project-panel__eyebrow">${escapeHtml(project.group)}</p>
            <p class="project-panel__category">${escapeHtml(project.category)}</p>
            <h2 class="project-panel__title" id="title-${escapeHtml(project.id)}">${renderProjectTitleLink(project)}</h2>
            <div class="project-panel__summary">
              ${project.summary.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
            </div>
            ${renderMeta(project)}
            ${renderLinks(project)}
          </div>

          <div class="project-panel__media">
            <div class="project-panel__media-stage" ${hasVideo ? "data-video-stage" : ""}>
              ${renderMediaWrapper(project, mediaFrame)}
              ${hasVideo ? renderVideoFallback(project.title) : ""}
            </div>
            <div class="project-panel__media-caption">
              <span>${escapeHtml(project.mediaLabel)}</span>
              <span class="project-panel__media-chip">
                <img src="${escapeHtml(project.iconPath)}" alt="${escapeHtml(project.iconAlt)}" loading="lazy">
                <span>${escapeHtml(project.title)}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCollectionCard(project) {
  const summary = project.summary[0] || "";
  const isSchoolProject = project.group === "School Projects";
  const hasVideo = project.media.type === "video" && !isSchoolProject;
  const cta = project.windowName
    ? `<button class="text-link text-link--button" type="button" data-open-window="${escapeHtml(project.windowName)}">${escapeHtml(project.linkLabel)}</button>`
    : `<a class="text-link" href="${escapeHtml(project.href)}" target="_blank" rel="noreferrer">${escapeHtml(project.linkLabel)}</a>`;

  return `
    <article class="project-card theme-${escapeHtml(project.theme)}">
      <div class="project-card__copy">
        <p class="project-card__eyebrow">${escapeHtml(project.category)}</p>
        <h3 class="project-card__title">${renderProjectTitleLink(project)}</h3>
        <p class="project-card__summary">${escapeHtml(summary)}</p>
        ${renderMeta(project)}
        <div class="project-card__footer">
          ${cta}
        </div>
      </div>
      <div class="project-card__media">
        <div class="project-card__media-stage" ${hasVideo ? "data-video-stage" : ""}>
          <figure class="project-card__media-frame${isSchoolProject ? " project-card__media-frame--plain" : ""}">
            ${isSchoolProject
              ? `<div class="project-card__logo-plain"><img src="${escapeHtml(project.iconPath)}" alt="${escapeHtml(project.iconAlt)}" loading="lazy"></div>`
              : renderMedia(project)}
          </figure>
          ${hasVideo ? renderVideoFallback(project.title) : ""}
        </div>
      </div>
    </article>
  `;
}

function renderProjectCollection(layout) {
  const projects = layout.projectIds
    .map((id) => PROJECTS.find((project) => project.id === id))
    .filter(Boolean);
  const summaryMarkup = layout.summary
    ? `<p class="project-collection__summary">${escapeHtml(layout.summary)}</p>`
    : "";

  return `
    <section
      class="project-collection reveal"
      id="project-${escapeHtml(layout.id)}"
      data-nav-section="work"
      data-nav-tone="${escapeHtml(layout.navTone)}"
      aria-labelledby="title-${escapeHtml(layout.id)}"
    >
      <div class="section-shell project-collection__shell">
        <div class="project-collection__header">
          <p class="section-label">${escapeHtml(layout.eyebrow)}</p>
          <h2 class="section-title project-collection__title" id="title-${escapeHtml(layout.id)}">${escapeHtml(layout.title)}</h2>
          ${summaryMarkup}
        </div>
        <div class="project-collection__grid">
          ${projects.map(renderCollectionCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderProjectDuo(layout) {
  const projects = layout.projectIds
    .map((id) => PROJECTS.find((project) => project.id === id))
    .filter(Boolean);
  const summaryMarkup = layout.summary
    ? `<p class="project-collection__summary">${escapeHtml(layout.summary)}</p>`
    : "";

  return `
    <section
      class="project-duo reveal"
      id="project-${escapeHtml(layout.id)}"
      data-nav-section="work"
      data-nav-tone="${escapeHtml(layout.navTone)}"
      aria-labelledby="title-${escapeHtml(layout.id)}"
    >
      <div class="section-shell project-duo__shell">
        <div class="project-collection__header">
          <p class="section-label">${escapeHtml(layout.eyebrow)}</p>
          <h2 class="section-title project-collection__title" id="title-${escapeHtml(layout.id)}">${escapeHtml(layout.title)}</h2>
          ${summaryMarkup}
        </div>
        <div class="project-duo__grid">
          ${projects.map(renderCollectionCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderProjects() {
  const gallery = document.querySelector("[data-project-gallery]");
  if (!gallery) return;

  gallery.innerHTML = PROJECT_LAYOUTS.map((layout) => {
    if (layout.type === "single") {
      const project = PROJECTS.find((item) => item.id === layout.id);
      return project ? renderProject(project) : "";
    }

    if (layout.type === "collection") {
      return renderProjectCollection(layout);
    }

    if (layout.type === "duo") {
      return renderProjectDuo(layout);
    }

    return "";
  }).join("");
}

function setupRevealObserver() {
  const sections = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function setActiveNav(sectionName) {
  const links = document.querySelectorAll('.site-nav__link[href^="#"]');

  links.forEach((link) => {
    const href = link.getAttribute("href");
    const active = href === `#${sectionName}`;
    link.classList.toggle("is-active", active);
    if (active) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function setupNavObserver() {
  const workIntro = document.getElementById("work");
  const aboutSection = document.getElementById("about");

  if (workIntro) {
    workIntro.setAttribute("data-nav-section", "work");
    workIntro.setAttribute("data-nav-tone", "default");
  }

  if (aboutSection) {
    aboutSection.setAttribute("data-nav-section", "about");
    aboutSection.setAttribute("data-nav-tone", "default");
  }

  const sections = document.querySelectorAll("[data-nav-section]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const sectionName = entry.target.getAttribute("data-nav-section");
        const navTone = entry.target.getAttribute("data-nav-tone") || "default";
        document.body.setAttribute("data-nav-tone", navTone);
        if (sectionName) {
          setActiveNav(sectionName);
        }
      });
    },
    {
      threshold: 0.45,
      rootMargin: "-10% 0px -45% 0px"
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupSmartHeader() {
  const nav = document.querySelector(".site-nav");
  if (!nav) return;

  const topThreshold = 24;
  const hideThreshold = 120;
  const deltaThreshold = 10;
  let lastScrollY = window.scrollY;
  let ticking = false;

  const updateNavVisibility = () => {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY;
    const scrollingDown = delta > deltaThreshold;
    const scrollingUp = delta < -deltaThreshold;
    const shouldHide = currentScrollY > hideThreshold && scrollingDown && !activeWindow;

    if (currentScrollY <= topThreshold || scrollingUp || activeWindow) {
      nav.classList.remove("is-hidden");
    } else if (shouldHide) {
      nav.classList.add("is-hidden");
    }

    lastScrollY = currentScrollY;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateNavVisibility);
    },
    { passive: true }
  );

  updateNavVisibility();
}

function setupVideoObserver() {
  const videos = document.querySelectorAll("[data-project-video]");
  if (!videos.length) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setVideoFallbackVisibility(video, shouldShow) {
    const stage = video.closest("[data-video-stage]");
    const button = stage?.querySelector("[data-video-play]");
    if (!button) return;
    button.hidden = !shouldShow;
  }

  async function attemptVideoPlayback(video) {
    try {
      await video.play();
      setVideoFallbackVisibility(video, false);
    } catch (error) {
      if (video.dataset.inView === "true") {
        setVideoFallbackVisibility(video, true);
      }
    }
  }

  videos.forEach((video) => {
    const stage = video.closest("[data-video-stage]");
    const button = stage?.querySelector("[data-video-play]");

    video.addEventListener("playing", () => {
      setVideoFallbackVisibility(video, false);
    });

    video.addEventListener("pause", () => {
      if (video.dataset.inView === "true") {
        setVideoFallbackVisibility(video, true);
      }
    });

    if (button) {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        video.dataset.inView = "true";
        attemptVideoPlayback(video);
      });
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;

        if (entry.isIntersecting) {
          video.dataset.inView = "true";
          if (reducedMotion) {
            setVideoFallbackVisibility(video, true);
            return;
          }

          attemptVideoPlayback(video);
        } else {
          video.dataset.inView = "false";
          video.pause();
          setVideoFallbackVisibility(video, false);
        }
      });
    },
    {
      threshold: 0.35
    }
  );

  videos.forEach((video) => observer.observe(video));
}

function openWindow(name) {
  const layer = document.querySelector("[data-window-layer]");
  const windowEl = document.querySelector(`[data-window="${name}"]`);
  if (!layer || !windowEl) return;

  if (activeWindow && activeWindow !== windowEl) {
    activeWindow.hidden = true;
  }

  layer.hidden = false;
  windowEl.hidden = false;
  activeWindow = windowEl;
  document.body.classList.add("has-window-open");
}

function closeWindow() {
  const layer = document.querySelector("[data-window-layer]");
  if (activeWindow) {
    activeWindow.hidden = true;
  }
  activeWindow = null;
  if (layer) {
    layer.hidden = true;
  }
  document.body.classList.remove("has-window-open");
}

function setupWindows() {
  const layer = document.querySelector("[data-window-layer]");
  const openButtons = document.querySelectorAll("[data-open-window]");
  const closeButtons = document.querySelectorAll("[data-close-window]");

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openWindow(button.getAttribute("data-open-window"));
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeWindow);
  });

  if (layer) {
    layer.addEventListener("click", (event) => {
      if (event.target === layer) {
        closeWindow();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && activeWindow) {
      closeWindow();
    }
  });
}

function init() {
  resetScrollPosition();
  document.body.setAttribute("data-nav-tone", "default");
  renderProjects();
  setupRevealObserver();
  setupNavObserver();
  setupSmartHeader();
  setupVideoObserver();
  setupWindows();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
