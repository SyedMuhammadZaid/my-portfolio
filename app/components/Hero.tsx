"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById("work")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-14 sm:pt-8">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">S.M.Zaid</span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-20">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Problem Solver",
                2000,
                "Creative Thinker",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            I create beautiful, functional, and user-centered digital experiences that solve real-world problems with
            clean code and innovative design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={scrollToWork}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              View My Work
            </motion.button>

            <motion.button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white hover:text-white transition-colors"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
      </motion.div>
    </section>
  )
}
