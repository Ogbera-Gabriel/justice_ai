'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Shield, Zap } from 'lucide-react'
import { motion } from "framer-motion"

export default function Features() {
  const features = [
    {
      icon: <Scale className="h-12 w-12 mb-4 text-purple-400" />,
      title: "Democratizing Legal Knowledge",
      description: "Simplifies complex legal frameworks for crypto entrepreneurs, businesses, and investors."
    },
    {
      icon: <Shield className="h-12 w-12 mb-4 text-blue-400" />,
      title: "AI-Powered Regulatory Compliance",
      description: "Continuously monitors global financial and crypto regulations to ensure smart contract legality and DeFi compliance."
    },
    {
      icon: <Zap className="h-12 w-12 mb-4 text-pink-400" />,
      title: "Real-Time Legal Intelligence",
      description: "Provides instant legal assessment on contracts, regulations, and industry standards."
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-gray-800 bg-opacity-50 border-gray-700 hover:border-purple-500 transition-all duration-300 flex flex-col flex-grow">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center text-2xl">
                    {feature.icon}
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                  <p className="text-center text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

