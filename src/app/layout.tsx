import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/layout/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wingman Dashboard',
  description: 'Sales and consultation analytics dashboard for Wingman shopping assistance platform',
  keywords: ['dashboard', 'sales', 'analytics', 'shopping', 'consultation'],
  authors: [{ name: 'Wingman' }],
  robots: 'index, follow',
  icons: {
    icon: '/wings.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-[#212636]`} suppressHydrationWarning={true}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-8">{children}</main>
        </div>
      </body>
    </html>
  )
}