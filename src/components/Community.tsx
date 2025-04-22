'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Hexagon,
  CircuitBoard,
  Binary,
  Cpu,
  Database,
  Globe,
  Lock,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { JSX, useEffect, useMemo, useState } from 'react';
import React from 'react';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaTelegram } from 'react-icons/fa';

export default function Community() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  // Enhanced background element configurations
  const backgroundElementConfigs = useMemo(
    () => [
      { icon: '⚖️', size: 32, color: 'purple' },
      { icon: '🔗', size: 28, color: 'blue' },
      { icon: '📊', size: 24, color: 'pink' },
      { icon: <Hexagon />, size: 40, color: 'purple' },
      { icon: <CircuitBoard />, size: 36, color: 'blue' },
      { icon: <Binary />, size: 32, color: 'pink' },
      { icon: <Cpu />, size: 38, color: 'purple' },
      { icon: <Database />, size: 34, color: 'blue' },
      { icon: <Globe />, size: 36, color: 'pink' },
      { icon: <Lock />, size: 30, color: 'purple' },
      { icon: <Zap />, size: 32, color: 'blue' },
    ],
    []
  );

  type BackgroundElement = {
    randomDelay: number;
    randomDuration: number;
    randomX: number;
    randomY: number;
    icon: string | JSX.Element;
    size: number;
    color: string;
  };

  const [backgroundElements, setBackgroundElements] = useState<
    BackgroundElement[]
  >([]);

  useEffect(() => {
    const elements = [...Array(40)].map((_, i) => {
      const element =
        backgroundElementConfigs[i % backgroundElementConfigs.length];
      return {
        ...element,
        randomDelay: Math.random() * 10,
        randomDuration: Math.random() * 15 + 10,
        randomX: Math.random() * 100,
        randomY: Math.random() * 100,
      };
    });
    setBackgroundElements(elements);
  }, [backgroundElementConfigs]);

  type GeometricShape = {
    top: string;
    left: string;
    width: string;
    height: string;
    rotate: string;
    duration: number;
    isEven: boolean;
  };

  const [geometricShapes, setGeometricShapes] = useState<GeometricShape[]>([]);

  useEffect(() => {
    const shapes = [...Array(20)].map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 100 + 50}px`,
      height: `${Math.random() * 100 + 50}px`,
      rotate: `${Math.random() * 360}deg`,
      duration: Math.random() * 20 + 20,
      isEven: i % 2 === 0,
    }));
    setGeometricShapes(shapes);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.2)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-grid-white/[0.03]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              $JAI Community
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Join our growing community of legal tech innovators and be part of
            the future of AI-powered justice.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-gray-800/50 border-purple-500 border hover:border-purple-400 transition-all duration-300 backdrop-blur-sm group">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <FaTelegram className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-purple-300 group-hover:text-white transition-colors">
                      Telegram
                    </h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-200 transition-colors">
                      Join our Telegram community
                    </p>
                    <Link
                      href="https://t.me/+q6w0XNukm8UzMWZk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-colors"
                      >
                        Join Telegram
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-gray-800/50 border-purple-500 border hover:border-purple-400 transition-all duration-300 backdrop-blur-sm group">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-white">
                        $JAI
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-300 group-hover:text-white transition-colors">
                      Buy $JAI
                    </h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-200 transition-colors">
                      Get started with Justice AI
                    </p>
                    <Link
                      href="https://dexscreener.com/solana/F6HNBJdauphe3uX1YhFaUKGyApe2ctKTEL5GpKD63wtP"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                        Buy Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-gray-800/50 border-purple-500 border hover:border-purple-400 transition-all duration-300 backdrop-blur-sm group">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <FaSquareXTwitter className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-purple-300 group-hover:text-white transition-colors">
                      Twitter
                    </h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-200 transition-colors">
                      Follow us on Twitter
                    </p>
                    <Link
                      href="https://x.com/JusticeAI_Sol" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-colors"
                      >
                        Follow Us
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-gray-400 text-sm mb-8"
          >
            Join our community and stay updated with the latest news and
            updates.
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundElements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${element.randomY}%`,
              left: `${element.randomX}%`,
              fontSize: `${element.size}px`,
              color: `var(--${element.color}-500)`,
              opacity: 0.2,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: element.randomDuration,
              delay: element.randomDelay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {typeof element.icon === 'string'
              ? element.icon
              : React.cloneElement(element.icon, {
                  className: `text-${element.color}-500`,
                })}
          </motion.div>
        ))}
      </div>

      {/* Additional geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {geometricShapes.map((shape, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`absolute border-2 ${
              shape.isEven ? 'border-purple-500/20' : 'border-pink-500/20'
            }`}
            style={{
              top: shape.top,
              left: shape.left,
              width: shape.width,
              height: shape.height,
              transform: `rotate(${shape.rotate})`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>
    </section>
  );
}
