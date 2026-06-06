/* ============================================================
   COMEPTY — AI ASSISTANT PAGE JS
   Scripted AI with typewriter effect, quick prompts, auto-scroll
   ============================================================ */
'use strict';

/* ── Knowledge Base ─────────────────────────────────────────── */
const KB = [
  {
    keys: ['who is comepty', 'what is comepty', 'about comepty', 'tell me about comepty'],
    answer: `**Comepty** is a premium digital company founded by a 16-year-old developer and entrepreneur with a passion for building extraordinary web experiences.\n\nWe specialize in crafting futuristic websites, animated digital portfolios, e-commerce platforms, and AI-integrated applications — all designed to feel like a million-dollar product.\n\nOur mission: **Building Digital Futures**, one project at a time.`
  },
  {
    keys: ['services', 'what do you offer', 'what can you build', 'what do you do'],
    answer: `Here's what Comepty offers:\n\n🌱 **Starter Landing Page** — Clean, mobile-friendly single pages\n⚡ **Premium Website** — Animations, dark mode, modern design\n🏢 **Business Website** — Multi-page with gallery & forms\n💎 **Professional Brand System** — Advanced UI + AI assistant\n🚀 **Enterprise Digital Package** — Full custom development\n\nWe also build Python applications, game prototypes, and AI-powered tools. Visit the **Pricing page** for details.`
  },
  {
    keys: ['how much', 'price', 'cost', 'pricing', 'how much do websites cost'],
    answer: `Our pricing is transparent and flexible:\n\n• **Starter Landing Page** — ₦7,000 – ₦10,000\n• **Premium Website** — ₦20,000 - ₦60,000 (includes 2 months watermark-free)\n• **Business Website** — ₦90,000 - ₦150,000\n• **Professional Brand System** — Just ₦200,000\n• **Enterprise Package** — ₦500 - ₦1m\n\nAll plans include up to **3 revision rounds** and a **free consultation**. Watermark removal forever for *Enterprise Packags. Monthly is ₦200/month for Premium plans.\n\nHead to the Pricing page or WhatsApp us to get a personal quote! 💬`
  },
  {
    keys: ['contact', 'how do i contact', 'reach you', 'get in touch', 'email', 'whatsapp'],
    answer: `You can reach Comepty through several ways:\n\n📧 **Gmail** hello@comepty.dev\n💬 **WhatsApp:** [Click here to chat](https://wa.me/234XXXXXXXXXX)\n📝 **Contact Form:** Visit our Contact page\n\nWe respond within **24 hours** on business days. For urgent projects, WhatsApp is the fastest way to reach us!`
  },
  {
    keys: ['projects', 'portfolio', 'work', 'what have you built', 'tell me about your projects'],
    answer: `Here are some of Comepty's key projects:\n\n🛒 **WisMarket** — A serverless e-commerce template deployed on GitHub Pages. Features product listings, cart logic, and checkout.\n\n🎨 **Web Portfolio System** — Premium animated portfolio with glassmorphism, scroll effects, AI assistant, and dark/light mode.\n\n🎮 **Game Development Experiments** — Godot Engine prototypes with player controllers, enemy AI, and 2D physics.\n\n🐍 **Python Applications** — Automation scripts, Flask servers, and API tools.\n\n🤖 **Future AI Systems** — Ongoing AI assistant and chatbot integrations.\n\nVisit the **Projects page** to see them all!`
  },
  {
    keys: ['technologies', 'tech stack', 'what do you use', 'tools', 'languages', 'skills'],
    answer: `Comepty's technology stack:\n\n**Frontend:**\nHTML5 · CSS3 · JavaScript (ES6+) · Glassmorphism · Advanced Animations\n\n**Backend / Scripting:**\nPython · Flask · REST APIs\n\n**Game Development:**\nGodot Engine · GDScript · 2D game systems\n\n**Tools & Platforms:**\nGit · GitHub · GitHub Pages · VS Code · Figma\n\n**Specialties:**\nScroll animations · Responsive design · AI integrations · Dark/light mode systems · Watermark systems`
  },
  {
    keys: ['Fuck', 'Shit', 'pussy', 'dick', 'motherfucker', 'fucker', 'Bitch', 'ride me harder', 'i love lgbtq', 'porn', 'xxx'] ,
    answer: `This Ai is not meet to support that.🚫🔇`
  },
  {
    keys: ['payment', 'how to pay', 'payment methods', 'bank', 'paystack', 'flutterwave'],
    answer: `Comepty accepts the following payment methods:\n\n🏦 **Bank Transfer** — Direct transfer, details sent via WhatsApp after order\n💳 **Paystack** — Coming soon (card, bank, USSD)\n🌊 **Flutterwave** — Coming soon (international cards)\n\nImportant: **No payment is taken without your confirmation.** We first agree on scope and price, then you pay. Visit the **Payment page** to start an order.`
  },
  
  {
    keys: ['watermark', 'powered by comepty', 'remove watermark'],
    answer: `Every Comepty-built site includes a small **"Powered by Comepty"** watermark.\n\n• **Starter plan** — Watermark included permanently (removable for +₦200)\n• **Premium plan** — Watermark-free for **2 months**, then ₦200/month to keep it removed\n• **Business & above** — Discussed per project\n• **Enterprise** — Fully watermark-free\n\nThe watermark helps us grow while giving you a great product. Fair deal! 🤝`
  },
  {
    keys: ['delivery', 'how long', 'timeline', 'when will it be ready'],
    answer: `Delivery timelines depend on the plan:\n\n⚡ **Starter Landing Page** — 2–3 days\n🎨 **Premium Website** — 4–7 days\n🏢 **Business Website** — 7–10 days\n💎 **Professional Brand System** — 10–14 days\n🚀 **Enterprise Package** — 14–30 days (custom scope)\n\nAll timelines start after our consultation and your initial confirmation. Rush delivery may be possible — ask us!`
  },
  {
    keys: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'sup', 'yo'],
    answer: `Hey there! 👋 Welcome to **Comepty AI Assistant**.\n\nI'm here to answer your questions about our services, projects, pricing, and how to get in touch.\n\nFeel free to ask me anything, or tap one of the quick prompt buttons on the left to get started!`
  },
  {
    keys: ['thanks', 'thank you', 'thx', 'ty'],
    answer: `You're welcome! 😊 Is there anything else I can help you with?\n\nIf you're ready to start a project, head over to the **Contact page** or **WhatsApp** us directly. We'd love to build something amazing for you! 🚀`
  },
];

