import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import ScrollReveal from "../../equipment/thermal-processing/_sections/ScrollReveal";
import {
  SUPER_CATEGORIES,
  countByCategory,
  getSuperCategoryLabels,
  type SuperCategory,
} from "./brandTaxonomy";

interface CategoriesChapterProps {
  locale: Locale;
}

interface TileData {
  id: SuperCategory;
  serial: string;
  label: string;
  italicDescriptor: string;
  image: string;
  alt: string;
  href: string;
  count: number;
  exploreLabel: string;
  brandsLabel: string;
}

const IMAGE_BY_CATEGORY: Record<
  SuperCategory,
  { src: string; alt: string; altSr: string }
> = {
  cooking: {
    src: "/images/whatwedo/chef-cooking.jpg",
    alt: "Professional chef working a commercial cooking line",
    altSr: "Profesionalni kuvar na profesionalnoj kuhinjskoj liniji",
  },
  refrigeration: {
    src: "/images/whatwedo/elements.jpg",
    alt: "Commercial refrigeration units arranged in a kitchen",
    altSr: "Profesionalni rashladni uređaji raspoređeni u kuhinji",
  },
  "neutral-inox": {
    src: "/images/whatwedo/training-room.jpg",
    alt: "Stainless steel kitchen worktops and shelving",
    altSr: "Inox kuhinjske radne ploče i police",
  },
  "waste-management": {
    src: "/images/whatwedo/adhoc-kitchen.jpg",
    alt: "IMC food waste management station in commercial kitchen",
    altSr: "IMC stanica za upravljanje otpadom hrane u profesionalnoj kuhinji",
  },
};

export default function CategoriesChapter({ locale }: CategoriesChapterProps) {
  const counts = countByCategory();
  const isSr = locale === "sr";

  const tiles: TileData[] = SUPER_CATEGORIES.map((c, i) => {
    const labels = getSuperCategoryLabels(c.id, isSr);
    const img = IMAGE_BY_CATEGORY[c.id];
    return {
      id: c.id,
      serial: `${isSr ? "Br." : "No."} 0${i + 1}`,
      label: labels.label,
      italicDescriptor: labels.italicDescriptor,
      image: img.src,
      alt: isSr ? img.altSr : img.alt,
      href: c.href(locale),
      count: counts[c.id],
      exploreLabel: isSr ? "Pogledaj \u2192" : "Explore \u2192",
      brandsLabel: isSr ? "brendova" : "brands",
    };
  });

  return (
    <section
      aria-labelledby="equipment-categories"
      className="relative bg-white overflow-hidden"
      style={{
        paddingTop: "clamp(2rem, 3.5vw, 3.25rem)",
        paddingBottom: "clamp(3rem, 5.5vw, 5.5rem)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 relative">
        {/* Column rules */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(10,22,40,0.06) 1px, transparent 1px)",
            backgroundSize: "calc(100% / 12) 100%",
            backgroundPosition: "0.75rem 0",
          }}
        />

        {/* Section head */}
        <div className="relative grid grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span
                aria-hidden="true"
                style={{ backgroundColor: "var(--color-gold)" }}
                className="block h-px w-12"
              />
              <span
                style={{
                  color: "var(--color-gold-text)",
                  letterSpacing: "0.32em",
                }}
                className="text-xs font-medium uppercase"
              >
                {isSr
                  ? "Poglavlje II — Indeks disciplina"
                  : "Chapter II — Index of Disciplines"}
              </span>
            </div>
            <ScrollReveal>
              <h2
                id="equipment-categories"
                className="font-display font-bold text-navy"
                style={{
                  fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.02em",
                }}
              >
                {isSr ? "Četiri discipline." : "Four disciplines."}
                <br />
                <span
                  className="italic font-normal"
                  style={{ color: "var(--color-gold-text)" }}
                >
                  {isSr
                    ? "jedno mesto za specifikaciju."
                    : "one specification desk."}
                </span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pb-4">
            <p
              className="font-light text-navy/70"
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                maxWidth: "32ch",
              }}
            >
              {isSr
                ? "Portfolio je organizovan prema načinu na koji kuhinja zaista funkcioniše \u2014 kuvanje, čuvanje, izrada, tretiranje otpada. Izaberite disciplinu koja vodi Vaš projekat."
                : "The portfolio is organized around how a kitchen actually works \u2014 cook, hold, fabricate, dispose. Pick the discipline that leads your project."}
            </p>
            <div
              style={{
                borderTop: "1px solid rgba(10,22,40,0.15)",
                marginTop: "1.5rem",
                paddingTop: "0.75rem",
              }}
              className="flex items-center gap-3"
            >
              <span
                className="font-display italic"
                style={{
                  color: "var(--color-gold-text)",
                  fontSize: "13px",
                }}
              >
                {isSr ? "iv stavke" : "iv entries"}
              </span>
              <span
                aria-hidden="true"
                style={{ color: "var(--color-gold)", opacity: 0.6 }}
              >
                ·
              </span>
              <span
                className="uppercase text-navy/60"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.3em",
                }}
              >
                Folio 02 / 03
              </span>
            </div>
          </div>
        </div>

        {/* Brickwork grid: 4 tiles, asymmetric. Tile 02 is featured (taller). */}
        <div
          className="relative grid grid-cols-12 gap-x-6 gap-y-6 lg:gap-y-8"
          style={{ marginTop: "clamp(2rem, 3.5vw, 3.25rem)" }}
        >
          {/* 01 Cooking — top-left */}
          <ScrollReveal className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-1 lg:mt-6">
            <CategoryTile tile={tiles[0]} aspectRatio="4 / 5" />
          </ScrollReveal>

          {/* 02 Refrigeration — featured large, right side spans 2 rows */}
          <ScrollReveal
            className="col-span-12 md:col-span-12 lg:col-span-7 lg:col-start-6 lg:row-span-2"
            delay={120}
          >
            <CategoryTile tile={tiles[1]} aspectRatio="4 / 5" featured />
          </ScrollReveal>

          {/* 03 Neutral & Inox — lower-left */}
          <ScrollReveal
            className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-1 lg:-mt-3"
            delay={60}
          >
            <CategoryTile tile={tiles[2]} aspectRatio="5 / 4" />
          </ScrollReveal>

          {/* 04 Waste Management — full width below */}
          <ScrollReveal
            className="col-span-12 lg:col-span-12 lg:col-start-1"
            delay={80}
          >
            <CategoryTile tile={tiles[3]} aspectRatio="21 / 9" wide />
          </ScrollReveal>
        </div>

        {/* Chapter close */}
        <div
          aria-hidden="true"
          className="relative mt-10 lg:mt-14 flex items-center gap-6"
        >
          <span
            style={{ backgroundColor: "rgba(10,22,40,0.15)" }}
            className="block h-px flex-1"
          />
          <span
            className="font-display italic"
            style={{
              color: "var(--color-gold-text)",
              fontSize: "16px",
              letterSpacing: "0.08em",
            }}
          >
            ❋
          </span>
          <span
            className="uppercase text-navy/60"
            style={{ fontSize: "10px", letterSpacing: "0.32em" }}
          >
            {isSr ? "Kraj poglavlja II" : "End of Chapter II"}
          </span>
          <span
            style={{ backgroundColor: "rgba(10,22,40,0.15)" }}
            className="block h-px flex-1"
          />
        </div>
      </div>
    </section>
  );
}

