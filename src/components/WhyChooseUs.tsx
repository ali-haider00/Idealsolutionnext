'use client';
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Lightbulb, Shield, TrendingDown } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Expert Guidance",
    description:
      "Our experienced brokers guide you through the UK energy market with clarity and confidence.",
    icon: Lightbulb,
  },
  {
    title: "Real Savings",
    description:
      "Clients save 20–40% on average. We compare top suppliers to secure the best rates for you.",
    icon: TrendingDown,
  },
  {
    title: "Trusted Service",
    description:
      "Transparent, reliable, and hassle-free — we handle everything so you can focus on your business.",
    icon: Shield,
  },
  {
    title: "All-in-One Partner",
    description:
      "One trusted team for electricity, gas, solar, water, telecoms, insurance & more.",
    icon: CheckCircle,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-[var(--bg-main)] relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[var(--secondary-500)]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[var(--primary-500)]/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with micro-animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              className="h-0.5 w-16 bg-gradient-to-r from-transparent to-[var(--secondary-500)]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div
              className="w-4 h-4 rounded-full bg-[var(--secondary-500)] shadow-lg animate-pulse-glow"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <motion.div
              className="h-0.5 w-16 bg-gradient-to-l from-transparent to-[var(--secondary-500)]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] leading-tight">
            Why Businesses Choose Ideal Solutions
          </h2>

          <p className="mt-6 text-lg md:text-xl text-[var(--text-muted)] max-w-4xl mx-auto leading-relaxed">
            We're not just a comparison service — we're your long-term partner delivering <span className="font-semibold text-[var(--secondary-500)]">real savings</span>, <span className="font-semibold text-[var(--primary-600)]">expert advice</span>, and complete peace of mind.
          </p>
        </motion.div>

        {/* Features + Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Animated Feature Cards */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="flex items-start gap-6 p-8 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] shadow-lg hover:shadow-2xl transition-all duration-400 group"
              >
                {/* Animated Icon Circle */}
                <motion.div
                  className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary-500)] to-[var(--secondary-600)] flex items-center justify-center shadow-xl group-hover:rotate-12 transition-transform duration-500"
                  whileHover={{ scale: 1.15 }}
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-main)] mb-3 group-hover:text-[var(--secondary-500)] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Professional Image Grid with micro-animations */}
          <div className="grid grid-cols-2 gap-6">
            {[
              "https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--15aaf055-1259-4df1-b23b-09a40d0720df/ey-business-people-in-discussion.jpg?preferwebp=true&quality=85",
              "https://craftycounsel.co.uk/wp-content/uploads/2024/11/CC_EnergyDay_March25_SJ-55.jpg",
              "https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--9e08451d-401e-4395-be8d-0f01792fea97/ey-group-of-business-people-in-meeting-working-together.jpg?preferwebp=true&quality=85",
              "https://energysavingtrust.org.uk/wp-content/uploads/2022/02/GettyImages-623514504.jpg",
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.08, y: -10 }}
                className="relative rounded-2xl overflow-hidden shadow-lg group h-64"
              >
                <Image
                  src={src}
                  alt="Ideal Solutions team & clients"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
