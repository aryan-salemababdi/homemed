import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import Address from '@/components/layout/Address/Address'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'طب فردا',
  description: 'medical web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>
        <header>
          <Header>{children}</Header>
        </header>
        {children}
        <address>
          <Address />
        </address>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
