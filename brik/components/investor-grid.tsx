"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function InvestorGrid() {
  // List of prominent Indian investors, VCs, and startups
  const investors = [
    {
      type: "Community Partners", organizations: [
        { name: "Talrop", logo: "/images/investors/talrop.png", type: "Community Partner" }
      ]
    },
    {
      type: "Platform Partners", organizations: [
        { name: "MakeMyPass", logo: "/images/investors/make-my-pass.png", type: "Platform Partner" }
      ]
    },
  ]

  return (
    <motion.div
      className="flex gap-10 mx-auto"
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
          className="p-4 rounded-lg flex flex-col gap-5 font-bold items-center justify-center h-32 transition-all duration-300"
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
          <p>{investor.type}</p>
          {investor.organizations.map((organization, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-4 rounded-lg flex flex-col gap-3 font-bold items-center justify-center w-32 h-32 hover:shadow-md transition-all duration-300"
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
                src={organization.logo || "/images/investors/default.png"}
                alt={organization.name}
                width={150}
                height={150}
                loading={index < 6 ? "eager" : "lazy"}
                priority={index < 6}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJc0gWN4wAAAABJRU5ErkJggg=="
                className="max-h-20 w-auto"
              />
              <p>{organization.name}</p>
            </motion.div>
          ))}
        </motion.div>
      ))

      }
    </motion.div>
  )

  // return (
  //   <>
  //   <p>{investor.type}</p>
  //   <motion.div
  //     className="grid grid-cols-2 md:grid-cols-3 gap-4"
  //     initial="hidden"
  //     animate="visible"
  //     variants={{
  //       hidden: { opacity: 0 },
  //       visible: {
  //         opacity: 1,
  //         transition: {
  //           staggerChildren: 0.1,
  //         },
  //       },
  //     }}
  //     >
  //      {investors.map((investor, index) => (
  //        <motion.div
  //        key={index}
  //        className="bg-gray-50 p-4 rounded-lg flex flex-col gap-3 font-bold items-center justify-center h-32 hover:shadow-md transition-all duration-300"
  //        variants={{
  //          hidden: { opacity: 0, y: 20 },
  //          visible: {
  //            opacity: 1,
  //            y: 0,
  //            transition: {
  //              duration: 0.5,
  //              ease: [0.22, 1, 0.36, 1],
  //             },
  //           },
  //         }}
  //         whileHover={{ scale: 1.05 }}
  //         >
  //         <Image
  //           src={investor.logo || "/images/investors/default.png"}
  //           alt={investor.name}
  //           width={150}
  //           height={60}
  //           className="max-h-12 w-auto"
  //         />
  //         <p>{investor.name}</p>
  //       </motion.div>
  //     ))} 
  //   </motion.div>
  //     </>
  // )
}
