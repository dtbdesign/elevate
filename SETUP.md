# 🚀 Setup Guide - Elevate Vape & Market

## Quick Setup (3 Steps)

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Start Development Server
```bash
npm run dev
```

### 3️⃣ Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🎨 Customization Guide

### Update Business Information

Open `app/page.tsx` and find the `SITE_CONFIG` object at the top (around line 25):

```typescript
const SITE_CONFIG = {
  businessName: 'Elevate Vape & Market',
  tagline: 'Sip. Snack. Smoke. Repeat.',
  phone: '(629) 777-2828',           // ← Change this
  phoneRaw: '6297772828',            // ← Change this (no special chars)
  location: 'Nashville, TN',         // ← Change this
  address: '123 Broadway, Nashville, TN 37203',  // ← Change this
  // ... more options below
}
```

### Update Google Maps

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business address
3. Click **Share** → **Embed a map**
4. Copy the `src` URL from the iframe code
5. Replace the `mapEmbedUrl` value in `SITE_CONFIG`

### Add Your Images

Place these images in the `/public` folder:
- **img1.jpg** - Store interior or exterior photo
- **img2.jpg** - Product display or storefront
- **img3.jpg** - Another store photo
- **og-image.jpg** - Social media preview (1200x630px recommended)

### Update Social Media Links

In `SITE_CONFIG`, update:
```typescript
socialLinks: {
  instagram: 'https://instagram.com/your_handle',
  google: 'https://g.page/your_business',
  facebook: 'https://facebook.com/your_page'
}
```

### Update Testimonials

In `SITE_CONFIG`, modify the `testimonials` array:
```typescript
testimonials: [
  {
    name: 'Customer Name',
    date: '1 week ago',
    rating: 5,
    text: 'Your review text here...'
  },
  // Add more testimonials...
]
```

---

## 🎯 SEO Setup

### Update Meta Tags

Open `app/layout.tsx` and update the metadata:

```typescript
export const metadata: Metadata = {
  title: 'Your Business Name',
  description: 'Your business description',
  // ... more options
}
```

---

## 🌈 Design Customization

### Change Colors

Open `tailwind.config.js` and modify the colors:

```javascript
colors: {
  'electric-cyan': '#00e6ff',  // ← Accent color
  'dark-bg': '#0a0a0a',        // ← Background start
  'dark-bg-secondary': '#141414', // ← Background end
}
```

### Change Fonts

In `app/globals.css`, update the Google Fonts import:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@700&display=swap');
```

Then update `tailwind.config.js`:

```javascript
fontFamily: {
  'montserrat': ['YourFont', 'sans-serif'],
}
```

---

## 📱 Testing Mobile Responsiveness

1. Open browser DevTools (F12)
2. Click the mobile device icon
3. Test different screen sizes
4. Adjust breakpoints in code if needed

---

## 🚀 Deploy to Production

### Option 1: Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Option 2: Build Manually
```bash
npm run build
npm start
```

Then deploy the `.next` folder to your hosting provider.

---

## 🐛 Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Images not showing
- Make sure images are in `/public` folder
- Check image filenames match exactly (case-sensitive)
- Use `.jpg`, `.png`, or `.webp` formats

---

## 📞 Need Help?

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review [Tailwind CSS Docs](https://tailwindcss.com/docs)
- Explore [Framer Motion Docs](https://www.framer.com/motion/)

---

**Built with ❤️ for Elevate Vape & Market**

