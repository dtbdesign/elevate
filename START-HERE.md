# 🎉 START HERE - Elevate Vape & Market Landing Page

## ⚡ Quick Start (Copy & Paste)

Open your terminal and run these commands:

```bash
cd /Users/dtbdesign/Downloads/elevate
npm install
npm run dev
```

Then open your browser to: **http://localhost:3000**

---

## 🎯 What You Got

A complete, production-ready landing page with:

✅ **Dark luxury design** with animated hex patterns  
✅ **Smooth animations** using Framer Motion  
✅ **Mobile responsive** - works on all devices  
✅ **SEO optimized** with meta tags and Open Graph  
✅ **6 sections**: Hero, Gallery, About, Testimonials, Contact, Footer  
✅ **Interactive effects**: hover states, parallax, glassmorphism  
✅ **Click-to-call** phone integration  
✅ **Google Maps** embed (dark mode styled)  
✅ **Social media** links ready  

---

## 📝 First Steps - Customize Your Site

### 1. Update Business Info (5 minutes)

Open `app/page.tsx` and edit the `SITE_CONFIG` section (starts around line 25):

```typescript
const SITE_CONFIG = {
  businessName: 'Elevate Vape & Market',  // ← Your business name
  tagline: 'Sip. Snack. Smoke. Repeat.',  // ← Your tagline
  phone: '(629) 777-2828',                // ← Your phone number
  phoneRaw: '6297772828',                 // ← Phone without formatting
  location: 'Nashville, TN',              // ← Your city
  address: '123 Broadway, Nashville...',  // ← Full address
  // ... more options below
}
```

### 2. Add Your Photos (2 minutes)

Place these in the `public/` folder:
- `img1.jpg` - Store photo 1
- `img2.jpg` - Store photo 2  
- `img3.jpg` - Store photo 3
- `og-image.jpg` - Social preview image (1200x630px)

### 3. Update Google Maps (3 minutes)

1. Go to [Google Maps](https://google.com/maps)
2. Find your business
3. Click **Share** → **Embed a map**
4. Copy the iframe `src` URL
5. Paste it into `mapEmbedUrl` in `SITE_CONFIG`

### 4. Add Social Links (2 minutes)

In `SITE_CONFIG`, update:
```typescript
socialLinks: {
  instagram: 'https://instagram.com/your_handle',
  google: 'https://g.page/your_business',
  facebook: 'https://facebook.com/your_page'
}
```

### 5. Update Testimonials (5 minutes)

Replace the example reviews in `SITE_CONFIG`:
```typescript
testimonials: [
  {
    name: 'Real Customer Name',
    date: '2 weeks ago',
    rating: 5,
    text: 'Actual customer review text here...'
  },
  // Add 2-3 more real reviews
]
```

---

## 📱 Test It Out

1. **Mobile**: Open DevTools (F12) → Click phone icon → Test different sizes
2. **Links**: Click all buttons to ensure they work
3. **Scroll**: Test smooth scrolling between sections
4. **Hover**: Move mouse over cards and images to see effects

---

## 🚀 Deploy to Production

### Easiest: Vercel (Free)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Done in 2 minutes! ✨

### Alternative: Traditional Hosting
```bash
npm run build
```
Upload the `.next` folder to your hosting provider.

---

## 📁 Project Structure

```
elevate/
├── app/
│   ├── page.tsx          ← Main landing page (EDIT THIS)
│   ├── layout.tsx        ← SEO meta tags
│   └── globals.css       ← Global styles + hex pattern
├── public/               ← PUT YOUR IMAGES HERE
├── package.json          ← Dependencies
├── tailwind.config.js    ← Colors and design tokens
└── README.md            ← Full documentation
```

---

## 🎨 Design Details

**Colors:**
- Background: Dark gradient (#0a0a0a → #141414)
- Accent: Electric cyan (#00e6ff)
- Glass cards with blur effect

**Fonts:**
- Montserrat Bold (headings)
- Inter Medium (body text)

**Animations:**
- Parallax hero background
- Fade-in on scroll
- Hover zoom effects
- Smooth transitions

---

## 🆘 Troubleshooting

**"Command not found: npm"**  
→ Install Node.js from [nodejs.org](https://nodejs.org)

**"Port 3000 already in use"**  
→ Run: `npm run dev -- -p 3001`

**"Module not found" errors**  
→ Delete `node_modules` and run `npm install` again

**Images not showing**  
→ Make sure they're in `/public` folder with exact names

---

## 📚 More Help

- **SETUP.md** - Detailed customization guide
- **FEATURES.md** - Complete feature breakdown
- **README.md** - Technical documentation

---

## ✅ Launch Checklist

Before going live:
- [ ] Updated all text in SITE_CONFIG
- [ ] Added real store photos
- [ ] Verified phone number works
- [ ] Tested Google Maps embed
- [ ] Updated social media links
- [ ] Added real testimonials
- [ ] Tested on mobile device
- [ ] Checked all links work
- [ ] Added favicon (optional)
- [ ] Set up analytics (optional)

---

## 🎉 You're All Set!

Your landing page is modern, professional, and ready to attract customers.

**Need changes?** Everything is easily customizable through the `SITE_CONFIG` object.

**Questions?** Check the README.md or SETUP.md files.

---

**Built with Next.js, Tailwind CSS, and Framer Motion** 🚀
**© 2025 Elevate Vape & Market**

