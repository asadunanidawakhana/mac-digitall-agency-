"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import Image from "next/image";

const categories = [
  { id: "all", label: "All Work" },
  { id: "facebook", label: "Social Media" },
  { id: "business-card", label: "Business Cards" },
  { id: "youtube", label: "YouTube" },
  { id: "fiverr", label: "Fiverr Gigs" },
];

const portfolioItems = [
  {
    category: "facebook",
    title: "Facebook Ad Campaign",
    description: "High-converting ad creatives for a tech startup launch.",
    image: "/uploads/facebook-posts/ps-1.png",
    tags: ["Social Media", "Ads"],
  },
  {
    category: "business-card",
    title: "Premium Business Cards",
    description: "Luxury card design for a consulting firm.",
    image: "/uploads/business-cards/cd-1.png",
    tags: ["Print", "Branding"],
  },
  {
    category: "youtube",
    title: "YouTube Thumbnail Series",
    description: "High-CTR thumbnails for a tech review channel.",
    image: "/uploads/youtube-thumbnails/ps-2.png",
    tags: ["YouTube", "Graphics"],
  },
  {
    category: "fiverr",
    title: "Fiverr Gig Thumbnails",
    description: "Eye-catching gig images that increased clicks by 200%.",
    image: "/uploads/fiverr-gig-thumbnails/gig-web.png",
    tags: ["Fiverr", "Marketing"],
  },
  {
    category: "facebook",
    title: "LinkedIn Professional Posts",
    description: "Professional content for B2B brand positioning.",
    image: "/uploads/facebook-posts/linkdin post.png",
    tags: ["LinkedIn", "B2B"],
  },
  {
    category: "business-card",
    title: "Modern Business Card Set",
    description: "Clean, minimal card design for a creative agency.",
    image: "/uploads/business-cards/cd-2.png",
    tags: ["Print", "Identity"],
  },
  {
    category: "youtube",
    title: "Thumbnail Design Pack",
    description: "Consistent thumbnail style for a growing channel.",
    image: "/uploads/youtube-thumbnails/thumbnailk-2.png",
    tags: ["YouTube", "Design"],
  },
  {
    category: "fiverr",
    title: "Guru.com Portfolio Images",
    description: "Professional portfolio images for freelancing platforms.",
    image: "/uploads/fiverr-gig-thumbnails/GURU.COM-1.png",
    tags: ["Freelancing", "Portfolio"],
  },
  {
    category: "facebook",
    title: "Social Media Post Series",
    description: "Engaging visual content for brand awareness campaigns.",
    image: "/uploads/facebook-posts/add-1-image.png",
    tags: ["Social Media", "Content"],
  },
  {
    category: "business-card",
    title: "Corporate Business Cards",
    description: "Professional card design for a corporate client.",
    image: "/uploads/business-cards/cd3.jpeg",
    tags: ["Print", "Corporate"],
  },
  {
    category: "youtube",
    title: "Not In Portfolio Series",
    description: "Creative thumbnail designs for educational content.",
    image: "/uploads/youtube-thumbnails/not in  portfolio - 2.png",
    tags: ["YouTube", "Education"],
  },
  {
    category: "fiverr",
    title: "Fiverr Gig Image Set",
    description: "Complete gig image package for multiple services.",
    image: "/uploads/fiverr-gig-thumbnails/post2.png",
    tags: ["Fiverr", "Design"],
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? portfolioItems
    : portfolioItems.filter((p) => p.category === active);

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
              Real projects for real clients. Every piece is designed with purpose and built to perform.
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
              <AnimatedSection key={item.image + item.title} delay={i * 0.05}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden border border-charcoal-100 mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <h3 className="heading-sm mb-1 group-hover:text-brand-700 transition-colors">{item.title}</h3>
                  <p className="body-sm">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

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
