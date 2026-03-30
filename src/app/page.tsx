'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Sparkles, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

export default function Landing() {
  const router = useRouter();
  const clickSound = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    if (clickSound.current) {
      clickSound.current.currentTime = 0;
      clickSound.current.play();
    }
  };

  const handleDigitalClick = () => {
    playSound();
    setTimeout(() => {
      router.push('/digitalservices');
    }, 150);
  };

  const handleUtilitiesClick = () => {
    playSound();
    setTimeout(() => {
      router.push('/utilities-services');
    }, 150);
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      
      {/* 🔊 Click Sound */}
      <audio ref={clickSound} src="/sounds/click.mp3" preload="auto" />

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-8 py-3 bg-white/80 backdrop-blur-md shadow-sm h-[70px]">
        <div className="flex items-center">
          <Image
            src="/assets/logo.jpeg"
            alt="Ideal Solutions"
            width={60}
            height={60}
            className="h-10 md:h-14 w-auto rounded-lg object-cover shadow-md"
          />
          <div className="ml-3 hidden sm:block">
            <h1 className="text-base md:text-lg font-bold text-slate-800">
              Ideal Solutions
            </h1>
            <p className="text-xs text-slate-600">
              Excellence in Service
            </p>
          </div>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="flex flex-col md:flex-row h-full pt-[70px]">

        {/* ========== DIGITAL SERVICES ========== */}
        <motion.div
          onClick={handleDigitalClick}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full md:w-1/2 h-1/2 md:h-full cursor-pointer group overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80)',
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-blue-700/85 to-slate-900/90" />

          <div className="relative h-full flex flex-col justify-center items-center text-white px-6 md:px-12 text-center">
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-full p-4 md:p-6 mb-5 border border-white/20"
            >
              <Code className="w-10 h-10 md:w-14 md:h-14" />
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3">
              Digital Services
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-md">
              Transform your business with modern web, mobile, and cloud solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {['Web Development', 'Mobile Apps', 'Cloud Solutions'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/20 rounded-full text-xs md:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/30 group-hover:bg-white group-hover:text-blue-600 transition"
            >
              Explore Digital
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </motion.div>
          </div>

          <Sparkles className="hidden md:block absolute top-10 right-10 w-16 h-16 text-white opacity-20 animate-pulse" />
        </motion.div>

        {/* ========== UTILITIES SERVICES ========== */}
        <motion.div
          onClick={handleUtilitiesClick}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full md:w-1/2 h-1/2 md:h-full cursor-pointer group overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80)',
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/90 via-teal-700/85 to-slate-900/90" />

          <div className="relative h-full flex flex-col justify-center items-center text-white px-6 md:px-12 text-center">
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-md rounded-full p-4 md:p-6 mb-5 border border-white/20"
            >
              <Zap className="w-10 h-10 md:w-14 md:h-14" />
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3">
              Utilities Services
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-emerald-100 max-w-md">
              Manage energy, solar, and business utilities efficiently.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {['Energy Solutions', 'Solar Power', 'Cost Optimization'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/20 rounded-full text-xs md:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/30 group-hover:bg-white group-hover:text-emerald-600 transition"
            >
              Explore Utilities
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </motion.div>
          </div>

          <TrendingUp className="hidden md:block absolute bottom-10 left-10 w-16 h-16 text-white opacity-20 animate-pulse" />
        </motion.div>
      </main>
    </div>
  );
}