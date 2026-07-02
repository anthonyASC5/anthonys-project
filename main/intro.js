(() => {
  // The intro timing respects reduced-motion so the desktop never feels blocked for long.
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const introVisibleMs = prefersReducedMotion ? 320 : 2400;
  const introExitMs = prefersReducedMotion ? 180 : 420;
  window.__introPending = true;
  let introFinished = false;

  // Finishing the intro hands control back to the main desktop script through a custom event.
  function finishIntro(overlay) {
    if (introFinished) return;
    introFinished = true;
    document.body.classList.add("is-intro-complete");
    overlay.classList.add("is-leaving");

    window.setTimeout(() => {
      overlay.remove();
      document.body.classList.remove("has-intro");
      window.__introPending = false;
      document.dispatchEvent(new CustomEvent("intro:complete"));
    }, introExitMs);
  }

  function startIntro() {
    if (!document.body) return;

    // The overlay stays self-contained so the intro can be swapped without touching index.html.
    const overlay = document.createElement("div");
    overlay.className = "intro-overlay";
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML = `
      <div class="intro-overlay__stage">
        <div class="intro-overlay__face-marquee box" role="img" aria-label="LALL marquee">
          <div class="inner is-right">
            <span>LALL LALL LALL</span>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    // Keep body visible so the intro overlay can actually render before the desktop reveals.
    document.body.classList.add("is-ready");
    document.body.classList.add("has-intro");

    window.requestAnimationFrame(() => {
      overlay.classList.add("is-visible");
    });

    window.setTimeout(() => {
      finishIntro(overlay);
    }, introVisibleMs);
  }

  if (document.readyState === "loading") {
    // Defer mounting until the initial DOM exists so the overlay never races the body tag.
    document.addEventListener("DOMContentLoaded", startIntro, { once: true });
  } else {
    startIntro();
  }
})();
