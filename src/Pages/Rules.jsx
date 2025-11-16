import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Rocket, AlertCircle, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SpaceBackground from '@/components/home/SpaceBackground';
import Footer from '@/components/home/Footer';

const rules = [
  {
    icon: AlertCircle,
    title: 'No RDM (Random Deathmatch)',
    description: 'Do not kill other players without a valid roleplay reason. Shooting without initiation is prohibited.',
  },
  {
    icon: Users,
    title: 'Respect Other Players',
    description: 'Treat all players with respect. No toxic behavior, insults, or harassment is tolerated.',
  },
  {
    icon: Shield,
    title: 'Follow Server Laws',
    description: 'Obey all server rules and government laws. Police officers have authority to enforce these rules.',
  },
  {
    icon: AlertCircle,
    title: 'No Cheating',
    description: 'Using exploits, hacks, or cheats of any kind will result in immediate ban.',
  },
  {
    icon: Users,
    title: 'Stay In Character',
    description: 'Maintain roleplay at all times. Breaking character is not allowed.',
  },
  {
    icon: Shield,
    title: 'Report Issues',
    description: 'Use the report system for rule violations. Do not take matters into your own hands.',
  },
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
              Server Rules
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Read and understand our server rules before joining
            </p>
          </motion.div>

          {/* Rules Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {rules.map((rule, index) => {
              const Icon = rule.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-xl ${
                    darkMode ? 'bg-white/10' : 'bg-gray-100'
                  } backdrop-blur-xl border border-white/20 hover:border-emerald-400/50 transition-colors`}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">{rule.title}</h3>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {rule.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mt-16 p-6 rounded-xl border-2 border-emerald-400 ${
              darkMode ? 'bg-emerald-500/10' : 'bg-emerald-100'
            }`}
          >
            <h3 className="font-bold text-lg mb-2 text-emerald-400">⚠️ Important</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              Violating these rules will result in temporary or permanent bans. All decisions made by administrators are final. If you believe you were wrongly banned, contact our support team.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}
