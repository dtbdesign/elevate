import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4aa2b6',
}

export const metadata: Metadata = {
  title: 'Elevate Vape & Market | Nashville Smoke Shop',
  description: 'Your one-stop shop for vapes, drinks, and snacks in Nashville, TN. Modern design meets classic convenience.',
  keywords: 'vape shop, smoke shop, Nashville, drinks, snacks, convenience store',
  openGraph: {
    title: 'Elevate Vape & Market | Nashville Smoke Shop',
    description: 'Sip. Snack. Smoke. Repeat. Your premium vape and convenience store in Nashville.',
    url: 'https://elevatevapenashville.com',
    siteName: 'Elevate Vape & Market',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elevate Vape & Market | Nashville Smoke Shop',
    description: 'Sip. Snack. Smoke. Repeat. Your premium vape and convenience store in Nashville.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

