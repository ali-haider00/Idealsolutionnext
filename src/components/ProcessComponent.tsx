import { Phone, Search, FileCheck, TrendingUp, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    desc: "Tell us about your business energy needs. We review your current bills and usage with no obligation.",
    icon: Phone,
    img: "https://www.woodmac.com/siteassets/frontify_media_download/photography/people/_micro/micro_people_gettyimages-1325134720.jpg?width=800",
  },
  {
    number: "02",
    title: "Market Comparison",
    desc: "Our experts search across leading UK suppliers to find the most competitive rates and contracts for you.",
    icon: Search,
    img: "https://www.a1energy.net/energy-procurement-team-analyzing-energy-markets-1.jpg",
  },
  {
    number: "03",
    title: "Tailored Recommendation",
    desc: "We present clear, unbiased options — including renewable tariffs and solar opportunities where suitable.",
    icon: FileCheck,
    img: "https://eco-energ.co.uk/wp-content/uploads/2023/08/Solar-Commercial3-scaled.jpg",
  },
  {
    number: "04",
    title: "Seamless Switch & Savings",
    desc: "We handle the entire switching process. You start saving immediately with ongoing support.",
    icon: TrendingUp,
    img: "https://cdn.prod.website-files.com/65958228b169b942d36366af/659814805b0a8d1d83b3ca06_young%20multi%20ethnic%20family%20smiling%20while%20looking%20at%20tablet%20together.png",
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full bg-[var(--bg-main)] py-16 lg:py-28">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-1 bg-[var(--secondary-500)] rounded-full" />
            <span className="text-sm font-medium text-[var(--text-muted)] uppercase tracking-wider">
              Our Process
            </span>
            <div className="w-16 h-1 bg-[var(--secondary-500)] rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-main)] max-w-4xl mx-auto leading-tight">
            Switch & Save in 4 Simple Steps
          </h2>
          <p className="mt-6 text-lg text-[var(--text-muted)] max-w-3xl mx-auto">
            No hassle, no disruption — just better rates and expert guidance from start to finish.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {/* Step Number Overlay */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-5xl font-bold opacity-30">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[var(--secondary-500)]/10 text-[var(--secondary-600)] rounded-xl">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-semibold text-[var(--secondary-600)]">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-main)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-[var(--text-muted)] mb-6">
            Ready to reduce your energy costs with zero effort?
          </p>
          <Link href="/utilities-services/contact">
            <button className="inline-flex items-center gap-3 px-8 py-5 bg-[var(--secondary-500)] hover:bg-[var(--secondary-600)] text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl text-lg">
              Start Your Free Consultation
              <ArrowRight className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
