/**
 * AnimatedText Component
 * 
 * A text animation component that reveals text word by word or character by character.
 * Uses Framer Motion for smooth staggered animations with configurable timing and spacing.
 * 
 * Usage example:
 * <AnimatedText 
 *   text="This text will animate" 
 *   type="words" 
 *   wordSpacing="normal" 
 * />
 */

"use client" // Marks this as a client component for Next.js

import { motion } from "framer-motion" // Animation library

/**
 * Props for the AnimatedText component
 */
interface AnimatedTextProps {
  /** The text content to animate */
  text: string
  /** Optional CSS classes */
  className?: string
  /** Delay before animation starts (in seconds) */
  delay?: number
  /** Time between each child animation (in seconds) */
  staggerChildren?: number
  /** Whether animation should only play once */
  once?: boolean
  /** Whether to animate by words or individual characters */
  type?: "words" | "chars"
  /** Controls spacing between animated words */
  wordSpacing?: "normal" | "wide" | "wider"
}

/**
 * Renders text with staggered animation effects
 * 
 * @param props AnimatedTextProps - Configuration for the text animation behavior
 */
export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  staggerChildren = 0.02,
  once = true,
  type = "words",
  wordSpacing = "normal",
}: AnimatedTextProps) {
  // Split the input text into individual animatable units (words or characters)
  const items = type === "words" ? text.split(" ") : text.split("")

  /**
   * Determines the appropriate spacing class based on the wordSpacing prop
   * @returns CSS class string for word spacing
   */
  const getSpacingClass = () => {
    if (type !== "words") return ""
    switch (wordSpacing) {
      case "wide":
        return "mr-2"
      case "wider":
        return "mr-3"
      case "normal":
      default:
        return "mr-[0.25em]"
    }
  }

  const spacingClass = getSpacingClass()

  // Define parent container and child element animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delay,
      },
    }),
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-block">
        {items.map((item, index) => (
          <motion.span
            key={index}
            variants={child}
            className={`inline-block ${index !== items.length - 1 ? spacingClass : ""}`}
          >
            {item}
          </motion.span>
        ))}
      </span>
    </motion.div>
  )
}
