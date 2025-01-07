'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FaDiscord } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaTelegram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-400">&copy; 2025 Justice AI. All rights reserved.</p>
          </motion.div>
          <motion.div 
            className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex space-x-4"> 
              <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">Community</Button>
              <Button variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white">Contact</Button>
            </div>
            <div className="flex space-x-4">
              <a href="https://t.me/JusticeAI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <FaTelegram size={24} />
              </a>
              <a href="https://twitter.com/JusticeAI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaSquareXTwitter size={24} />
              </a>
              <a href="https://discord.gg/JusticeAI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <FaDiscord size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

