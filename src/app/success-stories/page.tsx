"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const stories = [
  { name: "Sarah Johnson", from: "Waitress", to: "$5k/month Freelancer", duration: "4 months", story: "Sarah was working as a waitress when she discovered our Fiverr mentorship program. Within 4 months, she quit her job and was earning $5k/month as a freelance social media manager using AI tools to 10x her productivity." },
  { name: "Ahmed Hassan", from: "College Student", to: "AI Developer", duration: "6 months", story: "Ahmed joined our AI web development bootcamp with zero coding experience. Six months later, he landed a junior developer role at a tech startup and builds AI-powered websites on the side." },
  { name: "Maria Lopez", from: "Stay-at-home Mom", to: "YouTube Creator", duration: "3 months", story: "Maria used our YouTube automation course to launch a channel that now generates $3k/month in ad revenue. She runs everything on autopilot with AI-powered content systems." },
  { name: "James Chen", from: "Barista", to: "Full-time Freelancer", duration: "5 months", story: "James went from making coffee to making $4k/month on Fiverr. He now specializes in AI-assisted graphic design and has a waiting list of clients." },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-50">
        <div className="container-wide text-center">
          <AnimatedSection>
            <span className="label justify-center" style={{ display: "inline-flex" }}>Success Stories</span>
            <h1 className="heading-display mb-6 text-balance max-w-3xl mx-auto">
              Real transformations<br />
              <span className="text-brand-600">from real people.</span>
            </h1>
            <p className="body-lg max-w-xl mx-auto">
              Meet the students and clients who transformed their lives through our programs and services.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <div className="space-y-5">
            {stories.map((s, i) => (
              <AnimatedSection key={s.name} delay={i * 0.1}>
                <div className="card p-8">
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="w-16 h-16 bg-charcoal-200 flex items-center justify-center text-charcoal-600 font-serif text-2xl font-medium shrink-0">
                      {s.name[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="heading-sm">{s.name}</h3>
                        <span className="tag-brand">{s.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-4 text-sm">
                        <span className="text-charcoal-500">{s.from}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D19A00" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        <span className="font-semibold text-brand-700">{s.to}</span>
                      </div>
                      <p className="body-sm text-charcoal-600 leading-relaxed">{s.story}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-50 text-center">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="heading-xl mb-4">Your success story starts here</h2>
            <p className="body-lg mb-8 max-w-md mx-auto">
              Join hundreds of students who have transformed their lives with AI-powered skills.
            </p>
            <Link href="/courses" className="btn-primary">
              Start Your Journey
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
