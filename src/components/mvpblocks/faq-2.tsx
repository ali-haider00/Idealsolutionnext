'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";

const faqItems = [
  {
    id: "1",
    question: "How much does your service cost?",
    answer:
      "Our service is completely free for you. We are paid a commission by the supplier when you switch — meaning you get expert advice and better rates at no extra cost.",
    category: "costs",
  },
  {
    id: "2",
    question: "How long does it take to switch suppliers?",
    answer:
      "Most switches take 4–6 weeks from start to finish. We handle everything for you, including paperwork and coordination with your current and new supplier — with no disruption to your supply.",
    category: "switching",
  },
  {
    id: "3",
    question: "Will switching disrupt my energy supply?",
    answer:
      "No. There is no interruption to your electricity or gas supply during the switch. The pipes and wires remain the same — only the billing and supplier change.",
    category: "switching",
  },
  {
    id: "4",
    question: "Can you help if I'm still in a contract?",
    answer:
      "Yes! We can review your current contract, check for exit fees, and advise whether it's better to wait or switch now. Often, the savings outweigh any early termination fees.",
    category: "switching",
  },
  {
    id: "5",
    question: "Do you offer renewable or green energy tariffs?",
    answer:
      "Absolutely. We work with suppliers offering 100% renewable electricity and carbon-offset gas tariffs. We'll help you find green options that are cost-effective for your business.",
    category: "solar",
  },
  {
    id: "6",
    question: "Can you help with commercial solar panels?",
    answer:
      "Yes — we partner with trusted installers to offer fully funded or financed solar solutions. You can generate your own clean energy, reduce bills, and earn from excess power exported to the grid.",
    category: "solar",
  },
  {
    id: "7",
    question: "What types of businesses do you work with?",
    answer:
      "We help businesses of all sizes — from small shops and offices to large factories, schools, hotels, and multi-site operations across the UK.",
    category: "general",
  },
  {
    id: "8",
    question: "How much can I realistically save?",
    answer:
      "On average, our clients save 20–40% on their energy bills. Savings depend on your current rates, usage, and contract timing — but we always aim to find you the best deal available.",
    category: "costs",
  },
  {
    id: "9",
    question: "Do you provide ongoing support after the switch?",
    answer:
      "Yes. We offer contract management, bill validation, and renewal reminders. Many clients stay with us long-term so we can keep finding them better deals year after year.",
    category: "support",
  },
];

const categories = [
  { id: "all", label: "All Questions" },
  { id: "switching", label: "Switching Process" },
  { id: "solar", label: "Solar & Renewables" },
  { id: "costs", label: "Costs & Savings" },
  { id: "support", label: "Support" },
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFaqs =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="w-full bg-[var(--bg-main)] py-16 lg:py-28">
      <div className="max-w-[90%] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-1 bg-[var(--secondary-500)] rounded-full" />
            <span className="text-sm font-medium text-[var(--text-muted)] uppercase tracking-wider">
              FAQs
            </span>
            <div className="w-16 h-1 bg-[var(--secondary-500)] rounded-full" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-main)] leading-tight">
            Got Questions? We've Got Answers
          </h2>

          <p className="mt-6 text-lg text-[var(--text-muted)] max-w-3xl mx-auto">
            Here are the most common questions we get from businesses looking to reduce their energy costs and switch to better deals.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
                activeCategory === category.id
                  ? "bg-[var(--secondary-500)] text-white shadow-lg"
                  : "bg-[var(--bg-card)] text-[var(--text-main)] border border-[var(--border-color)] hover:bg-[var(--secondary-500)]/10"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={cn(
                  "overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] transition-all duration-300",
                  expandedId === faq.id
                    ? "shadow-2xl ring-2 ring-[var(--secondary-500)]/20"
                    : "shadow-md hover:shadow-xl"
                )}
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-[var(--bg-card)]/50"
                >
                  <h3 className="text-lg font-semibold text-[var(--text-main)] pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {expandedId === faq.id ? (
                      <Minus className="h-6 w-6 text-[var(--secondary-600)]" />
                    ) : (
                      <Plus className="h-6 w-6 text-[var(--primary-600)]" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-[var(--border-color)]"
                    >
                      <div className="p-6 pt-5">
                        <p className="text-[var(--text-muted)] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-[var(--text-muted)] mb-6">
            Still have questions? We're here to help.
          </p>
          <Link
            href="/utilities-services/contact"
            className="inline-flex items-center gap-3 px-8 py-5 bg-[var(--secondary-500)] hover:bg-[var(--secondary-600)] text-white font-bold text-lg rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Get in Touch Today
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
