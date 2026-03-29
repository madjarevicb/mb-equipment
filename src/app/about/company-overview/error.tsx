"use client";

import Link from "next/link";

export default function CompanyOverviewError({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="font-display text-4xl font-bold text-text-primary italic mb-4">Unable to Load Page</h1>
        <p className="text-text-secondary mb-8">Something went wrong. Please try again.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => reset()} className="bg-red text-white font-semibold px-8 py-4 hover:bg-red-hover transition-all">Try Again</button>
          <Link href="/" className="border border-navy/20 text-navy font-semibold px-8 py-4 hover:bg-navy hover:text-white transition-all">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}
