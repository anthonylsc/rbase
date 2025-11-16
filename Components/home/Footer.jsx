import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Heart } from 'lucide-react';

export default function Footer({ darkMode }) {
  return (
    <footer className={`relative py-12 px-6 border-t ${
      darkMode ? 'border-white/10 bg-black/20' : 'border-gray-200 bg-gray-50/50'
    } backdrop-blur-xl`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Branding */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center rotate-12 shadow-lg shadow-emerald-500/50">
              <Rocket className="w-6 h-6 text-white -rotate-12" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                rBase
              </span>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Premium GTA RP Server
              </p>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-sm text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span>© 2024 rBase. All rights reserved.</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500" /> for the community
              </span>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {['Discord', 'Rules', 'Support'].map((link, index) => (
              <a
                key={index}
                href="#"
                className={`text-sm font-medium hover:text-emerald-400 transition-colors ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {link}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}