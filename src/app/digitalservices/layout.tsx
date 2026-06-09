'use client';

import React from 'react';
import { DigitalThemeProvider } from '@/context/DigitalThemeContext';
import DigitalThemeToggle from '@/components/ui/DigitalThemeToggle';
import WhatsAppButton from '@/components/WhatsappBtn';
import LandingPageBtn from '@/components/LandingPageBtn';
import Link from 'next/link';
import { Code, ChevronDown, Menu, X, ArrowRight, Phone, MapPin } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function DigitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const pathname = usePathname();

  const navigation = [
    {
      name: 'Services',
      dropdown: [
        { name: 'Web Development', href: '/digitalservices/web-development' },
        { name: 'WordPress Development', href: '/digitalservices/wordpress-development' },
        { name: 'SEO', href: '/digitalservices/seo' },
        { name: 'Digital Marketing', href: '/digitalservices/digital-marketing' },
        { name: 'Ecommerce', href: '/digitalservices/ecommerce' }
      ]
    },
    { name: 'About', href: '/digitalservices/about' },
    { name: 'Projects', href: '/digitalservices/projects' },
    { name: 'Contact', href: '/digitalservices/contact' },
  ];

  const isActiveLink = (href: string) => {
    if (!pathname) return false;
    if (href === '/digitalservices') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  // Scroll Progress Effect
  React.useEffect(() => {
    let ticking = false;
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(scrollPercent, 100));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isServicesOpen) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isServicesOpen]);

  return (
    <DigitalThemeProvider>
      <div className="min-h-screen bg-gray-50 digital-dark:bg-gray-900 transition-colors duration-300">
        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 digital-dark:bg-gray-700 z-50 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Floating Buttons */}
        <LandingPageBtn />
        <DigitalThemeToggle />
        <WhatsAppButton />
        
        {/* Digital Navbar */}
        <header className="sticky top-7 z-40">
          <div className="max-w-[90%] mx-auto px-4">
            <div className="flex items-center justify-between h-20 px-6 rounded-full border border-gray-200 digital-dark:border-gray-700 shadow-lg backdrop-blur-md bg-white/80 digital-dark:bg-gray-900/80 transition-all duration-300 hover:shadow-xl">
              {/* Logo */}
              <Link href="/digitalservices" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-800 digital-dark:text-white">Digital Solutions</span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700 digital-dark:text-gray-300">
                <Link
                  href="/digitalservices"
                  className={`transition-colors ${
                    isActiveLink('/digitalservices') && pathname === '/digitalservices'
                      ? 'text-blue-600 digital-dark:text-blue-400'
                      : 'hover:text-blue-600 digital-dark:hover:text-blue-400'
                  }`}
                >
                  Home
                </Link>

                {/* Services Dropdown */}
                <div className="relative inline-block">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    className="flex items-center gap-1 hover:text-blue-600 digital-dark:hover:text-blue-400 transition-colors duration-200 focus:outline-none"
                    aria-haspopup="true"
                    aria-expanded={isServicesOpen}
                  >
                    <span className={isActiveLink('/digitalservices/services') ? 'text-blue-600 digital-dark:text-blue-400' : ''}>
                      Services
                    </span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 mt-3 w-64 origin-top-left transform transition-all duration-300 ease-out z-50 ${
                      isServicesOpen
                        ? 'opacity-100 visible scale-100'
                        : 'opacity-0 invisible scale-95 pointer-events-none'
                    }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="bg-white digital-dark:bg-gray-800 border border-gray-200 digital-dark:border-gray-700 rounded-xl shadow-2xl overflow-hidden py-2">
                      {navigation.find(item => item.name === 'Services')?.dropdown?.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-6 py-3 text-sm text-gray-700 digital-dark:text-gray-300 hover:bg-blue-50 digital-dark:hover:bg-blue-900/20 hover:text-blue-600 digital-dark:hover:text-blue-400 transition-all duration-200"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href="/digitalservices/about"
                  className={`transition-colors ${
                    isActiveLink('/digitalservices/about')
                      ? 'text-blue-600 digital-dark:text-blue-400'
                      : 'hover:text-blue-600 digital-dark:hover:text-blue-400'
                  }`}
                >
                  About
                </Link>

                <Link
                  href="/digitalservices/projects"
                  className={`transition-colors ${
                    isActiveLink('/digitalservices/projects')
                      ? 'text-blue-600 digital-dark:text-blue-400'
                      : 'hover:text-blue-600 digital-dark:hover:text-blue-400'
                  }`}
                >
                  Projects
                </Link>

                <Link
                  href="/digitalservices/contact"
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </nav>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden text-gray-700 digital-dark:text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 mx-4 bg-white digital-dark:bg-gray-800 border border-gray-200 digital-dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden">
              <div className="px-6 py-6 space-y-4 font-medium text-gray-700 digital-dark:text-gray-300">
                <Link
                  href="/digitalservices"
                  className="block hover:text-blue-600 digital-dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer hover:text-blue-600 digital-dark:hover:text-blue-400 transition-colors">
                    Services
                    <ChevronDown
                      size={16}
                      className="transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="mt-3 pl-4 space-y-2 text-sm">
                    {navigation.find(item => item.name === 'Services')?.dropdown?.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block py-1 hover:text-blue-600 digital-dark:hover:text-blue-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </details>

                <Link
                  href="/digitalservices/about"
                  className="block hover:text-blue-600 digital-dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>

                <Link
                  href="/digitalservices/projects"
                  className="block hover:text-blue-600 digital-dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>

                <Link
                  href="/digitalservices/contact"
                  className="block text-center py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Digital Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 digital-dark:from-gray-950 digital-dark:to-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">Digital Solutions</span>
                </div>
                <p className="text-gray-300 digital-dark:text-gray-400 mb-4 max-w-md">
                  Transform your business with cutting-edge digital solutions, web development, and innovative technology services.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/Idealsolutionsne" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/ideal_solutionsne/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com/idealsolutions" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/company/ideal-solutions-uk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="mailto:info@idealsolutionsne.co.uk" 
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Email"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/digitalservices" className="text-gray-300 digital-dark:text-gray-400 hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/digitalservices/about" className="text-gray-300 digital-dark:text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/digitalservices/projects" className="text-gray-300 digital-dark:text-gray-400 hover:text-white transition-colors">Projects</Link></li>
                  <li><Link href="/digitalservices/contact" className="text-gray-300 digital-dark:text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/digitalservices/web-development" className="text-gray-300 digital-dark:text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
                  <li><Link href="/digitalservices/wordpress-development" className="text-gray-300 digital-dark:text-gray-400 hover:text-white transition-colors">WordPress Development</Link></li>
                  <li><Link href="/digitalservices/seo" className="text-gray-300 digital-dark:text-gray-400 hover:text-white transition-colors">SEO</Link></li>
                  <li><Link href="/digitalservices/digital-marketing" className="text-gray-300 digital-dark:text-gray-400 hover:text-white transition-colors">Digital Marketing</Link></li>
                  <li><Link href="/digitalservices/e-commerce-development" className="text-gray-300 digital-dark:text-gray-400 hover:text-white transition-colors">E-commerce Development</Link></li>
                  <li><Link href="/digitalservices/web-design" className="text-gray-300 digital-dark:text-gray-400 hover:text-white transition-colors">Web Design</Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <div className="space-y-4 text-gray-300 digital-dark:text-gray-400">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <a href="tel:+447855175014" className="hover:text-white transition-colors">+44 7855 175014</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                    <span>
                      166 West Road<br />
                      Newcastle Upon Tyne<br />
                      United Kingdom<br />
                      NE4 9QB
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 digital-dark:border-gray-600 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Digital Solutions by IDEAL SOLUTIONS. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </DigitalThemeProvider>
  );
}
