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
  title: "Join the Waitlist | World's First Psyop-Free TI Economy",
  description:
    "Be part of a $300B survivor-led economy uniting 5 million people. Limited early access to training, gigs, and ServiceCredits. Join the waitlist now.",
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-dark-32x32.png', type: 'image/png', sizes: '32x32', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // The next/font variables are set on <html> rather than <body> so that the
    // :root theme variables in app/globals.css can resolve them.
    <html lang="en" className={`dark ${bangers.variable} ${inter.variable}`}>
      <body className="antialiased">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}
