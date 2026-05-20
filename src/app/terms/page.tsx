import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-50">
        <div className="container-wide text-center">
          <h1 className="heading-display mb-4">Terms &amp; Conditions</h1>
          <p className="body-sm text-charcoal-500">Last updated: January 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow max-w-3xl text-charcoal-600 space-y-10">
          <div>
            <h2 className="heading-sm mb-3">1. Acceptance of Terms</h2>
            <p className="body-sm">By accessing or using Mac Digital Agency&apos;s website and services, you agree to be bound by these Terms &amp; Conditions.</p>
          </div>
          <div>
            <h2 className="heading-sm mb-3">2. Services</h2>
            <p className="body-sm">Mac Digital Agency provides digital services including web development, marketing, branding, design, and educational courses. All services are subject to specific agreements and project scopes.</p>
          </div>
          <div>
            <h2 className="heading-sm mb-3">3. Intellectual Property</h2>
            <p className="body-sm">All content, trademarks, and intellectual property on this website belong to Mac Digital Agency unless otherwise stated.</p>
          </div>
          <div>
            <h2 className="heading-sm mb-3">4. Limitation of Liability</h2>
            <p className="body-sm">Mac Digital Agency shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
          </div>
          <div>
            <h2 className="heading-sm mb-3">5. Contact</h2>
            <p className="body-sm">For questions about these terms, contact us at macdigitalagency1@gmail.com.</p>
          </div>
        </div>
      </section>
    </>
  );
}
