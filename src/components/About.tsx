'use client'

import { motion } from "framer-motion"
import { RatioIcon as Balance, Shield, Zap, Scale, FileSearch, Gavel } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const features = [
    { icon: <Balance className="h-8 w-8 text-purple-400" />, title: "Fairness", description: "Ensuring unbiased legal decisions" },
    { icon: <Shield className="h-8 w-8 text-blue-400" />, title: "Security", description: "Protecting sensitive legal data" },
    { icon: <Zap className="h-8 w-8 text-pink-400" />, title: "Efficiency", description: "Streamlining legal processes" },
    { icon: <Scale className="h-8 w-8 text-green-400" />, title: "Balance", description: "Maintaining equilibrium in justice" },
    { icon: <FileSearch className="h-8 w-8 text-yellow-400" />, title: "Intelligence", description: "AI-powered legal insights" },
    { icon: <Gavel className="h-8 w-8 text-red-400" />, title: "Authority", description: "Blockchain-backed decisions" },
  ]

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
          className="flex flex-col lg:flex-row items-center justify-between"
        >
          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              About Justice AI
            </h2>
            <p className="text-lg mb-8 text-gray-300 leading-relaxed">
              Justice AI is a paradigm shift in legal technology, ensuring fairness, transparency, and
              decentralized legal intelligence through AI and blockchain. Our ecosystem leverages
              cutting-edge technology to provide unbiased, secure, and real-time legal guidance.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-2"
                >
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-purple-300">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2 lg:pl-12"
          >
            <Card className="bg-gray-800/50 border-purple-500 border hover:border-purple-400 transition-all duration-300 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative mb-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-75 blur-xl"></div>
                  <Balance className="w-24 h-24 text-white relative z-10 mx-auto" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 text-center text-purple-300">Powered by Blockchain</h3>
                <p className="text-gray-300 mb-6 text-center">
                  Our ecosystem leverages blockchain technology and the Justice AI Token (JAI) to ensure
                  unbiased, secure, and real-time legal guidance.
                </p>
                <h3 className="text-2xl font-semibold mb-4 text-center text-purple-300">Specialized Expertise</h3>
                <p className="text-gray-300 text-center">
                  Justice AI excels in addressing questions in the ever-evolving landscape of
                  cryptocurrency, finance, and regulatory compliance.
                </p>
              </CardContent>
            </Card>
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

