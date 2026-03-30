'use client';

import { motion } from 'framer-motion';
import { Users, Award, Target, Code } from 'lucide-react';
import { useDigitalTheme } from '@/context/DigitalThemeContext';

export default function DigitalAbout() {
  const { theme } = useDigitalTheme();
  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 digital-dark:from-gray-900 digital-dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold text-gray-900 digital-dark:text-white mb-6">
            About Digital Solutions
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 digital-dark:text-gray-300">
            We're a team of passionate digital experts dedicated to transforming businesses through innovative technology solutions.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white digital-dark:bg-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-3xl font-bold text-gray-900 digital-dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-600 digital-dark:text-gray-300 mb-6">To empower businesses with cutting-edge digital solutions that drive growth, efficiency, and innovation in the digital age.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-3xl font-bold text-gray-900 digital-dark:text-white mb-4">Our Vision</h2>
            <p className="text-gray-600 digital-dark:text-gray-300 mb-6">To be the leading digital transformation partner for businesses worldwide, creating exceptional digital experiences that matter.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50 digital-dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 digital-dark:text-white mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Users />, title: "Expert Team", desc: "10+ years experience" },
              { icon: <Award />, title: "Proven Results", desc: "500+ projects delivered" },
              { icon: <Target />, title: "Goal Oriented", desc: "Focused on your success" },
              { icon: <Code />, title: "Cutting Edge", desc: "Latest technologies" }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-blue-600 digital-dark:text-blue-400 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 digital-dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 digital-dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
