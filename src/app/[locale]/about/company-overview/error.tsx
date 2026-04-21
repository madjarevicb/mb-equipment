"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function CompanyOverviewError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("CompanyOverview error:", error);
  }, [error]);
  return (
    <section className="min-h-[60vh] flex items-center justify-center" role="alert">
      <div className="text-center px-6">
        <h1 className="font-display text-4xl font-bold text-text-primary italic mb-4">Unable to Load Page</h1>
        <p className="text-text-secondary mb-8">Something went wrong. Please try again.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => reset()} className="inline-flex items-center gap-3 bg-red text-white font-medium px-8 py-4 text-sm tracking-[0.08em] uppercase hover:bg-red-hover transition-colors duration-300">Try Again <span aria-hidden="true" className="text-xs">&#8594;</span></button>
          <Link href="/" className="inline-flex items-center gap-3 border border-gray-200 text-text-primary font-medium px-8 py-4 text-sm tracking-[0.08em] uppercase hover:border-gray-400 transition-colors duration-300">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}
