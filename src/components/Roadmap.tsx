'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Hexagon, Binary, Network, Cpu, Globe2, Workflow } from 'lucide-react'

export default function Roadmap() {
  const milestones = [
    {
      quarter: "Q1 2025",
      title: "Neural Network Integration",
      description: "Advanced AI models processing legal datasets with unprecedented accuracy",
      icon: <Binary className="w-8 h-8" />,
      color: "from-purple-600 to-blue-500"
    },
    {
      quarter: "Q2 2025",
      title: "Quantum-Secured Contracts",
      description: "Next-gen smart contracts with quantum-resistant encryption",
      icon: <Network className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      quarter: "Q3 2025",
      title: "Global Legal Matrix",
      description: "Worldwide legal compliance network powered by decentralized AI",
      icon: <Globe2 className="w-8 h-8" />,
      color: "from-cyan-400 to-purple-500"
    },
    {
      quarter: "Q4 2025",
      title: "Autonomous Governance",
      description: "Self-evolving DAO systems with predictive adaptation",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const hexagonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      {/* Animated background hexagons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${(i % 5) * 25}%`,
              left: `${Math.floor(i / 5) * 25}%`,
              fontSize: `${(i % 3 + 2) * 8}px`,
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
            ⬡
          </motion.div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-5xl font-bold mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Evolution Roadmap
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative max-w-6xl mx-auto"
        >
          {/* Connecting Lines SVG */}
          <svg
            className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,50 C300,50 400,20 600,20 C800,20 900,80 1200,80"
              stroke="url(#gradient-line)"
              strokeWidth="2"
              fill="none"
              variants={lineVariants}
            />
            <defs>
              <linearGradient id="gradient-line" x1="0" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="#9333EA" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#9333EA" />
              </linearGradient>
            </defs>
          </svg>

          {/* Milestones Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? 'lg:-translate-y-12' : 'lg:translate-y-12'
                }`}
                variants={hexagonVariants}
              >
                <div className="relative">
                  {/* Hexagon Background */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-75 blur group-hover:opacity-100 transition duration-1000"></div>
                  
                  <Card className="relative bg-gray-900/90 border-0 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${milestone.color} p-0.5 mx-auto`}>
                          <div className="w-full h-full rounded-lg bg-gray-900 flex items-center justify-center">
                            {milestone.icon}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-3">
                          {milestone.quarter}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                        <p className="text-gray-400">{milestone.description}</p>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                        <Hexagon className="w-full h-full text-purple-500" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-12 h-12 opacity-10">
                        <Workflow className="w-full h-full text-blue-500" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Connecting Lines for Desktop */}
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-px bg-gradient-to-r from-purple-500 to-transparent transform translate-x-full" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

