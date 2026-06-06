/* ============================================================
   COMEPTY — SHARED COMPONENTS (nav + footer + watermark)
   Called by each page's JS as: injectShell()
   ============================================================ */

function injectShell() {
  // ── Loader ───────────────────────────────────────────────
  const loader = document.createElement('div');
  loader.id = 'loader';
  loader.innerHTML = `
    <div class="loader-logo">COMEPTY</div>
    <div class="loader-bar"><div class="loader-fill"></div></div>`;
  document.body.prepend(loader);

  // ── BG Video ─────────────────────────────────────────────




// Video Background
const videoEnabled = localStorage.getItem("bgVideo") !== "off";

const bgWrap =
document.createElement('div');
bgWrap.id = 'bg-video-wrap';

if (!videoEnabled) {
  bgWrap.style.display = "none";
}




bgWrap.innerHTML = `
<video autoplay muted loop playsinline>
    <source src="videos/video.mp4" type="video/mp4">
</video>
`;
document.body.prepend(bgWrap);

// Overlay
const bgOverlay = document.createElement('div');
bgOverlay.id = 'bg-overlay';
document.body.prepend(bgOverlay);

// Styles
const style = document.createElement('style');
style.textContent = `
#bg-video-wrap{
    position:fixed;
    inset:0;
    z-index:-2;
    overflow:hidden;
}

#bg-video-wrap video{
    width:100%;
    height:100%;
    object-fit:cover;
}

#bg-overlay{
    position:fixed;
    inset:0;
    background:rgba(0,0,0,.0);
    backdrop-filter:blur(3px);
    z-index:-1;
    pointer-events:none;
}
`;
document.head.appendChild(style);

  // ── Particles ─────────────────────────────────────────────
  const canvas = document.createElement('canvas');
  canvas.id = 'particles-canvas';
  document.body.prepend(canvas);

  // ── Navbar ────────────────────────────────────────────────
  const nav = document.createElement('nav');
  nav.id = 'navbar';
  nav.innerHTML = `
    <a class="nav-logo" href="index.html">COMEPTY</a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="pricing.html">Pricing</a></li>
      <li><a href="ai.html">AI Assistant</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <div class="nav-cta">
      <a href="settings.html" class="btn btn-ghost btn-sm">⚙ Settings</a>
      <a href="contact.html" class="btn btn-primary btn-sm">Hire Me</a>
    </div>
    <button class="nav-toggle" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>`;
  document.body.prepend(nav);

  // ── Drawer + backdrop ──────────────────────────────────────
  const backdrop = document.createElement('div');
  backdrop.className = 'nav-backdrop';
  document.body.appendChild(backdrop);

  const drawer = document.createElement('div');
  drawer.className = 'nav-drawer';
  drawer.innerHTML = `
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="projects.html">Projects</a>
    <a href="pricing.html">Pricing</a>
    <a href="ai.html">AI Assistant</a>
    <a href="contact.html">Contact</a>
    <a href="payment.html">Payment</a>
    <a href="terms and service.html">terms of service</a>
    <a href="settings.html">Settings</a>`;
  document.body.appendChild(drawer);

  // ── Footer ────────────────────────────────────────────────
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="logo">COMEPTY</div>
        <p>Building Digital Futures — Premium web experiences crafted with precision and passion.</p>
        <div class="social-links" style="margin-top:20px">
          <a href="#" aria-label="GitHub">GH</a>
          <a href="#" aria-label="Twitter">TW</a>
          <a href="#" aria-label="LinkedIn">IN</a>
          <a href="#" aria-label="Instagram">IG</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Pages</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="ai.html">AI Assistant</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="payment.html">Payment</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="settings.html">Settings</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="contact.html">comepty.org@gmail.com</a></li>
          <li><a href="https://wa.link/iz5ilx" target="_blank">WhatsApp</a></li>
          <li><a href="contact.html">Send a message | Email |</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} Comepty. All rights reserved.</p>
      <p style="font-size:0.78rem;color:var(--text-3)">Built with passion · v1.0</p>
    </div>`;
  document.body.appendChild(footer);

  // ── Watermark ──────────────────────────────────────────────
  const wm = document.createElement('div');
  wm.id = 'watermark';
  wm.innerHTML = `Powered by <a href="index.html">Comepty</a>
    <button id="wm-hide" title="Hide" style="background:none;border:none;cursor:pointer;color:var(--text-3);font-size:0.8rem;padding:0">✕</button>`;
  document.body.appendChild(wm);
}

// Auto-run
injectShell();
