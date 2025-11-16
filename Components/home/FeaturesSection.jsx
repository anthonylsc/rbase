import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Zap, Users, Server, Sparkles, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Anti-Cheat Protection',
    description: 'Advanced security systems to ensure fair gameplay for everyone',
    color: 'from-emerald-400 to-green-500',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimized servers for smooth, lag-free roleplay experience',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Active Community',
    description: 'Join hundreds of players creating unique stories every day',
    color: 'from-emerald-500 to-green-600',
  },
  {
    icon: Server,
    title: 'Custom Scripts',
    description: 'Unique features and mechanics built exclusively for rBase',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Sparkles,
    title: 'Regular Updates',
    description: 'New content, features, and improvements added constantly',
    color: 'from-emerald-400 to-green-400',
  },
  {
    icon: Globe,
    title: 'Global Server',
    description: 'Connect with players from around the world, 24/7',
    color: 'from-green-400 to-emerald-600',
  },
];

export default function FeaturesSection({ darkMode }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              rBase
            </span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Experience next-generation roleplay with cutting-edge features and unmatched performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className={`relative p-8 rounded-3xl backdrop-blur-2xl border overflow-hidden h-full ${
                darkMode
                  ? 'bg-white/5 border-white/10 hover:bg-white/10'
                  : 'bg-white/90 border-gray-200 hover:bg-white shadow-xl'
              } transition-all duration-300`}>
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-[2px] shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-shadow`}>
                    <div className={`w-full h-full rounded-2xl flex items-center justify-center ${
                      darkMode ? 'bg-[#0a0e1a]' : 'bg-white'
                    }`}>
                      <feature.icon className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}