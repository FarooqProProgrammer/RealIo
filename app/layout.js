import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RealIo',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="title" content="Your Real Estate Website" />
        <meta
          name="description"
          content="Explore a wide range of real estate properties."
        />
        <meta
          name="keywords"
          content="real estate, properties, homes, apartments, listings"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
