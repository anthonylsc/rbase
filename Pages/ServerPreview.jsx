import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Rocket, Play, Image as ImageIcon, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SpaceBackground from '@/components/home/SpaceBackground';

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
              className="text-sm font-medium text-emerald-400"
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
      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Server{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Preview
              </span>
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Explore what rBase has to offer. Check out our custom features, vehicles, and gameplay.
            </p>
          </motion.div>

          {/* Screenshots Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(screenshot)}
              >
                <div className={`relative rounded-3xl overflow-hidden backdrop-blur-2xl border ${
                  darkMode
                    ? 'bg-white/5 border-white/10 hover:border-emerald-500/50'
                    : 'bg-white/90 border-gray-200 hover:border-emerald-500 shadow-xl'
                } transition-all duration-300`}>
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={screenshot.image} 
                      alt={screenshot.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Overlay Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/90 flex items-center justify-center">
                        <Maximize2 className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                      {screenshot.title}
                    </h3>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className={`relative p-16 rounded-[3rem] backdrop-blur-2xl border overflow-hidden ${
              darkMode
                ? 'bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-emerald-500/30'
                : 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 blur-3xl" />
              
              <div className="relative z-10 text-center">
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Experience{' '}
                  <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                    rBase?
                  </span>
                </h3>
                <p className={`text-xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Join our community today and start your roleplay adventure in Los Santos.
                </p>
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0 px-10 py-7 text-lg rounded-2xl shadow-2xl shadow-emerald-500/40"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Play className="w-6 h-6" />
                    Join Server Now
                  </span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="w-full h-auto rounded-3xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent rounded-b-3xl">
              <h3 className="text-3xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300 text-lg">{selectedImage.description}</p>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}