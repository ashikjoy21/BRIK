"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function InvestorGrid() {
  // List of prominent Indian investors, VCs, and startups
  const investors = [
    { name: "Sequoia India", logo: "/images/investors/sequoia-india.png" },
    { name: "Blume Ventures", logo: "/images/investors/blume.png" },
    { name: "Accel India", logo: "/images/investors/accel-india.png" },
    { name: "Nexus Venture Partners", logo: "/images/investors/nexus.png" },
    { name: "Chiratae Ventures", logo: "/images/investors/chiratae.png" },
    { name: "BYJU'S", logo: "/images/investors/byjus.png" },
    { name: "Infosys", logo: "/images/investors/infosys.png" },
    { name: "TCS", logo: "/images/investors/tcs.png" },
    { name: "Flipkart", logo: "/images/investors/flipkart.png" },
    { name: "Zerodha", logo: "/images/investors/zerodha.png" },
    { name: "Zomato", logo: "/images/investors/zomato.png" },
    { name: "Paytm", logo: "/images/investors/paytm.png" },
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
            src={investor.logo || "/images/investors/default.png"}
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
