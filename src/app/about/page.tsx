"use client";

import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { metrics } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <AnimatedSection>
                <div className="relative aspect-[3/4] border border-charcoal-100 overflow-hidden">
                  <Image
                    src="/uploads/profile-pics/pf.png"
                    alt="Mac Digital Agency Founder"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <AnimatedSection>
                <span className="label">About</span>
                <h1 className="heading-display mb-6 text-balance">
                  We believe great design<br />
                  <span className="text-brand-600">should drive results.</span>
                </h1>
                <div className="space-y-4 body-lg max-w-xl">
                  <p>
                    Mac Digital Agency started with a simple observation: most digital agencies deliver beautiful work that doesn&apos;t actually move the needle for businesses.
                  </p>
                  <p>
                    We built this agency differently. Every project starts with strategy, every design decision is backed by data, and every deliverable is built to perform — not just look good on a portfolio.
                  </p>
                  <p>
                    Beyond client work, we&apos;re deeply committed to education. We&apos;ve trained hundreds of students in AI workflows, freelancing, and web development because we believe knowledge should be accessible.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-white border-y border-charcoal-100">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {metrics.map((m) => (
              <AnimatedSection key={m.label} className="text-center">
                <AnimatedCounter value={m.value} suffix={m.suffix} />
                <p className="text-xs tracking-wide uppercase text-charcoal-500 mt-2">{m.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream-50">
        <div className="container-wide">
          <AnimatedSection className="section-header">
            <span className="label">Our Values</span>
            <h2 className="heading-xl mb-4">What guides every decision we make</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Innovation", desc: "We stay ahead of the curve, leveraging the latest AI tools and methodologies to deliver cutting-edge solutions." },
              { title: "Education", desc: "Knowledge sharing is at our core. We empower others through structured learning and mentorship." },
              { title: "Craftsmanship", desc: "Every pixel, every line of code, every strategy is crafted with intention and attention to detail." },
              { title: "Transparency", desc: "Clear communication, honest pricing, and real results. No hidden agendas, no surprises." },
            ].map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="card p-7 h-full">
                  <div className="w-10 h-10 border border-brand-300 flex items-center justify-center mb-5">
                    <span className="text-brand-600 font-serif text-lg font-medium">{i + 1}</span>
                  </div>
                  <h3 className="heading-sm mb-3">{v.title}</h3>
                  <p className="body-sm">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-narrow">
          <AnimatedSection>
            <span className="label">Work With Us</span>
            <h2 className="heading-xl mb-4 text-balance">Ready to build something<br />remarkable?</h2>
            <p className="body-lg mb-8 max-w-md mx-auto">
              Let&apos;s discuss how we can help your business grow.
            </p>
            <Link href="/contact" className="btn-primary">
              Start a Conversation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
