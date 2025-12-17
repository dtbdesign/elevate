import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://elevatevapenashville.com'),
  title: {
    default: 'Elevate Vape & Market | Nashville Smoke Shop & Convenience Store',
    template: '%s | Elevate Vape & Market'
  },
  description: 'Elevate Vape & Market is your premier vape shop and convenience store in Nashville, TN. We offer top-quality vapes, tobacco products, beer, snacks, drinks, and everyday essentials. Visit us at 2037 Jefferson St, Nashville, TN. Open daily with friendly service.',
  keywords: [
    'vape shop Nashville',
    'smoke shop Nashville',
    'convenience store Nashville',
    'vape store Tennessee',
    'tobacco products Nashville',
    'beer store Nashville',
    'snacks Nashville',
    'drinks Nashville',
    'Elevate Vape & Market',
    'Nashville vape shop',
    'Jefferson Street vape shop',
    'Nashville convenience store'
  ],
  authors: [{ name: 'Elevate Vape & Market' }],
  creator: 'Elevate Vape & Market',
  publisher: 'Elevate Vape & Market',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://elevatevapenashville.com',
    siteName: 'Elevate Vape & Market',
    title: 'Elevate Vape & Market | Nashville Smoke Shop & Convenience Store',
    description: 'Sip. Snack. Smoke. Repeat. Your premium vape and convenience store in Nashville, TN. Top-quality vapes, tobacco, beer, snacks, and daily essentials.',
    images: [
      {
        url: '/Icon.png',
        width: 512,
        height: 512,
        alt: 'Elevate Vape & Market Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elevate Vape & Market | Nashville Smoke Shop',
    description: 'Sip. Snack. Smoke. Repeat. Your premium vape and convenience store in Nashville, TN.',
    images: ['/Icon.png'],
  },
  icons: {
    icon: [
      { url: '/Icon.png', sizes: 'any' },
      { url: '/Icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/Icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/Icon.png',
  },
  alternates: {
    canonical: 'https://elevatevapenashville.com',
  },
  category: 'Retail',
  classification: 'Vape Shop, Convenience Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="/Icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Icon.png" />
        <link rel="canonical" href="https://elevatevapenashville.com" />
        <meta name="geo.region" content="US-TN" />
        <meta name="geo.placename" content="Nashville" />
        <meta name="geo.position" content="36.1685137;-86.8119678" />
        <meta name="ICBM" content="36.1685137, -86.8119678" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              "name": "Elevate Vape & Market",
              "image": "https://elevatevapenashville.com/Icon.png",
              "description": "Premier vape shop and convenience store in Nashville, TN offering top-quality vapes, tobacco products, beer, snacks, and daily essentials.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2037 Jefferson St",
                "addressLocality": "Nashville",
                "addressRegion": "TN",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 36.1685137,
                "longitude": -86.8119678
              },
              "url": "https://elevatevapenashville.com",
              "telephone": "+16297772828",
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.google.com/maps/place/Elevate+Vape+%26+Market"
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

