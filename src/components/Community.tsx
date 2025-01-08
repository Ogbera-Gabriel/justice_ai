'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import { FaSquareTwitter } from "react-icons/fa6"
import { FaTelegram } from "react-icons/fa"

export default function Community() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.15)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              $JAI Community
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Join our growing community of legal tech innovators and be part of the future of AI-powered justice.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-gray-800/50 border-purple-500 border hover:border-purple-400 transition-all duration-300 backdrop-blur-sm group">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <FaSquareTwitter className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-purple-300 group-hover:text-white transition-colors">Telegram</h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-200 transition-colors">Join our Telegram community</p>
                    <Link href="https://t.me/JusticeAIsolana" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-colors">
                        Join Telegram
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-gray-800/50 border-purple-500 border hover:border-purple-400 transition-all duration-300 backdrop-blur-sm group">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-white">$JAI</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-300 group-hover:text-white transition-colors">Buy $JAI</h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-200 transition-colors">Get started with Justice AI</p>
                    <Link href="https://example.com/buy-jai" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                        Buy Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-gray-800/50 border-purple-500 border hover:border-purple-400 transition-all duration-300 backdrop-blur-sm group">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <FaTelegram className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-purple-300 group-hover:text-white transition-colors">Twitter</h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-200 transition-colors">Follow us on Twitter</p>
                    <Link href="https://x.com/JusticeAI_Sol" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-colors">
                        Follow Us
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-gray-400 text-sm mb-8"
          >
            Join over 10,000+ members in our community
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 * i}%`,
              left: `${15 * i}%`,
              fontSize: `${(i + 1) * 10}px`,
              color: `rgba(147, 51, 234, 0.1)`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ⚖️
          </motion.div>
        ))}
      </div>
    </section>
  )
}

