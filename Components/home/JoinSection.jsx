import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: Download,
    title: 'Download FiveM',
    description: 'Get the FiveM client installed on your PC',
  },
  {
    icon: FileText,
    title: 'Read the Rules',
    description: 'Familiarize yourself with our community guidelines',
  },
  {
    icon: Play,
    title: 'Connect & Play',
    description: 'Join the server and start your RP journey',
  },
];

export default function JoinSection({ darkMode }) {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Get Started?
            </span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Join rBase in three simple steps and become part of our thriving community
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className={`relative p-8 rounded-3xl backdrop-blur-2xl border overflow-hidden h-full ${
                darkMode
                  ? 'bg-white/5 border-white/10 hover:bg-white/10'
                  : 'bg-white/90 border-gray-200 hover:bg-white shadow-xl'
              } transition-all duration-300`}>
                {/* Step Number */}
                <div className="absolute top-6 right-6 text-7xl font-bold opacity-5">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 p-[2px] shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-shadow">
                    <div className={`w-full h-full rounded-2xl flex items-center justify-center ${
                      darkMode ? 'bg-[#0a0e1a]' : 'bg-white'
                    }`}>
                      <step.icon className="w-10 h-10 text-emerald-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector (except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-8 h-8 text-emerald-400" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className={`relative p-12 md:p-16 rounded-[3rem] backdrop-blur-2xl border overflow-hidden ${
            darkMode
              ? 'bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-emerald-500/30'
              : 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200'
          }`}>
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 blur-3xl" />
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Your Story Starts{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                  Now
                </span>
              </h3>
              <p className={`text-xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Join hundreds of players creating unforgettable moments in Los Santos. Connect now and start your journey.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0 px-10 py-7 text-lg rounded-2xl shadow-2xl shadow-emerald-500/40"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Play className="w-6 h-6" />
                    Connect to Server
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className={`px-10 py-7 text-lg rounded-2xl backdrop-blur-xl border-2 ${
                    darkMode
                      ? 'bg-white/10 border-white/30 hover:bg-white/20 text-white'
                      : 'bg-white/80 border-gray-300 hover:bg-white text-gray-900'
                  }`}
                >
                  <FileText className="w-6 h-6 mr-2" />
                  View Rules
                </Button>
              </div>
            </div>

            {/* Decorative Orbs */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/30 to-transparent rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-green-500/30 to-transparent rounded-full blur-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}