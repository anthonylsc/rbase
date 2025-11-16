import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Rocket, Shield, AlertTriangle, Users, MessageSquare, Car, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SpaceBackground from '@/components/home/SpaceBackground';

const rules = [
  {
    icon: MessageSquare,
    title: 'No Metagaming',
    description: 'Using out-of-character information in-character is strictly prohibited. Keep IC and OOC separate at all times.',
    color: 'from-red-400 to-red-600',
  },
  {
    icon: AlertTriangle,
    title: 'Fear RP',
    description: 'Value your character\'s life. If threatened with weapons or outnumbered, act realistically and comply with demands.',
    color: 'from-orange-400 to-orange-600',
  },
  {
    icon: Users,
    title: 'No Power Gaming',
    description: 'Do not force actions on other players without giving them a chance to respond. Roleplay should be collaborative.',
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    icon: Car,
    title: 'Vehicle Death Match (VDM)',
    description: 'Running over players with vehicles without valid RP reason is not allowed. Drive responsibly.',
    color: 'from-green-400 to-green-600',
  },
  {
    icon: Shield,
    title: 'Random Death Match (RDM)',
    description: 'Killing other players without proper roleplay interaction or valid reason is prohibited.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: Heart,
    title: 'New Life Rule (NLR)',
    description: 'After death, you forget the events that led to it. Do not return to the same location for 15 minutes.',
    color: 'from-purple-400 to-purple-600',
  },
];

const generalRules = [
  'Respect all players and staff members at all times',
  'No harassment, discrimination, or toxic behavior',
  'English only in global chat and voice',
  'No exploiting bugs or glitches',
  'Follow staff instructions immediately',
  'Character names must be realistic (First Name Last Name)',
  'No advertising other servers',
  'Keep your microphone quality clear',
  'Age requirement: 16+ years old',
  'Breaking character in serious RP situations is not allowed',
];

export default function Rules() {
  const [darkMode, setDarkMode] = useState(true);
  
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
              className="text-sm font-medium text-emerald-400"
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
                Rules
              </span>
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Read and understand all rules before joining. Breaking rules may result in warnings, kicks, or bans.
            </p>
          </motion.div>

          {/* RP Rules */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Roleplay Rules
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rules.map((rule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <div className={`relative p-8 rounded-3xl backdrop-blur-2xl border overflow-hidden h-full ${
                    darkMode
                      ? 'bg-white/5 border-white/10 hover:bg-white/10'
                      : 'bg-white/90 border-gray-200 hover:bg-white shadow-xl'
                  } transition-all duration-300`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${rule.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${rule.color} p-[2px] shadow-lg group-hover:shadow-xl transition-shadow`}>
                        <div className={`w-full h-full rounded-2xl flex items-center justify-center ${
                          darkMode ? 'bg-[#0a0e1a]' : 'bg-white'
                        }`}>
                          <rule.icon className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-3">
                        {rule.title}
                      </h3>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                        {rule.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* General Rules */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              General Rules
            </h2>
            <div className={`relative p-12 rounded-[3rem] backdrop-blur-2xl border overflow-hidden max-w-4xl mx-auto ${
              darkMode
                ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/20'
                : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-2xl'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10" />
              
              <div className="relative z-10 space-y-4">
                {generalRules.map((rule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {rule}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl border ${
              darkMode 
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                : 'bg-emerald-50 border-emerald-200 text-emerald-700'
            }`}>
              <Shield className="w-5 h-5" />
              <span className="font-medium">By joining, you agree to follow all server rules</span>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}