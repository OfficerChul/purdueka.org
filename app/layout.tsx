import './globals.css'
import Header from './_layout/header/header'
import Footer from './_layout/footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="container mx-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
