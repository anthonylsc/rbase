import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection({ darkMode }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl border ${
            darkMode 
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
              : 'bg-emerald-50 border-emerald-200 text-emerald-700'
          } mb-8`}>
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium">Server Online • 150+ Players</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
        >
          Welcome to{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent animate-gradient">
            rBase
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Experience the ultimate GTA RP adventure. Join our community and create your own story in Los Santos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0 px-8 py-6 text-lg rounded-2xl shadow-2xl shadow-emerald-500/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Join Server
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className={`group px-8 py-6 text-lg rounded-2xl backdrop-blur-xl border-2 ${
              darkMode
                ? 'bg-white/5 border-white/20 hover:bg-white/10 text-white'
                : 'bg-black/5 border-gray-300 hover:bg-black/10 text-gray-900'
            }`}
          >
            <Users className="w-5 h-5 mr-2" />
            View Community
          </Button>
        </motion.div>

        {/* Glassmorphism Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto"
        >
          {[
            { number: '500+', label: 'Active Members', icon: Users },
            { number: '24/7', label: 'Server Uptime', icon: Play },
            { number: '100+', label: 'Custom Scripts', icon: ArrowRight },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative p-8 rounded-3xl backdrop-blur-xl border overflow-hidden group ${
                darkMode
                  ? 'bg-white/5 border-white/10 hover:bg-white/10'
                  : 'bg-white/80 border-gray-200 hover:bg-white'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}