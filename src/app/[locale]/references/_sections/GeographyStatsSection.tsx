import type { Dictionary } from "@/i18n/types";

interface Props {
  commonDict: Dictionary["common"];
}

export default function GeographyStatsSection({ commonDict }: Props) {
  return (
    <section
      className="py-16 lg:py-20 bg-navy border-y border-white/10"
      aria-labelledby="geography-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 id="geography-heading" className="sr-only">
          {commonDict.globalReachHeading}
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 text-center">
          <span className="text-white font-display text-lg font-bold">
            50+ {commonDict.projectsDelivered}
          </span>
          <span className="text-white/20 mx-4 hidden sm:inline">|</span>
          <span className="text-white font-display text-lg font-bold">
            {commonDict.southeastEurope}
          </span>
          <span className="text-white/20 mx-4 hidden sm:inline">|</span>
          <span className="text-white font-display text-lg font-bold">
            110+ {commonDict.brandsRepresented}
          </span>
          <span className="text-white/20 mx-4 hidden sm:inline">|</span>
          <span className="text-white/60 text-sm">
            {commonDict.regionLabel}
          </span>
        </div>
      </div>
    </section>
  );
}
