'use client';

import { motion } from "framer-motion";
import Image from "next/image";

// Original items
const BANNER_BASE_ITEMS = [
    "/images/investors/talrop.png",
    "/images/investors/make-my-pass.png",
];

// Create duplicates programmatically for smooth infinite scroll
const BANNER_ITEMS = [...Array(10)].flatMap(() => BANNER_BASE_ITEMS);

export default function MovingBanner() {
    return (
        <div className="relative w-full bg-gray-100 overflow-hidden py-2">
            <div className="inline-flex gap-8 p-4">
                <motion.div
                    className="flex gap-8"
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
                            className="relative flex-shrink-0 w-20 h-12"
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
                            className="relative flex-shrink-0 w-20 h-12"
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
