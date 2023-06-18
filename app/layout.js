import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Max Shen',
  description: 'Max Shen is a 3d generative artist based in Taiwan creating arts on the web with three.js and glsl.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row justify-between pl-10 h-16">
          <Link href="/" className="flex flex-col text-xl font-bold justify-center">Max Shen</Link>
          <nav className="flex flex-row">
            <Link href="/" className="flex flex-col justify-center px-5 font-semibold transition-colors">About</Link>
            <Link href="/" className="flex flex-col justify-center px-5 font-semibold transition-colors">Artworks</Link>
            <Link href="/" className="flex flex-col justify-center px-5 font-semibold transition-colors">Contact</Link>
          </nav>
        </div>
        {children}
      </body>
    </html>
  )
}
