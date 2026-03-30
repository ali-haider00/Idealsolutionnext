'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="relative lg:-mt-40 z-30 py-24 overflow-hidden">
      {/* Decorative blur circles - Updated colors */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-600/10 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-sm px-10 rounded-xl shadow-2xl relative z-10 border border-cyan-900/30">
        <div className="grid md:grid-cols-3 gap-12 py-6">
          {/* Column 1: Who We Are */}
          <div className="relative pl-8 text-center md:text-left group">
            {/* Gradient vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-700 to-transparent rounded-full" />

            {/* Subtle glow effect on hover */}
            <div className="absolute -left-4 top-1/4 w-8 h-32 bg-cyan-500/0 group-hover:bg-cyan-500/20 blur-xl transition-all duration-500 rounded-full" />

            <h3 className="text-3xl font-bold text-white mt-10 mb-6 relative">
              Who We Are
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              At IDEAL SOLUTIONS, we are a team of passionate digital innovators committed to helping businesses thrive in the digital age. From web development and mobile apps to design and marketing, we deliver solutions that make a real impact.
            </p>
          </div>

          {/* Column 2: Our Mission */}
          <div className="relative pl-8 text-center md:text-left group">
            {/* Gradient vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-teal-700 to-transparent rounded-full" />

            {/* Subtle glow effect on hover */}
            <div className="absolute -left-4 top-1/4 w-8 h-32 bg-blue-500/0 group-hover:bg-blue-500/20 blur-xl transition-all duration-500 rounded-full" />

            <h3 className="text-3xl font-bold text-white mt-10 mb-6 relative">
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Our mission is to empower businesses with cutting-edge technology, creative design, and strategic digital marketing—delivering measurable results that drive growth and exceed expectations.
            </p>
          </div>

          {/* Column 3: Our Vision */}
          <div className="relative pl-8 text-center md:text-left group">
            {/* Gradient vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-teal-500 via-cyan-700 to-transparent rounded-full" />

            {/* Subtle glow effect on hover */}
            <div className="absolute -left-4 top-1/4 w-8 h-32 bg-teal-500/0 group-hover:bg-teal-500/20 blur-xl transition-all duration-500 rounded-full" />

            <h3 className="text-3xl font-bold text-white mt-10 mb-6 relative">
              Our Vision
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              We aim to be the UK's most trusted digital partner, recognized for innovation, excellence, and transforming businesses through powerful digital solutions that stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
