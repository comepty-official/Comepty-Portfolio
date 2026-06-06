/* ============================================================
   COMEPTY — PROJECTS PAGE JS
   ============================================================ */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.proj-card');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const cat = card.dataset.cat;
        const show = filter === 'all' || cat === filter;
        card.classList.toggle('hidden', !show);
        // Re-trigger reveal animation
        if (show) {
          card.classList.remove('visible');
          setTimeout(() => card.classList.add('visible'), 50);
        }
      });
    });
  });

  // Hover tilt on project cards
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      if (document.body.classList.contains('no-anim')) return;
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 8;
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 8;
      card.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
});
