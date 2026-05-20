"use client";

import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { testimonialsList, metrics } from "@/lib/utils";

export default function TestimonialsPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-50">
        <div className="container-wide text-center">
          <AnimatedSection>
            <span className="label justify-center" style={{ display: "inline-flex" }}>Testimonials</span>
            <h1 className="heading-display mb-6 text-balance max-w-3xl mx-auto">
              Trusted by people<br />
              <span className="text-brand-600">who got results.</span>
            </h1>
            <p className="body-lg max-w-xl mx-auto">
              Real feedback from students and clients whose lives and businesses have been transformed.
            </p>
          </AnimatedSection>
        </div>
      </section>

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

      <section className="section-padding bg-cream-50">
        <div className="container-wide max-w-4xl">
          <div className="space-y-5">
            {testimonialsList.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.08}>
                <div className="card p-8">
                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <svg key={idx} width="16" height="16" viewBox="0 0 24 24" fill="#F5B800" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="body-lg text-charcoal-700 italic mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-5 border-t border-charcoal-100">
                    <div className="w-10 h-10 rounded-full bg-charcoal-200 flex items-center justify-center text-charcoal-600 font-semibold text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal-900 text-sm">{t.name}</p>
                      <p className="text-xs text-charcoal-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
