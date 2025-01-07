'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900/50 to-gray-900">
      
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ 
            opacity: [0.3, 1, 0.3],
            background: [
              'linear-gradient(to bottom, rgb(17, 24, 39), rgba(147, 51, 234, 0.4), rgb(17, 24, 39))',
              'linear-gradient(to bottom, rgb(17, 24, 39), rgba(147, 51, 234, 1), rgb(17, 24, 39))',
              'linear-gradient(to bottom, rgb(17, 24, 39), rgba(147, 51, 234, 0.4), rgb(17, 24, 39))'
            ]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.3)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-70" />
        
        
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.4)_0%,transparent_50%)] blur-2xl"
        />
      </div>

      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-12 lg:py-20 min-h-screen">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
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
              <p className="text-lg sm:text-xl mb-8 text-gray-300 max-w-lg mx-auto lg:mx-0">
                Revolutionary AI-powered legal technology ensuring unbiased justice through blockchain innovation.
              </p>
              <Link href="https://example.com/buy-jai" passHref legacyBehavior target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]"
                >
                  Buy Now
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full max-w-[500px] mx-auto">
              <div className="aspect-[1/1.2] w-full">
                <Image
                  src="/justiceAi.jpg"
                  alt="AI Justice Robot holding scales of justice"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 600px"
                  priority
                />
              </div>
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(147,51,234,0.3)",
                    "0 0 40px rgba(147,51,234,0.2)",
                    "0 0 20px rgba(147,51,234,0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      
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

