'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Scale, Shield, Zap, Gavel, FileSearch, Fingerprint } from 'lucide-react'
import { motion } from "framer-motion"

export default function Features() {
  const features = [
    {
      icon: <Scale className="h-12 w-12 mb-4 text-purple-400" />,
      title: "AI-Powered Legal Balance",
      description: "Harness the power of AI to ensure fair and unbiased legal decisions in the crypto space."
    },
    {
      icon: <Shield className="h-12 w-12 mb-4 text-blue-400" />,
      title: "Blockchain-Secured Compliance",
      description: "Leverage blockchain technology to maintain immutable records of regulatory compliance."
    },
    {
      icon: <Zap className="h-12 w-12 mb-4 text-pink-400" />,
      title: "Lightning-Fast Legal Intelligence",
      description: "Access real-time legal insights and predictions for crypto projects and transactions."
    },
    {
      icon: <Gavel className="h-12 w-12 mb-4 text-yellow-400" />,
      title: "Smart Contract Arbitration",
      description: "Resolve disputes efficiently with AI-driven smart contract analysis and arbitration."
    },
    {
      icon: <FileSearch className="h-12 w-12 mb-4 text-green-400" />,
      title: "Predictive Regulatory Analysis",
      description: "Stay ahead of the curve with AI-powered predictions on upcoming crypto regulations."
    },
    {
      icon: <Fingerprint className="h-12 w-12 mb-4 text-red-400" />,
      title: "Decentralized Identity Verification",
      description: "Ensure compliance and privacy with blockchain-based identity verification systems."
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-purple-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Revolutionizing Crypto-Legal Landscape
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-gray-800 bg-opacity-50 border-gray-700 hover:border-purple-500 transition-all duration-300 flex flex-col flex-grow overflow-hidden group">
                <CardContent className="p-6 flex flex-col items-center text-center h-full relative z-10">
                  <div className="mb-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-75 group-hover:opacity-100 blur-lg transition-opacity duration-300"></div>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-300 group-hover:text-white transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">{feature.description}</p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

