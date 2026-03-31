import Image from "next/image";
import { showcaseImages } from "@/data/references";

export default function ShowcaseSection() {
  return (
    <section className="bg-offwhite py-16 lg:py-20" aria-labelledby="showcase-heading">
      <div className="max-w-7xl mx-auto px-6">
        <h2 id="showcase-heading" className="sr-only">
          Equipment Showcase
        </h2>

        {/* Top row: 65 Brands image spanning full width */}
        <div className="relative h-[280px] sm:h-[340px] overflow-hidden mb-4">
          <Image
            src="/images/references/ref-03.jpg"
            alt="Over 65 commercial kitchen brands — Foodservice, Beverage, Residential, and Food Processing"
            fill
            sizes="(max-width: 768px) 100vw, 1280px"
            loading="lazy"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwQTE2MjgiLz48L3N2Zz4="
          />
        </div>

        {/* Bottom row: 4 images in 2x2 grid */}
        <div className="grid grid-cols-2 gap-4">
          {showcaseImages.map((item) => (
            <div
              key={item.src}
              className="relative h-[200px] sm:h-[240px] overflow-hidden group"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 620px"
                loading="lazy"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwQTE2MjgiLz48L3N2Zz4="
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
