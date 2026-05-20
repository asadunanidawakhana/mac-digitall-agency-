"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$500",
    desc: "Perfect for small projects and getting started.",
    features: ["Single page website", "Basic SEO setup", "1 revision round", "5 business days delivery", "Email support"],
  },
  {
    name: "Growth",
    price: "$1,500",
    desc: "Ideal for growing businesses and comprehensive projects.",
    featured: true,
    features: ["Multi-page website", "Advanced SEO", "3 revision rounds", "Content strategy", "Social media kit", "3 months support"],
  },
  {
    name: "Premium",
    price: "$3,500+",
    desc: "Full-service solution for serious brands.",
    features: ["Custom web application", "Enterprise SEO", "Unlimited revisions", "Full brand identity", "Video production", "12 months support", "Priority queue"],
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-50">
        <div className="container-wide text-center">
          <AnimatedSection>
            <span className="label justify-center" style={{ display: "inline-flex" }}>Pricing</span>
            <h1 className="heading-display mb-6 text-balance max-w-3xl mx-auto">
              Transparent pricing.<br />
              <span className="text-brand-600">No surprises.</span>
            </h1>
            <p className="body-lg max-w-xl mx-auto">
              Choose the package that fits your needs. Every plan is tailored to deliver maximum value.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.08}>
                <div className={`card p-8 flex flex-col h-full ${plan.featured ? "border-brand-400 relative" : ""}`}>
                  {plan.featured && (
                    <span className="absolute -top-3 left-6 px-3 py-1 bg-brand-600 text-white text-xs font-semibold tracking-wide">
                      Most Popular
                    </span>
                  )}
                  <div className="mb-6">
                    <h3 className="heading-sm mb-2">{plan.name}</h3>
                    <span className="font-serif text-4xl font-medium text-charcoal-900">{plan.price}</span>
                  </div>
                  <p className="body-sm mb-8">{plan.desc}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-charcoal-700">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D19A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`text-center block ${plan.featured ? "btn-primary" : "btn-secondary"}`}>
                    Get Started
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-50 text-center">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="heading-xl mb-4">Need a custom solution?</h2>
            <p className="body-lg mb-8 max-w-md mx-auto">
              Every project is unique. Let&apos;s create a package tailored to your specific needs.
            </p>
            <Link href="/contact" className="btn-primary">
              Request Custom Quote
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
