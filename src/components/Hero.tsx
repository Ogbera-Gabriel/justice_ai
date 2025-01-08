'use client'

import { motion } from "framer-motion"
import Image from 'next/image'
import DataFlowAnimation from './DataFlowAnimation'

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/JaiScale2.jpeg"
          alt="Bitcoin technology background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-purple-900/50 to-gray-900/80" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15)_0%,transparent_70%)]"
        />
        <DataFlowAnimation />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            {/* AI Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-64 h-64 md:w-96 md:h-96 mx-auto mb-8"
            >
              <Image
                src="/Designer__2_-removebg-preview.png"
                alt="AI Justice Portrait"
                fill
                className="object-contain"
                priority
              />
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(147,51,234,0.3)",
                    "0 0 40px rgba(147,51,234,0.2)",
                    "0 0 20px rgba(147,51,234,0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
                  Justice AI
                </span>
                <br />
                <span className="text-white text-4xl sm:text-5xl lg:text-6xl">
                  Empowering Legal Fairness
                </span>
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                Revolutionary AI-powered legal technology ensuring unbiased justice through blockchain innovation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Circuit Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
          className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent"
        />
      </div>
    </section>
  )
}

