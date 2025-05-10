/**
 * Theme Provider Component
 * 
 * Handles theming functionality for the BRIK website.
 * Manages theme state and prevents hydration mismatches between server and client.
 * Uses next-themes library for theme management.
 */

'use client' // Marks this as a client component for Next.js

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes' // Theme management library

/**
 * ThemeProvider wraps the application to provide theme context
 * Implements a mounting check to prevent hydration mismatches
 * 
 * @param props - Theme provider props including children and theme settings
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  // Ensure the component only renders on the client to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder with the same structure but no theme-specific attributes
    return <div style={{ visibility: 'hidden' }}>{children}</div>
  }

  return (
    <NextThemesProvider {...props} enableSystem={true} enableColorScheme={true}>
      {children}
    </NextThemesProvider>
  )
}
