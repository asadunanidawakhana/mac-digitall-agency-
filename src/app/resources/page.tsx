"use client";

import AnimatedSection from "@/components/AnimatedSection";

const resources = [
  { title: "Top 50 AI Tools for 2026", type: "PDF Guide", desc: "Curated list of the best AI tools for productivity, content creation, and business growth." },
  { title: "Freelancing Success Checklist", type: "Checklist", desc: "Step-by-step checklist to launch and scale your freelancing career." },
  { title: "YouTube Automation Playbook", type: "PDF Guide", desc: "Complete guide to building an automated YouTube channel using AI tools." },
  { title: "AI Prompt Engineering Templates", type: "Template Pack", desc: "50+ ready-to-use AI prompts for content creation, marketing, and development." },
  { title: "Social Media Content Calendar", type: "Template", desc: "Plan and schedule your social media content for maximum engagement." },
  { title: "Beginner's Guide to Fiverr", type: "PDF Guide", desc: "Everything you need to know to start freelancing on Fiverr successfully." },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-50">
        <div className="container-wide text-center">
          <AnimatedSection>
            <span className="label justify-center" style={{ display: "inline-flex" }}>Free Resources</span>
            <h1 className="heading-display mb-6 text-balance max-w-3xl mx-auto">
              Tools & guides to<br />
              <span className="text-brand-600">accelerate your growth.</span>
            </h1>
            <p className="body-lg max-w-xl mx-auto">
              Download free resources designed to help you succeed in the AI-powered digital economy.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <div className="space-y-4">
            {resources.map((r, i) => (
              <AnimatedSection key={r.title} delay={i * 0.05}>
                <div className="card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="tag-brand">{r.type}</span>
                    </div>
                    <h3 className="heading-sm mb-1 group-hover:text-brand-700 transition-colors">{r.title}</h3>
                    <p className="body-sm">{r.desc}</p>
                  </div>
                  <button className="shrink-0 text-sm font-semibold text-brand-600 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Download
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
