/* ============================================================
   COMEPTY — INDEX / HOME PAGE JS
   ============================================================ */
'use strict';

// Animate hero title letters on load
document.addEventListener('DOMContentLoaded', () => {
  // Stagger hero children
  document.querySelectorAll('.hero-inner .reveal').forEach((el, i) => {
    el.style.transitionDelay = `${0.1 + i * 0.12}s`;
    setTimeout(() => el.classList.add('visible'), 100 + i * 120);
  });

  // Parallax orbs on mouse move
  const orbs = document.querySelectorAll('.orb');
  document.addEventListener('mousemove', e => {
    if (document.body.classList.contains('no-anim')) return;
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    orbs.forEach((orb, i) => {
      const depth = (i + 1) * 10;
      orb.style.transform = `translate(${dx * depth}px, ${dy * depth}px)`;
    });
  });

  // Marquee pause on hover
  const track = document.querySelector('.marquee-track');
  const wrap  = document.querySelector('.marquee-wrap');
  wrap?.addEventListener('mouseenter', () => { if (track) track.style.animationPlayState = 'paused'; });
  wrap?.addEventListener('mouseleave', () => { if (track) track.style.animationPlayState = 'running'; });
});
