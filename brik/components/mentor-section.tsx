"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function MentorSection() {
  // All mentors data - featuring prominent Indian entrepreneurs and business leaders
  const allMentors = [
    {
      name: "Prashant Patel",
      role: "Software Developer, Microsoft",
      image: "/images/mentors/prashant-patel.png",
    },
    {
      name: "Deepanker Mathur",
      role: "Founders Office, Zerodha",
      image: "/images/mentors/deepanker-mathur.png",
    },
    {
      name: "Mohammed Hisham P",
      role: "Full stack, Carestack",
      image: "/images/mentors/mohammed-hisham-p.png",
    },
    {
      name: "Pranav Jayachandran",
      role: "Full stack, Carestack",
      image: "/images/mentors/pranav-jayachandran.png",
    },
    {
      name: "Hritesh Bhardwaj",
      role: "AI Engineer, 30 days",
      image: "/images/mentors/hritesh-bhardwaj.jpg",
    },
    {
      name: "Alosh Denny",
      role: "Deep learning and LLM researcher",
      image: "/images/mentors/alosh-denny.jpg",
    },
    {
      name: "Adil Muhammed Y",
      role: "Full stack, Visteon",
      image: "/images/mentors/adil-muhammed-y.png",
    },
    {
      name: "Navneet Anand",
      role: "Software Developer, Microsoft",
      image: "/images/mentors/navneet-anand.png",
    },
    {
      name: "Anshul Lokwani",
      role: "Software Developer, Google",
      image: "/images/mentors/anshul-lokwani.png",
    },
    {
      name: "Venkata Jagadeesh Tummala",
      role: "Software Developer, Amazon",
      image: "/images/mentors/venkata-jagadeesh-tummala.png",
    },
    {
      name: "Riya Cherada",
      role: "UI/UX, Sardinemother",
      image: "/images/mentors/riya-cherada.png",
    },
    {
      name: "Piyush Gandhi",
      role: "Software Developer, Atlassian",
      image: "/images/mentors/piyush-gandhi.png",
    },
    {
      name: "Mohamed Abdelmaboud",
      role: "Flutter Developer, Google",
      image: "/images/mentors/mohamed-abdelmaboud.png",
    },
    {
      name: "Aneena Ajith",
      role: "Social Media and Marketing Executive",
      image: "",
    },
    {
      name: "Sanjay Krishna",
      role: "Senior Product Manager, Entri",
      image: "/images/mentors/sanjay-krishna.png",
    },
    {
      name: "Ankur Narkhede",
      role: "Senior Software Engineer, Apollo",
      image: "/images/mentors/ankur-narkhede.png",
    },
    {
      name: "Aarya",
      role: "Software Developer and Ai/ML enthusiast, Amazon",
      image: "/images/mentors/aarya.png",
    },
    {
      name: "Vaibhav Tayal",
      role: "Full stack, Uber",
      image: "/images/mentors/vaibhav-tayal.png",
    },
    {
      name: "Kiran Prakash",
      role: "Creative Tech Storyteller, Google",
      image: "/images/mentors/kiran-prakash.png",
    },
    {
      name: "Kiran C K",
      role: "UI/UX Designer, Awwards Jury",
      image: "/images/mentors/kiran-c-k.png",
    },
    {
      name: "Shoyab Azmal Shaik",
      role: "Flutter and SDE, Amazon",
      image: "/images/mentors/shoyab-azmal-shaik.png",
    },
  ];



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
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading={index < 4 ? "eager" : "lazy"}
                  priority={index < 4}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJc0gWN4wAAAABJRU5ErkJggg=="
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
