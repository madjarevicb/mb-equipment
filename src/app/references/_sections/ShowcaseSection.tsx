import Image from "next/image";
import { showcaseImages } from "@/data/references";

export default function ShowcaseSection() {
  return (
    <section className="bg-white py-10" aria-labelledby="showcase-heading">
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="showcase-heading" className="sr-only">
          Equipment Showcase
        </h2>

        {/* Top row: 65 Brands image spanning full width */}
        <div className="relative h-[280px] sm:h-[340px] overflow-hidden rounded-sm mb-4">
          <Image
            src="/images/references/ref-03.jpg"
            alt="Over 65 commercial kitchen brands — Foodservice, Beverage, Residential, and Food Processing"
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            loading="lazy"
            className="object-cover"
          />
        </div>

        {/* Bottom row: 4 images in 2x2 grid */}
        <div className="grid grid-cols-2 gap-4">
          {showcaseImages.map((item) => (
            <div
              key={item.src}
              className="relative h-[200px] sm:h-[240px] overflow-hidden group rounded-sm"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 560px"
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
