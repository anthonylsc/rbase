import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Shield, Zap, Server, Gamepad2 } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'High Performance',
    description: 'Ultra-fast servers with minimal lag and maximum stability',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Join a thriving community of passionate roleplayers',
  },
  {
    icon: Shield,
    title: 'Anti-Cheat System',
    description: 'Advanced protection against cheaters and exploiters',
  },
  {
    icon: Zap,
    title: 'Custom Scripts',
    description: 'Unique gameplay features and custom jobs',
  },
  {
    icon: Server,
    title: 'Advanced Economy',
    description: 'Complex business and banking systems',
  },
  {
    icon: Gamepad2,
    title: 'Rich Roleplay',
    description: 'Immersive scenarios and endless possibilities',
  },
];

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: index * 0.12,
    },
  }),
};

export default function FeaturesSection({ darkMode }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
            Amazing Features
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Experience the best GTA RP server has to offer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={featureVariants}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-white/5' : 'bg-gray-100'
                } backdrop-blur-xl border border-white/10 hover:border-emerald-400/50 transition-colors hover:bg-white/10`}
                style={{ willChange: 'transform, opacity' }}
              >
                <Icon className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
