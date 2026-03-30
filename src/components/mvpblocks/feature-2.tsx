'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, TrendingDown, Shield, CheckCircle } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Expert Market Knowledge",
    content:
      "Our experienced brokers navigate the complex UK energy market daily, ensuring you get unbiased advice and the best possible deals.",
    icon: <Lightbulb className="h-6 w-6" />,
    image:
      "https://www.world-kinect.com/sites/default/files/styles/hero_lg/public/2025-02/General_Office-Conference-Room-Meeting_Diverse%20Team_Shutterstock.jpg.jpg?itok=5gEsO_Yr",
  },
  {
    title: "Significant Cost Savings",
    content:
      "Clients typically save 20–40% on energy bills. We compare leading suppliers to secure competitive rates tailored to your usage.",
    icon: <TrendingDown className="h-6 w-6" />,
    image:
      "https://img.uswitch.com/builder-img/api/v1/image/assets%2F8ab3bbafae9e469c86ca663c018f53d4%2F1a79ac47ba914232a66e435fc56aaff4?width=827&auto=format%26compress&q=35",
  },
  {
    title: "Trusted & Transparent",
    content:
      "No hidden fees — we're paid by suppliers. Enjoy full transparency, reliable service, and peace of mind throughout the process.",
    icon: <Shield className="h-6 w-6" />,
    image:
      "https://energyintel.brightspotcdn.com/dims4/default/6efb6e8/2147483647/strip/true/crop/1000x648+0+0/resize/1000x648!/quality/90/?url=http%3A%2F%2Fenergy-intelligence-brightspot.s3.us-east-2.amazonaws.com%2Fa9%2F5d%2Fa726397a4fbba4ddf6269e567025%2Fss-1107142880-handshake-growth.jpg",
  },
  {
    title: "Complete Utility Solutions",
    content:
      "One trusted partner for business electricity, gas, water, telecoms, insurance, merchant services, solar, and domestic energy.",
    icon: <CheckCircle className="h-6 w-6" />,
    image:
      "https://www.giscloud.com/assets/wp-content/uploads/2020/12/MDC-Vegetation-Management-Tripple-2-s_1607878698.png",
  },
];

export default function WhyChooseUs() {
  const [currentFeature, setCurrentFeature] = useState(0);

  // Auto-advance every 4 seconds (4000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[var(--bg-main)] py-16 lg:py-28">
      {/* Subtle Background Blurs */}
      <div className="absolute top-20 right-10 h-96 w-96 rounded-full bg-[var(--primary-500)]/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-80 w-80 rounded-full bg-[var(--secondary-500)]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[90%] px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-1 w-16 rounded-full bg-[var(--secondary-500)]" />
            <span className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)]">
              Why Choose Us
            </span>
            <div className="h-1 w-16 rounded-full bg-[var(--secondary-500)]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[var(--text-main)] md:text-4xl lg:text-5xl">
            Why Businesses Trust Ideal Solutions
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)]">
            We're more than just a comparison service — we're your dedicated partner in reducing costs, simplifying utilities, and achieving sustainability goals.
          </p>
        </div>

        {/* Features & Image Layout */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          {/* Left: Feature List */}
          <div className="space-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 cursor-pointer"
                onClick={() => setCurrentFeature(index)} // Optional: click to jump
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                    index === currentFeature
                      ? "bg-[var(--secondary-500)] text-white shadow-xl shadow-[var(--secondary-500)]/30"
                      : "bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border-color)]"
                  }`}
                >
                  {feature.icon}
                </div>

                <div className="flex-1">
                  <motion.h3
                    className={`text-xl font-bold md:text-2xl transition-colors duration-500 ${
                      index === currentFeature
                        ? "text-[var(--text-main)]"
                        : "text-[var(--text-muted)]"
                    }`}
                    animate={{
                      y: index === currentFeature ? 0 : 5,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    className="mt-2 text-[var(--text-muted)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentFeature ? 1 : 0.7 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.content}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Animated Image with Smooth Transition */}
          <div className="relative order-first md:order-last">
            <div className="relative overflow-hidden rounded-3xl border-2 border-[var(--border-color)] shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    opacity: { duration: 0.8, ease: "easeInOut" },
                    scale: { duration: 0.8, ease: "easeInOut" },
                  }}
                  className="aspect-video lg:aspect-auto"
                >
                  <Image
                    src={features[currentFeature].image}
                    alt={features[currentFeature].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Smooth Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[var(--border-color)]/50">
                <motion.div
                  key={`progress-${currentFeature}`} // Reset on change
                  className="h-full bg-gradient-to-r from-[var(--primary-500)] via-[var(--secondary-500)] to-[var(--primary-600)]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 4,
                    ease: "linear",
                  }}
                />
              </div>
            </div>

            {/* Optional: Dots Indicator */}
            <div className="mt-6 flex justify-center gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentFeature
                      ? "w-8 bg-[var(--secondary-500)]"
                      : "w-2 bg-[var(--border-color)]"
                  }`}
                  aria-label={`Go to feature ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
