/* ============================================================
   COMEPTY — GLOBAL JAVASCRIPT
   Shared utilities: loader, navbar, particles, scroll reveal,
   watermark, theme, hamburger
   ============================================================ */

'use strict';

/* ── Loader ─────────────────────────────────────────────────── */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  setTimeout(() => loader.classList.add('hidden'), 1500);
});

/* ── Theme & Settings ───────────────────────────────────────── */
(function applyTheme() {
  const theme = localStorage.getItem('cmt-theme') || 'dark';
  const anim  = localStorage.getItem('cmt-anim')  !== 'off';
  if (theme === 'light') document.body.classList.add('light');
  if (!anim)             document.body.classList.add('no-anim');
})();







/* vid */

  
const videoToggle = document.getElementById("video-toggle");

if (videoToggle) {
  videoToggle.checked = localStorage.getItem("bgVideo") !== "off";

  videoToggle.addEventListener("change", () => {
    localStorage.setItem(
      "bgVideo",
      videoToggle.checked ? "on" : "off"
    );
  });
}


/* vid */





/* ── Navbar scroll glass ────────────────────────────────────── */


const navbar = document.getElementById('navbar');
if (navbar) {
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Active nav link ────────────────────────────────────────── */

(function markActive() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
})();

/* ── Hamburger / Drawer ─────────────────────────────────────── */
const toggle   = document.querySelector('.nav-toggle');
const drawer   = document.querySelector('.nav-drawer');
const backdrop = document.querySelector('.nav-backdrop');

function openDrawer() {
  toggle?.classList.add('open');
  drawer?.classList.add('open');
  backdrop?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  toggle?.classList.remove('open');
  drawer?.classList.remove('open');
  backdrop?.classList.remove('open');
  document.body.style.overflow = '';
}
toggle?.addEventListener('click', () => {
  drawer?.classList.contains('open') ? closeDrawer() : openDrawer();
});
backdrop?.addEventListener('click', closeDrawer);
drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

/* ── Particles ──────────────────────────────────────────────── */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  const resize = () => {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', resize);
  resize();

  const colors = ['rgba(0,229,255,', 'rgba(124,58,237,', 'rgba(167,139,250,'];
  for (let i = 0; i < 55; i++) {
    particles.push({
      x:  Math.random() * 1920,
      y:  Math.random() * 1080,
      r:  Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      a:  Math.random() * 0.5 + 0.1,
      c:  colors[Math.floor(Math.random() * colors.length)],
    });
  }

  const anim = () => {
    ctx.clearRect(0, 0, W, H);
    if (document.body.classList.contains('no-anim')) { requestAnimationFrame(anim); return; }
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c + p.a + ')';
      ctx.fill();
    });
    requestAnimationFrame(anim);
  };
  requestAnimationFrame(anim);
})();

/* ── Scroll Reveal ──────────────────────────────────────────── */
(function scrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();

/* ── Watermark ──────────────────────────────────────────────── */
(function watermark() {
  const wm = document.getElementById('watermark');
  if (!wm) return;

  // Premium users can hide permanently
  const isPremium = localStorage.getItem('cmt-premium') === 'true';
  if (isPremium) { wm.style.display = 'none'; return; }

  // Watermark always returns on refresh — only session-hide allowed via button
  const hideBtn = wm.querySelector('#wm-hide');
  if (hideBtn) {
    hideBtn.addEventListener('click', () => wm.classList.add('hidden'));
  }
})();

/* ── Page fade-in transition ────────────────────────────────── */
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => { document.body.style.opacity = '1'; }, 50);
});

/* ── Smooth page exit transitions ──────────────────────────────*/
document.addEventListener('click', e => {
  const a = e.target.closest('a');
  if (!a) return;
  const href = a.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('http') ||
      href.startsWith('mailto') || href.startsWith('tel') ||
      href.startsWith('https') || a.target === '_blank') return;
  e.preventDefault();
  document.body.style.opacity = '0';
  setTimeout(() => { window.location.href = href; }, 400);
});
