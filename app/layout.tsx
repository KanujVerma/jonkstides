import type { Metadata } from 'next'
import './globals.css'
import { inter } from './fonts'
import { CartProvider } from '@/components/cart/CartContext'
import LenisProvider from '@/components/shared/LenisProvider'
import DisclaimerGate from '@/components/disclaimer/DisclaimerGate'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import PageTransition from '@/components/shared/PageTransition'
export const metadata: Metadata = {
  title: 'Jonkstides — Research Peptides',
  description: 'Your trusted source for research-grade peptides. Trusted. Tested. Affordable.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <CartProvider>
          <LenisProvider>
            <DisclaimerGate />
            <Header />
            <main>
              <PageTransition>{children}</PageTransition>
            </main>
            <CartDrawer />
            <Footer />
          </LenisProvider>
        </CartProvider>
      </body>
    </html>
  )
}
