/* ============================================================
   COMEPTY — CONTACT PAGE JS
   Form submission (Formspree), copy email, validation
   ============================================================ */
'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ── Copy email ──────────────────────────────────────────── */
  const copyBtn  = document.getElementById('copy-email');
  const emailVal = document.getElementById('email-val');

  if (copyBtn && emailVal) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(emailVal.textContent.trim());
        copyBtn.textContent = 'Copied!';
        copyBtn.style.color = 'var(--cyan)';
        copyBtn.style.borderColor = 'var(--cyan)';
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
          copyBtn.style.color = '';
          copyBtn.style.borderColor = '';
        }, 2000);
      } catch {
        // Fallback for older browsers
        const ta = document.createElement('textarea');
        ta.value = emailVal.textContent.trim();
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        copyBtn.textContent = 'Copied!';
      }
    });
  }

  /* ── Form submission ─────────────────────────────────────── */
  const form       = document.getElementById('contact-form');
  const submitBtn  = document.getElementById('form-submit');
  const submitText = document.getElementById('submit-text');
  const statusEl   = document.getElementById('form-status');

  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    // Basic client-side validation
    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      showStatus('error', '⚠ Please fill in all required fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showStatus('error', '⚠ Please enter a valid email address.');
      return;
    }

    // Loading state
    submitBtn.disabled = true;
    submitText.textContent = 'Sending…';
    hideStatus();

    try {
      const data = new FormData(form);
      const res  = await fetch(form.action, {
        method:  'POST',
        body:    data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        form.reset();
        showStatus('success', '✓ Message sent! I\'ll get back to you within 24 hours. 🚀');
        submitText.textContent = 'Send Message';
        submitBtn.disabled = false;
      } else {
        throw new Error('Server error');
      }
    } catch {
      // Formspree not configured yet — fallback to WhatsApp
      const waNum = '234XXXXXXXXXX';
      const msg   = encodeURIComponent(
        `Hi Comepty! I'm reaching out via your website.\n\n` +
        `Name: ${form.name.value.trim()}\n` +
        `Email: ${form.email.value.trim()}\n` +
        `Subject: ${form.subject.value.trim()}\n\n` +
        `Message:\n${form.message.value.trim()}`
      );
      showStatus('error',
        '⚠ Email service not configured yet. <a href="https://wa.me/' + waNum + '?text=' + msg +
        '" target="_blank" style="color:var(--cyan)">Click here to send via WhatsApp instead →</a>'
      );
      submitText.textContent = 'Send Message';
      submitBtn.disabled = false;
    }
  });

  function showStatus(type, html) {
    statusEl.style.display = 'block';
    statusEl.className = `form-status ${type}`;
    statusEl.innerHTML = html;
    statusEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  function hideStatus() {
    statusEl.style.display = 'none';
  }

  /* ── Input focus glow ────────────────────────────────────── */
  document.querySelectorAll('.form-input').forEach(inp => {
    inp.addEventListener('focus', () => inp.parentElement?.classList.add('focused'));
    inp.addEventListener('blur',  () => inp.parentElement?.classList.remove('focused'));
  });
});
