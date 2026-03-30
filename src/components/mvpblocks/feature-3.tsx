'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Award } from 'lucide-react';

export default function Feature3() {
  return (
    <section className="py-20 px-4 bg-[var(--bg-main)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-main)] mb-4">
            Why Choose Our Complaints Process?
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-3xl mx-auto">
            We ensure your concerns are addressed with professionalism and care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <Shield className="w-12 h-12 text-[var(--secondary-500)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[var(--text-main)] mb-3">
                Professional
              </h3>
              <p className="text-[var(--text-muted)]">
                Our team handles every complaint with professionalism and expertise
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 text-[var(--secondary-500)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[var(--text-main)] mb-3">
                Customer Focused
              </h3>
              <p className="text-[var(--text-muted)]">
                Your satisfaction is our priority throughout the resolution process
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <Award className="w-12 h-12 text-[var(--secondary-500)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[var(--text-main)] mb-3">
                Trusted
              </h3>
              <p className="text-[var(--text-muted)]">
                We've built trust through transparent and fair complaint handling
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
