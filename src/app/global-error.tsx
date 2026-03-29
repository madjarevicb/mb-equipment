"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error("Global error:", error);
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-navy">
        <div className="text-center px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            500
          </p>
          <h1 className="text-5xl font-bold text-white mb-4">
            Something Went Wrong.
          </h1>
          <p className="text-white/60 text-lg max-w-md mx-auto mb-10">
            We are working on it. Please try again in a moment.
          </p>
          <button
            onClick={() => reset()}
            className="bg-red text-white font-semibold px-8 py-3.5 hover:bg-red-hover transition-all"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
