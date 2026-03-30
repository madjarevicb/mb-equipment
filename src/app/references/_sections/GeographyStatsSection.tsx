export default function GeographyStatsSection() {
  return (
    <section
      className="py-10 bg-navy border-y border-gold/20"
      aria-labelledby="geography-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="geography-heading" className="sr-only">
          Global Reach
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 text-center">
          <span className="text-white font-display text-lg font-bold">
            2,000+ Projects
          </span>
          <span className="text-gold mx-4 hidden sm:inline">·</span>
          <span className="text-white font-display text-lg font-bold">
            40+ Countries
          </span>
          <span className="text-gold mx-4 hidden sm:inline">·</span>
          <span className="text-white font-display text-lg font-bold">
            110+ Brands
          </span>
          <span className="text-gold mx-4 hidden sm:inline">·</span>
          <span className="text-white/80 text-sm">
            Balkans · Central Europe · Middle East · North Africa · Central Asia
          </span>
        </div>
      </div>
    </section>
  );
}
