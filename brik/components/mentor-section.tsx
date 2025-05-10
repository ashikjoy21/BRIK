"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function MentorSection() {
  // All mentors data - featuring prominent Indian entrepreneurs and business leaders
  const allMentors = [
    {
      name: "Ratan Tata",
      role: "Former Chairman of Tata Sons",
      image: "/images/mentors/ratan-tata.jpg",
    },
    {
      name: "Narayan Murthy",
      role: "Co-founder of Infosys",
      image: "/images/mentors/narayan-murthy.jpg",
    },
    {
      name: "Kiran Mazumdar-Shaw",
      role: "Founder of Biocon",
      image: "/images/mentors/kiran-mazumdar.jpg",
    },
    {
      name: "Kunal Shah",
      role: "Founder of CRED",
      image: "/images/mentors/kunal-shah.jpg",
    },
    {
      name: "Vijay Shekhar Sharma",
      role: "Founder of Paytm",
      image: "/images/mentors/vijay-sharma.jpg",
    },
    {
      name: "Bhavish Aggarwal",
      role: "Co-founder of Ola",
      image: "/images/mentors/bhavish-aggarwal.jpg",
    },
    {
      name: "Deepinder Goyal",
      role: "Founder of Zomato",
      image: "/images/mentors/deepinder-goyal.jpg",
    },
    {
      name: "Nithin Kamath",
      role: "Founder of Zerodha",
      image: "/images/mentors/nithin-kamath.jpg",
    },
    {
      name: "Byju Raveendran",
      role: "Founder of BYJU'S",
      image: "/images/mentors/byju-raveendran.jpg",
    },
    {
      name: "Falguni Nayar",
      role: "Founder of Nykaa",
      image: "/images/mentors/falguni-nayar.jpg",
    },
    {
      name: "Harsh Mariwala",
      role: "Chairman of Marico",
      image: "/images/mentors/harsh-mariwala.jpg",
    },
    {
      name: "Ritesh Agarwal",
      role: "Founder of OYO Rooms",
      image: "/images/mentors/ritesh-agarwal.jpg",
    },
    {
      name: "Sachin Bansal",
      role: "Co-founder of Flipkart",
      image: "/images/mentors/sachin-bansal.jpg",
    },
    {
      name: "Nandan Nilekani",
      role: "Co-founder of Infosys, Aadhaar architect",
      image: "/images/mentors/nandan-nilekani.jpg",
    },
    {
      name: "Azim Premji",
      role: "Chairman of Wipro",
      image: "/images/mentors/azim-premji.jpg",
    },
    {
      name: "Anu Aga",
      role: "Former Chairperson of Thermax",
      image: "/images/mentors/anu-aga.jpg",
    },
  ]

  // Initial number of mentors to display and increment amount
  const initialDisplay = 8
  const loadMoreIncrement = 8

  // State to track how many mentors are currently displayed
  const [displayCount, setDisplayCount] = useState(initialDisplay)
  const [isLoading, setIsLoading] = useState(false)

  // Get current mentors to display
  const displayedMentors = allMentors.slice(0, displayCount)

  // Function to load more mentors
  const handleLoadMore = () => {
    setIsLoading(true)
    // Simulate loading delay
    setTimeout(() => {
      setDisplayCount((prev) => Math.min(prev + loadMoreIncrement, allMentors.length))
      setIsLoading(false)
    }, 600)
  }

  // Check if all mentors are displayed
  const allMentorsLoaded = displayCount >= allMentors.length

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
          {displayedMentors.map((mentor, index) => (
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
                  src={mentor.image || "/images/mentors/default.jpg"}
                  alt={mentor.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
              <h3 className="text-xl font-bold text-blue-500">{mentor.name}</h3>
              <p className="text-gray-700">{mentor.role}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Load More button */}
      {!allMentorsLoaded && (
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
