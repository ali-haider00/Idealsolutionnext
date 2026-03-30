'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import PageBanner from '@/components/ui/PageBanner';
import sectorsData from '@/components/data/sectorsData';
import StatsCounter from '@/components/StatsCounter';

function Sectors() {
  const sectors = sectorsData;

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Mobile auto-looping (every 5 seconds)
  useEffect(() => {
    // Don't run auto-loop on desktop or if no sectors
    if (typeof window !== 'undefined' && window.innerWidth > 768) return;
    if (sectors.length === 0) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % sectors.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sectors.length]);

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex((prev) => {
      if (newDirection === 1) {
        return prev === sectors.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? sectors.length - 1 : prev - 1;
      }
    });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  // Helper to get preview image
  const getPreviewImage = (sector: any) => {
    return sector.bannerImage || sector.intro?.images?.[0] || "/assets/download.jpg";
  };

  return (
    <>
      <PageBanner
        title="Our Sectors"
        breadcrumb="Home / Sectors"
        backgroundImage="/assets/scott-blake-x-ghf9LjrVg-unsplash.jpg"
      />

      {/* Elegant Intro Section */}
      <section className="py-20 lg:py-32 bg-[var(--bg-main)]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center px-6"
        >
          <div className="flex items-center justify-center gap-10 mb-12">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="h-0.5 w-40 bg-gradient-to-r from-transparent via-[var(--secondary-500)] to-transparent rounded-full"
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-8 leading-tight"
          >
            Diverse Expertise Across Key Industries
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="text-xl text-[var(--text-muted)] max-w-4xl mx-auto leading-relaxed"
          >
            At IDEAL SOLUTIONS, we deliver tailored energy, utilities, telecoms, and insurance solutions to a wide range of sectors — helping businesses reduce costs, improve efficiency, and focus on what matters most.
          </motion.p>
        </motion.div>
      </section>

      {/* Modern Carousel Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden bg-[var(--bg-main)]">
        {/* Subtle Background Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary-500)]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--secondary-500)]/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-500)]/10 border border-[var(--border-color)] mb-6"
            >
              <Sparkles className="w-4 h-4 text-[var(--primary-600)]" />
              <span className="text-sm font-semibold text-[var(--text-main)]">
                Our Sectors
              </span>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-4">
              Explore Our Industries
            </h2>
            <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
              Discover diverse sectors we serve with excellence and innovation
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Main Card Display */}
            <div className="relative h-[600px] lg:h-[700px] flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="sync">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.3 },
                  }}
                  className="absolute w-full max-w-4xl"
                >
                  <Link href={`/utilities-services/sectors/${sectors[activeIndex].slug}`} className="block">
                    <div className="group relative rounded-3xl overflow-hidden bg-[var(--bg-card)] shadow-2xl hover:shadow-3xl transition-all duration-500 border border-[var(--border-color)]">
                      {/* Image Container */}
                      <div className="relative h-[400px] lg:h-[480px] overflow-hidden">
                        <img
                          src={getPreviewImage(sectors[activeIndex])}
                          alt={sectors[activeIndex].title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                            {sectors[activeIndex].title}
                          </h3>
                          <p className="text-white/95 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl line-clamp-3">
                            {sectors[activeIndex].intro.description}
                          </p>

                          {/* Green CTA Button */}
                          <div className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--secondary-500)] hover:bg-[var(--secondary-600)] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group/btn">
                            <span>Explore Sector</span>
                            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigate(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-20 z-20 p-4 rounded-full bg-[var(--bg-card)] text-[var(--text-main)] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-[var(--border-color)]"
              aria-label="Previous sector"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => navigate(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-20 z-20 p-4 rounded-full bg-[var(--bg-card)] text-[var(--text-main)] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-[var(--border-color)]"
              aria-label="Next sector"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-12">
              {sectors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? "w-12 h-3 bg-[var(--primary-600)]"
                      : "w-3 h-3 bg-[var(--border-color)] hover:opacity-70"
                  }`}
                  aria-label={`Go to sector ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsCounter />
    </>
  );
}

export default Sectors;
