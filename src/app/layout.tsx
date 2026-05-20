import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mac Digital Agency — AI-Powered Digital Solutions & Education",
    template: "%s — Mac Digital Agency",
  },
  description:
    "Premium AI-powered digital agency offering web development, marketing, branding, and education. Transform your business with modern AI solutions.",
  keywords: [
    "AI agency",
    "digital marketing",
    "web development",
    "AI education",
    "freelancing mentorship",
    "YouTube automation",
    "branding",
    "graphic design",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mac Digital Agency",
    title: "Mac Digital Agency — AI-Powered Digital Solutions & Education",
    description:
      "Premium AI-powered digital agency offering web development, marketing, branding, and education.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
