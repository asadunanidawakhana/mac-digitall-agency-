"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const posts = [
  { title: "10 AI Tools Every Freelancer Should Know in 2026", category: "AI Tutorials", date: "May 15, 2026", readTime: "8 min read" },
  { title: "How to Build a Profitable YouTube Channel with AI Automation", category: "Automation", date: "May 10, 2026", readTime: "12 min read" },
  { title: "The Complete Guide to Fiverr Freelancing in 2026", category: "Freelancing", date: "May 5, 2026", readTime: "15 min read" },
  { title: "AI-Powered Marketing: Strategies That Actually Work", category: "Marketing", date: "April 28, 2026", readTime: "10 min read" },
  { title: "Why Every Business Needs an AI-Ready Website", category: "Web Development", date: "April 20, 2026", readTime: "7 min read" },
  { title: "The Future of Work: How AI is Reshaping Digital Careers", category: "Productivity", date: "April 15, 2026", readTime: "9 min read" },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-50">
        <div className="container-wide text-center">
          <AnimatedSection>
            <span className="label justify-center" style={{ display: "inline-flex" }}>Blog</span>
            <h1 className="heading-display mb-6 text-balance max-w-3xl mx-auto">
              Insights, tutorials<br />
              <span className="text-brand-600">& strategies.</span>
            </h1>
            <p className="body-lg max-w-xl mx-auto">
              Actionable content to help you navigate the AI-powered digital landscape.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <div className="space-y-0">
            {posts.map((post, i) => (
              <AnimatedSection key={post.title} delay={i * 0.05}>
                <Link href="/blog" className="block py-8 border-b border-charcoal-100 group hover:border-brand-300 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="tag-brand">{post.category}</span>
                        <span className="text-xs text-charcoal-400">{post.readTime}</span>
                      </div>
                      <h2 className="heading-sm group-hover:text-brand-700 transition-colors">{post.title}</h2>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs text-charcoal-400">{post.date}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-charcoal-400 group-hover:text-brand-600 transition-colors">
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
