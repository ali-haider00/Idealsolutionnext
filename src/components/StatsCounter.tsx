'use client';
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const statsData = [
  { value: 455, label: "Happy Clients Served" },
  { value: 92, label: "% Customer Satisfaction" },
  { value: 39, label: "Million £ Saved for Clients" },
  { value: 127, label: "Successful Switches Completed" },
];

const CountUp = ({ end, duration = 2500, start }: { end: number; duration?: number; start: boolean }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4); // Smooth easing

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const currentValue = Math.floor(easedProgress * end);

      if (currentValue !== countRef.current) {
        setCount(currentValue);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure final value is exact
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration]);

  return (
    <motion.span
      className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[var(--primary-600)] to-[var(--secondary-500)] bg-clip-text text-transparent"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {count.toLocaleString()}
      {end === 92 ? "%" : "+"}
    </motion.span>
  );
};

export default function StatsCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-[var(--bg-main)] overflow-hidden"
    >
      {/* Subtle background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[var(--secondary-500)]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[var(--primary-500)]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Optional Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-4">
            Trusted by UK Businesses
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
            Real results delivered through expert service and market-leading deals.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 text-center">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <div className="mb-4">
                <CountUp end={stat.value} start={inView} />
              </div>
              <p className="text-lg md:text-xl text-[var(--text-muted)] font-medium tracking-wide group-hover:text-[var(--secondary-500)] transition-colors duration-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
