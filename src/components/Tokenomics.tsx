'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Coins, Users, Shield, Zap } from 'lucide-react'

export default function Tokenomics() {
  const tokenFunctions = [
    { icon: <Coins className="h-12 w-12 mb-4 text-purple-400" />, title: "Access to AI-Legal Services", description: "Use $JAI to access premium legal insights and services powered by AI." },
    { icon: <Users className="h-12 w-12 mb-4 text-pink-400" />, title: "Governance & Decision-Making", description: "Participate in shaping the future of Justice AI through community voting." },
    { icon: <Shield className="h-12 w-12 mb-4 text-blue-400" />, title: "Rewards & Staking", description: "Earn rewards by staking your $JAI tokens and contributing to the ecosystem." },
    { icon: <Zap className="h-12 w-12 mb-4 text-green-400" />, title: "Fraud Detection & Dispute Resolution", description: "Leverage $JAI for secure and efficient dispute resolution processes." },
  ]

  return (
    <section className="py-16 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Justice AI Token ($JAI)
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tokenFunctions.map((func, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-gray-700 border-gray-600 hover:border-purple-500 transition-all duration-300 h-full">
                <CardContent className="flex flex-col items-center p-6 h-full">
                  {func.icon}
                  <h4 className="text-xl font-semibold mb-2 text-center text-gray-200">{func.title}</h4>
                  <p className="text-gray-300 text-center">{func.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg text-gray-300 mb-4">
            $JAI is the fuel that powers the Justice AI ecosystem, enabling a fair and transparent legal landscape.
          </p>
          <a
            href="#"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
          >
            Learn More About $JAI
          </a>
        </motion.div>
      </div>
    </section>
  )
}

