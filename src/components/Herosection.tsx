'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    bg: "/assets/aboutbanner2.jpg",
    portrait: "/assets/Untitled-design-27.png",
    title: "Compare & Save on Business Energy",
    desc: "We compare leading UK suppliers to find you the best electricity and gas deals — saving your business time and money.",
  },
  {
    bg: "/assets/hero1.jpg",
    portrait: "/assets/Untitled-design-27.png",
    title: "Commercial Solar Solutions",
    desc: "Reduce energy costs with expert solar panel installations tailored for UK businesses — generate your own clean power.",
  },
  {
    bg: "/assets/pexels-fauxels-3183183.jpg",
    portrait: "/assets/business-person-planning-alternative-energies.jpg",
    title: "Smart Energy Monitoring",
    desc: "Track usage in real-time and optimise your consumption with advanced monitoring tools for maximum efficiency.",
  },
  {
    bg: "/assets/hero1.jpg",
    portrait: "/assets/urbine-8.png",
    title: "Tailored Business Insurance",
    desc: "Protect your operations with comprehensive insurance packages designed specifically for UK businesses.",
  },
];

export default function Herosection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[90vh] w-[96%] rounded-2xl mx-auto overflow-hidden">
      {/* Background Slides */}
      {slides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${s.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}

      {/* Dark Overlay + Brand Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--secondary-500)]/70 to-transparent z-10" />

      {/* Content Container – Now truly centered */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="max-w-[90%] mx-auto px-6 w-full grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <div className="text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
              {slide.title}
            </h1>

            <p className="text-base md:text-lg text-gray-100 max-w-lg leading-relaxed drop-shadow-md">
              {slide.desc}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/utilities-services/contact">
                <button className="inline-flex items-center gap-2 bg-[var(--secondary-500)] hover:bg-[var(--secondary-600)] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-lg hover:shadow-xl">
                  Get a Free Quote
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Link>

              <Link href="/utilities-services/services">
                <button className="inline-flex items-center gap-2 border-2 border-white/80 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/10 backdrop-blur-sm transition-all">
                  Our Services
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Portrait Glass Card */}
          <div className="md:flex justify-end items-center hidden md:block">
            <div className="relative w-full max-w-lg perspective-1000">
              <div className="relative group transform-gpu transition-all duration-700 hover:-translate-y-4 hover:rotate-1">
                {/* Glass Container */}
                <div
                  className="relative rounded-3xl p-4 border shadow-2xl overflow-hidden backdrop-blur-xl"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    borderColor: "rgba(255, 255, 255, 0.15)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={slide.portrait}
                      alt={slide.title}
                      width={400}
                      height={420}
                      className="w-full h-[420px] object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div
                      className="rounded-2xl px-6 py-4 border shadow-xl flex items-center justify-between backdrop-blur-md transition-all duration-300 group-hover:bg-white/20"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.12)",
                        borderColor: "rgba(255, 255, 255, 0.25)",
                      }}
                    >
                      <div>
                        <p className="text-white font-semibold text-base">
                          Discover Our Recent Project
                        </p>
                        <p className="text-white/70 text-xs mt-1">
                          Latest success story
                        </p>
                      </div>

                      <button className="bg-[var(--secondary-500)] hover:bg-[var(--secondary-600)] rounded-full p-3 transition-all duration-300 shadow-lg group-hover:scale-110">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-8 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === current
                ? "bg-[var(--primary-500)] w-12 shadow-lg"
                : "bg-white/40 hover:bg-white/60 w-8"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
