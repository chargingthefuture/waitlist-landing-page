import type React from "react"
import type { Metadata } from "next"
import { Bangers, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ErrorBoundary } from "@/components/error-boundary"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Skills Economy is paused — join the waitlist",
  description:
    "Skills Economy is between cycles and switched off right now. Leave your email on the waitlist and you get one message the day it is back.",
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-dark-32x32.png', type: 'image/png', sizes: '32x32', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${bangers.variable} ${inter.variable} antialiased`}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}
