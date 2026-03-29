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
            <div className="h-12 w-40 bg-white/10 rounded mt-8" />
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
            {[1, 2, 3].map((n) => (
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
    </>
  );
}
