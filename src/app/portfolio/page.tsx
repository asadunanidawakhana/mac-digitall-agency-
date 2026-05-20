"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import { portfolioItems } from "@/lib/utils";

const categories = [
  { id: "all", label: "All Work" },
  { id: "website", label: "Websites" },
  { id: "facebook", label: "Social Media" },
  { id: "business-card", label: "Business Cards" },
  { id: "youtube", label: "YouTube" },
  { id: "fiverr", label: "Fiverr Gigs" },
];

const websiteColors = [
  "from-blue-400 to-cyan-300",
  "from-purple-400 to-pink-300",
  "from-emerald-400 to-teal-300",
  "from-orange-400 to-amber-300",
];

function getDomain(url: string): string {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
}

function WebsitePreview({ item, index }: { item: { title: string; description: string; tags: string[]; liveUrl: string }; index: number }) {
  const domain = getDomain(item.liveUrl);
  const colorClass = websiteColors[index % websiteColors.length];

  return (
    <a
      href={item.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="border border-charcoal-100 mb-4 overflow-hidden transition-all duration-300 group-hover:border-brand-300 group-hover:shadow-lg">
        {/* Browser chrome */}
        <div className="bg-charcoal-100 px-4 py-2.5 flex items-center gap-3 border-b border-charcoal-200">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-charcoal-500 truncate">
            {domain}
          </div>
        </div>
        {/* Preview area */}
        <div className={`aspect-[4/3] bg-gradient-to-br ${colorClass} relative`}>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80 p-6">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-3 opacity-60">
              <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="text-sm font-medium text-center opacity-80">{item.title}</span>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/40 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white px-5 py-2.5 text-xs font-semibold tracking-wide flex items-center gap-2">
              Visit Live Site
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-2">
        {item.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
        <span className="tag-brand">Live Project</span>
      </div>
      <h3 className="heading-sm mb-1 group-hover:text-brand-700 transition-colors">{item.title}</h3>
      <p className="body-sm">{item.description}</p>
    </a>
  );
}

export default function PortfolioPage() {
  const [active, setActive] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered = active === "all"
    ? portfolioItems
    : portfolioItems.filter((p) => p.category === active);

  let websiteIndex = 0;

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-50">
        <div className="container-wide text-center">
          <AnimatedSection>
            <span className="label justify-center" style={{ display: "inline-flex" }}>Portfolio</span>
            <h1 className="heading-display mb-6 text-balance max-w-3xl mx-auto">
              Work that speaks<br />
              <span className="text-brand-600">for itself.</span>
            </h1>
            <p className="body-lg max-w-xl mx-auto">
              Real projects for real clients. From websites to social media, branding to YouTube — every piece is designed with purpose.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                  active === cat.id
                    ? "bg-charcoal-900 text-white"
                    : "bg-cream-100 text-charcoal-600 hover:bg-charcoal-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.05}>
                {item.liveUrl ? (
                  <WebsitePreview item={item} index={websiteIndex++} />
                ) : (
                  <div className="group cursor-pointer" onClick={() => setSelectedImage(item.image)}>
                    <div className="relative aspect-[4/3] overflow-hidden border border-charcoal-100 mb-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/30 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-4 py-2 text-xs font-semibold tracking-wide">
                          Click to View
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <h3 className="heading-sm mb-1 group-hover:text-brand-700 transition-colors">{item.title}</h3>
                    <p className="body-sm">{item.description}</p>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal-900/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-10 h-10 border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Portfolio work"
              width={1200}
              height={800}
              className="w-full h-auto object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}

      <section className="section-padding bg-cream-50 text-center">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="heading-xl mb-4">Want results like these?</h2>
            <p className="body-lg mb-8 max-w-md mx-auto">
              Let&apos;s create something amazing for your brand.
            </p>
            <Link href="/contact" className="btn-primary">
              Start Your Project
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
