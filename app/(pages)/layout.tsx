import PKABanner from 'app/_components/banner/banner'
import Header from 'app/_layout/header/header'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <PKABanner />
      <div className="container mx-auto mb-20">
        {children}
      </div>
    </>
  )
}