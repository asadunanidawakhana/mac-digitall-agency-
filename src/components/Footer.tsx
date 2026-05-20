import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Services: [
    { label: "AI Web Development", href: "/services/ai-web-development" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Branding", href: "/services/branding" },
    { label: "Video Editing", href: "/services/video-editing" },
    { label: "Graphic Design", href: "/services/graphic-design" },
    { label: "YouTube Automation", href: "/services/youtube-automation" },
  ],
  Learn: [
    { label: "All Courses", href: "/courses" },
    { label: "Free Resources", href: "/resources" },
    { label: "Career Guidance", href: "/career-guidance" },
    { label: "Success Stories", href: "/success-stories" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/uploads/profile-pics/logo.jpeg"
                  alt="Mac Digital Agency"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-semibold text-lg">Mac Digital</span>
            </div>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-8 max-w-sm">
              AI-powered digital agency helping businesses and individuals grow through modern design, marketing, and education.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.youtube.com/channel/UC3x9b72q76OlXXPCgsWrX-w"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-charcoal-400 hover:bg-brand-600 hover:border-brand-600 hover:text-charcoal-900 transition-all duration-300 text-xs font-semibold"
                aria-label="YouTube"
              >
                YT
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61583029653718"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-charcoal-400 hover:bg-brand-600 hover:border-brand-600 hover:text-charcoal-900 transition-all duration-300 text-xs font-semibold"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href="https://www.linkedin.com/in/mac-digital-6172663b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-charcoal-400 hover:bg-brand-600 hover:border-brand-600 hover:text-charcoal-900 transition-all duration-300 text-xs font-semibold"
                aria-label="LinkedIn"
              >
                IN
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-charcoal-400 hover:bg-brand-600 hover:border-brand-600 hover:text-charcoal-900 transition-all duration-300 text-xs font-semibold"
                aria-label="Instagram"
              >
                IG
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-2 md:col-span-1">
              <h4 className="font-semibold text-sm text-white mb-5 tracking-wide uppercase">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-charcoal-400 hover:text-brand-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-500">
            &copy; {new Date().getFullYear()} Mac Digital Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs text-charcoal-500 hover:text-charcoal-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-charcoal-500 hover:text-charcoal-300 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
