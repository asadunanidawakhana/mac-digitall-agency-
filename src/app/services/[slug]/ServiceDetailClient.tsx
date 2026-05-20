"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { servicesList } from "@/lib/utils";

const benefits = [
  "AI-optimized for maximum conversion",
  "Modern, premium design standards",
  "SEO-optimized from day one",
  "Fast loading with global CDN",
  "Mobile-first responsive design",
  "Built with enterprise-grade security",
];

export default function ServiceDetailClient({ slug }: { slug: string }) {
  const service = servicesList.find((s) => s.id === slug);
  if (!service) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-2xl">Service not found</h1>
        <Link href="/services" className="btn-primary mt-4 inline-block">Back to Services</Link>
      </div>
    );
  }

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <AnimatedSection>
                <span className="label">{service.title}</span>
                <h1 className="heading-display mb-6 text-balance">
                  {service.title}
                </h1>
                <p className="body-lg max-w-xl mb-8">
                  {service.description}
                </p>
                <Link href="/contact" className="btn-primary">
                  Get Started
                </Link>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-5">
              <AnimatedSection delay={0.15}>
                <div className="card p-8">
                  <h3 className="heading-sm mb-4">What&apos;s included</h3>
                  <ul className="space-y-3">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-charcoal-700">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D19A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnimatedSection className="section-header">
            <span className="label">Process</span>
            <h2 className="heading-xl mb-4">How we work together</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "We learn about your goals and audience." },
              { step: "02", title: "Strategy", desc: "We create a tailored AI-powered plan." },
              { step: "03", title: "Build", desc: "We design and develop with modern tools." },
              { step: "04", title: "Refine", desc: "You review, we iterate until perfect." },
              { step: "05", title: "Launch", desc: "We deploy and track performance." },
            ].map((w, i) => (
              <AnimatedSection key={w.step} delay={i * 0.08} className="text-center">
                <span className="font-serif text-4xl font-medium text-brand-300 mb-4 block">{w.step}</span>
                <h3 className="heading-sm mb-2">{w.title}</h3>
                <p className="body-sm">{w.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream-50 text-center">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="heading-xl mb-4">Ready to get started?</h2>
            <p className="body-lg mb-8 max-w-md mx-auto">
              Let&apos;s discuss your project and create a custom solution.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">Book a Consultation</Link>
              <Link href="/faq" className="btn-secondary">View FAQ</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
