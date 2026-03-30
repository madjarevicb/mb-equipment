export default function DemoCentersLoading() {
  return (
    <div
      role="status"
      aria-label="Loading Demo Centers page"
      aria-busy="true"
    >
      {/* Breadcrumb skeleton */}
      <nav className="max-w-7xl mx-auto px-6 pt-4" aria-label="Breadcrumb" aria-hidden="true">
        <div className="flex items-center gap-2">
          <div className="h-4 w-12 bg-gray-200 rounded" />
          <div className="h-4 w-2 bg-gray-200 rounded" />
          <div className="h-4 w-24 bg-gray-200 rounded" />
        </div>
      </nav>

      {/* Hero skeleton */}
      <section
        className="h-[70vh] min-h-[500px] bg-gray-900 animate-pulse flex items-end"
        aria-hidden="true"
      >
        <div className="max-w-6xl mx-auto px-6 pb-28 w-full space-y-4">
          <div className="h-4 w-48 bg-white/10 rounded" />
          <div className="h-14 max-w-lg w-full bg-white/10 rounded" />
          <div className="h-6 max-w-xl w-full bg-white/5 rounded" />
          <div className="flex gap-4 mt-4">
            <div className="h-12 w-36 bg-white/10 rounded-sm" />
            <div className="h-12 w-40 bg-white/5 rounded-sm" />
          </div>
        </div>
      </section>

      {/* Intro skeleton */}
      <section className="py-16 bg-white animate-pulse" aria-hidden="true">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-3">
              <div className="h-4 w-28 bg-gray-200 rounded" />
              <div className="h-8 w-full bg-gray-200 rounded" />
              <div className="h-8 w-2/3 bg-gray-200 rounded" />
            </div>
            <div className="lg:col-span-7 space-y-3">
              <div className="h-16 w-full bg-gray-100 rounded" />
              <div className="h-16 w-full bg-gray-100 rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Centers skeleton */}
      <section className="py-16 bg-offwhite animate-pulse" aria-hidden="true">
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-4 w-24 bg-gray-200 rounded mb-3" />
          <div className="h-10 w-64 bg-gray-200 rounded mb-12" />
          <div className="space-y-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white overflow-hidden">
                <div className="aspect-[16/10] bg-gray-200" />
                <div className="p-8 space-y-4">
                  <div className="h-3 w-20 bg-gray-200 rounded" />
                  <div className="h-6 w-48 bg-gray-200 rounded" />
                  <div className="h-16 w-full bg-gray-100 rounded" />
                  <div className="flex gap-2">
                    <div className="h-7 w-24 bg-gray-100 rounded" />
                    <div className="h-7 w-28 bg-gray-100 rounded" />
                    <div className="h-7 w-32 bg-gray-100 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA skeleton */}
      <section className="py-16 bg-navy animate-pulse" aria-hidden="true">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <div className="h-4 w-20 bg-white/10 rounded mx-auto" />
          <div className="h-10 w-72 bg-white/10 rounded mx-auto" />
          <div className="h-12 w-full max-w-lg bg-white/5 rounded mx-auto" />
          <div className="h-12 w-48 bg-white/10 rounded-sm mx-auto mt-4" />
        </div>
      </section>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
