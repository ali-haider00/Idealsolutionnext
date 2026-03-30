'use client';

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const services = [
    "Business Electricity",
    "Business Gas",
    "Business Insurance",
    "Business Telecoms",
    "Business Water",
    "Domestic Energy",
    "Merchant Service",
  ];

  // Scroll Progress Effect
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const progress =
            totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[var(--scroll-bar-bg)] z-50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[var(--primary-500)] via-[var(--secondary-500)] to-[var(--primary-600)] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Navbar */}
      <header className="sticky top-7 z-40">
        <div className="max-w-[90%] mx-auto px-4">
          <div
            className="flex items-center justify-between h-20 px-6 rounded-full border border-[var(--border-color)] shadow-lg backdrop-blur-md transition-shadow duration-300 hover:shadow-xl"
            style={{
              backgroundColor: "var(--bg-nav-blur)",
              borderColor: "var(--border-color)",
            }}
          >
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/utilities-services">
                <Image
                  src="/assets/logo.jpeg"
                  alt="Ideal Solutions"
                  width={64}
                  height={64}
                  className="h-16 w-auto rounded-xl object-cover"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 font-medium text-[var(--text-main)]">
              <Link
                href="/utilities-services"
                className="hover:text-[var(--primary-600)] transition-colors"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative inline-block">
                {/* Trigger */}
                <button
                  onClick={() => setServicesOpen(!servicesOpen)} // Click works on mobile too
                  onMouseEnter={() => setServicesOpen(true)} // Hover for desktop
                  className="flex items-center gap-1 hover:text-[var(--primary-600)] transition-colors duration-200 focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  <Link
                    href="/utilities-services/services"
                    className="hover:text-[var(--primary-600)] transition-colors"
                  >
                    Services
                  </Link>

                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-3 w-64 origin-top-left transform transition-all duration-300 ease-out z-50 ${
                    servicesOpen
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-95 pointer-events-none"
                  }`}
                  onMouseEnter={() => setServicesOpen(true)} // Keep open when hovering menu
                  onMouseLeave={() => setServicesOpen(false)} // Safe close only when leaving entire area
                >
                  <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl shadow-2xl overflow-hidden py-2">
                    {services.map((item) => {
                      const slug = item.toLowerCase().replace(/\s+/g, "-");

                      return (
                        <Link
                          key={item}
                          href={`/utilities-services/services/${slug}`}
                          className="block px-6 py-3 text-sm text-[var(--text-main)] hover:bg-[var(--primary-500)]/10 hover:text-[var(--primary-600)] transition-all duration-200"
                          onClick={() => setServicesOpen(false)} // Close on selection
                        >
                          {item}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <Link
                href="/utilities-services/sectors"
                className="hover:text-[var(--primary-600)] transition-colors"
              >
                Sectors
              </Link>
              <Link
                href="/utilities-services/complaints"
                className="hover:text-[var(--primary-600)] transition-colors"
              >
                Complaints Handling
              </Link>
              <Link
                href="/utilities-services/about"
                className="hover:text-[var(--primary-600)] transition-colors"
              >
                About Us
              </Link>

              <Link
                href="/utilities-services/contact"
                className="px-5 py-2.5 bg-[var(--secondary-500)] text-white rounded-xl hover:bg-[var(--secondary-600)] transition-colors"
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-[var(--text-main)]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 mx-4 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-6 space-y-4 font-medium text-[var(--text-main)]">
              <Link
                href="/utilities-services"
                className="block hover:text-[var(--primary-600)] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer hover:text-[var(--primary-600)] transition-colors">
                  Services
                  <ChevronDown
                    size={16}
                    className="transition-transform group-open:rotate-180"
                  />
                </summary>
                <div className="mt-3 pl-4 space-y-2 text-sm">
                  {services.map((item) => (
                    <Link
                      key={item}
                      href={`/utilities-services/services/${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="block py-1 hover:text-[var(--primary-600)] transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </details>

              <Link
                href="/utilities-services/sectors"
                className="block hover:text-[var(--primary-600)] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Sectors
              </Link>
              <Link
                href="/utilities-services/complaints"
                className="block hover:text-[var(--primary-600)] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Complaints Handling
              </Link>
              <Link
                href="/utilities-services/about"
                className="block hover:text-[var(--primary-600)] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/utilities-services/contact"
                className="block text-center py-3 bg-[var(--secondary-500)] text-white rounded-xl hover:bg-[var(--secondary-600)] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
