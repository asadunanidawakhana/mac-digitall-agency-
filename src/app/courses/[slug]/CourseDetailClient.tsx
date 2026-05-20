"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { coursesList } from "@/lib/utils";

export default function CourseDetailClient({ slug }: { slug: string }) {
  const course = coursesList.find((c) => c.id === slug);
  if (!course) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-2xl">Course not found</h1>
        <Link href="/courses" className="btn-primary mt-4 inline-block">Back to Courses</Link>
      </div>
    );
  }

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-8">
              <AnimatedSection>
                <span className="label">{course.title}</span>
                <h1 className="heading-display mb-6 text-balance">{course.title}</h1>
                <p className="body-lg max-w-2xl mb-8">{course.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">Enroll Now</Link>
                  <Link href="/courses" className="btn-secondary">Back to Courses</Link>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-4">
              <AnimatedSection delay={0.15}>
                <div className="card p-7 sticky top-24">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-charcoal-500">Level</span>
                      <span className="tag-brand">{course.level}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-charcoal-500">Duration</span>
                      <span className="font-medium text-charcoal-900">{course.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-charcoal-500">Students</span>
                      <span className="font-medium text-charcoal-900">{course.students} enrolled</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-charcoal-100">
                      <span className="text-sm text-charcoal-500">Price</span>
                      <span className="font-serif text-2xl font-medium text-charcoal-900">{course.price}</span>
                    </div>
                  </div>
                  <Link href="/contact" className="btn-primary w-full justify-center">
                    Enroll Now
                  </Link>
                  <p className="text-xs text-charcoal-400 text-center mt-3">
                    Flexible payment plans available
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <AnimatedSection className="mb-12">
            <span className="label">Curriculum</span>
            <h2 className="heading-xl mb-4">What you&apos;ll learn</h2>
          </AnimatedSection>

          <div className="space-y-3">
            {course.modules.map((mod, i) => (
              <AnimatedSection key={i} delay={i * 0.04}>
                <div className="card p-5 flex items-center gap-4 group">
                  <div className="w-10 h-10 border border-brand-300 flex items-center justify-center shrink-0">
                    <span className="text-brand-600 font-semibold text-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-charcoal-900">{mod}</h3>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-charcoal-300 group-hover:text-brand-500 transition-colors">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-wide max-w-4xl">
          <AnimatedSection className="mb-10">
            <span className="label">Outcomes</span>
            <h2 className="heading-xl mb-4">After completing this course</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-5">
            {course.outcomes.map((o, i) => (
              <AnimatedSection key={o} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-brand-300 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D19A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="font-medium text-charcoal-800">{o}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white text-center">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="heading-xl mb-4">Ready to start learning?</h2>
            <p className="body-lg mb-8 max-w-md mx-auto">
              Join {course.students}+ students who have already transformed their skills.
            </p>
            <Link href="/contact" className="btn-primary">
              Enroll Now — {course.price}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
