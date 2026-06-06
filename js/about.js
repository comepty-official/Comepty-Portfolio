/* ============================================================
   COMEPTY — ABOUT PAGE JS
   ============================================================ */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Animate skill bars when they enter view
  const bars = document.querySelectorAll('.skill-bar');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const w = e.target.dataset.width || '0%';
        setTimeout(() => { e.target.style.width = w; }, 200);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => io.observe(b));

  // Quote card glow on hover
  document.querySelectorAll('.quote-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = 'var(--glow-cyan)';
      card.style.borderColor = 'rgba(0,229,255,0.25)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '';
      card.style.borderColor = '';
    });
  });
});
