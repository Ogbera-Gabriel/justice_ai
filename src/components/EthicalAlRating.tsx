'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Scale, ShieldCheck } from 'lucide-react'

type Project = {
  id: number;
  name: string;
  score: number;
  category: 'blockchain' | 'legal';
}

const projectNames = [
  "Decentralized Identity", "Smart Contract Auditing", "Automated Dispute Resolution",
  "Transparent Voting System", "AI-Powered Legal Research", "Blockchain-Based Evidence Management",
  "Ethical AI Governance", "Secure Data Sharing", "Tokenized Legal Services",
  "Predictive Justice Analysis"
];

const generateRandomProjects = (): Project[] => {
  return projectNames.map((name, index) => ({
    id: index + 1,
    name,
    category: Math.random() > 0.5 ? 'blockchain' : 'legal',
    score: Math.floor(Math.random() * 40) + 60
  }));
};

const getScoreColor = (score: number) => {
  if (score >= 90) return 'bg-green-500';
  if (score >= 70) return 'bg-yellow-500';
  return 'bg-red-500';
};

const getScoreLabel = (score: number) => {
  if (score >= 90) return 'Excellent';
  if (score >= 70) return 'Good';
  return 'Needs Improvement';
};

export default function EthicalAIRating() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(generateRandomProjects().slice(0, 5));
    const interval = setInterval(() => {
      setProjects(generateRandomProjects().slice(0, 5));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Ethical AI Scoreboard</CardTitle>
        <CardDescription>Track and compare the fairness of different blockchain and legal projects</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <AnimatePresence initial={false}>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-4"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    {project.category === 'blockchain' ? (
                      <Scale className="h-5 w-5 text-blue-500" />
                    ) : (
                      <ShieldCheck className="h-5 w-5 text-green-500" />
                    )}
                    <h3 className="font-semibold">{project.name}</h3>
                  </div>
                  <Progress value={project.score} className="mt-2" />
                </div>
                <div className="text-right">
                  <Badge variant="outline" className={`${getScoreColor(project.score)} text-white`}>
                    {project.score}
                  </Badge>
                  <p className="text-sm text-gray-500 mt-1">{getScoreLabel(project.score)}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  )
}

