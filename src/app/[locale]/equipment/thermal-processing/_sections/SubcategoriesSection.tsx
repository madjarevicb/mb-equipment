import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import ScrollReveal from "./ScrollReveal";

interface SubcategoriesSectionProps {
  locale: Locale;
  dict: Dictionary;
}

interface Card {
  serial: string;
  label: string;
  heading: string;
  displayHeading: React.ReactNode;
  description: string;
  brands: string[];
  image: string;
  alt: string;
  href: string;
  duotone?: boolean;
}

export default function SubcategoriesSection({
  locale,
  dict,
}: SubcategoriesSectionProps) {
  const cards: Card[] = [
    {
      serial: "No. 01",
      label: dict.nav.josper,
      heading: "Josper — Charcoal Grills",
      displayHeading: (
        <>
          Josper
          <br />
          <span className="italic font-normal">charcoal grills.</span>
        </>
      ),
      description:
        "Charcoal, wood, and dual-fuel cooking for open-flame kitchens. Built for consistency at high volume with authentic flavor.",
      brands: ["Josper", "PGE", "UGNS"],
      image: "/images/whatwedo/char-grilling.jpg",
      alt: "Josper charcoal oven and solid-fuel commercial grill",
      href: `/${locale}/equipment/thermal-processing/charcoal-grills`,
    },
    {
      serial: "No. 02",
      label: dict.nav.cookingLine,
      heading: "Cooking Line — Ranges & Fryers",
      displayHeading: (
        <>
          The Cooking
          <br />
          <span className="italic font-normal">line, composed.</span>
        </>
      ),
      description:
        "Heavy-duty modular blocks — ranges, fryers, pasta cookers, bain marie, tilting pans — configured around your menu, not a catalog.",
      brands: ["Silko", "Lincat"],
      image: "/images/whatwedo/chef-cooking.jpg",
      alt: "Stainless steel commercial cooking line with ranges and fryers",
      href: `/${locale}/equipment/cooking/cooking-line`,
      duotone: true,
    },
    {
      serial: "No. 03",
      label: dict.nav.combiOvens,
      heading: "Combi Ovens — Steam & Convection",
      displayHeading: (
        <>
          Combi ovens —
          <br />
          <span className="italic font-normal">steam &amp; convection.</span>
        </>
      ),
      description:
        "Steaming, baking, roasting, and regeneration in a single footprint — countertop to roll-in models.",
      brands: ["Houno", "Lincat"],
      image: "/images/whatwedo/combi.jpg",
      alt: "Houno combi oven with multiple trays in commercial kitchen",
      href: `/${locale}/equipment/thermal-processing/combi-ovens`,
    },
  ];

  const [josper, cookingLine, combiOvens] = cards;

  return (
    <section
      aria-labelledby="cooking-categories"
      className="relative bg-white overflow-hidden"
      style={{
        paddingTop: "clamp(2rem, 3.5vw, 3.25rem)",
        paddingBottom: "clamp(3rem, 5.5vw, 5.5rem)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 relative">
        {/* Column rules — grid as ornament */}
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
                Index of Categories
              </span>
            </div>
            <ScrollReveal>
              <h2
                id="cooking-categories"
                className="font-display font-bold text-navy"
                style={{
                  fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.02em",
                }}
              >
                Our cooking
                <br />
                <span
                  className="italic font-normal"
                  style={{ color: "var(--color-gold-text)" }}
                >
                  equipment categories.
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
              Each category is specified around your operating volume and menu —
              not a catalog default. Pick the discipline that leads your
              concept.
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
                iii entries
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
                Folio 02 / 04
              </span>
            </div>
          </div>
        </div>

        {/* Asymmetric brickwork */}
        <div
          className="relative grid grid-cols-12 gap-x-6 gap-y-6 lg:gap-y-8"
          style={{ marginTop: "clamp(2rem, 3.5vw, 3.25rem)" }}
        >
          {/* Card 01 — Josper (upper-left, subtle offset down) */}
          <ScrollReveal className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-1 lg:mt-8">
            <CategoryTile card={josper} aspectRatio="4 / 5" />
          </ScrollReveal>

          {/* Card 02 — Cooking Line (FEATURED, full-bleed dominant, right) */}
          <ScrollReveal
            className="col-span-12 md:col-span-12 lg:col-span-7 lg:col-start-6 lg:row-span-2"
            delay={120}
          >
            <CategoryTile card={cookingLine} aspectRatio="4 / 5" featured />
          </ScrollReveal>

          {/* Card 03 — Combi (lower-left, subtle offset up) */}
          <ScrollReveal
            className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-1 lg:-mt-5"
            delay={60}
          >
            <CategoryTile card={combiOvens} aspectRatio="5 / 4" />
          </ScrollReveal>
        </div>

        {/* Chapter-close mark */}
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
            End of Chapter II
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
  card,
  featured = false,
  aspectRatio,
}: {
  card: Card;
  featured?: boolean;
  aspectRatio: string;
}) {
  return (
    <Link
      href={card.href}
      className="group relative block overflow-hidden bg-navy"
      aria-label={`${card.heading} — ${card.description}`}
    >
      <div className="relative w-full" style={{ aspectRatio }}>
        <Image
          src={card.image}
          alt={card.alt}
          fill
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 58vw"
              : "(max-width: 1024px) 100vw, 42vw"
          }
          className="object-cover ease-out group-hover:scale-105"
          style={{
            transitionProperty: "transform",
            transitionDuration: "1400ms",
            ...(card.duotone
              ? { filter: "grayscale(0.3) contrast(1.05) brightness(0.92)" }
              : {}),
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
        {card.duotone && (
          <div
            aria-hidden="true"
            className="absolute inset-0 mix-blend-overlay"
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.18) 0%, transparent 60%)",
            }}
          />
        )}

        {/* Serial — top-left */}
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
          {card.serial}
        </span>

        {/* Category folio tag — top-right */}
        <span
          aria-hidden="true"
          className="absolute top-5 right-5 lg:top-8 lg:right-7 text-white/80 font-sans uppercase"
          style={{
            fontSize: "10px",
            letterSpacing: "0.3em",
          }}
        >
          {card.label}
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
          {card.displayHeading}
        </h3>

        <p
          className={`text-white/80 leading-relaxed mt-5 font-light ${
            featured ? "max-w-md text-base" : "text-sm max-w-sm"
          }`}
        >
          {card.description}
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
            {card.brands.join(" · ")}
          </span>
        </div>
      </div>
    </Link>
  );
}
