/**
 * Root Layout Component
 * 
 * This is the main layout wrapper that applies to all pages in the BRIK website.
 * It handles global styles, fonts, theme settings, and animation context.
 */

import type React from "react" // React types
import type { Metadata } from "next" // Next.js metadata types
import { Inter } from "next/font/google" // Google font integration
import "./globals.css" // Global CSS styles
import { ThemeProvider } from "@/components/theme-provider" // Theme context provider
import AnimationProvider from "@/components/animation-provider" // Animation context provider

// Initialize the Inter font with Latin character subset
const inter = Inter({ subsets: ["latin"] })

/**
 * Site metadata for SEO and browser display
 */
export const metadata: Metadata = {
  title: "BRIK - Your Fast-Track Into Silicon Valley",
  description: "BRIK connects really early builders with multi billion dollar founders.",
  generator: 'v0.dev'
}

/**
 * Root layout component that wraps all pages
 * Provides theme support, animation context, and global styles
 * 
 * @param props.children - The page content to be wrapped
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light">
          <AnimationProvider>{children}</AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
