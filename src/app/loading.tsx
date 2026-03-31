export default function HomepageLoading() {
  return (
    <div role="status" aria-label="Loading page" aria-busy="true">
      {/* Hero skeleton — full screen, navy bg */}
      <section
        className="relative min-h-screen flex items-end bg-navy animate-pulse"
        aria-hidden="true"
      >
        <div className="max-w-7xl mx-auto px-6 w-full pb-36 space-y-4">
          <div className="h-12 sm:h-16 lg:h-20 max-w-3xl w-full bg-white/10 rounded" />
          <div className="h-10 sm:h-14 lg:h-16 max-w-xl w-full bg-white/10 rounded" />
          <div className="h-6 max-w-xl w-full bg-white/5 rounded" />
          <div className="flex gap-4 pt-4">
            <div className="h-14 w-44 bg-white/10" />
            <div className="h-14 w-48 bg-white/5" />
          </div>
        </div>
        {/* Middleby badge skeleton */}
        <div className="absolute bottom-12 left-6 h-11 w-60 bg-white/5" />
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Partners skeleton — thin logo carousel */}
      <section className="py-16 lg:py-20 bg-white animate-pulse" aria-hidden="true">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <div className="h-4 w-72 bg-gray-200 rounded mx-auto" />
        </div>
        <div className="flex items-center justify-center gap-20 overflow-hidden px-6">
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <div
              key={n}
              className="flex-shrink-0 h-20 w-36 bg-gray-100 rounded"
            />
          ))}
        </div>
      </section>

      {/* Sectors skeleton — bg-offwhite, heading + 3 cards */}
      <section className="py-28 lg:py-36 bg-offwhite animate-pulse" aria-hidden="true">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading block */}
          <div className="max-w-2xl space-y-3 mb-16">
            <div className="h-4 w-20 bg-gray-300 rounded" />
            <div className="h-10 max-w-xl w-full bg-gray-200 rounded" />
            <div className="h-8 max-w-md w-full bg-gray-200 rounded" />
            <div className="h-5 max-w-lg w-full bg-gray-100 rounded" />
          </div>
          {/* Cards grid — 1 large left, 2 stacked right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="min-h-[420px] lg:min-h-[560px] bg-gray-200" />
            <div className="grid grid-rows-2 gap-6">
              <div className="min-h-[260px] bg-gray-200" />
              <div className="min-h-[260px] bg-gray-200" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats skeleton — bg-navy, large stat left + 3 right */}
      <section className="py-24 lg:py-32 bg-navy animate-pulse" aria-hidden="true">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left — feature stat */}
            <div className="lg:col-span-5 space-y-4">
              <div className="h-4 w-28 bg-white/10 rounded" />
              <div className="h-24 sm:h-28 lg:h-32 w-64 bg-white/10 rounded" />
              <div className="h-6 w-44 bg-white/5 rounded" />
              <div className="h-4 w-56 bg-white/5 rounded" />
              <div className="w-16 h-px bg-white/10 mt-4" />
            </div>
            {/* Right — 3 smaller stats */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-6 lg:pt-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="border-l-2 border-white/10 pl-6 space-y-3">
                  <div className="h-12 w-24 bg-white/10 rounded" />
                  <div className="h-4 w-28 bg-white/5 rounded" />
                  <div className="h-3 w-36 bg-white/5 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About skeleton — bg-white, two-column grid */}
      <section className="py-24 lg:py-32 bg-white animate-pulse" aria-hidden="true">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left — heading */}
            <div className="lg:col-span-5 space-y-3">
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-10 w-full bg-gray-200 rounded" />
              <div className="h-8 w-3/4 bg-gray-200 rounded" />
              <div className="w-10 h-px bg-gray-200 mt-2" />
            </div>
            {/* Right — text paragraphs */}
            <div className="lg:col-span-7 space-y-4">
              <div className="h-4 w-full bg-gray-100 rounded" />
              <div className="h-4 w-full bg-gray-100 rounded" />
              <div className="h-4 w-5/6 bg-gray-100 rounded" />
              <div className="h-4 w-full bg-gray-100 rounded mt-4" />
              <div className="h-4 w-full bg-gray-100 rounded" />
              <div className="h-4 w-4/5 bg-gray-100 rounded" />
              <div className="h-4 w-full bg-gray-100 rounded mt-4" />
              <div className="h-4 w-full bg-gray-100 rounded" />
              <div className="h-4 w-3/4 bg-gray-100 rounded" />
              <div className="h-4 w-32 bg-gray-200 rounded mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ skeleton — bg-offwhite, heading left + accordion right */}
      <section className="py-24 lg:py-32 bg-offwhite animate-pulse" aria-hidden="true">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left — heading */}
            <div className="lg:col-span-4 space-y-3">
              <div className="h-4 w-10 bg-gray-300 rounded" />
              <div className="h-10 w-full bg-gray-200 rounded" />
              <div className="h-8 w-4/5 bg-gray-200 rounded" />
              <div className="h-4 w-full bg-gray-100 rounded mt-2" />
              <div className="h-4 w-3/4 bg-gray-100 rounded" />
              <div className="w-10 h-px bg-gray-200 mt-4" />
            </div>
            {/* Right — accordion items */}
            <div className="lg:col-span-8 divide-y divide-gray-200">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="py-5 flex items-center justify-between">
                  <div
                    className="h-5 bg-gray-200 rounded"
                    style={{ width: `${55 + (n * 7) % 30}%` }}
                  />
                  <div className="h-5 w-5 bg-gray-200 rounded flex-shrink-0 ml-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA skeleton — bg-white, text left + navy box right */}
      <section className="py-32 lg:py-40 bg-white animate-pulse" aria-hidden="true">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left — headline + text */}
            <div className="lg:col-span-7 space-y-4">
              <div className="h-4 w-16 bg-gray-200 rounded" />
              <div className="h-10 w-72 bg-gray-200 rounded" />
              <div className="h-5 max-w-xl w-full bg-gray-100 rounded" />
              <div className="h-4 max-w-lg w-full bg-gray-100 rounded" />
              <div className="h-4 max-w-md w-full bg-gray-100 rounded" />
              <div className="w-10 h-px bg-gray-200 mt-4" />
            </div>
            {/* Right — navy CTA box */}
            <div className="lg:col-span-5">
              <div className="bg-navy p-8 lg:p-10 space-y-4">
                <div className="h-4 w-full bg-white/5 rounded" />
                <div className="h-4 w-3/4 bg-white/5 rounded" />
                <div className="h-14 w-full bg-white/10 mt-6" />
                <div className="h-14 w-full bg-white/5" />
                <div className="h-3 w-48 bg-white/5 rounded mt-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
