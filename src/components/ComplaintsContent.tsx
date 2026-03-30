'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function ComplaintsContent() {
  return (
    <section className="py-20 md:py-32 lg:py-40 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Elegant Centered Accent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-8 mb-10">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="h-0.5 w-32 bg-gradient-to-r from-transparent via-[var(--secondary-500)] to-transparent rounded-full"
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-8 leading-tight"
          >
            Complaints Handling Procedure
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="text-xl text-[var(--text-muted)] max-w-4xl mx-auto leading-relaxed"
          >
            Your satisfaction is our priority. We are committed to resolving any concerns quickly, fairly, and transparently.
          </motion.p>
        </motion.div>

        {/* Side-by-Side Layout: Text + Image */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 md:order-1 space-y-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed"
            >
              At <span className="font-bold text-[var(--primary-600)]">Ideal Solutions</span>, we take pride in delivering exceptional service. However, we understand that occasionally things may not go as planned. When that happens, we encourage you to let us know — your feedback helps us improve.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed"
            >
              Every complaint is handled with care, impartiality, and urgency. Our dedicated team investigates thoroughly and aims to resolve issues at first point of contact. Our process is <span className="font-semibold text-[var(--secondary-600)]">completely free</span> and designed to restore your confidence in our service.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed"
            >
              If you're not satisfied with the initial outcome, we offer a clear escalation path, ensuring your voice is always heard.
            </motion.p>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 md:order-2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Subtle brand border glow */}
              <div className="absolute inset-0 rounded-3xl ring-8 ring-[var(--primary-500)]/10 pointer-events-none" />
              
              <Image
                src="https://d1eipm3vz40hy0.cloudfront.net/images/AMER/businesses-handle-customer-complaints.png"
                alt="Professional team providing caring and efficient complaint resolution"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-3xl"
              />

              {/* Optional subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-700)]/20 to-transparent rounded-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
