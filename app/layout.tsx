import type { Metadata } from 'next'
import { Cormorant_Garamond, Archivo } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-cormorant',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://manfrd.vercel.app'),
  title: 'MANFRD',
  description: 'Cinematographer · Composer · Choreographer',
  icons: {
    icon: '/Manfrd Logo_Mark_White_HR.png',
  },
  openGraph: {
    title: 'MANFRD',
    description: 'Cinematographer · Composer · Choreographer',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MANFRD',
    description: 'Cinematographer · Composer · Choreographer',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  )
}
