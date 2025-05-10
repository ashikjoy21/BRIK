/**
 * PageTransition Component
 * 
 * A wrapper component that adds smooth fade and slide animations when pages load.
 * Uses Framer Motion to create consistent entry/exit animations across the site.
 * 
 * Usage example:
 * <PageTransition>
 *   <YourPageContent />
 * </PageTransition>
 */

"use client" // Marks this as a client component for Next.js

import type React from "react"
import { motion } from "framer-motion" // Animation library

/**
 * Props for the PageTransition component
 */
interface PageTransitionProps {
  /** Content to be animated during page transitions */
  children: React.ReactNode
}

/**
 * Wraps page content with smooth transition animations
 * 
 * @param props PageTransitionProps - The children to be animated
 */
export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
