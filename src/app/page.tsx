"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import ServiceCard from "@/components/ServiceCard";
import { servicesList, testimonialsList, metrics, coursesList } from "@/lib/utils";

const workTypes = [
  { label: "Social Media Posts", image: "/uploads/facebook-posts/ps-1.png", category: "Facebook / Instagram" },
  { label: "Business Cards", image: "/uploads/business-cards/cd-1.png", category: "Print Design" },
  { label: "YouTube Thumbnails", image: "/uploads/youtube-thumbnails/ps-2.png", category: "Video Graphics" },
  { label: "Fiverr Gig Images", image: "/uploads/fiverr-gig-thumbnails/gig-web.png", category: "Freelancing" },
  { label: "LinkedIn Posts", image: "/uploads/facebook-posts/linkdin post.png", category: "Professional" },
  { label: "Ad Creatives", image: "/uploads/facebook-posts/add-1-image.png", category: "Advertising" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-cream-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <AnimatedSection>
                <span className="label">AI-Powered Digital Agency</span>
                <h1 className="heading-display mb-6 text-balance">
                  Hi, I&apos;m Mac.<br />
                  <span className="text-brand-600">I build brands that grow.</span>
                </h1>
                <p className="body-lg mb-6 max-w-xl">
                  I&apos;m a digital designer, marketer, and educator helping businesses and individuals grow online. From websites and branding to social media and YouTube — I deliver work that actually converts.
                </p>
                <p className="body-sm text-charcoal-500 mb-10 max-w-lg">
                  Based in Pakistan, working globally. Every project is handled personally — no outsourcing, no templates.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Start a Project
                  </Link>
                  <Link href="/portfolio" className="btn-secondary">
                    View My Work
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-5">
              <AnimatedSection delay={0.15}>
                <div className="relative aspect-[3/4] overflow-hidden border border-charcoal-100">
                  <Image
                    src="/uploads/profile-pics/pf.png"
                    alt="Mac — Founder of Mac Digital Agency"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-charcoal-500">Available for new projects</span>
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

      {/* Services */}
      <section className="section-padding bg-cream-50">
        <div className="container-wide">
          <AnimatedSection className="section-header">
            <span className="label">What I Do</span>
            <h2 className="heading-xl mb-4">Services built for growth</h2>
            <p className="body-lg">Every service is designed to move the needle — not just look pretty.</p>
          </AnimatedSection>

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

      {/* Work Types */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <AnimatedSection>
              <span className="label">My Work</span>
              <h2 className="heading-xl">Types of design I deliver</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <Link href="/portfolio" className="btn-ghost mt-4 md:mt-0">
                View full portfolio
              </Link>
            </AnimatedSection>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {workTypes.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.08}>
                <Link href="/portfolio" className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden border border-charcoal-100 mb-4">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="tag-brand mb-2 inline-block">{item.category}</span>
                  <h3 className="heading-sm group-hover:text-brand-700 transition-colors">{item.label}</h3>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-padding bg-charcoal-900 text-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <AnimatedSection>
                <span className="label" style={{ color: "#FFD84D" }}>Learn & Grow</span>
                <h2 className="heading-xl text-white mb-4">Education that changes lives</h2>
                <p className="text-charcoal-400 body-lg mb-8">
                  Structured programs designed to take you from beginner to professional. Learn AI workflows, freelancing, web development, and more.
                </p>
                <Link href="/courses" className="btn-primary" style={{ backgroundColor: "#FFD84D", color: "#1A1A1A" }}>
                  Explore Programs
                </Link>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-4">
                {coursesList.map((course, i) => (
                  <AnimatedSection key={course.id} delay={i * 0.08}>
                    <Link href="/courses" className="block border border-white/10 p-6 hover:border-brand-500/50 transition-colors duration-300 group">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-brand-400 transition-colors">
                            {course.title}
                          </h3>
                          <p className="text-sm text-charcoal-400 mb-3">{course.description}</p>
                          <div className="flex items-center gap-4 text-xs text-charcoal-500">
                            <span>{course.duration}</span>
                            <span>{course.students} students</span>
                            <span className="text-brand-500">{course.level}</span>
                          </div>
                        </div>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-charcoal-500 group-hover:text-brand-400 transition-colors shrink-0 mt-1">
                          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-cream-50">
        <div className="container-wide">
          <AnimatedSection className="section-header">
            <span className="label">Testimonials</span>
            <h2 className="heading-xl mb-4">What people say</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-5">
            {testimonialsList.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.08}>
                <div className="card p-8">
                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F5B800" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="body-base mb-6 text-charcoal-700 italic">
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

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <span className="label">Ready?</span>
            <h2 className="heading-display mb-4 text-balance">
              Let&apos;s build something<br />
              <span className="text-brand-600">remarkable together.</span>
            </h2>
            <p className="body-lg mb-10 max-w-lg mx-auto">
              Whether you need a website, a brand refresh, or want to learn AI-powered skills — I&apos;m here to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start a Project
              </Link>
              <Link href="/courses" className="btn-secondary">
                Explore Courses
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
