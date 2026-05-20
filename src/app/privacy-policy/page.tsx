import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-50">
        <div className="container-wide text-center">
          <h1 className="heading-display mb-4">Privacy Policy</h1>
          <p className="body-sm text-charcoal-500">Last updated: January 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow max-w-3xl">
          <div className="space-y-10 text-charcoal-600">
            <div>
              <h2 className="heading-sm mb-3">1. Information We Collect</h2>
              <p className="body-sm">We collect information you provide directly to us, including your name, email address, phone number, and any other information you choose to provide when filling out forms on our website.</p>
            </div>
            <div>
              <h2 className="heading-sm mb-3">2. How We Use Your Information</h2>
              <p className="body-sm">We use the information we collect to respond to your inquiries, provide our services, send marketing communications (with your consent), and improve our website and services.</p>
            </div>
            <div>
              <h2 className="heading-sm mb-3">3. Data Protection</h2>
              <p className="body-sm">We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
            </div>
            <div>
              <h2 className="heading-sm mb-3">4. Third-Party Services</h2>
              <p className="body-sm">We may use third-party services for analytics, hosting, and email delivery. These services have their own privacy policies governing data handling.</p>
            </div>
            <div>
              <h2 className="heading-sm mb-3">5. Contact Us</h2>
              <p className="body-sm">If you have any questions about this Privacy Policy, please contact us at macdigitalagency1@gmail.com.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
