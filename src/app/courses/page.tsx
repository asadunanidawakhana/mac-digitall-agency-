"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { coursesList } from "@/lib/utils";

export default function CoursesPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-50">
        <div className="container-wide text-center">
          <AnimatedSection>
            <span className="label justify-center" style={{ display: "inline-flex" }}>Education</span>
            <h1 className="heading-display mb-6 text-balance max-w-3xl mx-auto">
              Learn skills that<br />
              <span className="text-brand-600">actually pay off.</span>
            </h1>
            <p className="body-lg max-w-xl mx-auto">
              Structured programs designed to take you from beginner to professional. No fluff, just results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="space-y-5 max-w-4xl mx-auto">
            {coursesList.map((course, i) => (
              <AnimatedSection key={course.id} delay={i * 0.08}>
                <Link href={`/courses/${course.id}`} className="card p-8 block group hover:border-brand-300 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="heading-md group-hover:text-brand-700 transition-colors">{course.title}</h3>
                        <span className="tag-brand shrink-0">{course.level}</span>
                      </div>
                      <p className="body-base mb-4">{course.description}</p>
                      <div className="flex items-center gap-4 text-xs text-charcoal-500">
                        <span className="flex items-center gap-1.5">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                          {course.students} enrolled
                        </span>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <span className="text-sm font-semibold text-brand-600 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                        Enroll Now
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-50 text-center">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="heading-xl mb-4">Not sure which program is right for you?</h2>
            <p className="body-lg mb-8 max-w-md mx-auto">
              Book a free consultation and we&apos;ll help you choose the best learning path.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Free Guidance
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
