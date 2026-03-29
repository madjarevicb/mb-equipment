import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy pt-20">
      <div className="text-center px-6">
        <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">404</p>
        <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-4 italic">Wrong Turn.</h1>
        <p className="text-white/60 text-lg max-w-md mx-auto mb-10">
          This page doesn&apos;t exist — but the kitchen you&apos;re planning probably should. Head back to familiar ground.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-red text-white font-semibold px-8 py-3.5 hover:bg-red-hover transition-all">
            Back to Homepage
          </Link>
          <Link href="/contact" className="border border-white/30 text-white font-semibold px-8 py-3.5 hover:bg-white/10 transition-all">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
