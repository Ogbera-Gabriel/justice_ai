'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Coins, Users, Shield, Zap, Scale, FileSearch } from 'lucide-react'

export default function Tokenomics() {
  const tokenFunctions = [
    { icon: <Coins className="h-8 w-8 text-purple-400" />, title: "AI-Legal Services", description: "Access premium legal insights powered by AI" },
    { icon: <Users className="h-8 w-8 text-pink-400" />, title: "Governance", description: "Shape the future of Justice AI through voting" },
    { icon: <Shield className="h-8 w-8 text-blue-400" />, title: "Staking Rewards", description: "Earn rewards by contributing to the ecosystem" },
    { icon: <Zap className="h-8 w-8 text-yellow-400" />, title: "Dispute Resolution", description: "Leverage $JAI for efficient conflict resolution" },
    { icon: <Scale className="h-8 w-8 text-green-400" />, title: "Compliance Incentives", description: "Rewards for maintaining legal standards" },
    { icon: <FileSearch className="h-8 w-8 text-red-400" />, title: "Data Access", description: "Unlock valuable legal and financial datasets" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            $JAI Token Ecosystem
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {tokenFunctions.map((func, index) => (
            <motion.div key={index} variants={itemVariants} className="flex">
              <Card className="w-full bg-gray-800/50 hover:bg-gray-800/70 border-gray-700 hover:border-purple-500 transition-all duration-300 backdrop-blur-sm group">
                <CardContent className="p-6">
                  <div className="mb-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative z-10 w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mx-auto">
                      {func.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center text-purple-300 group-hover:text-white transition-colors">{func.title}</h3>
                  <p className="text-gray-400 text-center group-hover:text-gray-200 transition-colors">{func.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-300 mb-4 max-w-2xl mx-auto">
            $JAI is the lifeblood of the Justice AI ecosystem, enabling a fair, transparent, and efficient legal landscape powered by cutting-edge AI and blockchain technology.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

