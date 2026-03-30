'use client';
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Ideal Solutions saved our cafe over 35% on energy bills last year. The switch was seamless and their team handled everything — highly recommend!",
    imageSrc: "https://etakeawaymax.co.uk/wp-content/uploads/2024/10/happy-cafe-owner.png",
    name: "Emma Thompson",
    role: "Cafe Owner, London",
  },
  {
    text: "As a multi-site retailer, managing energy contracts was a nightmare. Ideal Solutions found us better rates across all locations and even arranged solar for two stores. Fantastic service.",
    imageSrc: "https://s.yimg.com/ny/api/res/1.2/zEClB9MKidE2cz20ZUbeZw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk7Y2Y9d2VicA--/https://media.zenfs.com/en/backyard_garden_lover_223/b33d3863fdd7e58e8eda0be30bf5b209",
    name: "James Patel",
    role: "Operations Director, Retail Chain",
  },
  {
    text: "We were locked into an expensive contract. Ideal Solutions reviewed it, negotiated exit terms, and switched us to a renewable tariff — saving us thousands with zero hassle.",
    imageSrc: "https://www.telegraph.co.uk/content/dam/women/2019/10/07/TELEMMGLPICT000208591568_trans_NvBQzQNjv4BqO6QpIblidqHYceykOFBymAG2UCJD-htLrE4KpwtO2NA.jpeg?imwidth=640",
    name: "Sarah Mitchell",
    role: "Finance Manager, Manufacturing",
  },
  {
    text: "The solar installation they arranged for our hotel rooftop has already paid for itself in 18 months. Energy bills down 40% and guests love our green credentials.",
    imageSrc: "https://r-evpower.co.uk/wp-content/uploads/2023/09/installer-on-the-roof-of-commercial-building-with-solar-panels.webp",
    name: "David Reynolds",
    role: "Hotel General Manager, Manchester",
  },
  {
    text: "Switching our office energy supplier through Ideal Solutions was the easiest business decision we've made. Clear advice, great rates, and ongoing support.",
    imageSrc: "https://img.freepik.com/free-photo/excited-young-woman-hold-paper-letter-feel-euphoric-receiving-job-promotion-tax-refund-from-bank-happy-woman-reading-paperwork-document-smiling-good-pleasant-news-getting-student-scholarship_657921-1039.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Rachel Brooks",
    role: "Office Manager, Birmingham",
  },
  {
    text: "We've been with Ideal Solutions for 3 years now. They proactively review our contracts and keep finding us better deals. True partners in reducing costs.",
    imageSrc: "https://imageio.forbes.com/specials-images/imageserve/692dff12e02d6c53e0b84ca5/Coffee-shop--senior-woman-manager-portrait-with-barista-feeling-happy-about-shop/0x0.jpg?format=jpg&width=480",
    name: "Michael Evans",
    role: "Owner, Independent Restaurant Group",
  },
];

interface TestimonialsCarouselProps {
  title?: string;
  subtitle?: string;
  autoplaySpeed?: number;
  className?: string;
}

export default function TestimonialsCarousel({
  title = "What Our Clients Say",
  subtitle = "Businesses across the UK trust Ideal Solutions to reduce their energy costs, switch seamlessly, and go greener — all with expert, personal support.",
  autoplaySpeed = 4000,
  className,
}: TestimonialsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    dragFree: false,
    slidesToScroll: 1,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplaySpeed);

    return () => clearInterval(autoplay);
  }, [emblaApi, autoplaySpeed]);

  // Duplicate for seamless loop
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className={cn("relative overflow-hidden py-16 lg:py-28 bg-[var(--bg-main)]", className)}>
      {/* Subtle Background Accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--secondary-500)/0.08,transparent_70%)]" />
        <div className="absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-[var(--primary-500)]/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-[var(--secondary-500)]/5 blur-3xl" />
      </div>

      <div className="max-w-[90%] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-1 bg-[var(--secondary-500)] rounded-full" />
            <span className="text-sm font-medium text-[var(--text-muted)] uppercase tracking-wider">
              Testimonials
            </span>
            <div className="w-16 h-1 bg-[var(--secondary-500)] rounded-full" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-main)] leading-tight"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-[var(--text-muted)] max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
          <div className="flex">
            {allTestimonials.map((testimonial, index) => (
              <div key={`${testimonial.name}-${index}`} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 shadow-xl backdrop-blur-sm transition-all hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Quote Icon */}
                  <Quote className="h-12 w-12 text-[var(--secondary-500)] mb-6 opacity-70" />

                  {/* Testimonial Text */}
                  <p className="text-lg leading-relaxed text-[var(--text-main)] mb-8">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <Avatar className="h-14 w-14 ring-4 ring-[var(--secondary-500)]/20">
                      <AvatarImage src={testimonial.imageSrc} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-[var(--text-main)]">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-[var(--text-muted)]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
