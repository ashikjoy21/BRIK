"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function InvestorGrid() {
  const investors = [
    { name: "Sequoia", logo: "/placeholder.svg?height=100&width=200" },
    { name: "OpenAI", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Founders Fund", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Andreessen Horowitz", logo: "/placeholder.svg?height=100&width=200" },
    { name: "General Catalyst", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Khosla Ventures", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Sam Altman", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Dylan Field", logo: "/placeholder.svg?height=100&width=200" },
    { name: "SignalFire", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Naval Ravikant", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Thiel", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Balaji Srinivasan", logo: "/placeholder.svg?height=100&width=200" },
  ]

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 gap-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {investors.map((investor, index) => (
        <motion.div
          key={index}
          className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-32 hover:shadow-md transition-all duration-300"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={investor.logo || "/placeholder.svg"}
            alt={investor.name}
            width={150}
            height={60}
            className="max-h-12 w-auto"
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
