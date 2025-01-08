'use client'

import { motion } from 'framer-motion'

const DataFlowAnimation = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 },
        repeat: Infinity,
        repeatType: "loop" as const,
        repeatDelay: 0.5,
        delay: i * 0.5
      }
    })
  }

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <motion.path
        d="M0 50 Q 25 25, 50 50 T 100 50"
        stroke="rgba(147, 51, 234, 0.3)"
        strokeWidth="0.5"
        fill="none"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      />
      <motion.path
        d="M0 60 Q 25 85, 50 60 T 100 60"
        stroke="rgba(147, 51, 234, 0.3)"
        strokeWidth="0.5"
        fill="none"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      />
      <motion.path
        d="M0 40 Q 25 15, 50 40 T 100 40"
        stroke="rgba(147, 51, 234, 0.3)"
        strokeWidth="0.5"
        fill="none"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      />
    </svg>
  )
}

export default DataFlowAnimation

