"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useId } from "react";
import {
  SUPER_CATEGORIES,
  type IndexedBrand,
  type SuperCategory,
} from "./brandTaxonomy";

interface BrandIndexChapterProps {
  locale: string;
  brands: IndexedBrand[];
}

type FilterValue = "all" | SuperCategory;

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  ...SUPER_CATEGORIES.map((c) => ({
    value: c.id,
    label: c.shortLabel,
  })),
];

export default function BrandIndexChapter({
  locale,
  brands,
}: BrandIndexChapterProps) {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [query, setQuery] = useState("");
  const searchId = useId();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return brands.filter((b) => {
      const catMatch = filter === "all" || b.superCategory === filter;
      const qMatch = q.length === 0 || b.name.toLowerCase().includes(q);
      return catMatch && qMatch;
    });
  }, [brands, filter, query]);

  const total = brands.length;
  const showing = filtered.length;

  return (
    <section
      aria-labelledby="brand-index"
      className="relative bg-navy text-white"
      style={{
        paddingTop: "clamp(2.5rem, 4vw, 4rem)",
        paddingBottom: "clamp(3rem, 5.5vw, 5.5rem)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 relative">
        {/* Section head */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <span
                aria-hidden="true"
                style={{ backgroundColor: "var(--color-gold)" }}
                className="block h-px w-12"
              />
              <span
                style={{
                  color: "var(--color-gold)",
                  letterSpacing: "0.32em",
                }}
                className="text-xs font-medium uppercase"
              >
                Chapter III — The Brand Index
              </span>
            </div>
            <h2
              id="brand-index"
              className="font-display font-bold text-white"
              style={{
                fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.02em",
              }}
            >
              Browse the
              <br />
              <span
                className="italic font-normal"
                style={{ color: "var(--color-gold)" }}
              >
                full house.
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pb-3">
            <p
              className="text-white/70 font-light"
              style={{
                fontSize: "14px",
                lineHeight: 1.65,
                maxWidth: "32ch",
              }}
            >
              Filter the index by discipline or search by name. Each entry
              links to the equipment page where that brand is specified.
            </p>
          </div>
        </div>

        {/* Sticky filter bar */}
        <div
          className="mt-8 lg:mt-10"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 30,
            backgroundColor: "var(--color-navy)",
            borderTop: "1px solid rgba(201,168,76,0.35)",
            borderBottom: "1px solid rgba(201,168,76,0.35)",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            marginLeft: "-1.5rem",
            marginRight: "-1.5rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
            {/* Category pills */}
            <div
              role="group"
              aria-label="Filter brands by category"
              className="flex flex-wrap gap-2"
            >
              {FILTERS.map((f) => {
                const active = filter === f.value;
                return (
                  <button
                    key={f.value}
                    type="button"
                    onClick={() => setFilter(f.value)}
                    aria-pressed={active}
                    className="filter-pill"
                    style={{
                      fontFamily: "inherit",
                      fontSize: "11px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                      paddingTop: "0.55rem",
                      paddingBottom: "0.55rem",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                      borderRadius: "999px",
                      border: active
                        ? "1px solid var(--color-gold)"
                        : "1px solid rgba(255,255,255,0.25)",
                      backgroundColor: active
                        ? "rgba(201,168,76,0.12)"
                        : "transparent",
                      color: active ? "var(--color-gold)" : "rgba(255,255,255,0.78)",
                      cursor: "pointer",
                      transition:
                        "background-color 200ms ease, border-color 200ms ease, color 200ms ease",
                    }}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div
              className="lg:ml-auto relative"
              style={{ minWidth: "240px" }}
            >
              <label htmlFor={searchId} className="sr-only">
                Search brands by name
              </label>
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "0.85rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--color-gold)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
              </span>
              <input
                id={searchId}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search brand…"
                aria-label="Search brands by name"
                style={{
                  width: "100%",
                  fontFamily: "inherit",
                  fontSize: "13px",
                  letterSpacing: "0.04em",
                  color: "white",
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: "0",
                  paddingTop: "0.6rem",
                  paddingBottom: "0.6rem",
                  paddingLeft: "2.4rem",
                  paddingRight: "0.85rem",
                  outline: "none",
                }}
                className="search-input"
              />
            </div>
          </div>

          {/* Result count */}
          <p
            aria-live="polite"
            className="mt-3 uppercase"
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "10px",
              letterSpacing: "0.3em",
            }}
          >
            Showing {showing} of {total} brands
          </p>
        </div>

        {/* Brand grid */}
        <div className="mt-8 lg:mt-10">
          {showing === 0 ? (
            <p
              className="font-display italic"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                paddingTop: "2.5rem",
                paddingBottom: "2.5rem",
                textAlign: "center",
              }}
            >
              No brands match — try clearing filters.
            </p>
          ) : (
            <ul
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                borderTop: "1px solid rgba(201,168,76,0.2)",
                borderLeft: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              {filtered.map((brand) => (
                <li
                  key={brand.name}
                  style={{
                    borderRight: "1px solid rgba(201,168,76,0.2)",
                    borderBottom: "1px solid rgba(201,168,76,0.2)",
                  }}
                >
                  <BrandCard brand={brand} locale={locale} />
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer mark */}
        <div className="mt-8 lg:mt-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 flex items-center gap-4">
            <span
              aria-hidden="true"
              className="font-display italic"
              style={{
                color: "var(--color-gold)",
                fontSize: "14px",
              }}
            >
              ☞
            </span>
            <span
              className="text-white/60 font-light"
              style={{ fontSize: "13px" }}
            >
              Authorized partnerships — service, parts, and factory support
              under one desk in Belgrade.
            </span>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:text-right">
            <span
              className="uppercase text-white/50"
              style={{
                fontSize: "10px",
                letterSpacing: "0.32em",
              }}
            >
              Folio 03 / 03
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .filter-pill:hover,
        .filter-pill:focus-visible {
          color: var(--color-gold);
          border-color: var(--color-gold);
          outline: none;
        }
        .search-input::placeholder {
          color: rgba(255,255,255,0.45);
        }
        .search-input:focus,
        .search-input:focus-visible {
          border-color: var(--color-gold);
          outline: none;
        }
      `}</style>
    </section>
  );
}

function BrandCard({
  brand,
  locale,
}: {
  brand: IndexedBrand;
  locale: string;
}) {
  const href = `/${locale}/equipment/${brand.hrefSlug}`;
  const catMeta = SUPER_CATEGORIES.find((c) => c.id === brand.superCategory)!;

  return (
    <Link
      href={href}
      className="brand-card group relative block h-full"
      aria-label={`${brand.name} — ${brand.descriptor}. Visit ${catMeta.label} page.`}
      style={{
        padding: "1.5rem 1.25rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0.75rem",
        minHeight: "200px",
        transition: "background-color 320ms ease",
      }}
    >
      {/* Logo or wordmark */}
      <div
        style={{
          width: "100%",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {brand.logo ? (
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            width={120}
            height={36}
            loading="lazy"
            style={{
              width: "auto",
              height: "32px",
              maxWidth: "140px",
              objectFit: "contain",
              filter: "brightness(0) invert(1)",
              opacity: 0.85,
              transition: "opacity 300ms ease",
            }}
            className="brand-logo"
          />
        ) : (
          <span
            className="font-display italic"
            style={{
              color: "var(--color-gold)",
              fontSize: "1.5rem",
              letterSpacing: "-0.01em",
              lineHeight: 1,
              opacity: 0.92,
            }}
          >
            {brand.name}
          </span>
        )}
      </div>

      {/* Brand name */}
      <span
        className="brand-name"
        style={{
          color: "white",
          fontFamily: "var(--font-sans), sans-serif",
          fontWeight: 500,
          fontSize: "15px",
          letterSpacing: "-0.005em",
          transition: "color 220ms ease",
        }}
      >
        {brand.name}
      </span>

      {/* Italic descriptor */}
      <span
        className="font-display italic"
        style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "13px",
          lineHeight: 1.45,
          maxWidth: "28ch",
        }}
      >
        {brand.descriptor}
      </span>

      {/* Category badge */}
      <span
        className="mt-auto"
        style={{
          color: "var(--color-gold)",
          fontSize: "9px",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          fontWeight: 500,
          paddingTop: "0.5rem",
        }}
      >
        {catMeta.shortLabel}
      </span>

      {/* Hover hairline border */}
      <span
        aria-hidden="true"
        className="brand-hairline"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "2px",
          backgroundColor: "var(--color-gold)",
          transform: "scaleX(0)",
          transformOrigin: "left center",
          transition: "transform 380ms cubic-bezier(0.2,0.7,0.2,1)",
        }}
      />

      <style>{`
        .brand-card:hover,
        .brand-card:focus-visible {
          background-color: rgba(255,255,255,0.03);
          outline: none;
        }
        .brand-card:hover .brand-name,
        .brand-card:focus-visible .brand-name {
          color: var(--color-red, #c8102e);
        }
        .brand-card:hover .brand-logo,
        .brand-card:focus-visible .brand-logo {
          opacity: 1;
        }
        .brand-card:hover .brand-hairline,
        .brand-card:focus-visible .brand-hairline {
          transform: scaleX(1);
        }
      `}</style>
    </Link>
  );
}
