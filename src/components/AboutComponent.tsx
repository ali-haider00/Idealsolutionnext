'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutComponent() {
  return (
    <section className="py-20 md:py-32 lg:py-40 bg-gradient-to-b from-[var(--bg-main)] via-[var(--bg-card)] to-[var(--bg-main)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Dynamic Overlapping Images */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative order-2 lg:order-1 h-[600px] md:h-[720px] lg:h-[800px]"
          >
            {/* Subtle Brand Glow Background */}
            <motion.div
              className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-full max-h-[700px] bg-[var(--primary-700)]/10 rounded-3xl blur-3xl -z-10"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Image 1 - Bottom Center (Largest) */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xl z-30"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-8 ring-[var(--secondary-500)]/20 h-[400px]">
                <Image
                  src="https://thumbs.dreamstime.com/b/clean-energy-power-concept-solar-panel-wind-turbine-sunset-background-141544934.jpg"
                  alt="Renewable energy at sunset"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Image 2 - Top Left */}
            <motion.div
              initial={{ opacity: 0, x: -80, rotate: -8 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute top-0 left-0 w-full max-w-lg z-10"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-8 ring-[var(--primary-500)]/20 h-[300px]">
                <Image
                  src="/assets/wind-farms-fields.jpg"
                  alt="Wind turbine in green landscape"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Image 3 - Middle Right */}
            <motion.div
              initial={{ opacity: 0, x: 80, rotate: 8 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute top-1/3 right-0 w-full max-w-lg z-20"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-8 ring-[var(--secondary-500)]/20 h-[350px]">
                <Image
                  src="https://www.shutterstock.com/image-photo/professional-male-green-energy-engineer-260nw-2309770357.jpg"
                  alt="Professional energy engineer at work"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            {/* Brand Accent Line */}
            <div className="flex items-center gap-6 mb-10 justify-center lg:justify-start">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="h-1 w-32 bg-gradient-to-r from-transparent via-[var(--secondary-500)] to-transparent rounded-full"
              />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] leading-tight mb-10 text-center lg:text-left"
            >
              Simplifying Utilities,<br />
              <span className="text-[var(--primary-600)]">Empowering</span> Businesses.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed mb-12 text-center lg:text-left max-w-2xl"
            >
              At <span className="font-bold text-[var(--primary-600)]">Ideal Solutions</span>, we're more than a broker — we're your dedicated partner in navigating energy, utilities, and essential business services. With impartial advice and access to the UK's leading suppliers, we help you reduce costs, streamline operations, and focus on what matters most: growing your business.
            </motion.p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                whileHover={{ y: -8, transition: { duration: 0.4 } }}
                className="group bg-[var(--bg-card)] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-[var(--border-color)]"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--secondary-500)] to-[var(--secondary-600)] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-400">
                  <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-[var(--text-main)] mb-4">
                  Trusted Expertise
                </h4>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  Independent, unbiased advice from experienced UK energy specialists.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ y: -8, transition: { duration: 0.4 } }}
                className="group bg-[var(--bg-card)] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-[var(--border-color)]"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary-500)] to-[var(--primary-600)] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-400">
                  <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-9c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-[var(--text-main)] mb-4">
                  Proven Savings
                </h4>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  Significant cost reductions through competitive deals and smart procurement.
                </p>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.4 }}
              className="text-center lg:text-left"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -6 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-4 bg-[var(--secondary-500)] hover:bg-[var(--secondary-600)] px-12 py-6 rounded-2xl font-bold text-xl text-white shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
              >
                <Link href="/utilities-services/about" className="relative z-10">
                  Discover Our Story
                </Link>
                <motion.svg
                  className="w-7 h-7 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </motion.svg>
                {/* Sliding shine */}
                <motion.div
                  className="absolute inset-0 bg-white/20 -skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
