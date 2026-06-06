# COMEPTY — Complete Website

A futuristic, premium, multi-page personal company website.

## Structure

```
comepty/
├── index.html         # Home
├── about.html         # About & Skills & Timeline
├── projects.html      # Portfolio with filter
├── pricing.html       # 5 pricing plans
├── payment.html       # Checkout page
├── ai.html            # AI Assistant (scripted chatbot)
├── contact.html       # Contact form (Formspree-ready)
├── settings.html      # Theme / animation / license settings
│
├── css/
│   ├── global.css     # Shared styles, variables, nav, footer
│   ├── index.css
│   ├── about.css
│   ├── projects.css
│   ├── pricing.css
│   ├── payment.css
│   ├── ai.css
│   ├── contact.css
│   └── settings.css
│
├── js/
│   ├── shell.js       # Injects navbar, footer, watermark, bg video
│   ├── global.js      # Loader, particles, scroll reveal, theme
│   ├── index.js
│   ├── about.js
│   ├── projects.js
│   ├── pricing.js
│   ├── payment.js
│   ├── ai.js
│   ├── contact.js
│   └── settings.js
│
└── assets/
    ├── videos/video.mp4   ← Replace with your video
    └── images/            ← Add founder photo etc.
```

## Setup Checklist

1. **WhatsApp number** — Search for `234XXXXXXXXXX` in all files and replace with your real number.
2. **Background video** — Drop your video file into `assets/videos/video.mp4`.
3. **Contact form** — Sign up at [Formspree](https://formspree.io), create a form, replace `YOUR_FORM_ID` in `contact.html`.
4. **Email** — Replace `hello@comepty.dev` with your real email.
5. **License keys** — Edit the `VALID_KEYS` array in `js/settings.js` to set your real license keys.
6. **Premium watermark logic** — Set `cmt-premium = "true"` in localStorage after verified payment.

## License System
- Free/Starter: watermark always visible
- Premium: 2-month watermark-free, then ₦200/month
- Enter license key on Settings page → stored in localStorage → watermark hidden permanently

## Deploy
Works on any static host:
- **GitHub Pages** — push and enable Pages in repo settings
- **Netlify** — drag & drop the `comepty/` folder
- **Vercel** — import the repo

No backend required for base site. Formspree handles email.
