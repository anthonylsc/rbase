import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare } from 'lucide-react';

export default function JoinSection({ darkMode }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`rounded-2xl p-12 ${
            darkMode ? 'bg-gradient-to-r from-emerald-500/20 to-green-500/20' : 'bg-gradient-to-r from-emerald-100 to-green-100'
          } border border-emerald-400/50 backdrop-blur-xl`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
            Ready to Join?
          </h2>
          <p className={`text-xl text-center mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Take your first step into an amazing roleplay experience. Connect with our community today!
          </p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
          >
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2">
              <MessageSquare className="w-5 h-5" />
              Join Discord
            </Button>
            <Button size="lg" variant="outline" className="border-emerald-400 text-emerald-400 hover:bg-emerald-500/10 gap-2">
              <Mail className="w-5 h-5" />
              Contact Us
            </Button>
          </motion.div>

          <motion.p 
            className={`text-center mt-8 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            Have questions? Our support team is available 24/7 to help you get started.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
