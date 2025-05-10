/**
 * AnimatedSection Component
 * 
 * A reusable component that animates its children when they enter the viewport.
 * Uses Framer Motion for smooth animations and supports different animation directions.
 * 
 * Usage example:
 * <AnimatedSection direction="up" delay={0.2}>
 *   <YourContent />
 * </AnimatedSection>
 */

"use client" // Marks this as a client component for Next.js

import type React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion" // Animation library

/**
 * Props for the AnimatedSection component
 */
interface AnimatedSectionProps {
  /** Content to be animated */
  children: React.ReactNode
  /** Optional CSS classes */
  className?: string
  /** Delay before animation starts (in seconds) */
  delay?: number
  /** Direction from which the animation enters */
  direction?: "up" | "down" | "left" | "right"
  /** Distance (in pixels) for the animation to travel */
  distance?: number
  /** Whether animation should only play once */
  once?: boolean
}

/**
 * A section wrapper that animates its children when scrolled into view
 * 
 * @param props AnimatedSectionProps - Configuration for the animation behavior
 */
export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 40,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px 0px" })

  /**
   * Determines the initial offset based on the animation direction
   * @returns Object with x/y offset values
   */
  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance }
      case "down":
        return { y: -distance }
      case "left":
        return { x: distance }
      case "right":
        return { x: -distance }
      default:
        return { y: distance }
    }
  }

  // Define animation states and transitions
  const variants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1.2,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
