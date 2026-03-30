'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
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
            Get In Touch
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-3xl mx-auto">
            We're here to help with all your utility needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 hover:shadow-xl transition-shadow"
          >
            <MapPin className="w-8 h-8 text-[var(--secondary-500)] mb-4" />
            <h3 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              Visit Us
            </h3>
            <p className="text-[var(--text-muted)] mb-4">
              123 Business Street<br />
              Manchester, UK<br />
              M1 2AB
            </p>
            <a 
              href="mailto:info@idealsolutions.co.uk" 
              className="text-[var(--primary-600)] hover:text-[var(--primary-700)] font-medium"
            >
              Get Directions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 hover:shadow-xl transition-shadow"
          >
            <Phone className="w-8 h-8 text-[var(--secondary-500)] mb-4" />
            <h3 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              Call Us
            </h3>
            <p className="text-[var(--text-muted)] mb-4">
              0161 123 456<br />
              Mon-Fri: 9am-6pm<br />
              Sat: 10am-2pm
            </p>
            <a 
              href="tel:0161123456" 
              className="text-[var(--primary-600)] hover:text-[var(--primary-700)] font-medium"
            >
              Call Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 hover:shadow-xl transition-shadow"
          >
            <Mail className="w-8 h-8 text-[var(--secondary-500)] mb-4" />
            <h3 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              Email Us
            </h3>
            <p className="text-[var(--text-muted)] mb-4">
              info@idealsolutions.co.uk<br />
              24/7 Support<br />
              Quick Response
            </p>
            <a 
              href="mailto:info@idealsolutions.co.uk" 
              className="text-[var(--primary-600)] hover:text-[var(--primary-700)] font-medium"
            >
              Send Email
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8">
            <Clock className="w-8 h-8 text-[var(--secondary-500)] mb-4" />
            <h3 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              Business Hours
            </h3>
            <p className="text-[var(--text-muted)]">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 2:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
