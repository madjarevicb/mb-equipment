export default function FoodProcessingLoading() {
  return (
    <div
      role="status"
      aria-label="Loading Food Processing page"
      aria-busy="true"
    >
      {/* Breadcrumb skeleton */}
      <nav className="max-w-7xl mx-auto px-6 pt-4" aria-hidden="true">
        <div className="flex items-center gap-2">
          <div className="h-4 w-12 bg-gray-200 rounded" />
          <div className="h-4 w-2 bg-gray-200 rounded" />
          <div className="h-4 w-16 bg-gray-200 rounded" />
          <div className="h-4 w-2 bg-gray-200 rounded" />
          <div className="h-4 w-28 bg-gray-200 rounded" />
        </div>
      </nav>

      {/* Hero skeleton */}
      <section
        className="h-[70vh] min-h-[500px] bg-gray-900 animate-pulse flex items-center"
        aria-hidden="true"
      >
        <div className="max-w-7xl mx-auto px-6 w-full space-y-4">
          <div className="h-4 w-52 bg-white/10 rounded" />
          <div className="h-14 max-w-lg w-full bg-white/10 rounded" />
          <div className="h-6 max-w-2xl w-full bg-white/5 rounded" />
        </div>
      </section>

      {/* Intro skeleton */}
      <section className="py-28 bg-white animate-pulse" aria-hidden="true">
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-4 w-40 bg-gray-200 rounded mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-3">
              <div className="h-8 w-full bg-gray-200 rounded" />
              <div className="h-8 w-3/4 bg-gray-200 rounded" />
            </div>
            <div className="space-y-3">
              <div className="h-16 w-full bg-gray-100 rounded" />
              <div className="h-5 w-32 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Brands skeleton */}
      <section className="py-28 bg-navy animate-pulse" aria-hidden="true">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <div className="h-4 w-28 bg-white/10 rounded" />
          <div className="h-12 w-72 bg-white/10 rounded" />
          <div className="h-20 max-w-2xl w-full bg-white/5 rounded" />
        </div>
      </section>

      {/* Equipment skeleton */}
      <section className="py-20 bg-offwhite animate-pulse" aria-hidden="true">
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-10 w-56 bg-gray-200 rounded" />
          <div className="h-[1px] w-full bg-gray-200 mt-6" />
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="flex items-center gap-5 py-5 border-b border-gray-200">
              <div className="h-6 w-8 bg-gray-200 rounded" />
              <div className="h-5 w-48 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </section>

      {/* Application skeleton */}
      <section className="py-24 bg-navy animate-pulse" aria-hidden="true">
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-4 w-24 bg-white/10 rounded mb-3" />
          <div className="h-10 w-48 bg-white/10 rounded mb-14" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-4">
              <div className="h-6 w-20 bg-white/10 rounded" />
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="h-4 w-32 bg-white/5 rounded" />
              ))}
            </div>
            <div className="lg:col-span-5 space-y-4">
              <div className="h-6 w-20 bg-white/10 rounded" />
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="h-4 w-32 bg-white/5 rounded" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation centers skeleton */}
      <section className="py-24 bg-white animate-pulse" aria-hidden="true">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-offwhite rounded-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 p-14 space-y-4">
                <div className="h-4 w-32 bg-gray-200 rounded" />
                <div className="h-10 w-64 bg-gray-200 rounded" />
                <div className="h-16 w-full bg-gray-100 rounded" />
                <div className="flex gap-3 mt-4">
                  <div className="h-10 w-48 bg-gray-200 rounded-sm" />
                  <div className="h-10 w-52 bg-gray-100 rounded-sm" />
                </div>
              </div>
              <div className="lg:col-span-2 bg-navy/10 p-14 flex items-center justify-center">
                <div className="h-16 w-16 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
