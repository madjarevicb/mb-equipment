"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route error:", error);
  }, [error]);
  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-28">
        <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-6">
          Something went wrong
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-text-primary leading-[1.1] mb-6">
          Unexpected<br />
          <span className="italic font-normal">Error.</span>
        </h1>
        <div className="w-16 h-px bg-gold/30 mb-6" />
        <p className="text-text-secondary text-lg max-w-md mb-12">
          We are working on it. Please try again in a moment.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-3 bg-red text-white font-medium px-8 py-4 text-sm tracking-[0.08em] uppercase hover:bg-red-hover transition-colors duration-300"
          >
            Try Again
            <span aria-hidden="true" className="text-xs">&#8594;</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-3 border border-gray-200 text-text-primary font-medium px-8 py-4 text-sm tracking-[0.08em] uppercase hover:border-gray-400 transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
