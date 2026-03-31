"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Brand } from "@/data/our-brands";

/* First 7 brands get the "featured" treatment */
const FEATURED_COUNT = 7;

export default function BrandsGridSection({ brands }: { brands: Brand[] }) {
  const [filter, setFilter] = useState<string | null>(null);

  const featured = useMemo(() => brands.slice(0, FEATURED_COUNT), [brands]);
  const catalog = useMemo(() => brands.slice(FEATURED_COUNT), [brands]);
  const allCategories = useMemo(
    () => Array.from(new Set(brands.map((b) => b.category))).sort(),
    [brands],
  );

  const filteredCatalog = filter
    ? catalog.filter((b) => b.category === filter)
    : catalog;

  return (
    <section className="py-24 lg:py-32 bg-offwhite" aria-labelledby="brands-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* ── Heading ── */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-20">
            <div className="lg:col-span-5">
              <h2
                id="brands-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1]"
              >
                The Names Behind<br />
                <span className="italic font-normal">the Kitchens</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-text-secondary leading-relaxed text-sm max-w-lg">
                We represent {brands.length} brands from the Middleby Corporation
                portfolio. Each one selected for build quality, factory-direct
                service network, and proven performance under pressure.
              </p>
              <div className="w-12 h-px bg-gold/30 mt-6" />
            </div>
          </div>
        </AnimatedSection>

        {/* ── Featured brands — large cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featured.slice(0, 2).map((brand) => (
            <FeaturedCard key={brand.name} brand={brand} size="large" />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {featured.slice(2, 5).map((brand) => (
            <FeaturedCard key={brand.name} brand={brand} size="standard" />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featured.slice(5).map((brand) => (
            <FeaturedCard key={brand.name} brand={brand} size="standard" />
          ))}
        </div>

        {/* ── Divider + count ── */}
        <div className="mt-20 mb-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.2em]">
                Full Portfolio
              </p>
              <p className="text-text-secondary/60 text-xs mt-1" aria-live="polite" role="status">
                {filteredCatalog.length} additional brands
                {filter && <> · filtered by <span className="text-text-primary">{filter}</span></>}
              </p>
            </div>
            {/* Category filter pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter(null)}
                aria-pressed={filter === null}
                className={`text-[10px] font-medium uppercase tracking-[0.1em] px-3 py-1.5 border transition-colors duration-200 ${
                  filter === null
                    ? "border-text-primary text-text-primary"
                    : "border-gray-200 text-text-secondary hover:border-gray-300"
                }`}
              >
                All
              </button>
              {allCategories.slice(0, 8).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(filter === cat ? null : cat)}
                  aria-pressed={filter === cat}
                  className={`text-[10px] font-medium uppercase tracking-[0.1em] px-3 py-1.5 border transition-colors duration-200 ${
                    filter === cat
                      ? "border-text-primary text-text-primary"
                      : "border-gray-200 text-text-secondary hover:border-gray-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Compact catalog grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px bg-gray-200">
          {filteredCatalog.map((brand) => (
            <div
              key={brand.name}
              className="bg-white p-5 flex flex-col items-center justify-center text-center min-h-[140px] hover:bg-offwhite transition-all duration-300 group cursor-default"
            >
              {brand.logo ? (
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={48}
                  sizes="120px"
                  loading="lazy"
                  className="max-h-10 w-auto object-contain mb-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              ) : (
                <div className="mb-3 flex flex-col items-center">
                  <span className="font-display text-base font-bold text-text-primary/80 group-hover:text-text-primary transition-colors duration-300">
                    {brand.name}
                  </span>
                  <div className="w-6 h-px bg-gray-200 mt-2 group-hover:bg-gold/50 transition-colors duration-300" />
                </div>
              )}
              <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-text-secondary/50 group-hover:text-text-secondary/80 transition-colors duration-300">
                {brand.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Featured card component ── */
function FeaturedCard({
  brand,
  size,
}: {
  brand: Brand;
  size: "large" | "standard";
}) {
  const isLarge = size === "large";

  return (
    <article className="group bg-white border border-gray-100 hover:border-gray-300 transition-colors duration-300 overflow-hidden">
      <div
        className={`${
          isLarge ? "h-40" : "h-28"
        } bg-offwhite border-b border-gray-100 flex items-center justify-center p-6 group-hover:bg-navy transition-colors duration-500`}
      >
        {brand.logo ? (
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            width={isLarge ? 200 : 160}
            height={isLarge ? 72 : 56}
            sizes={isLarge ? "200px" : "160px"}
            loading="lazy"
            className={`${
              isLarge ? "max-h-[72px]" : "max-h-14"
            } w-auto object-contain group-hover:brightness-0 group-hover:invert transition-all duration-500`}
          />
        ) : (
          <span
            className={`font-display ${
              isLarge ? "text-3xl" : "text-xl"
            } font-bold text-text-primary group-hover:text-white transition-colors duration-500`}
          >
            {brand.name}
          </span>
        )}
      </div>
      <div className={isLarge ? "p-8" : "p-6"}>
        <div className="flex items-center justify-between mb-3">
          <h3
            className={`font-display ${
              isLarge ? "text-xl" : "text-base"
            } font-bold text-text-primary`}
          >
            {brand.name}
          </h3>
          <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-text-secondary">
            {brand.category}
          </span>
        </div>
        <p className={`text-text-secondary leading-relaxed ${isLarge ? "text-sm" : "text-[13px]"}`}>
          {brand.text}
        </p>
      </div>
    </article>
  );
}
