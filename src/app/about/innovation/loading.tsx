export default function InnovationLoading() {
  return (
    <div role="status" aria-label="Loading Innovation page" aria-busy="true">
      {/* Breadcrumb skeleton */}
      <nav className="max-w-7xl mx-auto px-6 pt-4" aria-hidden="true">
        <div className="flex items-center gap-2">
          <div className="h-4 w-12 bg-gray-200 rounded" />
          <div className="h-4 w-2 bg-gray-200 rounded" />
          <div className="h-4 w-10 bg-gray-200 rounded" />
          <div className="h-4 w-2 bg-gray-200 rounded" />
          <div className="h-4 w-20 bg-gray-200 rounded" />
        </div>
      </nav>

      {/* Hero skeleton */}
      <section
        className="min-h-[70vh] flex items-center bg-navy animate-pulse"
        aria-hidden="true"
      >
        <div className="max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="max-w-2xl space-y-4">
            <div className="h-4 w-40 bg-white/10 rounded" />
            <div className="h-[2px] w-12 bg-white/10" />
            <div className="h-14 max-w-lg w-full bg-white/10 rounded" />
            <div className="h-6 max-w-xl w-full bg-white/10 rounded" />
            <div className="h-20 max-w-xl w-full bg-white/5 rounded" />
            <div className="flex gap-4 pt-4">
              <div className="h-12 w-48 bg-white/10 rounded-sm" />
              <div className="h-12 w-56 bg-white/5 rounded-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured products skeleton */}
      <section className="py-24 bg-red animate-pulse" aria-hidden="true">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-4 mb-16">
            <div className="h-4 w-36 bg-white/20 rounded" />
            <div className="h-10 max-w-sm w-full bg-white/20 rounded" />
            <div className="h-5 max-w-lg w-full bg-white/10 rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[1, 2, 3].map((n) => (
              <div key={n} className="aspect-[4/5] bg-white/10" />
            ))}
          </div>
        </div>
      </section>

      {/* Technology themes skeleton */}
      <section className="py-28 bg-white animate-pulse" aria-hidden="true">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-16 space-y-4">
            <div className="h-4 w-48 bg-gray-200 rounded" />
            <div className="h-10 max-w-sm w-full bg-gray-200 rounded" />
          </div>
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            <div className="lg:col-span-3 bg-navy/10 p-14 min-h-[280px]">
              <div className="space-y-4">
                <div className="h-4 w-40 bg-gray-200 rounded" />
                <div className="h-7 w-48 bg-gray-200 rounded" />
                <div className="h-20 max-w-md w-full bg-gray-100 rounded" />
                <div className="h-12 w-24 bg-gray-200 rounded" />
              </div>
            </div>
            <div className="lg:col-span-2 bg-offwhite border-l-4 border-gray-200 p-12 min-h-[280px]">
              <div className="space-y-4">
                <div className="h-4 w-36 bg-gray-200 rounded" />
                <div className="h-6 w-40 bg-gray-200 rounded" />
                <div className="h-16 max-w-sm w-full bg-gray-100 rounded" />
                <div className="h-10 w-20 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 bg-navy/10 p-12 min-h-[280px]">
              <div className="space-y-4">
                <div className="h-4 w-36 bg-gray-200 rounded" />
                <div className="h-6 w-40 bg-gray-200 rounded" />
                <div className="h-16 max-w-sm w-full bg-gray-100 rounded" />
                <div className="h-10 w-20 bg-gray-200 rounded" />
              </div>
            </div>
            <div className="lg:col-span-3 bg-offwhite border-l-4 border-gray-200 p-14 min-h-[280px]">
              <div className="space-y-4">
                <div className="h-4 w-40 bg-gray-200 rounded" />
                <div className="h-7 w-48 bg-gray-200 rounded" />
                <div className="h-20 max-w-md w-full bg-gray-100 rounded" />
                <div className="h-12 w-24 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA skeleton */}
      <section className="py-24 bg-navy animate-pulse" aria-hidden="true">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-6">
          <div className="h-4 w-32 bg-white/10 rounded" />
          <div className="h-12 max-w-lg w-full bg-white/10 rounded" />
          <div className="h-5 max-w-sm w-full bg-white/5 rounded" />
          <div className="flex gap-4 mt-4">
            <div className="h-12 w-48 bg-white/10 rounded-sm" />
            <div className="h-12 w-56 bg-white/5 rounded-sm" />
          </div>
        </div>
      </section>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
