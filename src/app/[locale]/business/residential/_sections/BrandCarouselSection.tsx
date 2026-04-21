import Image from "next/image";
import { residentialBrands } from "@/data/residential";

export default function BrandCarouselSection() {
  const mid = Math.ceil(residentialBrands.length / 2);
  const row1 = residentialBrands.slice(0, mid);
  const row2 = residentialBrands.slice(mid);

  return (
    <section
      className="py-16 lg:py-20 bg-navy border-t border-white/10"
      aria-labelledby="brands-carousel-heading"
    >
      <h2 id="brands-carousel-heading" className="sr-only">
        Our Residential Brands
      </h2>
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden">
          {/* Row 1 — scrolls left */}
          <div className="flex animate-scroll-residential gap-20 items-center mb-12">
            {[...row1, ...row1, ...row1].map((brand, i) => (
              <div
                key={`row1-${brand.name}-${i}`}
                className="flex-shrink-0 w-[180px] h-[80px] flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={180}
                  height={65}
                  sizes="180px"
                  loading="lazy"
                  className="max-h-[65px] w-auto object-contain brightness-0 invert"
                />
              </div>
            ))}
          </div>
          {/* Row 2 — scrolls right */}
          <div className="flex animate-scroll-residential-reverse gap-20 items-center">
            {[...row2, ...row2, ...row2].map((brand, i) => (
              <div
                key={`row2-${brand.name}-${i}`}
                className="flex-shrink-0 w-[180px] h-[80px] flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={180}
                  height={65}
                  sizes="180px"
                  loading="lazy"
                  className="max-h-[65px] w-auto object-contain brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
