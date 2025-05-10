"use client"

import Link from "next/link"
import { Twitter, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.2,
      transition: { duration: 0.2 },
    },
  }

  return (
    <motion.footer
      className="border-t py-12"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px 0px" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div className="mb-6 md:mb-0" variants={itemVariants}>
            <Link
              href="/"
              className="text-4xl md:text-5xl font-bold text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              BRIK
            </Link>
          </motion.div>

          <motion.nav
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0 text-center md:text-left"
            variants={itemVariants}
          >
            {[
              { href: "/#about", label: "About" },
              { href: "/mentors", label: "Mentors" },
              { href: "/#faqs", label: "FAQs" },
              { href: "/team", label: "Our Team" },
            ].map((item) => (
              <motion.div key={item.href} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Link href={item.href} className="text-gray-700 hover:text-blue-500 transition-colors duration-300">
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <motion.div className="flex space-x-4" variants={itemVariants}>
            <motion.div variants={socialVariants} whileHover="hover">
              <Link
                href="https://twitter.com"
                className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
              >
                <Twitter />
                <span className="sr-only">Twitter</span>
              </Link>
            </motion.div>
            <motion.div variants={socialVariants} whileHover="hover">
              <Link
                href="https://linkedin.com"
                className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
              >
                <Linkedin />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div className="mt-8 text-center text-gray-500 text-sm" variants={itemVariants}>
          <p>© {new Date().getFullYear()} BRIK. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
