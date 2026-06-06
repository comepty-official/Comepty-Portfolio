/* ============================================================
   COMEPTY — SETTINGS PAGE JS
   Theme, animation toggles, license key, reset — all via localStorage
   ============================================================ */
'use strict';

/* ── Valid demo license keys ─────────────────────────────────── */
// Replace or extend with your real keys
const VALID_KEYS = ['CMPTY-PREM-2025-GOLD', 'CMPTY-PREM-2026-PLAT'];

document.addEventListener('DOMContentLoaded', () => {

  /* ── Read current prefs ─────────────────────────────────── */
  const currentTheme    = localStorage.getItem('cmt-theme')     || 'dark';
  const animOn          = localStorage.getItem('cmt-anim')      !== 'off';
  const particlesOn     = localStorage.getItem('cmt-particles') !== 'off';
  const reducedOn       = localStorage.getItem('cmt-reduced')   === 'on';
  const isPremium       = localStorage.getItem('cmt-premium')   === 'true';

  /* ── Theme buttons ──────────────────────────────────────── */
  
  
  
  /* The vid */

  /* The vid */
  
  
  
  
  
  
  const darkBtn  = document.getElementById('theme-dark');
  const lightBtn = document.getElementById('theme-light');

  function setActiveThemeBtn(theme) {
    darkBtn.classList.toggle('active', theme === 'dark');
    lightBtn.classList.toggle('active', theme === 'light');
  }
  setActiveThemeBtn(currentTheme);

  [darkBtn, lightBtn].forEach(btn => {
    btn.addEventListener('click', () => {
      const t = btn.dataset.theme;
      localStorage.setItem('cmt-theme', t);
      document.body.classList.toggle('light', t === 'light');
      setActiveThemeBtn(t);
      flashBanner();
    });
  });

  /* ── Animation toggles ──────────────────────────────────── */
  const animToggle      = document.getElementById('toggle-anim');
  const particlesToggle = document.getElementById('toggle-particles');
  const reducedToggle   = document.getElementById('toggle-reduced');

  animToggle.checked      = animOn;
  particlesToggle.checked = particlesOn;
  reducedToggle.checked   = reducedOn;

  animToggle.addEventListener('change', () => {
    const on = animToggle.checked;
    localStorage.setItem('cmt-anim', on ? 'on' : 'off');
    document.body.classList.toggle('no-anim', !on);
    flashBanner();
  });

  particlesToggle.addEventListener('change', () => {
    const on = particlesToggle.checked;
    localStorage.setItem('cmt-particles', on ? 'on' : 'off');
    const canvas = document.getElementById('particles-canvas');
    if (canvas) canvas.style.display = on ? '' : 'none';
    flashBanner();
  });

  reducedToggle.addEventListener('change', () => {
    const on = reducedToggle.checked;
    localStorage.setItem('cmt-reduced', on ? 'on' : 'off');
    document.body.classList.toggle('no-anim', on);
    if (on) {
      animToggle.checked = false;
      localStorage.setItem('cmt-anim', 'off');
    }
    flashBanner();
  });

  /* ── Watermark / License ────────────────────────────────── */
  const statusDot  = document.querySelector('.wm-dot');
  const statusText = document.getElementById('wm-status-text');

  function updateWmStatus() {
    const prem = localStorage.getItem('cmt-premium') === 'true';
    if (statusDot)  statusDot.style.background = prem ? '#25d366' : 'var(--cyan)';
    if (statusText) statusText.textContent = prem ? '✓ Watermark permanently removed (Premium)' : 'Watermark is active';
  }
  updateWmStatus();

  const licenseInput  = document.getElementById('license-key');
  const activateBtn   = document.getElementById('activate-license');
  const licenseStatus = document.getElementById('license-status');

  // Format license input as user types: CMPTY-XXXX-XXXX-XXXX
  licenseInput?.addEventListener('input', () => {
    let val = licenseInput.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    // Split into segments
    const parts = [val.slice(0,5), val.slice(5,9), val.slice(9,13), val.slice(13,17)].filter(Boolean);
    licenseInput.value = parts.join('-');
  });

  activateBtn?.addEventListener('click', () => {
    const key = licenseInput.value.trim().toUpperCase();
    licenseStatus.style.display = 'block';

    if (VALID_KEYS.includes(key)) {
      localStorage.setItem('cmt-premium', 'true');
      licenseStatus.className = 'license-msg success';
      licenseStatus.textContent = '✓ License activated! Watermark permanently removed.';
      updateWmStatus();
      // Hide watermark immediately
      const wm = document.getElementById('watermark');
      if (wm) wm.style.display = 'none';
    } else if (!key) {
      licenseStatus.className = 'license-msg error';
      licenseStatus.textContent = '⚠ Please enter a license key.';
    } else {
      licenseStatus.className = 'license-msg error';
      licenseStatus.textContent = '✗ Invalid or expired license key. Check your order confirmation or contact support.';
    }
  });

  /* ── Reset all settings ─────────────────────────────────── */
  document.getElementById('reset-settings')?.addEventListener('click', () => {
    if (!confirm('Reset all settings to defaults?')) return;
    const keysToRemove = ['cmt-theme','cmt-anim','cmt-particles','cmt-reduced'];
    // Note: we do NOT clear cmt-premium on reset — that requires license revocation
    keysToRemove.forEach(k => localStorage.removeItem(k));
    window.location.reload();
  });

  /* ── Save banner flash ──────────────────────────────────── */
  function flashBanner() {
    const banner = document.getElementById('save-banner');
    if (!banner) return;
    banner.style.borderColor = 'var(--cyan)';
    banner.style.background  = 'rgba(0,229,255,0.06)';
    setTimeout(() => {
      banner.style.borderColor = '';
      banner.style.background  = '';
    }, 1200);
  }

  /* ── Apply particles preference on load ─────────────────── */
  if (!particlesOn) {
    const canvas = document.getElementById('particles-canvas');
    if (canvas) canvas.style.display = 'none';
  }

});
