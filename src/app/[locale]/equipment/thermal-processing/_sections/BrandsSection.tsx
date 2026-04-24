import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface Brand {
  name: string;
  logo: string | null;
  url?: string;
  discipline: string;
}

const BRANDS: Brand[] = [
  {
    name: "Josper",
    logo: "/images/brands/josper-logo.svg",
    url: "https://jospergrill.com/",
    discipline: "Charcoal & wood-fire",
  },
  {
    name: "Houno",
    logo: "/images/brands/houno-logo.png",
    url: "https://www.houno.com/",
    discipline: "Steam-convection ovens",
  },
  {
    name: "Lincat",
    logo: "/images/brands/lincat-logo.svg",
    url: "https://www.lincat.co.uk/",
    discipline: "Cooking line & countertop",
  },
  { name: "Silko", logo: "/images/brands/silko-logo.png", discipline: "Italian cooking suites" },
  { name: "PGE", logo: null, discipline: "Charcoal ovens" },
  { name: "UGNS", logo: null, discipline: "Commercial grills" },
];

export default function BrandsSection() {
  return (
    <section
      aria-labelledby="cooking-brands"
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
                Chapter III — House of Brands
              </span>
            </div>
            <ScrollReveal>
              <h2
                id="cooking-brands"
                className="font-display font-bold text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.02em",
                }}
              >
                Authorized brands
                <br />
                <span
                  className="italic font-normal"
                  style={{ color: "var(--color-gold)" }}
                >
                  we supply.
                </span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pb-3">
            <p
              className="text-white/70 font-light"
              style={{
                fontSize: "14px",
                lineHeight: 1.65,
                maxWidth: "30ch",
              }}
            >
              Six disciplines, one house. Each partnership carries formal
              authorization — service, parts, and factory support included.
            </p>
          </div>
        </div>

        {/* Rule */}
        <div
          style={{
            borderTop: "1px solid rgba(201,168,76,0.35)",
            marginTop: "clamp(1.75rem, 3vw, 2.5rem)",
          }}
        />

        {/* Editorial typographic list — brand-as-entry */}
        <ol className="relative">
          {BRANDS.map((brand, i) => (
            <li
              key={brand.name}
              style={{
                borderBottom: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              {brand.url ? (
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${brand.name} — visit manufacturer website`}
                  className="block group"
                >
                  <BrandRow brand={brand} index={i} hoverable />
                </a>
              ) : (
                <div className="block">
                  <BrandRow brand={brand} index={i} />
                </div>
              )}
            </li>
          ))}
        </ol>

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
              Over 110 brands supplied across Southeast Europe — Cooking is one
              department in a larger index.
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
              Folio 03 / 04
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandRow({
  brand,
  index,
  hoverable = false,
}: {
  brand: Brand;
  index: number;
  hoverable?: boolean;
}) {
  const serial = `No. ${String(index + 1).padStart(2, "0")}`;
  return (
    <div
      className={`grid grid-cols-12 gap-4 items-center ${
        hoverable ? "transition-colors duration-500 group-hover:bg-white/[0.02]" : ""
      }`}
      style={{
        paddingTop: "clamp(0.9rem, 1.4vw, 1.35rem)",
        paddingBottom: "clamp(0.9rem, 1.4vw, 1.35rem)",
      }}
    >
      {/* Serial */}
      <div className="col-span-3 md:col-span-2 lg:col-span-1">
        <span
          className="font-display italic"
          style={{
            color: "var(--color-gold)",
            fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
            letterSpacing: "0.04em",
          }}
        >
          {serial}
        </span>
      </div>

      {/* Brand name — monumental */}
      <div className="col-span-9 md:col-span-6 lg:col-span-6">
        <span
          className="font-display text-white block"
          style={{
            fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.01em",
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          {brand.name}
        </span>
      </div>

      {/* Discipline */}
      <div className="col-span-8 md:col-span-3 lg:col-span-3 col-start-4 md:col-start-auto">
        <span
          className="block text-white/60 font-light"
          style={{
            fontSize: "12px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {brand.discipline}
        </span>
      </div>

      {/* Logo / arrow — right-aligned */}
      <div className="col-span-4 md:col-span-1 lg:col-span-2 flex justify-end items-center gap-4">
        {brand.logo && (
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            width={96}
            height={28}
            loading="lazy"
            style={{
              width: "auto",
              height: "24px",
              objectFit: "contain",
              filter: "brightness(0) invert(1)",
            }}
            className="opacity-70 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
        {hoverable && (
          <span
            aria-hidden="true"
            className="font-display italic"
            style={{
              color: "var(--color-gold)",
              fontSize: "20px",
              transition: "transform 400ms cubic-bezier(0.2,0.7,0.2,1)",
              display: "inline-block",
            }}
          >
            →
          </span>
        )}
      </div>
    </div>
  );
}
