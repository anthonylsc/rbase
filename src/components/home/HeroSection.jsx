import React from 'react';
import { motion } from 'framer-motion';
import { Play, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function HeroSection({ darkMode }) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <motion.div 
        className="max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-400 bg-clip-text text-transparent">
            Welcome to rBase
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className={`text-2xl md:text-3xl mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            The Ultimate GTA RP Server Experience
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 justify-center mb-12"
        >
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2">
            <Play className="w-5 h-5" />
            Join Server
          </Button>
          <Button size="lg" variant="outline" className="border-emerald-400 text-emerald-400 hover:bg-emerald-500/10 gap-2">
            <Download className="w-5 h-5" />
            Download
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center"
        >
          <div>
            <p className="text-3xl font-bold text-emerald-400">500+</p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Active Players</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-emerald-400">24/7</p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Server Uptime</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-emerald-400">100%</p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Fair Play</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
