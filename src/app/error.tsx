"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          Something went wrong
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
          Unexpected Error
        </h1>
        <p className="text-text-secondary text-lg max-w-md mx-auto mb-10">
          We are working on it. Please try again in a moment.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="bg-red text-white font-semibold px-8 py-3.5 hover:bg-red-hover transition-all"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="border border-gray-300 text-text-primary font-semibold px-8 py-3.5 hover:bg-offwhite transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
