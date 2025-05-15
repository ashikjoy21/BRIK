"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function InvestorGrid() {
  // List of prominent Indian investors, VCs, and startups
  // const investors = [
  //   { name: "Talrop", logo: "/images/investors/talrop.png" },
  // ]

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
      {/* {investors.map((investor, index) => (
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
            src={investor.logo || "/images/investors/default.png"}
            alt={investor.name}
            width={150}
            height={60}
            loading={index < 6 ? "eager" : "lazy"}
            priority={index < 6}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJc0gWN4wAAAABJRU5ErkJggg=="
            className="max-h-12 w-auto"
          />
        </motion.div>
      ))} */}
    </motion.div>
  )
}
