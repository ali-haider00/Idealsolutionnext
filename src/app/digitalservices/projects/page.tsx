'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Code, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useDigitalTheme } from '@/context/DigitalThemeContext';

interface Project {
  id?: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  technologies: string[];
  category?: string;
  date?: string;
  github?: string;
  tech?: string[];
}

export default function DigitalProjects() {
  const { theme } = useDigitalTheme();
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Modern online shopping platform with real-time inventory and payment processing",
      image: "https://images.unsplash.com/photo-1556738732-e97614d56d5?w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      technologies: ["Full-stack Development", "Payment Integration", "Admin Dashboard"],
      category: "E-commerce",
      date: "March 2026"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking solution for modern financial management",
      image: "https://images.unsplash.com/photo-1560472355-4c034f52f82?w=800&q=80",
      tags: ["React Native", "TypeScript", "Firebase", "Security"],
      link: "#",
      technologies: ["Mobile Development", "Security", "Real-time Sync"],
      category: "Fintech",
      date: "February 2026"
    },
    {
      id: 3,
      title: "Healthcare Portal",
      description: "Comprehensive patient management system for healthcare providers",
      image: "https://images.unsplash.com/photo-1576091160550-54e6b6c6d89?w=800&q=80",
      tags: ["Vue.js", "Python", "PostgreSQL", "HIPAA"],
      link: "#",
      technologies: ["Web Development", "Database Design", "Compliance"],
      category: "Healthcare",
      date: "January 2026"
    },
    {
      id: 4,
      title: "Real Estate Platform",
      description: "Property management and listing platform with virtual tour capabilities",
      image: "https://images.unsplash.com/photo-1560472355-4c034f52f82?w=800&q=80",
      tags: ["Next.js", "GraphQL", "AWS", "Maps API"],
      link: "#",
      technologies: ["Full-stack", "Cloud Infrastructure", "API Integration"],
      category: "Real Estate",
      date: "December 2025"
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      description: "Analytics and management dashboard for subscription-based services",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a2a?w=800&q=80",
      tags: ["Angular", "D3.js", "Node.js", "WebSocket"],
      link: "#",
      technologies: ["Frontend Development", "Data Visualization", "Real-time Data"],
      category: "SaaS",
      date: "November 2025"
    },
    {
      id: 6,
      title: "Social Media App",
      description: "Social networking platform with real-time messaging and content sharing",
      image: "https://images.unsplash.com/photo-1611225627800-6b030b95ec7?w=800&q=80",
      tags: ["React", "Socket.io", "Redis", "Cloud Storage"],
      link: "#",
      technologies: ["Real-time Communication", "Cloud Architecture", "Scalability"],
      category: "Social",
      date: "October 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 digital-dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'ur[](https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-cyan-900/85 digital-dark:from-slate-950/95 digital-dark:via-blue-950/90 digital-dark:to-cyan-950/85 z-10" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 z-10 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-semibold">
                  🚀 Our Portfolio
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Digital{' '}
                <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Projects Showcase
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                Explore our latest digital projects and see how we've helped businesses transform their online presence.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 digital-dark:from-gray-900 to-transparent z-20" />
      </section>

      {/* Projects Grid - Clean & Modern Version */}
      <section className="py-20 px-4 bg-white digital-dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 digital-dark:from-cyan-900 digital-dark:to-blue-900 rounded-full text-cyan-700 digital-dark:text-cyan-300 text-sm font-semibold">
                Featured Projects
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 digital-dark:text-white mb-4">
              Recent Digital Projects
            </h2>
            <p className="text-xl text-slate-600 digital-dark:text-gray-300 max-w-2xl mx-auto">
              Cutting-edge solutions that deliver exceptional results for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100"
              >
                {/* Project Image */}
                <div className="relative h-48 mb-6 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-8">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies List */}
                  <div className="space-y-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center text-sm text-slate-600">
                        <Code className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <Link 
                    href={project.link} 
                    className="inline-flex items-center text-cyan-600 font-semibold hover:text-blue-600 transition-colors group-hover:translate-x-1"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Next Project?
            </h2>
            
            <p className="text-xl md:text-2xl text-cyan-100 mb-10 leading-relaxed">
              Let's discuss how our expertise can bring your digital vision to life
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/digitalservices/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </Link>
              
              <Link href="/digitalservices/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-cyan-500/20 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-cyan-400/50 hover:bg-cyan-500/30 transition-all duration-300"
                >
                  View All Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}