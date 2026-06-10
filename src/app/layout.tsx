import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import { AuthProvider } from '@/context/AuthContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/shop/CartDrawer'

export const metadata: Metadata = {
  title: {
    default: 'MindShant — Less Screen. More Life.',
    template: '%s | MindShant',
  },
  description: 'MindShant offers mindful DIY kits and creative activities to help children and adults develop healthier digital habits. Mind + Shant — Peaceful Mind.',
  keywords: ['MindShant','screen time reduction','mindful crafts','DIY kits','digital detox','mindfulness','family craft kits'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://jyoti2823.github.io/mindshant/',
    siteName: 'MindShant',
    title: 'MindShant — Less Screen. More Life.',
    description: 'Mindful DIY kits and wellness activities to help children and adults develop healthier digital habits.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Google Fonts — loaded asynchronously for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <CartDrawer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
