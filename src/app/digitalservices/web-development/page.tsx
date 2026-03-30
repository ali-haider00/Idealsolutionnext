'use client';

import { motion } from 'framer-motion';
import { Code, ArrowRight, CheckCircle, Rocket, Globe, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function WebDevelopment() {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Modern Technologies",
      description: "We use the latest frameworks and tools to build cutting-edge web applications"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized performance with fast loading times and smooth user experiences"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Perfect display across all devices with mobile-first approach"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Built with security best practices and reliable hosting solutions"
    }
  ];

  const technologies = [
    "React.js", "Next.js", "TypeScript", "Tailwind CSS",
    "Node.js", "PostgreSQL", "MongoDB", "REST APIs",
    "Docker", "AWS", "CI/CD", "Testing"
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1461749280654-72142164eec0?w=1920&q=80)',
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
                  🚀 Web Development
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Building
                <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Modern Web Experiences
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                We create powerful, scalable web applications that drive business growth and deliver exceptional user experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/digitalservices/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 bg-white text-blue-900 rounded-full font-bold shadow-2xl hover:shadow-white/50 transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <span>Start Your Project</span>
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

      {/* Technologies Section */}
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
                Our Tech Stack
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks to build robust web applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-100 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-semibold text-slate-700 group-hover:text-cyan-600 transition-colors">
                    {tech}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-semibold">
                How We Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {['Discovery', 'Planning', 'Development', 'Launch'].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-6xl font-bold text-cyan-500/30 leading-none mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{step}</h3>
                <p className="text-slate-300 leading-relaxed">
                  {index === 0 && "We understand your business goals and requirements"}
                  {index === 1 && "Strategic planning and roadmap development"}
                  {index === 2 && "Building robust and scalable solutions"}
                  {index === 3 && "Deployment and ongoing support"}
                </p>
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
              Ready to Build Your Web Application?
            </h2>
            
            <p className="text-xl md:text-2xl text-cyan-100 mb-10 leading-relaxed">
              Let's discuss how our web development expertise can help you achieve your goals
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
