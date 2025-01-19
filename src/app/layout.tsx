import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Justice AI - Empowering Fairness Through AI and Blockchain',
  description: 'Justice AI is a paradigm shift in legal technology, ensuring fairness, transparency, and decentralized legal intelligence through AI and blockchain.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

