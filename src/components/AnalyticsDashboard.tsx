'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import EthicalAIRating from './EthicalAlRating'
import Image from 'next/image'

const generateRandomData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  return months.map(month => ({
    name: month,
    Positive: Math.floor(Math.random() * 100),
    Negative: Math.floor(Math.random() * 100),
  }));
};

const generateRandomPieData = () => {
  return [
    { name: 'Low', value: Math.floor(Math.random() * 300) + 100 },
    { name: 'Medium', value: Math.floor(Math.random() * 200) + 50 },
    { name: 'High', value: Math.floor(Math.random() * 100) + 20 },
  ];
};

const generateRandomBarData = () => {
  return [
    { name: 'Genuine', value: Math.floor(Math.random() * 20) + 5 },
    { name: 'Suspicious', value: Math.floor(Math.random() * 15) + 5 },
    { name: 'Fraudulent', value: Math.floor(Math.random() * 10) + 1 },
  ];
};

const projectNames = [
  "Decentralized Identity", "Smart Contract Auditing", "Automated Dispute Resolution",
  "Transparent Voting System", "AI-Powered Legal Research", "Blockchain-Based Evidence Management",
  "Ethical AI Governance", "Secure Data Sharing", "Tokenized Legal Services",
  "Predictive Justice Analysis"
];

const AnalyticsDashboard = () => {
  const [sentimentData, setSentimentData] = useState<unknown[]>([])
  const [riskData, setRiskData] = useState<unknown[]>([])
  const [fraudData, setFraudData] = useState<unknown[]>([])
  const [currentProjects, setCurrentProjects] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState('sentiment')

  const tabs = useMemo(() => ['sentiment', 'risk', 'fraud'], []);

  useEffect(() => {
    const updateData = () => {
      setSentimentData(generateRandomData())
      setRiskData(generateRandomPieData())
      setFraudData(generateRandomBarData())
      setCurrentProjects(() => {
        const newProjects = [...projectNames];
        return newProjects
          .sort(() => 0.5 - Math.random())
          .slice(0, 5);
      })
    }

    updateData()
    const dataInterval = setInterval(updateData, 5000)

    let tabIndex = 0
    const tabInterval = setInterval(() => {
      tabIndex = (tabIndex + 1) % tabs.length
      setActiveTab(tabs[tabIndex])
    }, 10000)

    return () => {
      clearInterval(dataInterval)
      clearInterval(tabInterval)
    }
  }, [tabs])

  const COLORS = ['#36A2EB', '#FFCE56', '#FF6384']

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/backgroundAi.png"
          alt="AI Analysis Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-purple-900/50 to-gray-900/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            AI-Powered Analytics Dashboard
          </h2>

          {/* Current Projects Card */}
          <Card className="mb-8 bg-gray-900/60 border-purple-500/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-purple-400">Current Projects</CardTitle>
              <CardDescription className="text-gray-300">Projects currently being analyzed for ethical AI compliance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentProjects.map((project) => (
                  <motion.div
                    key={project}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-800/50 p-4 rounded-lg shadow-lg border border-purple-400/30 backdrop-blur-sm"
                  >
                    <h3 className="text-lg font-semibold text-purple-300">{project}</h3>
                    <p className="text-sm text-gray-400 mt-2">Status: Active</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Tabs value={activeTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-900/60 backdrop-blur-sm">
                <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
                <TabsTrigger value="risk">Risk Detection</TabsTrigger>
                <TabsTrigger value="fraud">Fraud Analysis</TabsTrigger>
              </TabsList>
              <TabsContent value="sentiment">
                <Card className="bg-gray-900/60 border-purple-500/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-purple-400">Sentiment Analysis</CardTitle>
                    <CardDescription className="text-gray-300">Track public sentiment towards legal decisions and policies</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    {activeTab === 'sentiment' && (
                      <ResponsiveContainer width="100%" height={400} key={activeTab}>
                        <LineChart data={sentimentData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                          <XAxis dataKey="name" stroke="#888" />
                          <YAxis stroke="#888" />
                          <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', backdropFilter: 'blur(12px)' }} />
                          <Legend />
                          <Line type="monotone" dataKey="Positive" stroke="#36A2EB" strokeWidth={2} />
                          <Line type="monotone" dataKey="Negative" stroke="#FF6384" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="risk">
                <Card className="bg-gray-900/60 border-purple-500/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-purple-400">Risk Detection</CardTitle>
                    <CardDescription className="text-gray-300">Analyze potential risks in legal processes</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    {activeTab === 'risk' && (
                      <ResponsiveContainer width="100%" height={400} key={activeTab}>
                        <PieChart>
                          <Pie
                            data={riskData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {riskData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', backdropFilter: 'blur(12px)' }} />
                        </PieChart>
                      </ResponsiveContainer>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="fraud">
                <Card className="bg-gray-900/60 border-purple-500/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-purple-400">Fraud Analysis</CardTitle>
                    <CardDescription className="text-gray-300">Detect potential fraudulent activities in legal transactions</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    {activeTab === 'fraud' && (
                      <ResponsiveContainer width="100%" height={400} key={activeTab}>
                        <BarChart data={fraudData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                          <XAxis dataKey="name" stroke="#888" />
                          <YAxis stroke="#888" />
                          <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', backdropFilter: 'blur(12px)' }} />
                          <Legend />
                          <Bar dataKey="value" fill="#8884d8">
                            {fraudData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            <EthicalAIRating />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AnalyticsDashboard

