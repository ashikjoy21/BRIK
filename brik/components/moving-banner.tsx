'use client';

import { motion } from "framer-motion";
import Image from "next/image";

// Original items
const BANNER_BASE_ITEMS = [
    "/images/companies/microsoft.svg",
    "/images/companies/zerodha.png",
    "/images/companies/carestack.webp",
    "/images/companies/30-sundays.png",
    "/images/companies/visteon.png",
    "/images/companies/uber.svg",
    "/images/companies/google.webp",
    "/images/companies/amazon.webp",
    "/images/companies/sardinemother.png",
    "/images/companies/atlassian.png",
    "/images/companies/entri.svg",
    "/images/companies/apollo.webp",
    "/images/companies/awwwards.png",
    "/images/companies/ibm.png",
    "/images/companies/baker-hughes.png",
    "/images/companies/linkedin.png",
    "/images/companies/sarvam-ai.jpg",
    "/images/companies/keyvalue-software-system.png",
    "/images/companies/linux-foundation.png",
    "/images/companies/growth-school.png",
    "/images/companies/qualitas-global-services.png",
];
  

// Create duplicates programmatically for smooth infinite scroll
const BANNER_ITEMS = [...Array(30)].flatMap(() => BANNER_BASE_ITEMS);

export default function MovingBanner() {
    return (
        <div className="relative w-full bg-gray-100 overflow-hidden py-2">
            <div className="inline-flex gap-10 p-4">
                <motion.div
                    className="flex gap-10"
                    initial={{ x: 0 }}
                    animate={{ x: -1920 }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                    style={{ width: "fit-content" }}
                    whileHover={{ animationPlayState: "paused" }}
                >
                    {/* First set of items */}
                    {BANNER_ITEMS.map((src, index) => (
                        <div
                            key={`first-${index}`}
                            className="relative flex-shrink-0 w-20 h-20 hover:scale-150 hover:cursor-pointer transition-transform duration-300"
                        >
                            <Image
                                src={src}
                                alt={`Banner item ${index + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}

                    {/* Duplicate set for seamless loop */}
                    {BANNER_ITEMS.map((src, index) => (
                        <div
                            key={`second-${index}`}
                            className="relative flex-shrink-0 w-20 h-20"
                        >
                            <Image
                                src={src}
                                alt={`Banner item ${index + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
