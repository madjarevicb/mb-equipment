export default function OurBrandsLoading() {
  return (
    <div role="status" aria-label="Loading Our Brands page" aria-busy="true">
      {/* Breadcrumb skeleton */}
      <nav className="max-w-7xl mx-auto px-6 pt-4" aria-hidden="true">
        <div className="flex items-center gap-2">
          <div className="h-4 w-12 bg-gray-200 rounded" />
          <div className="h-4 w-2 bg-gray-200 rounded" />
          <div className="h-4 w-16 bg-gray-200 rounded" />
          <div className="h-4 w-2 bg-gray-200 rounded" />
          <div className="h-4 w-20 bg-gray-200 rounded" />
        </div>
      </nav>

      {/* Hero skeleton */}
      <section
        className="min-h-[60vh] flex items-center bg-navy animate-pulse"
        aria-hidden="true"
      >
        <div className="max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="max-w-2xl space-y-4">
            <div className="h-4 w-48 bg-white/10 rounded" />
            <div className="h-px w-12 bg-white/10" />
            <div className="h-14 max-w-lg w-full bg-white/10 rounded" />
            <div className="h-6 max-w-xl w-full bg-white/10 rounded" />
            <div className="h-20 max-w-xl w-full bg-white/5 rounded" />
            <div className="flex gap-4 pt-4">
              <div className="h-12 w-44 bg-white/10" />
              <div className="h-12 w-48 bg-white/5" />
            </div>
          </div>
        </div>
      </section>

      {/* Segments skeleton */}
      <section
        className="py-16 lg:py-20 bg-white border-b border-gray-100 animate-pulse"
        aria-hidden="true"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6">
            <div className="h-4 w-20 bg-gray-200 rounded" />
            <div className="flex gap-6">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className="h-4 w-28 bg-gray-100 rounded" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands grid skeleton */}
      <section className="py-24 lg:py-32 bg-offwhite animate-pulse" aria-hidden="true">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 space-y-4">
            <div className="h-4 w-28 bg-gray-200 rounded" />
            <div className="h-12 max-w-md w-full bg-gray-200 rounded" />
            <div className="h-4 w-40 bg-gray-100 rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="bg-white overflow-hidden">
                <div className="h-32 bg-gray-100" />
                <div className="p-6 space-y-3">
                  <div className="flex justify-between">
                    <div className="h-5 w-24 bg-gray-200 rounded" />
                    <div className="h-3 w-16 bg-gray-100 rounded" />
                  </div>
                  <div className="h-12 w-full bg-gray-100 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process skeleton */}
      <section className="py-28 lg:py-36 bg-navy animate-pulse" aria-hidden="true">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 space-y-4">
              <div className="h-4 w-20 bg-white/10 rounded" />
              <div className="h-10 w-48 bg-white/10 rounded" />
              <div className="h-12 w-full bg-white/5 rounded" />
            </div>
            <div className="lg:col-span-8 space-y-6">
              {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                <div
                  key={n}
                  className="flex gap-6 py-7 border-b border-white/10"
                >
                  <div className="h-6 w-8 bg-white/10 rounded" />
                  <div className="space-y-2 flex-1">
                    <div className="h-5 w-28 bg-white/10 rounded" />
                    <div className="h-4 w-full bg-white/5 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA skeleton */}
      <section
        className="py-28 lg:py-36 bg-offwhite border-t border-gray-200 animate-pulse"
        aria-hidden="true"
      >
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-4">
          <div className="h-10 max-w-sm w-full bg-gray-200 rounded" />
          <div className="h-5 max-w-md w-full bg-gray-100 rounded" />
          <div className="flex gap-4 mt-4">
            <div className="h-12 w-40 bg-gray-200" />
            <div className="h-12 w-44 bg-gray-100" />
          </div>
        </div>
      </section>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
