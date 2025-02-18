import type { Metadata } from 'next'
import '@styles/globals.scss'
import { IBM_Plex_Mono  } from 'next/font/google'
import Footer from '@/components/Footer'
import localFont from '@next/font/local'
import NavbarDesktop from '@/components/NavbarDesktop'
import NavbarMobile from '@/components/NavbarMobile'

const ibm = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: '400'
})

const gtSuper = localFont({
  src: '../../styles/fonts/GTSuperDs-Lt.ttf',
  variable: '--font-gt'
})

const gtCinetype = localFont({
  src: '../../styles/fonts/GT-Cinetype-Regular.ttf',
  variable: '--font-gt-cinetype'
})

const reckless = localFont({
  src: '../../styles/fonts/RecklessNeue-Book.ttf',
  variable: '--font-reckless'
})

export const metadata: Metadata = {
  title: 'Raiz en Amor',
  description: 'Reiki practitioner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" id='root'>
      <body className={`${reckless.variable} ${gtCinetype.variable} flex flex-col min-h-screen`}>
      {/* <body className={`${ibm.className} ${gtCinetype.variable}`}> */}
        <NavbarDesktop />
        <NavbarMobile />
        {children}
        <Footer />
      </body>
    </html>
  )
}
