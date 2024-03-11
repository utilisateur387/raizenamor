import type { Metadata } from 'next'
import '@styles/globals.scss'
import Navbar from '@/components/Navbar'
import { IBM_Plex_Mono  } from 'next/font/google'
import Footer from '@/components/Footer'

const ibm = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: '400'
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
    <html lang="en">
      <body className={ibm.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
