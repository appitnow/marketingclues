# Marketing Clues Magazine - Deployment Guide

## Quick Deploy to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   cd /root/.openclaw/workspace/projects/marketingclues/deployment
   git init
   git add .
   git commit -m "Initial Marketing Clues deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/marketingclues.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the static site
   - Click "Deploy"

3. **Done!**
   - Your site will be live at `https://marketingclues.vercel.app`
   - Custom domain can be added in Vercel settings

---

### Option 2: Deploy via Vercel CLI

```bash
npm install -g vercel
cd /root/.openclaw/workspace/projects/marketingclues/deployment
vercel
```

Follow the prompts to deploy.

---

## What's Included

```
deployment/
├── index.html           # Main sales page
├── styles/
│   └── main.css        # Complete stylesheet
├── scripts/
│   └── main.js         # Interactive features
├── vercel.json         # Vercel config
└── README.md           # This file
```

---

## Before You Launch

### 1. Add Your Magazine Cover Image

Place your magazine cover in an `images/` folder:
```bash
mkdir images
# Add your magazine-cover.jpg here
```

Update `index.html` line 43:
```html
<img src="images/magazine-cover.jpg" alt="Marketing Clues Magazine Cover">
```

### 2. Connect Email Capture

Update `scripts/main.js` lines 8-9:
```javascript
const FREE_DOWNLOAD_URL = 'https://your-actual-convertkit-form-url';
const SUBSCRIBE_URL = 'https://your-actual-payment-url';
```

**Recommended Services:**
- **Email Capture:** ConvertKit, MailerLite, EmailOctopus
- **Payments:** Stripe, ThriveCart, PayPal

### 3. Set Up Analytics (Optional)

Add tracking code to `<head>` in `index.html`:

**Google Analytics:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Plausible Analytics:**
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

### 4. Add Privacy Policy & Terms

Create `privacy.html` and `terms.html` files, then update footer links in `index.html`.

---

## Customization

### Colors
Edit `styles/main.css`:
- Navy Blue: `#1A1A5E`
- Red CTA: `#CC0000`
- Sky Blue: `#5BC0DE`
- Gold: `#DAA520`

### Fonts
Currently using:
- Headlines: Montserrat (900, 700, 600 weights)
- Body: Open Sans (400, 600 weights)

Change in `index.html` line 9 (Google Fonts link).

### Copy
All copy is in `index.html` - edit directly.

---

## Monthly Updates

### Update "Current Issue" Section

1. Export new magazine cover as `magazine-cover.jpg`
2. Replace in `images/` folder
3. Update issue number and feature bullets in HTML (around line 50)
4. Git commit and push (auto-deploys on Vercel)

**Time:** 5-10 minutes/month

---

## Troubleshooting

### Images not loading?
- Check file paths are correct
- Ensure images are in `images/` folder
- Try clearing browser cache

### Fonts not loading?
- Check Google Fonts link in `<head>`
- Verify font names in CSS match exactly

### Buttons not working?
- Check console for JavaScript errors
- Verify URLs in `scripts/main.js` are correct

---

## Support

Questions? Check the project documentation in `/outputs/` folder.

---

## License

© 2026 Marketing Clues. All rights reserved.
