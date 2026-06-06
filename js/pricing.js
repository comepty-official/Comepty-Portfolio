/* ============================================================
   COMEPTY — PRICING PAGE JS
   ============================================================ */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.plan-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = card.classList.contains('plan-enterprise')
        ? '0 0 40px rgba(244,114,182,0.2)'
        : '0 0 40px rgba(0,229,255,0.15)';
    });
    card.addEventListener('mouseleave', () => { card.style.boxShadow = ''; });
  });

  document.querySelectorAll('.plan-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const planName = btn.closest('.plan-card').querySelector('h2').textContent.trim().toLowerCase();
      sessionStorage.setItem('cmt-selected-plan-key', planName);
    });
  });
});
