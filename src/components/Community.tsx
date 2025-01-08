'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaTelegram } from "react-icons/fa"

export default function Community() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            $JAI Community
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Join our growing community of legal tech innovators and be part of the future of AI-powered justice.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-gray-800 bg-opacity-50 border-purple-500 border hover:border-purple-400 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <FaTelegram className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-purple-300">Telegram</h3>
                    <p className="text-gray-400 mb-4">Join our Telegram community</p>
                    <Link href="https://t.me/JusticeAIsolana" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                        Join Telegram
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:mt-[-2rem]"
            >
              <Card className="bg-gray-800 bg-opacity-50 border-purple-500 border hover:border-purple-400 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-purple-500 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-white">$JAI</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-300">Buy $JAI</h3>
                    <p className="text-gray-400 mb-4">Get started with Justice AI</p>
                    <Link href="https://example.com/buy-jai" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]">
                        Buy Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="bg-gray-800 bg-opacity-50 border-purple-500 border hover:border-purple-400 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <FaSquareXTwitter className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-purple-300">Twitter</h3>
                    <p className="text-gray-400 mb-4">Follow us on Twitter</p>
                    <Link href="https://x.com/JusticeAI_Sol" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                        Follow Us
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-400 text-sm"
          >
            Join our fast growing community
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

