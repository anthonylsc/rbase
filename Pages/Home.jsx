import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Moon, Sun, Rocket, Users, Shield, Zap, Server, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

import SpaceBackground from '@/components/home/SpaceBackground';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import AboutSection from '@/components/home/AboutSection';
import JoinSection from '@/components/home/JoinSection';
import Footer from '@/components/home/Footer';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode ? 'bg-[#0a0e1a] text-white' : 'bg-white text-gray-900'
    }`}>
      <SpaceBackground darkMode={darkMode} />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Link to={createPageUrl('Home')} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center rotate-12 shadow-lg shadow-emerald-500/50">
                <Rocket className="w-6 h-6 text-white -rotate-12" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                rBase
              </span>
            </Link>
          </motion.div>
          
          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            <Link 
              to={createPageUrl('Home')}
              className="text-sm font-medium hover:text-emerald-400 transition-colors"
            >
              Home
            </Link>
            <Link 
              to={createPageUrl('Rules')}
              className="text-sm font-medium hover:text-emerald-400 transition-colors"
            >
              Rules
            </Link>
            <Link 
              to={createPageUrl('ServerPreview')}
              className="text-sm font-medium hover:text-emerald-400 transition-colors"
            >
              Server Preview
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Button
              onClick={() => setDarkMode(!darkMode)}
              variant="ghost"
              size="icon"
              className="rounded-full backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/20"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-emerald-400" />
              ) : (
                <Moon className="w-5 h-5 text-emerald-600" />
              )}
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection darkMode={darkMode} />
        <FeaturesSection darkMode={darkMode} />
        <AboutSection darkMode={darkMode} />
        <JoinSection darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}