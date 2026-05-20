import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50">
      <div className="text-center max-w-md mx-auto px-5">
        <span className="font-serif text-8xl md:text-9xl font-medium text-brand-300 leading-none">404</span>
        <h1 className="heading-lg mt-4 mb-4">Page Not Found</h1>
        <p className="body-lg mb-10 text-charcoal-500">
          Looks like you&apos;ve ventured into uncharted territory. Let&apos;s get you back on track.
        </p>
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  );
}