/* ── Fallback ────────────────────────────────────────────────── */
const FALLBACK = `I'm not sure about that specific question, but I can help with:\n\n• **Services & pricing** — what we build and how much it costs\n• **Projects** — our portfolio and past work\n• **Contact info** — how to reach us\n• **Technologies** — our tools and skills\n• **Payments & delivery** — how orders work\n\nTry asking one of those, or visit the **Contact page** to speak with a real human! 😊`;

/* ── Typewriter ─────────────────────────────────────────────── */
function typeText(el, text, speed = 18) {
  // Convert markdown-lite to HTML
  const html = text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.+?)\]\((https?[^\)]+)\)/g, '<a href="$1" target="_blank" style="color:var(--cyan)">$1</a>')
    .split('\n')
    .map(l => l || '<br>')
    .join('<br>');

  // Strip HTML for typing, re-inject at end
  const plain = text.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\[(.+?)\]\([^\)]+\)/g, '$1');
  let i = 0;
  el.innerHTML = '';

  return new Promise(resolve => {
    const tick = () => {
      if (document.body.classList.contains('no-anim')) {
        el.innerHTML = html;
        resolve();
        return;
      }
      i++;
      // Show plain text while typing, swap to rich HTML at end
      el.textContent = plain.slice(0, i);
      if (i < plain.length) {
        setTimeout(tick, speed);
      } else {
        el.innerHTML = html;
        resolve();
      }
    };
    tick();
  });
}

/* ── DOM refs ────────────────────────────────────────────────── */
const messagesEl = document.getElementById('chat-messages');
const inputEl    = document.getElementById('chat-input');
const sendBtn    = document.getElementById('send-btn');
const typingEl   = document.getElementById('typing-indicator');
const clearBtn   = document.getElementById('clear-chat');

/* ── Add message ─────────────────────────────────────────────── */
function addMessage(role, text) {
  const wrap = document.createElement('div');
  wrap.className = `msg msg-${role}`;

  const avatar = document.createElement('div');
  avatar.className = 'msg-avatar';
  avatar.innerHTML = `<img class="logo" src="image/icon.png" alt="">`; 
  
  /* role === 'ai' ? 
  'c' : 'U';     /*Why did it put this tho 😭*/
 
  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';

  wrap.append(avatar, bubble);
  messagesEl.appendChild(wrap);
  scrollBottom();
  return bubble;
}

function scrollBottom() {
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

/* ── Get AI response ─────────────────────────────────────────── */
function getResponse(input) {
  const q = input.toLowerCase().trim();
  for (const entry of KB) {
    if (entry.keys.some(k => q.includes(k))) return entry.answer;
  }
  return FALLBACK;
}

/* ── Send message flow ───────────────────────────────────────── */
let busy = false;

async function sendMessage(text) {
  if (busy || !text.trim()) return;
  busy = true;
  sendBtn.disabled = true;

  // User bubble
  const userBubble = addMessage('user', '');
  userBubble.textContent = text;
  inputEl.value = '';
  scrollBottom();

  // Typing indicator
  await new Promise(r => setTimeout(r, 500));
  typingEl.style.display = 'flex';
  scrollBottom();

  // Simulate AI thinking
  const thinkTime = 800 + Math.random() * 800;
  await new Promise(r => setTimeout(r, thinkTime));

  typingEl.style.display = 'none';

  // AI bubble with typewriter
  const aiBubble = addMessage('ai', '');
  const response = getResponse(text);
  await typeText(aiBubble, response, 14);
  scrollBottom();

  busy = false;
  sendBtn.disabled = false;
  inputEl.focus();
}

/* ── Event listeners ─────────────────────────────────────────── */
sendBtn.addEventListener('click', () => sendMessage(inputEl.value));
inputEl.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) sendMessage(inputEl.value); });

document.querySelectorAll('.quick-btn').forEach(btn => {
  btn.addEventListener('click', () => sendMessage(btn.dataset.prompt));
});

clearBtn.addEventListener('click', () => {
  messagesEl.innerHTML = '';
  showWelcome();
});

/* ── Welcome message ─────────────────────────────────────────── */
function showWelcome() {
  const bubble = addMessage('ai', '');
  typeText(bubble,
    `👋 **Welcome to Comepty AI Assistant!**\n\nI can answer questions about our services, pricing, projects, and how to contact us.\n\nTry one of the quick prompts on the left, or just type your question below!`,
    12
  );
}

document.addEventListener('DOMContentLoaded', () => {
  showWelcome();
  inputEl.focus();
});
