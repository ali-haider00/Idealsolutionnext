'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Globe, Zap, Shield, Database } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function WordPressDevelopment() {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Custom Themes",
      description: "Unique, responsive WordPress themes tailored to your brand identity"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Plugin Development",
      description: "Custom plugins to extend WordPress functionality and meet specific needs"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Lightning-fast loading times and smooth user experiences"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Maintenance",
      description: "Regular updates, security monitoring, and reliable maintenance"
    }
  ];

  const services = [
    "Custom Theme Development", "Plugin Creation", "E-commerce Integration", 
    "SEO Optimization", "Performance Tuning", "Security Hardening",
    "Content Migration", "Multi-site Setup", "API Integration"
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558629362-489e3d8e3e2?w=1920&q=80)',
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
                  📝 WordPress Development
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Professional
                <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                  WordPress Solutions
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                Custom WordPress websites and solutions that are powerful, scalable, and perfectly tailored to your business needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/digitalservices/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 bg-white text-blue-900 rounded-full font-bold shadow-2xl hover:shadow-white/50 transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </Link>
                
                <Link href="/digitalservices/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-cyan-500/20 backdrop-blur-sm text-white rounded-full font-bold border-2 border-cyan-400/50 hover:bg-cyan-500/30 transition-all duration-300"
                  >
                    View Projects
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Side - Feature Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-20" />
      </section>

      {/* Services Grid */}
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
                Our WordPress Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Complete WordPress Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need for a successful WordPress website
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {service}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    Professional WordPress development and implementation services
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our WordPress Services?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Expert Developers</h3>
                <p className="text-slate-300">Years of WordPress experience with proven track record</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
                <p className="text-slate-300">Tailored WordPress solutions that match your exact requirements</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ongoing Support</h3>
                <p className="text-slate-300">Continuous maintenance and support for your WordPress site</p>
              </div>
            </div>
          </motion.div>
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
              Ready to Transform Your WordPress Site?
            </h2>
            
            <p className="text-xl md:text-2xl text-cyan-100 mb-10 leading-relaxed">
              Let's discuss how our WordPress expertise can help you achieve your goals
            </p>
            
            <Link href="/digitalservices/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
