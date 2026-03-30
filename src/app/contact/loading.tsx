export default function ContactLoading() {
  return (
    <div role="status" aria-label="Loading Contact page" aria-busy="true">
      {/* Hero skeleton */}
      <section className="bg-navy pt-32 pb-24 animate-pulse" aria-hidden="true">
        <div className="max-w-7xl mx-auto px-6">
          {/* Overline */}
          <div className="h-4 w-28 bg-white/10 rounded" />
          {/* h1 */}
          <div className="h-12 sm:h-14 lg:h-16 w-80 sm:w-[28rem] bg-white/10 rounded mt-4" />
          {/* Subtitle */}
          <div className="mt-6 space-y-2 max-w-2xl">
            <div className="h-5 w-full bg-white/10 rounded" />
            <div className="h-5 w-3/4 bg-white/10 rounded" />
          </div>
        </div>
      </section>

      {/* Form section skeleton */}
      <section className="py-24 bg-white animate-pulse" aria-hidden="true">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left column — form (3/5) */}
            <div className="lg:col-span-3">
              {/* "Send Us a Message" heading */}
              <div className="h-7 w-52 bg-gray-200 rounded mb-8" />

              <div className="space-y-6">
                {/* Name / Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <div className="h-4 w-20 bg-gray-200 rounded mb-1.5" />
                    <div className="h-12 w-full bg-gray-200 rounded-md" />
                  </div>
                  <div>
                    <div className="h-4 w-14 bg-gray-200 rounded mb-1.5" />
                    <div className="h-12 w-full bg-gray-200 rounded-md" />
                  </div>
                </div>

                {/* Phone / Company row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <div className="h-4 w-14 bg-gray-200 rounded mb-1.5" />
                    <div className="h-12 w-full bg-gray-200 rounded-md" />
                  </div>
                  <div>
                    <div className="h-4 w-20 bg-gray-200 rounded mb-1.5" />
                    <div className="h-12 w-full bg-gray-200 rounded-md" />
                  </div>
                </div>

                {/* Interest select */}
                <div>
                  <div className="h-4 w-24 bg-gray-200 rounded mb-1.5" />
                  <div className="h-12 w-full bg-gray-200 rounded-md" />
                </div>

                {/* Message textarea */}
                <div>
                  <div className="h-4 w-18 bg-gray-200 rounded mb-1.5" />
                  <div className="h-32 w-full bg-gray-200 rounded-md" />
                </div>

                {/* Helper text */}
                <div className="h-3 w-72 bg-gray-200 rounded" />

                {/* Submit button */}
                <div className="h-12 w-full sm:w-40 bg-gray-200 rounded-md" />
              </div>
            </div>

            {/* Right column — contact info (2/5) */}
            <div className="lg:col-span-2">
              {/* "Or Reach Us Directly" heading */}
              <div className="h-7 w-52 bg-gray-200 rounded mb-8" />

              <div className="space-y-8">
                {/* Belgrade Office */}
                <div>
                  <div className="h-3.5 w-32 bg-gray-200 rounded mb-3" />
                  <div className="h-5 w-48 bg-gray-200 rounded" />
                  <div className="mt-1 space-y-1">
                    <div className="h-4 w-40 bg-gray-200 rounded" />
                    <div className="h-4 w-44 bg-gray-200 rounded" />
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <div className="h-3.5 w-20 bg-gray-200 rounded mb-3" />
                  <div className="h-5 w-36 bg-gray-200 rounded" />
                  <div className="h-4 w-48 bg-gray-200 rounded mt-1" />
                </div>

                {/* Hours */}
                <div>
                  <div className="h-3.5 w-16 bg-gray-200 rounded mb-3" />
                  <div className="space-y-1">
                    <div className="h-4 w-56 bg-gray-200 rounded" />
                    <div className="h-4 w-44 bg-gray-200 rounded" />
                    <div className="h-4 w-28 bg-gray-200 rounded" />
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="bg-gray-200 rounded-md aspect-[4/3]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
