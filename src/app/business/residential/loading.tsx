export default function ResidentialLoading() {
  return (
    <div role="status" aria-label="Loading Residential page" aria-busy="true">
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
        className="h-[85vh] min-h-[600px] bg-navy animate-pulse flex items-start justify-center pt-[20vh]"
        aria-hidden="true"
      >
        <div className="text-center space-y-4">
          <div className="h-4 w-48 bg-white/10 rounded mx-auto" />
          <div className="h-14 w-96 max-w-full bg-white/10 rounded mx-auto" />
          <div className="h-5 w-80 max-w-full bg-white/5 rounded mx-auto" />
        </div>
      </section>

      {/* Portfolio skeleton */}
      <section className="py-28 bg-white animate-pulse" aria-hidden="true">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-4">
              <div className="h-4 w-28 bg-gray-200 rounded" />
              <div className="h-12 w-64 bg-gray-200 rounded" />
              <div className="h-[2px] w-16 bg-gray-200" />
            </div>
            <div className="lg:col-span-3 space-y-4">
              <div className="h-20 w-full bg-gray-100 rounded" />
              <div className="h-16 w-full bg-gray-100 rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Brand carousel skeleton */}
      <section
        className="py-20 bg-navy animate-pulse"
        aria-hidden="true"
      >
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="flex gap-20">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-[180px] h-[80px] bg-white/10 rounded flex-shrink-0" />
            ))}
          </div>
          <div className="flex gap-20">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-[180px] h-[80px] bg-white/10 rounded flex-shrink-0" />
            ))}
          </div>
        </div>
      </section>

      {/* Showcase skeleton */}
      <section className="py-28 bg-offwhite animate-pulse" aria-hidden="true">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-sm overflow-hidden">
            <div className="bg-navy/10 p-16 min-h-[300px] space-y-4">
              <div className="h-[2px] w-12 bg-gray-200" />
              <div className="h-10 w-64 bg-gray-200 rounded" />
              <div className="h-20 w-full bg-gray-100 rounded" />
            </div>
            <div className="bg-gray-200 min-h-[300px]" />
          </div>
        </div>
      </section>

      {/* Brochures skeleton */}
      <section className="py-20 bg-navy animate-pulse" aria-hidden="true">
        <div className="max-w-5xl mx-auto px-6 flex flex-col lg:flex-row gap-8">
          <div className="space-y-3 lg:w-64">
            <div className="h-4 w-20 bg-white/10 rounded" />
            <div className="h-7 w-48 bg-white/10 rounded" />
          </div>
          <div className="flex gap-5">
            {[1, 2].map((n) => (
              <div key={n} className="h-24 w-64 bg-white/5 rounded" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA skeleton */}
      <section
        className="py-24 bg-offwhite border-t border-gray-200 animate-pulse"
        aria-hidden="true"
      >
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-4">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-10 max-w-sm w-full bg-gray-200 rounded" />
          <div className="h-16 max-w-lg w-full bg-gray-100 rounded" />
          <div className="flex gap-4 mt-4">
            <div className="h-12 w-48 bg-gray-200 rounded-sm" />
            <div className="h-12 w-36 bg-gray-100 rounded-sm" />
          </div>
        </div>
      </section>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
