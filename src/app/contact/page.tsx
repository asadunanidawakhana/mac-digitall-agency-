"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const services = ["AI Web Development", "Digital Marketing", "Branding", "Video Editing", "Graphic Design", "YouTube Automation", "Courses", "Other"];
const budgets = ["$500 - $1,000", "$1,000 - $3,000", "$3,000 - $10,000", "$10,000+", "Not Sure"];
const businessTypes = ["Startup", "Small Business", "Agency", "Freelancer", "Student", "Other"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "", budget: "", businessType: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-50">
        <div className="container-wide text-center">
          <AnimatedSection>
            <span className="label justify-center" style={{ display: "inline-flex" }}>Contact</span>
            <h1 className="heading-display mb-6 text-balance max-w-3xl mx-auto">
              Let&apos;s start a<br />
              <span className="text-brand-600">conversation.</span>
            </h1>
            <p className="body-lg max-w-xl mx-auto">
              Tell us about your project, goals, or learning aspirations. We&apos;ll get back to you within 2-4 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 max-w-5xl mx-auto">
            <div className="lg:col-span-7">
              {submitted ? (
                <AnimatedSection className="card p-12 text-center">
                  <div className="w-16 h-16 border border-green-300 flex items-center justify-center mx-auto mb-6">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="heading-md mb-2">Message Sent!</h3>
                  <p className="body-sm text-charcoal-500">Thank you for reaching out. We&apos;ll respond within 2-4 hours during business hours.</p>
                </AnimatedSection>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold tracking-wide uppercase text-charcoal-700 mb-2">Name *</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="input-field" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wide uppercase text-charcoal-700 mb-2">Email *</label>
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="input-field" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-semibold tracking-wide uppercase text-charcoal-700 mb-2">Service</label>
                      <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="input-field">
                        <option value="">Select</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wide uppercase text-charcoal-700 mb-2">Budget</label>
                      <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className="input-field">
                        <option value="">Select</option>
                        {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wide uppercase text-charcoal-700 mb-2">Type</label>
                      <select value={form.businessType} onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                        className="input-field">
                        <option value="">Select</option>
                        {businessTypes.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wide uppercase text-charcoal-700 mb-2">Message</label>
                    <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="input-field resize-none" placeholder="Tell us about your project or goals..." />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-5 space-y-6">
              <AnimatedSection>
                <div className="card p-7">
                  <h3 className="heading-sm mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    {[
                      { label: "Email", value: "macdigitalagency1@gmail.com" },
                      { label: "WhatsApp", value: "0333-7629724" },
                      { label: "Response Time", value: "Within 2-4 hours" },
                    ].map((c) => (
                      <div key={c.label}>
                        <p className="text-xs tracking-wide uppercase text-charcoal-500 mb-1">{c.label}</p>
                        <p className="font-medium text-charcoal-900">{c.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="card p-7">
                  <h3 className="heading-sm mb-5">Follow Us</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "YouTube", href: "https://www.youtube.com/channel/UC3x9b72q76OlXXPCgsWrX-w" },
                      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61583029653718" },
                      { label: "LinkedIn", href: "https://www.linkedin.com/in/mac-digital-6172663b6/" },
                      { label: "Instagram", href: "https://instagram.com" },
                    ].map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="py-3 border border-charcoal-200 text-center text-xs font-medium text-charcoal-600 hover:border-brand-400 hover:text-brand-600 transition-all">
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
