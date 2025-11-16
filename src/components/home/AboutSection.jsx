import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection({ darkMode }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1538481143235-7dfd5d5ce8e0?w=500&h=500&fit=crop"
              alt="About rBase"
              className="rounded-xl shadow-2xl shadow-emerald-500/20"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              About rBase
            </h2>
            <p className={`text-lg mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              rBase is a premium GTA Roleplay server dedicated to providing the most immersive and engaging roleplay experience possible. Our server combines cutting-edge technology with a passionate community to create an unforgettable gaming environment.
            </p>
            <p className={`text-lg mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Since our launch, we've been committed to delivering quality content, fair gameplay, and amazing support to our players. Join thousands of satisfied players who call rBase their second home.
            </p>
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xl">
                ✓
              </div>
              <span className="font-semibold">Verified by the community</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
