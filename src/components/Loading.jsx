import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Loading() {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e1a] to-[#1a1f3a] flex items-center justify-center px-6">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 bg-emerald-500"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 bg-green-500"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center rotate-12 shadow-lg shadow-emerald-500/50">
            <motion.div
              animate={{ rotate: -12 }}
              transition={{ duration: 0 }}
            >
              <Rocket className="w-10 h-10 text-white" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent"
        >
          rBase
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-gray-400 text-lg mb-12"
        >
          Loading your adventure...
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
              }}
              className="w-3 h-3 rounded-full bg-emerald-400"
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
