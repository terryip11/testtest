// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '圖片收集站',
  description: '掃描QR碼收集圖片，集滿8張即可獲得驚喜合成圖片！',
  manifest: '/manifest.json',
  themeColor: '#a777e3',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '圖片收集站',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="icon" href="/icons/android/android-launchericon-192-192.png" />
        <link rel="apple-touch-icon" href="/icons/android/android-launchericon-192-192.png" />
        <meta name="theme-color" content="#a777e3" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}