import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <div className="h-[36vw] overflow-hidden">
            <Image alt='banner' src='/banner.jpeg' className='w-full' width='1280' height='1280'></Image>
        </div>
        <div className="container mx-auto mb-20">
          {children}
        </div>
    </div>
    
  )
}