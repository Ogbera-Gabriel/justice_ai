'use client'

import { motion } from "framer-motion"
import { RatioIcon as Balance, Shield, Zap } from 'lucide-react'

export default function About() {
  return (
    <section className="py-16 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              About Justice AI
            </h2>
            <p className="text-lg mb-6 text-gray-300">
              Justice AI is a paradigm shift in legal technology, ensuring fairness, transparency, and
              decentralized legal intelligence through AI and blockchain.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Balance className="h-8 w-8 mr-3 text-purple-400" />
                <span className="text-gray-300">Fairness</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-8 w-8 mr-3 text-blue-400" />
                <span className="text-gray-300">Security</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-8 w-8 mr-3 text-pink-400" />
                <span className="text-gray-300">Efficiency</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transform -rotate-6"></div>
              <div className="relative bg-gray-900 p-6 rounded-lg shadow-xl">
                <h3 className="text-2xl font-semibold mb-4 text-purple-400">Powered by Blockchain</h3>
                <p className="text-gray-300 mb-4">
                  Our ecosystem leverages blockchain technology and the Justice AI Token (JAI) to ensure
                  unbiased, secure, and real-time legal guidance.
                </p>
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">Specialized Expertise</h3>
                <p className="text-gray-300">
                  Justice AI excels in addressing questions in the ever-evolving landscape of
                  cryptocurrency, finance, and regulatory compliance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

