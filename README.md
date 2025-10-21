# Elevate Vape & Market - Landing Page

A modern, dark-themed landing page for Elevate Vape & Market in Nashville, TN. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Design Features

- **Dark luxury aesthetic** with gradient backgrounds (#0a0a0a to #141414)
- **Animated hex pattern** overlay for visual interest
- **Glassmorphism effects** on cards and UI elements
- **Electric cyan accent color** (#00e6ff) for buttons and highlights
- **Smooth scroll animations** using Framer Motion
- **Parallax effects** on hero section
- **Mobile-responsive** design
- **Modern font pairing**: Montserrat Bold + Inter Medium

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

All site content can be easily edited in the `SITE_CONFIG` constant at the top of `app/page.tsx`:

```typescript
const SITE_CONFIG = {
  businessName: 'Elevate Vape & Market',
  tagline: 'Sip. Snack. Smoke. Repeat.',
  phone: '(629) 777-2828',
  location: 'Nashville, TN',
  address: '123 Broadway, Nashville, TN 37203',
  // ... more config options
}
```

## 📷 Adding Images

Replace placeholder images in the `/public` folder:
- `img1.jpg` - Store interior image 1
- `img2.jpg` - Store interior image 2
- `img3.jpg` - Store interior image 3
- `og-image.jpg` - Social media preview image (1200x630px recommended)

## 🗺️ Google Maps Setup

Update the `mapEmbedUrl` in `SITE_CONFIG` with your actual Google Maps embed URL:

1. Go to [Google Maps](https://maps.google.com)
2. Search for your business address
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Paste it into the `mapEmbedUrl` field

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

Deploy easily to Vercel:

```bash
npm i -g vercel
vercel
```

Or deploy to any hosting platform that supports Next.js.

## 📱 Sections Included

1. **Hero Section** - Animated hero with call-to-action
2. **Gallery** - Store image showcase with hover effects
3. **About/Services** - Business description with service icons
4. **Testimonials** - Customer reviews in card format
5. **Contact** - Google Maps + contact info + social links
6. **Footer** - Copyright and navigation links

## 🎯 SEO Optimized

Includes:
- Meta tags for SEO
- Open Graph tags for social sharing
- Twitter Card support
- Semantic HTML structure

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Icons** - Icon library

## 📄 License

© 2025 Elevate Vape & Market. All rights reserved.

