'use client';

import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Globe, ArrowRight, CheckCircle, Sparkles, Zap, Target, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import AboutSection from '@/components/AboutSection';
import { useDigitalTheme } from '@/context/DigitalThemeContext';

const slides = [
  {
    bg: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80",
    title: "Transform Your Digital Presence",
    desc: "We create stunning websites, mobile apps, and digital marketing solutions that drive results and grow your business online.",
  },
  {
    bg: "https://images.unsplash.com/photo-1467232022278-aac43c8e4d4?w=1920&q=80", 
    title: "Custom Web Development",
    desc: "Build powerful, responsive websites and web applications tailored to your business needs with cutting-edge technologies.",
  },
  {
    bg: "https://images.unsplash.com/photo-1559027615-cd4638b91561?w=1920&q=80",
    title: "Digital Marketing Excellence",
    desc: "Reach your target audience with data-driven digital marketing strategies that deliver measurable results.",
  }
];

export default function DigitalHome() {
  const { theme } = useDigitalTheme();
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["React & Vue.js", "Node.js Backend", "Responsive Design", "API Integration"],
      color: "from-blue-600 to-cyan-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "iOS & Android", "App Store Deployment"],
      color: "from-cyan-500 to-sky-600"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design that creates beautiful and intuitive experiences",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-sky-500 to-blue-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Comprehensive digital strategies to grow your online presence",
      features: ["SEO Optimization", "Social Media", "Content Marketing", "Analytics"],
      color: "from-blue-500 to-indigo-600"
    }
  ];

  const process = [
    { step: "01", title: "Discovery", description: "We understand your business goals and requirements", icon: Target },
    { step: "02", title: "Planning", description: "Strategic planning and roadmap development", icon: Sparkles },
    { step: "03", title: "Design", description: "Creating beautiful and functional designs", icon: Palette },
    { step: "04", title: "Development", description: "Building robust and scalable solutions", icon: Code },
    { step: "05", title: "Testing", description: "Thorough testing and quality assurance", icon: CheckCircle },
    { step: "06", title: "Launch", description: "Deployment and ongoing support", icon: Award }
  ];

  const stats = [
    { value: "150+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { value: "98%", label: "Client Satisfaction", icon: <CheckCircle className="w-6 h-6" /> },
    { value: "24/7", label: "Support Available", icon: <Zap className="w-6 h-6" /> },
    { value: "50+", label: "Expert Team Members", icon: <Code className="w-6 h-6" /> }
  ];

  return (
    <>
      {/* Updated Hero Section - Blue Dominant Theme */}
      <section className="relative h-[92vh] w-[96%] mx-auto rounded-3xl overflow-hidden shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'ur[](https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>

        {/* Enhanced Blue Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-blue-950/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent z-10" />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-10 z-10" 
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center justify-center px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-cyan-300 text-sm font-medium">
                <Sparkles className="w-4 h-4" /> Premium Digital Solutions
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tighter">
                Transform Your<br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h1>

              <p className="text-xl text-blue-100 max-w-lg leading-relaxed">
                We craft high-performance websites, mobile apps, and digital strategies that drive real business growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/digitalservices/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 bg-white text-blue-950 font-semibold px-8 py-4 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>

                <Link href="/digitalservices/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 border-2 border-white/70 text-white font-semibold px-8 py-4 rounded-2xl text-lg hover:bg-white/10 backdrop-blur transition-all"
                  >
                    Explore Services
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="hidden lg:flex justify-center relative">
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: -8 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
              >
                <div className="w-80 h-80 bg-gradient-to-br from-blue-500/30 to-cyan-400/30 rounded-[3rem] backdrop-blur-2xl border border-white/30 flex items-center justify-center shadow-2xl">
                  <div className="w-52 h-52 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center border border-white/20">
                    <Code className="w-24 h-24 text-white" />
                  </div>
                </div>

                {/* Floating accents */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-cyan-400/80 rounded-2xl backdrop-blur flex items-center justify-center shadow-xl">
                  <Smartphone className="w-10 h-10 text-blue-950" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 z-20">
          <span className="text-xs tracking-widest mb-2">SCROLL TO EXPLORE</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            ↓
          </motion.div>
        </div>
      </section>
<AboutSection />
      {/* Services Section - Updated Cards */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Our Expertise</span>
            <h2 className="text-5xl font-bold text-slate-900 mt-4 mb-4">Comprehensive Digital Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end digital services designed to elevate your brand and accelerate growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white digital-dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl border border-slate-100 digital-dark:border-gray-700 overflow-hidden transition-all duration-500"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${service.color}`} />
                
                <div className="p-9">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-8 group-hover:rotate-12 transition-transform`}>
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 digital-dark:text-white mb-3">{service.title}</h3>
                  <p className="text-slate-600 digital-dark:text-gray-300 mb-8 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 digital-dark:text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process, Stats, CTA, and AboutSection remain the same but with minor color consistency tweaks if needed */}
      {/* (I kept them mostly unchanged for brevity, but they now align better with the blue theme) */}

      {/* Process Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-slate-100 digital-dark:from-gray-900 digital-dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-5 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold">Our Process</span>
            <h2 className="text-5xl font-bold text-slate-900 digital-dark:text-white mt-4 mb-4">How We Deliver Excellence</h2>
            <p className="text-xl text-slate-600 digital-dark:text-gray-300 max-w-3xl mx-auto">A proven 6-step methodology that ensures every project succeeds</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white digital-dark:bg-gray-800 p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all text-center border border-slate-100 digital-dark:border-gray-700"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 font-bold rounded-2xl mb-6 text-lg">
                  {step.step}
                </div>
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl mb-6">
                  <step.icon className="w-9 h-9 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 digital-dark:text-white mb-3">{step.title}</h3>
                <p className="text-slate-600 digital-dark:text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section (unchanged but fits blue theme) */}
      <section className="py-24 px-4 bg-white digital-dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-10 rounded-3xl bg-gradient-to-br from-slate-50 to-white digital-dark:from-gray-700 digital-dark:to-gray-800 border border-slate-100 digital-dark:border-gray-600 hover:border-blue-200 digital-dark:hover:border-blue-400 transition-all"
              >
                <div className="mx-auto inline-flex p-4 bg-blue-100 rounded-2xl mb-6">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold text-slate-900 digital-dark:text-white mb-2">{stat.value}</div>
                <div className="text-slate-600 digital-dark:text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-12 left-12 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
          <div className="absolute bottom-12 right-12 w-80 h-80 bg-blue-400 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Elevate Your Digital Presence?</h2>
            <p className="text-2xl text-blue-100 mb-12">Let’s build something extraordinary together</p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/digitalservices/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-12 py-6 bg-white text-blue-950 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-cyan-500/30 transition-all flex items-center gap-3"
                >
                  Start Your Project
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </Link>

              <Link href="/digitalservices/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-12 py-6 border-2 border-white/60 text-white rounded-2xl font-bold text-xl hover:bg-white/10 transition-all"
                >
                  View All Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      
    </>
  );
}