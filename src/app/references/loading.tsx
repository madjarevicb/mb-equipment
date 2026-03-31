export default function ReferencesLoading() {
  return (
    <div
      role="status"
      aria-label="Loading References page"
      aria-busy="true"
    >
      {/* Breadcrumb skeleton */}
      <nav className="max-w-7xl mx-auto px-6 pt-4" aria-hidden="true">
        <div className="flex items-center gap-2">
          <div className="h-4 w-12 bg-gray-200 rounded" />
          <div className="h-4 w-2 bg-gray-200 rounded" />
          <div className="h-4 w-20 bg-gray-200 rounded" />
        </div>
      </nav>

      {/* Hero skeleton */}
      <section
        className="h-[70vh] min-h-[500px] bg-gray-900 animate-pulse flex items-center"
        aria-hidden="true"
      >
        <div className="max-w-7xl mx-auto px-6 w-full space-y-4">
          <div className="h-4 w-44 bg-white/10 rounded" />
          <div className="h-14 max-w-xl w-full bg-white/10 rounded" />
          <div className="h-6 max-w-2xl w-full bg-white/5 rounded" />
        </div>
      </section>

      {/* Who We Are skeleton */}
      <section className="py-16 lg:py-20 bg-white animate-pulse" aria-hidden="true">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-8 w-full bg-gray-200 rounded" />
              <div className="h-8 w-3/4 bg-gray-200 rounded" />
              <div className="h-16 w-full bg-gray-100 rounded mt-4" />
            </div>
            <div className="lg:col-span-5">
              <div className="bg-offwhite p-8 space-y-5">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="flex justify-between border-b border-gray-200 pb-4">
                    <div className="h-4 w-20 bg-gray-200 rounded" />
                    <div className="h-6 w-24 bg-gray-200 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase skeleton */}
      <section className="py-16 lg:py-20 bg-white animate-pulse" aria-hidden="true">
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-[280px] bg-gray-200 mb-4" />
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h-[200px] bg-gray-200" />
            ))}
          </div>
        </div>
      </section>

      {/* Market Leadership skeleton */}
      <section className="py-24 lg:py-32 bg-navy animate-pulse" aria-hidden="true">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <div className="h-4 w-32 bg-white/10 rounded mx-auto" />
          <div className="h-16 w-24 bg-white/10 rounded mx-auto" />
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <div key={n} className="h-10 w-36 bg-white/5 rounded" />
            ))}
          </div>
        </div>
      </section>

      {/* Global Chains skeleton */}
      <section className="py-16 lg:py-20 bg-white animate-pulse" aria-hidden="true">
        <div className="max-w-6xl mx-auto px-6 mb-10 space-y-3">
          <div className="h-4 w-36 bg-gray-200 rounded" />
          <div className="h-10 w-56 bg-gray-200 rounded" />
        </div>
        <div className="flex gap-4 overflow-hidden">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="shrink-0 w-[400px] h-[220px] bg-gray-200" />
          ))}
        </div>
      </section>

      {/* Local Projects skeleton */}
      <section className="py-16 lg:py-20 bg-offwhite animate-pulse" aria-hidden="true">
        <div className="max-w-6xl mx-auto px-6 mb-10 space-y-3">
          <div className="h-4 w-32 bg-gray-200 rounded" />
          <div className="h-10 w-52 bg-gray-200 rounded" />
        </div>
        <div className="flex gap-4 overflow-hidden mb-4">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="shrink-0 w-[320px] h-[220px] bg-gray-300" />
          ))}
        </div>
        <div className="flex gap-4 overflow-hidden">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="shrink-0 w-[320px] h-[220px] bg-gray-300" />
          ))}
        </div>
      </section>

      {/* Design & Engineering skeleton */}
      <section className="py-16 lg:py-20 bg-navy animate-pulse" aria-hidden="true">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <div className="h-4 w-24 bg-white/10 rounded" />
          <div className="h-10 w-72 bg-white/10 rounded" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
            {[1, 2, 3].map((n) => (
              <div key={n} className="aspect-[16/10] bg-white/5" />
            ))}
          </div>
        </div>
      </section>

      {/* Brands & Partners skeleton */}
      <section className="py-16 lg:py-20 bg-white animate-pulse" aria-hidden="true">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-2 space-y-3">
              <div className="h-4 w-20 bg-gray-200 rounded" />
              <div className="h-8 w-24 bg-gray-200 rounded" />
            </div>
            <div className="lg:col-span-10">
              <div className="h-[200px] bg-gray-100 rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Geography Stats skeleton */}
      <section className="py-16 lg:py-20 bg-navy animate-pulse" aria-hidden="true">
        <div className="max-w-6xl mx-auto px-6 flex justify-center gap-8">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-6 w-28 bg-white/10 rounded" />
          ))}
        </div>
      </section>

      {/* CTA skeleton */}
      <section className="py-28 lg:py-36 bg-offwhite animate-pulse" aria-hidden="true">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <div className="h-4 w-24 bg-gray-200 rounded mx-auto" />
          <div className="h-10 w-64 bg-gray-200 rounded mx-auto" />
          <div className="h-16 max-w-2xl w-full bg-gray-100 rounded mx-auto" />
          <div className="flex gap-4 justify-center mt-6">
            <div className="h-12 w-44 bg-gray-200" />
            <div className="h-12 w-44 bg-gray-100" />
          </div>
        </div>
      </section>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
