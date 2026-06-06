/* ============================================================
   COMEPTY — PAYMENT PAGE JS
   ============================================================ */
'use strict';

// Plan data
const PLANS = {
  starter:      { name: 'Starter Landing Page',      price: '₦7,000 – ₦10,000', icon: '🌱', features: ['Simple landing page','Mobile responsive','Clean modern design','Contact form','3 revisions'] },
  premium:      { name: 'Premium Website',            price: 'Custom Quote',       icon: '⚡', features: ['Full animations','Dark/light mode','Modern design','Responsive','2 months watermark-free','3 revisions'] },
  business:     { name: 'Business Website',           price: 'Custom Quote',       icon: '🏢', features: ['Multi-page (up to 6)','Contact forms','Project gallery','Animations','SEO setup','3 revisions'] },
  professional: { name: 'Professional Brand System',  price: 'Custom Quote',       icon: '💎', features: ['Everything in Business','Advanced UI/UX','Custom branding','AI assistant','Priority support','3 revisions'] },
  enterprise:   { name: 'Enterprise Digital Package', price: 'Custom Quote',       icon: '🚀', features: ['Full custom dev','Premium architecture','All pages & features','Payment integration','Future upgrades','3 revisions'] },
};

document.addEventListener('DOMContentLoaded', () => {
  // Read plan from URL param or sessionStorage
  const params   = new URLSearchParams(window.location.search);
  const planKey  = params.get('plan') || sessionStorage.getItem('cmt-selected-plan-key') || 'professional';
  const plan     = PLANS[planKey] || PLANS.professional;

  // Populate order summary
  document.getElementById('order-plan-name').textContent     = plan.name;
  document.querySelector('.plan-icon-sm').textContent        = plan.icon;
  document.getElementById('order-base-price').textContent    = plan.price;
  document.getElementById('order-total-price').textContent   = plan.price;
  document.getElementById('order-plan-display').querySelector('.order-plan-desc').textContent = plan.price;

  // Populate features
  const featList = document.getElementById('order-features');
  featList.innerHTML = plan.features.map(f => `<li>✓ ${f}</li>`).join('');

  // Payment method selection
  document.querySelectorAll('.pay-method-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.pay-method-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const method = card.dataset.method;
      const bd = document.getElementById('bank-details');
      bd.classList.toggle('visible', method === 'bank');
      document.getElementById('pay-btn-text').textContent =
        method === 'bank' ? 'Submit Order via WhatsApp' : 'Proceed to Payment';
    });
  });

  // Submit — send to WhatsApp
  document.getElementById('pay-submit').addEventListener('click', () => {
    const name    = document.getElementById('pay-name').value.trim();
    const email   = document.getElementById('pay-email').value.trim();
    const phone   = document.getElementById('pay-phone').value.trim();
    const details = document.getElementById('pay-details').value.trim();

    if (!name || !email) {
      alert('Please fill in your name and email address.');
      return;
    }

    // WhatsApp message — replace number
    const waNum = '234XXXXXXXXXX';
    const msg   = encodeURIComponent(
      `Hello Comepty! I'd like to place an order.\n\n` +
      `*Plan:* ${plan.name}\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Phone:* ${phone || 'Not provided'}\n` +
      `*Details:* ${details || 'To be discussed'}\n\n` +
      `Please confirm scope and pricing. Thank you!`
    );
    window.open(`https://wa.me/${waNum}?text=${msg}`, '_blank');
  });
});
