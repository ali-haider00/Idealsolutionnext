'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, Globe, Search, BarChart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SEO() {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Keyword Research",
      description: "In-depth analysis to find high-value keywords for your business"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "On-Page SEO",
      description: "Optimizing your website content and structure for search engines"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Technical SEO",
      description: "Improving site speed, mobile responsiveness, and technical factors"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Tracking performance and providing detailed insights on SEO progress"
    }
  ];

  const benefits = [
    "Increased Organic Traffic", "Higher Search Rankings", "Better User Experience", 
    "Improved Conversion Rates", "Brand Visibility", "Long-term Results"
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-cyan-900/85 z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-semibold">
                  🔍 SEO Services
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Dominate Search
                <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Engine Results
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                Strategic SEO solutions that boost your online visibility and drive qualified traffic to your website.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/digitalservices/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 bg-white text-blue-900 rounded-full font-bold shadow-2xl hover:shadow-white/50 transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <span>Start SEO Campaign</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </Link>
                
                <Link href="/digitalservices/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-cyan-500/20 backdrop-blur-sm text-white rounded-full font-bold border-2 border-cyan-400/50 hover:bg-cyan-500/30 transition-all duration-300"
                  >
                    View Case Studies
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Side - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">SEO Results</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Average Traffic Increase</span>
                    <span className="text-3xl font-bold text-cyan-400">+250%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Keyword Rankings</span>
                    <span className="text-3xl font-bold text-cyan-400">Top 10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">ROI</span>
                    <span className="text-3xl font-bold text-cyan-400">320%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-20" />
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full text-cyan-700 text-sm font-semibold">
                Our SEO Approach
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Comprehensive SEO Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Full-service SEO solutions designed to boost your online presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              SEO Benefits for Your Business
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit}</h3>
                  <p className="text-slate-600 leading-relaxed">Measurable results that drive business growth</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Boost Your Search Rankings?
            </h2>
            
            <p className="text-xl md:text-2xl text-cyan-100 mb-10 leading-relaxed">
              Let's discuss how our SEO expertise can help you dominate search results
            </p>
            
            <Link href="/digitalservices/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>Start SEO Strategy</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
