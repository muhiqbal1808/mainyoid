import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "600", "700"]})

export const metadata = {
  title: 'MainYo Indonesia',
  description: 'MainYo Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
