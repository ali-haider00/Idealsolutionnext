'use client';

import { ArrowRight, Zap, Sun, Shield, Phone, Droplet, Home, CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Business Electricity", icon: Zap, desc: "Compare top UK suppliers for the best rates and contracts tailored to your usage — reduce costs effortlessly." },
  { title: "Business Gas", icon: Zap, desc: "Secure competitive gas tariffs with flexible terms — we negotiate on your behalf for maximum savings." },
  { title: "Business Insurance", icon: Shield, desc: "Comprehensive protection packages designed for UK businesses — safeguard your operations with confidence." },
  { title: "Business Telecoms", icon: Phone, desc: "Ultra-fast broadband, VoIP, and mobile solutions — keep your business connected with reliable providers." },
  { title: "Business Water", icon: Droplet, desc: "Optimise water rates and usage with market-leading deals — often overlooked, but big savings possible." },
  { title: "Domestic Energy", icon: Home, desc: "Helping homeowners switch to better electricity and gas deals — simple, fast, and hassle-free savings." },
  { title: "Merchant Services", icon: CreditCard, desc: "Competitive card payment solutions with low fees and next-day funding — grow your revenue seamlessly." },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-[var(--bg-main)] py-16 lg:py-28">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-1 bg-[var(--secondary-500)] rounded-full" />
            <span className="text-sm font-medium text-[var(--text-muted)] uppercase tracking-wider">
              Our Services
            </span>
            <div className="w-16 h-1 bg-[var(--secondary-500)] rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-main)] max-w-4xl mx-auto leading-tight">
            Comprehensive Energy & Business Solutions Tailored for You
          </h2>
          <p className="mt-6 text-lg text-[var(--text-muted)] max-w-3xl mx-auto">
            We compare the market to find you the best deals on energy, utilities, telecoms, insurance, and payments — saving you time and money.
          </p>
        </div>

        {/* Featured Service: Commercial Solar */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 group">
          <Image
            src="https://pfrenewables.co.uk/wp-content/uploads/2025/02/solar-installation-on-commercial-building.jpg"
            alt="Commercial Solar Panels on Business Rooftop"
            width={1200}
            height={448}
            className="w-full h-96 lg:h-[28rem] object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute inset-0 flex items-end p-8 lg:p-12">
            <div className="max-w-3xl text-white">
              <div className="inline-block bg-[var(--secondary-500)] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Most Popular Service
              </div>
              <h3 className="text-3xl lg:text-5xl font-bold mb-4">
                Commercial Solar Solutions
              </h3>
              <p className="text-lg lg:text-xl mb-8 text-gray-100 max-w-2xl">
                Slash energy bills and carbon emissions with bespoke solar panel installations. Generate your own clean power and enjoy long-term savings.
              </p>
              <Link href="/utilities-services/services/business-electricity">
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--secondary-500)] hover:bg-[var(--secondary-600)] text-white font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl text-lg">
                  Get a Free Solar Quote
                  <ArrowRight className="w-6 h-6" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Other Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--primary-500)]/10 text-[var(--primary-600)] rounded-full mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-main)] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-muted)] mb-6">
                    {service.desc}
                  </p>
                  <Link href={`/utilities-services/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <button className="inline-flex items-center gap-2 text-[var(--primary-600)] font-semibold hover:text-[var(--primary-700)] transition-colors">
                      Learn More
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-[var(--text-muted)] mb-6">
            Ready to start saving?
          </p>
          <Link href="/utilities-services/contact">
            <button className="px-10 py-5 bg-[var(--secondary-500)] hover:bg-[var(--secondary-600)] text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl text-xl">
              Get Your Free Quote Today
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
