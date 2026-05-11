import type { Metadata } from 'next'
import { Lora, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const lora = Lora({ 
  subsets: ["latin"],
  variable: '--font-lora',
  display: 'swap',
})

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Golden Hive Honey | Premium Raw & Natural Honey',
  description: 'Discover pure, raw honey straight from our beekeeping farms. 100% natural, artisan-crafted honey products.',
  keywords: 'honey, raw honey, natural honey, beekeeping, organic honey, golden hive',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${spaceMono.variable} bg-[#0a0a0a]`}>
      <body className="font-sans antialiased bg-[#0a0a0a] text-[#f5f0e6]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
