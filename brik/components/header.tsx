/**
 * Header Component
 * 
 * The site navigation header with responsive design for desktop and mobile views.
 * Features animated navigation items, logo, and a mobile menu.
 * Uses Framer Motion for smooth animations and transitions.
 */

"use client" // Marks this as a client component for Next.js

import { useState } from "react" // For managing mobile menu state
import Link from "next/link" // For internal navigation
import { Button } from "@/components/ui/button" // UI button component
import { Menu, X } from "lucide-react" // Menu icons
import { usePathname } from "next/navigation" // For determining active page
import { motion } from "framer-motion" // Animation library
import InviteButton from "@/components/invite-button" // Custom invite button component

/**
 * Responsive header component for site navigation
 * 
 * Includes animated navigation items, logo and mobile menu toggle
 * @returns Header component with desktop and mobile navigation options
 */
export default function Header() {
  const navItems = [
    { href: "/#about", label: "About" },
    { href: "/mentors", label: "Mentors" },
    { href: "/team", label: "Our Team" },
    { href: "/#faqs", label: "FAQs" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  /**
   * Determines if a navigation link is for the current page
   * @param path - URL path to check against current location
   * @returns CSS class string for active/inactive styling
   */
  const isActive = (path: string) => {
    return pathname === path ? "text-blue-500" : "text-gray-700 hover:text-blue-500"
  }

  // Animation variants for navigation items with staggered reveal
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  // Animation variants for the logo
  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  }

  // Animation variants for the CTA button
  const buttonVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  }

  return (
    <header className="border-b sticky top-0 bg-white/70 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div variants={logoVariants} initial="initial" animate="animate" whileHover="whileHover">
            <Link href="/" className="text-2xl font-bold text-blue-500">
              BRIK
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
              >
                <Link href={item.href} className={isActive(item.href)}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            className="hidden md:block"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
          >
            <InviteButton className="rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300" />
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden p-4 border-t"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-4 items-center">
            <Link
              href="/#about"
              className="text-gray-700 hover:text-blue-500 py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/mentors"
              className="text-gray-700 hover:text-blue-500 py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Mentors
            </Link>
            <Link
              href="/team"
              className="text-gray-700 hover:text-blue-500 py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link
              href="/#faqs"
              className="text-gray-700 hover:text-blue-500 py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
             {/* <button
            //   className="rounded-full bg-blue-500 hover:bg-blue-600 p-2 w-full transition-colors duration-300"
            //   onClick={() => setIsMenuOpen(false)}
            // >
            //   Request Invite
            // </button> */}
            <div onClick={() => setIsMenuOpen(false)}>
              <InviteButton className="rounded-full bg-blue-500 hover:bg-blue-600 w-full transition-colors duration-300" />
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  )
}
