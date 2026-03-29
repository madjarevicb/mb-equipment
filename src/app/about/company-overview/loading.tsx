export default function CompanyOverviewLoading() {
  return (
    <>
      {/* Hero skeleton */}
      <section className="min-h-[70vh] flex items-center bg-navy animate-pulse">
        <div className="max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="max-w-2xl space-y-4">
            <div className="h-4 w-32 bg-white/10 rounded" />
            <div className="h-12 max-w-96 w-full bg-white/10 rounded" />
            <div className="h-6 max-w-80 w-full bg-white/10 rounded" />
            <div className="h-20 max-w-xl w-full bg-white/10 rounded" />
            <div className="flex gap-8 pt-2">
              <div className="h-4 w-24 bg-white/10 rounded" />
              <div className="h-4 w-24 bg-white/10 rounded" />
              <div className="h-4 w-24 bg-white/10 rounded" />
            </div>
            <div className="h-12 w-64 bg-white/10 rounded mt-4" />
          </div>
        </div>
      </section>

      {/* Timeline skeleton */}
      <section className="py-28 bg-white animate-pulse">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-6 mb-20">
            <div className="h-10 max-w-xs w-full bg-gray-200 rounded" />
            <div className="w-16 h-[2px] bg-gray-200" />
          </div>
          <div className="max-w-4xl mx-auto space-y-16">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="flex gap-8">
                <div className="h-6 w-20 bg-gray-200 rounded" />
                <div className="flex-1 space-y-2">
                  <div className="h-5 max-w-48 w-full bg-gray-200 rounded" />
                  <div className="h-4 max-w-md w-full bg-gray-100 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment grid skeleton */}
      <section className="py-28 bg-navy animate-pulse">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-6 mb-16">
            <div className="h-10 max-w-sm w-full bg-white/10 rounded" />
            <div className="h-5 max-w-lg w-full bg-white/5 rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="bg-navy-light/50 border border-white/5">
                <div className="h-44 md:h-52 bg-white/5" />
                <div className="p-6 space-y-3">
                  <div className="h-5 max-w-32 w-full bg-white/10 rounded" />
                  <div className="h-4 max-w-full bg-white/5 rounded" />
                  <div className="h-4 max-w-48 w-full bg-white/5 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process skeleton */}
      <section className="py-28 bg-white animate-pulse">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-6 mb-20">
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="h-10 max-w-xs w-full bg-gray-200 rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="bg-navy/5 p-6 space-y-3">
                <div className="h-8 w-12 bg-gray-200 rounded" />
                <div className="h-5 max-w-32 w-full bg-gray-200 rounded" />
                <div className="h-4 max-w-full bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values skeleton */}
      <section className="py-28 bg-offwhite animate-pulse">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-6 mb-20">
            <div className="h-10 max-w-xs w-full bg-gray-200 rounded" />
            <div className="w-16 h-[2px] bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white p-8 space-y-4">
                <div className="h-1 bg-gray-200" />
                <div className="h-6 max-w-32 w-full bg-gray-200 rounded" />
                <div className="h-4 max-w-full bg-gray-100 rounded" />
                <div className="h-4 max-w-48 w-full bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof skeleton */}
      <section className="py-24 bg-white animate-pulse">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-6 mb-16">
            <div className="h-10 max-w-sm w-full bg-gray-200 rounded" />
            <div className="w-16 h-[2px] bg-gray-200" />
            <div className="h-5 max-w-lg w-full bg-gray-100 rounded" />
          </div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-5 w-20 bg-gray-200 rounded" />
            ))}
          </div>
          <div className="max-w-2xl mx-auto mt-12 space-y-3">
            <div className="h-4 max-w-full bg-gray-100 rounded" />
            <div className="h-4 max-w-80 w-full bg-gray-100 rounded mx-auto" />
          </div>
        </div>
      </section>

      {/* FAQ skeleton */}
      <section className="py-28 bg-offwhite animate-pulse">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-6 mb-20">
            <div className="h-10 max-w-xs w-full bg-gray-200 rounded" />
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <div key={n} className="bg-white p-6">
                <div className="h-5 max-w-80 w-full bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA skeleton */}
      <section className="py-28 bg-navy animate-pulse">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-6">
          <div className="h-10 max-w-md w-full bg-white/10 rounded" />
          <div className="h-5 max-w-sm w-full bg-white/5 rounded" />
          <div className="flex gap-4 mt-4">
            <div className="h-12 w-64 bg-white/10 rounded" />
            <div className="h-12 w-48 bg-white/5 rounded" />
          </div>
        </div>
      </section>
    </>
  );
}
