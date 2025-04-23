// app/layout.tsx (or layout.jsx if JS)

import './globals.css'
import Navbar from '@/components/ui/layout/Navbar'
import Footer from '@/components/ui/layout/Footer'

export const metadata = {
  title: 'Peyton Salvant | Portfolio',
  description: 'AI Engineer | Full-stack Dev',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0e0e0e] text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
