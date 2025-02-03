"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

const tokenDistribution = [
  { name: "Community", value: 50, color: "#8b5cf6" },
  { name: "Future Plans", value: 20, color: "#3b82f6" },
  { name: "Marketing", value: 20, color: "#ec4899" },
  { name: "Charity", value: 5, color: "#10b981" },
  { name: "Team", value: 5, color: "#f59e0b" },
]

export default function TokenChart() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-5xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Tokenomics
            </span>
          </h2>

          <Card className="bg-gray-900/60 border-purple-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-purple-300">$JAI Token Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col lg:flex-row items-center justify-center">
                <ChartContainer config={{}} className="w-full max-w-lg h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={tokenDistribution}
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {tokenDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<ChartTooltipContent />} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-300">Token Allocation</h3>
                  <ul className="space-y-2">
                    {tokenDistribution.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
                        <span className="text-gray-300">
                          {item.name}: {item.value}%
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-gray-400">
                    The $JAI token is designed to foster a balanced and sustainable ecosystem, prioritizing community
                    engagement while ensuring resources for future development, marketing efforts, charitable causes,
                    and team incentives.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

