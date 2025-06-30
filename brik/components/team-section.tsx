"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function TeamSection() {
  // Team members data - featuring Indian professionals
  const allTeamMembers = [
    {
      name: "Ashik Joy",
      role: "Co-Founder & CEO",
      image: "/images/team/ashik-joy.jpg",
    },
    {
      name: "Diaz Jensen",
      role: "Co-Founder ",
      image: "/images/team/diaz-jensen.jpg",
    },
    {
      name: "Sarangi",
      role: "Lead",
      image: "/images/team/sarangi.jpg",
    },
    {
      name: "Parvathy V Nair",
      role: "Lead",
      image: "/images/team/parvathy-v-nair.png",
    },
    {
      name: "Fahma Fathima",
      role: "Lead",
      image: "/images/team/fahma-fathima.png",
    },
    {
      name: "Abhishikth S Mattam",
      role: "Creative Team",
      image: "/images/team/abhishikth-s-mattom.jpg",
    },
    {
      name: "Devamanas S",
      role: "Creative Team",
      image: "/images/team/devmanas.jpg",
    },
    {
      name: "Gautham Girish Nair",
      role: "Creative Team",
      image: "/images/team/gautham-girish-nair.jpg",
    },
    {
      name: "Aswin P Nair",
      role: "Web Master",
      image: "/images/team/aswin-p-nair.jpg",
    },
  ]

  // Initial number of team members to display and increment amount
  const initialDisplay = 8
  const loadMoreIncrement = 4

  // State to track how many team members are currently displayed
  const [displayCount, setDisplayCount] = useState(initialDisplay)
  const [isLoading, setIsLoading] = useState(false)

  // Get current team members to display
  const displayedMembers = allTeamMembers.slice(0, displayCount)

  // Function to load more team members
  const handleLoadMore = () => {
    setIsLoading(true)
    // Simulate loading delay
    setTimeout(() => {
      setDisplayCount((prev) => Math.min(prev + loadMoreIncrement, allTeamMembers.length))
      setIsLoading(false)
    }, 600)
  }

  // Check if all team members are displayed
  const allMembersLoaded = displayCount >= allTeamMembers.length

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    whileTap: { scale: 0.95 },
  }

  return (
    <div className="relative">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {displayedMembers.map((member, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index > displayCount - loadMoreIncrement - 1 ? (index % loadMoreIncrement) * 0.1 : 0,
              }}
            >
              <motion.div
                className="relative aspect-square mb-4 overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={member.image || "/images/team/default.jpg"}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading={index < 4 ? "eager" : "lazy"}
                  priority={index < 4}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJc0gWN4wAAAABJRU5ErkJggg=="
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
              <h3 className="text-xl font-bold text-blue-500">{member.name}</h3>
              <p className="text-gray-700">{member.role}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Load More button */}
      {!allMembersLoaded && (
        <motion.div
          className="flex justify-center mt-12"
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <Button
            onClick={handleLoadMore}
            className="px-8 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading...
              </span>
            ) : (
              "Load More"
            )}
          </Button>
        </motion.div>
      )}
    </div>
  )
}