function CategoryTile({
  tile,
  featured = false,
  wide = false,
  aspectRatio,
}: {
  tile: TileData;
  featured?: boolean;
  wide?: boolean;
  aspectRatio: string;
}) {
  return (
    <Link
      href={tile.href}
      className="group relative block overflow-hidden bg-navy"
      aria-label={`${tile.label} — ${tile.italicDescriptor}`}
    >
      <div className="relative w-full" style={{ aspectRatio }}>
        <Image
          src={tile.image}
          alt={tile.alt}
          fill
          loading="lazy"
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 58vw"
              : wide
                ? "100vw"
                : "(max-width: 1024px) 100vw, 42vw"
          }
          className="object-cover ease-out group-hover:scale-105"
          style={{
            transitionProperty: "transform",
            transitionDuration: "1400ms",
            filter: "grayscale(0.3) contrast(1.05) brightness(0.92)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,22,40,0.15) 0%, rgba(10,22,40,0.88) 100%)",
          }}
        />

        {/* Serial */}
        <span
          aria-hidden="true"
          className="absolute top-5 left-5 lg:top-7 lg:left-7 font-display italic leading-none"
          style={{
            color: "var(--color-gold)",
            fontSize: featured
              ? "clamp(1.75rem, 3vw, 2.5rem)"
              : "clamp(1.25rem, 2vw, 1.75rem)",
            letterSpacing: "-0.02em",
          }}
        >
          {tile.serial}
        </span>

        {/* Brand count tag */}
        <span
          aria-hidden="true"
          className="absolute top-5 right-5 lg:top-8 lg:right-7 text-white/80 font-sans uppercase"
          style={{
            fontSize: "10px",
            letterSpacing: "0.3em",
          }}
        >
          {tile.count} {tile.brandsLabel}
        </span>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 px-5 pb-6 lg:px-8 lg:pb-9"
        style={{ zIndex: 2 }}
      >
        <h3
          className="font-display font-bold text-white"
          style={{
            fontSize: featured
              ? "clamp(1.5rem, 2.8vw, 2.5rem)"
              : "clamp(1.125rem, 1.8vw, 1.5rem)",
            lineHeight: 0.96,
            letterSpacing: "-0.01em",
          }}
        >
          {tile.label}
        </h3>

        <p
          className="text-white/80 leading-relaxed mt-4 font-light italic"
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: featured ? "16px" : "14px",
            maxWidth: featured ? "32rem" : "26rem",
          }}
        >
          {tile.italicDescriptor}
        </p>

        <div className="flex items-center gap-4 mt-7">
          <span
            aria-hidden="true"
            style={{ backgroundColor: "var(--color-gold)" }}
            className="block h-px w-10 transition-all duration-500 group-hover:w-24"
          />
          <span
            style={{
              color: "var(--color-gold)",
              letterSpacing: "0.28em",
            }}
            className="text-xs font-medium uppercase"
          >
            {tile.exploreLabel}
          </span>
        </div>
      </div>
    </Link>
  );
}
