"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { faqItems } from "@/lib/utils";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState(faqItems[0].category);

  const currentCategory = faqItems.find((c) => c.category === activeCategory) || faqItems[0];

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-50">
        <div className="container-wide text-center">
          <AnimatedSection>
            <span className="label justify-center" style={{ display: "inline-flex" }}>FAQ</span>
            <h1 className="heading-display mb-6 text-balance max-w-3xl mx-auto">
              Questions? We&apos;ve<br />
              <span className="text-brand-600">got answers.</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {faqItems.map((cat) => (
              <button
                key={cat.category}
                onClick={() => { setActiveCategory(cat.category); setOpenIndex(null); }}
                className={`px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeCategory === cat.category
                    ? "bg-charcoal-900 text-white"
                    : "bg-cream-100 text-charcoal-600 hover:bg-charcoal-100"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {currentCategory.items.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="card overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-medium text-charcoal-900 pr-4 text-sm">{item.q}</span>
                    <motion.div
                      animate={{ rotate: openIndex === i ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-7 h-7 border border-charcoal-200 flex items-center justify-center shrink-0"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm text-charcoal-600 leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-50 text-center">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="heading-xl mb-4">Still have questions?</h2>
            <p className="body-lg mb-8 max-w-md mx-auto">
              We&apos;re here to help. Reach out and we&apos;ll get back to you quickly.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="btn-primary">Contact Us</a>
              <a href="https://wa.me/923337629724" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                WhatsApp Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
