"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const roadmap = [
  { phase: "Phase 1", title: "Foundation", items: ["Choose your freelancing niche", "Set up your Fiverr profile", "Create your portfolio", "Learn AI productivity tools"] },
  { phase: "Phase 2", title: "First Clients", items: ["Craft winning proposals", "Price your services", "Deliver exceptional work", "Collect testimonials"] },
  { phase: "Phase 3", title: "Scale Up", items: ["Increase your rates", "Build repeat clients", "Outsource and automate", "Create digital products"] },
  { phase: "Phase 4", title: "Freedom", items: ["Passive income systems", "Team building", "Multiple income streams", "Financial independence"] },
];

export default function CareerGuidancePage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-50">
        <div className="container-wide text-center">
          <AnimatedSection>
            <span className="label justify-center" style={{ display: "inline-flex" }}>Career Guidance</span>
            <h1 className="heading-display mb-6 text-balance max-w-3xl mx-auto">
              Your roadmap to<br />
              <span className="text-brand-600">freelancing freedom.</span>
            </h1>
            <p className="body-lg max-w-xl mx-auto">
              A proven system to go from zero to full-time freelancer. Learn the strategies that actually work.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnimatedSection className="section-header">
            <span className="label">The Roadmap</span>
            <h2 className="heading-xl mb-4">Four phases to independence</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {roadmap.map((phase, i) => (
              <AnimatedSection key={phase.phase} delay={i * 0.08}>
                <div className="card p-7 h-full">
                  <span className="text-xs font-semibold tracking-wider uppercase text-brand-600 mb-3 block">{phase.phase}</span>
                  <h3 className="heading-md mb-5">{phase.title}</h3>
                  <ul className="space-y-3">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-charcoal-600">
                        <div className="w-5 h-5 border border-brand-300 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-brand-600 text-[8px] font-bold">{i + 1}</span>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-50 text-center">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="heading-xl mb-4">Ready to start your journey?</h2>
            <p className="body-lg mb-8 max-w-md mx-auto">
              Join our Fiverr mentorship program and get personalized guidance.
            </p>
            <Link href="/courses" className="btn-primary">
              Explore Mentorship Program
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
