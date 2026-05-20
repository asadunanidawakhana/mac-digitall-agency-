"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import { servicesList } from "@/lib/utils";

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-50">
        <div className="container-wide text-center">
          <AnimatedSection>
            <span className="label justify-center" style={{ display: "inline-flex" }}>
              Services
            </span>
            <h1 className="heading-display mb-6 text-balance max-w-3xl mx-auto">
              Everything you need to<br />
              <span className="text-brand-600">grow online.</span>
            </h1>
            <p className="body-lg max-w-xl mx-auto">
              From websites to marketing, branding to education — we deliver solutions that actually move the needle.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesList.map((service, i) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={i}
                href={`/services/${service.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-cream-50">
        <div className="container-wide">
          <AnimatedSection className="section-header">
            <span className="label">How We Work</span>
            <h2 className="heading-xl mb-4">A process built for clarity</h2>
            <p className="body-lg">No guesswork. No surprises. Just a clear path from idea to launch.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "We learn about your goals, audience, and what success looks like for you." },
              { step: "02", title: "Strategy", desc: "We create a tailored plan with clear milestones and expectations." },
              { step: "03", title: "Build", desc: "We design and develop using modern tools and AI-enhanced workflows." },
              { step: "04", title: "Refine", desc: "You review, we iterate. We don't stop until you're completely satisfied." },
              { step: "05", title: "Launch", desc: "We deploy, monitor, and optimize for ongoing performance." },
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
      <section className="section-padding bg-white text-center">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="heading-xl mb-4">Not sure where to start?</h2>
            <p className="body-lg mb-8 max-w-md mx-auto">
              Book a free consultation and we&apos;ll help you figure out the best path forward.
            </p>
            <Link href="/contact" className="btn-primary">
              Book a Free Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
