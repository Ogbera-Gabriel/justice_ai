'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Scale, Shield, Zap, ArrowRight } from 'lucide-react'


export default function Hero() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="lg:w-1/2 text-left mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Justice AI
              </span>
              <br />
              <span className="text-white">
                Empowering Legal Fairness
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-lg">
              Revolutionizing legal technology through AI and blockchain for unbiased, secure, and real-time legal guidance.
            </p>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 rounded-full text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Buy Now
            </Button>
            </a>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-gray-900 p-8 rounded-2xl shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: <Scale className="h-10 w-10 text-purple-400" />, title: "Fair Judgments", description: "AI-powered unbiased legal decisions" },
                    { icon: <Shield className="h-10 w-10 text-pink-400" />, title: "Secure Blockchain", description: "Immutable and transparent records" },
                    { icon: <Zap className="h-10 w-10 text-yellow-400" />, title: "Real-time Insights", description: "Instant legal guidance and analysis" },
                    { icon: <ArrowRight className="h-10 w-10 text-green-400" />, title: "Accessible Justice", description: "Legal support for everyone, anywhere" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      {item.icon}
                      <h3 className="mt-2 font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  )
}

