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

export const metadata: Metadata = {
  title: 'RAIZ EN AMOR',
  description: 'Reiki practitioner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" id='root'>
      <body className={`${ibm.className} ${gtSuper.variable}`}>
        <NavbarDesktop />
        <NavbarMobile />
        {children}
        <Footer />
      </body>
    </html>
  )
}
