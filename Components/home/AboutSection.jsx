import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star } from 'lucide-react';

const highlights = [
  'Realistic economy system',
  'Custom vehicles and properties',
  'Active staff and moderation',
  'Whitelist application process',
  'Voice proximity chat',
  'Regular events and competitions',
];

export default function AboutSection({ darkMode }) {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl border mb-6 ${
              darkMode 
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                : 'bg-emerald-50 border-emerald-200 text-emerald-700'
            }`}>
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">Premium RP Experience</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              More Than Just{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                A Server
              </span>
            </h2>

            <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              rBase isn't just another GTA RP server—it's a fully immersive world where your choices matter. 
              With cutting-edge technology, dedicated staff, and a passionate community, we've created the 
              ultimate roleplay environment.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Decorative Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
                className={`relative p-12 rounded-[3rem] backdrop-blur-2xl border overflow-hidden ${
                  darkMode
                    ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/20'
                    : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-2xl'
                }`}
              >
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-green-500/20" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-6xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-4">
                    500+
                  </div>
                  <div className={`text-2xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Active Players
                  </div>
                  <div className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Building stories together
                  </div>
                </div>

                {/* Floating Orbs */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 opacity-20 blur-xl"
                />
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute bottom-8 left-8 w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 opacity-20 blur-xl"
                />
              </motion.div>

              {/* Background Cards */}
              <div className={`absolute -bottom-6 -right-6 w-full h-full rounded-[3rem] backdrop-blur-xl border -z-10 ${
                darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-100 border-gray-200'
              }`} />
              <div className={`absolute -bottom-12 -right-12 w-full h-full rounded-[3rem] backdrop-blur-xl border -z-20 ${
                darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'
              }`} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}