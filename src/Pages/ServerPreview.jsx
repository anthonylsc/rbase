import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Rocket, Maximize2, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SpaceBackground from '@/components/home/SpaceBackground';
import Footer from '@/components/home/Footer';

const screenshots = [
  {
    title: 'Police Department',
    description: 'Join the LSPD and protect the city from criminals',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=500&fit=crop',
  },
  {
    title: 'Custom Vehicles',
    description: 'Hundreds of custom cars and bikes to choose from',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=500&fit=crop',
  },
  {
    title: 'Business Roleplay',
    description: 'Own and manage your own business in the city',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
  },
  {
    title: 'Gang Activities',
    description: 'Form gangs and control territories across Los Santos',
    image: 'https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?w=800&h=500&fit=crop',
  },
  {
    title: 'Legal Jobs',
    description: 'Work as a mechanic, taxi driver, or delivery person',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop',
  },
  {
    title: 'Custom Properties',
    description: 'Buy houses, apartments, and luxury mansions',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=500&fit=crop',
  },
];

export default function ServerPreview() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  
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
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-8 ml-auto"
          >
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
            className="ml-8"
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
      <main className="relative z-10 pt-24">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Server Preview
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Explore the amazing features and gameplay of rBase
            </p>
          </motion.div>

          {/* Screenshot Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-xl overflow-hidden cursor-pointer group relative ${
                  darkMode ? 'bg-white/10' : 'bg-gray-100'
                } backdrop-blur-xl border border-white/20 hover:border-emerald-400/50 transition-all`}
                onClick={() => setSelectedImage(screenshot)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={screenshot.image} 
                    alt={screenshot.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <Play className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{screenshot.title}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {screenshot.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full"
          >
            <img 
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}

      <Footer darkMode={darkMode} />
    </div>
  );
}
