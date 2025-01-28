"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section id="home" className="w-full flex justify-center px-4">
      <div className="w-full max-w-6xl py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-16">
          <div className="max-w-xl">
            <h1
              className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
              style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
            >
              Hi, I'm Nuel
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              Intermediate Flutter and Web Developer passionate about building solutions and solving problems.
            </p>
          </div>
          <div className="relative flex-shrink-0">
            <Image
              src="/image 2 (2).png"
              alt="Profile illustration"
              width={400}
              height={600}
              priority
              className="w-[280px] md:w-[400px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
