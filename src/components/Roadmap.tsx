'use client'

import { motion } from "framer-motion"

export default function Roadmap() {
  const milestones = [
    { quarter: "Q1 2025", description: "AI Model Expansion – Enhanced AI learning models integrating new financial and legal datasets." },
    { quarter: "Q2 2025", description: "Smart Contract Auditing Service – AI-powered verification of blockchain-based agreements." },
    { quarter: "Q3 2025", description: "Justice AI Marketplace – Legal professionals and firms offering premium services in exchange for $JAI." },
    { quarter: "Q4 2025", description: "DAO Governance Integration – Community-led decisions on Justice AI's functionality and development." }
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
          Future Roadmap
        </motion.h2>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col md:flex-row bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="md:w-1/4 font-bold mb-2 md:mb-0 text-purple-400">{milestone.quarter}</div>
              <div className="md:w-3/4 text-gray-300">{milestone.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

