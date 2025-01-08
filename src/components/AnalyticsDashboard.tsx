'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Button } from "@/components/ui/button"
import { AlertTriangle, TrendingUp } from 'lucide-react'
import EthicalAIRating from './EthicalAlRating'

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

  useEffect(() => {
    setSentimentData(generateRandomData())
    setRiskData(generateRandomPieData())
    setFraudData(generateRandomBarData())
    setCurrentProjects(projectNames.slice(0, 5))

    const interval = setInterval(() => {
      setSentimentData(generateRandomData())
      setRiskData(generateRandomPieData())
      setFraudData(generateRandomBarData())
      setCurrentProjects(() => {
        const newProjects = [...projectNames];
        return newProjects
          .sort(() => 0.5 - Math.random())
          .slice(0, 5);
      })
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const COLORS = ['#36A2EB', '#FFCE56', '#FF6384']

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            AI-Powered Analytics Dashboard
          </h2>
          
          {/* Current Projects Card */}
          <Card className="mb-8 bg-gray-800 bg-opacity-50 border-purple-500 border">
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
                    className="bg-gray-700 p-4 rounded-lg shadow-lg border border-purple-400"
                  >
                    <h3 className="text-lg font-semibold text-purple-300">{project}</h3>
                    <p className="text-sm text-gray-400 mt-2">Status: Active</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Tabs defaultValue="sentiment" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
                <TabsTrigger value="risk">Risk Detection</TabsTrigger>
                <TabsTrigger value="fraud">Fraud Analysis</TabsTrigger>
              </TabsList>
              <TabsContent value="sentiment">
                <Card className="bg-gray-800 bg-opacity-50 border-purple-500 border">
                  <CardHeader>
                    <CardTitle className="text-purple-400">Sentiment Analysis</CardTitle>
                    <CardDescription className="text-gray-300">Track public sentiment towards legal decisions and policies</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ResponsiveContainer width="100%" height={400}>
                      <LineChart data={sentimentData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="name" stroke="#888" />
                        <YAxis stroke="#888" />
                        <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
                        <Legend />
                        <Line type="monotone" dataKey="Positive" stroke="#36A2EB" />
                        <Line type="monotone" dataKey="Negative" stroke="#FF6384" />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="risk">
                <Card className="bg-gray-800 bg-opacity-50 border-purple-500 border">
                  <CardHeader>
                    <CardTitle className="text-purple-400">Risk Detection</CardTitle>
                    <CardDescription className="text-gray-300">Analyze potential risks in legal processes</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ResponsiveContainer width="100%" height={400}>
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
                        <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="fraud">
                <Card className="bg-gray-800 bg-opacity-50 border-purple-500 border">
                  <CardHeader>
                    <CardTitle className="text-purple-400">Fraud Analysis</CardTitle>
                    <CardDescription className="text-gray-300">Detect potential fraudulent activities in legal transactions</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart data={fraudData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="name" stroke="#888" />
                        <YAxis stroke="#888" />
                        <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8">
                          {fraudData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            <EthicalAIRating />
          </div>
          <div className="flex justify-center">
            <Button className="mr-4 bg-purple-600 hover:bg-purple-700" onClick={() => console.log('Generate report')}>
              <TrendingUp className="mr-2 h-4 w-4" /> Generate Report
            </Button>
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-700 hover:text-white" onClick={() => console.log('View alerts')}>
              <AlertTriangle className="mr-2 h-4 w-4" /> View Alerts
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AnalyticsDashboard

