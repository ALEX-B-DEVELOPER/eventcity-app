import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EVENTCITY',
  description: 'Esta es una aplicacion de eventos y venta de tickets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
