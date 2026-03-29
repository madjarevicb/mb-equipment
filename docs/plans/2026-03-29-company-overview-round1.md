# Company Overview — Round 1 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Raise the Company Overview page from avg 6.63 to 8.5+ across 6 audit agents (SEO, Performance, Code Quality, Design, Content, Tech Infra).

**Architecture:** Extract data to typed file, refactor timeline to mapped loop, add structured data + internal links, fix section rhythm (adjacent navy), improve CTA copy, add error boundary. All changes scoped to Company Overview page and its direct dependencies.

**Tech Stack:** Next.js 16.2, React 19, TypeScript, Tailwind CSS v4 (@theme inline)

---

### Task 1: Extract data to typed file

**Files:**
- Create: `src/data/company-overview.ts`
- Modify: `src/app/about/company-overview/page.tsx:1-47`

**Step 1: Create the data file with typed interfaces**

```typescript
// src/data/company-overview.ts
import { COMPANY } from "@/lib/constants";

export interface Milestone {
  year: string;
  number: "01" | "02" | "03" | "04";
  color: "gold" | "red";
  title: string;
  description: string;
}

export interface WhatWeDoItem {
  title: string;
  image: string;
  alt: string;
  text: string;
  href?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export const milestones: Milestone[] = [
  {
    year: "2003",
    number: "01",
    color: "gold",
    title: "Founded in Belgrade",
    description:
      "MB Equipment Solutions opened with a three-person team and a clear premise: the region needed a professional-grade equipment partner, not just a distributor. First projects were hotel kitchens in Serbia and Montenegro — site surveys, specs, installation, commissioning, and 24/7 service.",
  },
  {
    year: "2008",
    number: "02",
    color: "red",
    title: "Middleby Endorsement",
    description:
      "That hands-on approach attracted attention from Middleby Corporation — one of the world\u2019s largest foodservice equipment manufacturers with 110+ brands. The endorsement meant direct factory engineering access, priority parts supply, and terms that nobody else in the region could match.",
  },
  {
    year: "2014",
    number: "03",
    color: "gold",
    title: "Expanding Scope",
    description:
      "From commercial kitchens, the scope expanded. Residential luxury \u2014 Viking, La Cornue, and AGA for high-end homes. Food processing \u2014 industrial lines for bakeries, meat plants, dairy. Multi-unit rollouts for Starbucks, KFC, McDonald\u2019s, Burger King, and Subway across 30+ markets.",
  },
  {
    year: "Today",
    number: "04",
    color: "red",
    title: "40+ Countries & Growing",
    description:
      "Today, the company operates demo centers in Belgrade, Istanbul, and Dubai, employs a full-time service engineering team, and has delivered equipment to projects in over 40 countries. The premise has not changed. Only the scale.",
  },
];

export const equipmentCategories: WhatWeDoItem[] = [
  { title: "Automation", image: "/images/whatwedo/automation.jpg", alt: "Commercial kitchen automation and robotics systems", text: "Robotics saving operators time and costs while producing a consistent product every order, every customer.", href: "/about/innovation" },
  { title: "Baking", image: "/images/whatwedo/baking.jpg", alt: "Professional baking ovens including Blodgett rotating rack oven", text: "Fifteen brands dedicated to baking excellence, anchored by Blodgett XR8 \u2014 the reference standard for rotating rack ovens.", href: "/business/hotels-restaurants" },
  { title: "Char-Grilling", image: "/images/whatwedo/char-grilling.jpg", alt: "NIECO flame broiler and infrared conveyor grill", text: "Products engineered to deliver consistent quality grill after grill, featuring NIECO flame broilers and CTX infrared conveyors.", href: "/business/hotels-restaurants" },
  { title: "Combi Ovens", image: "/images/whatwedo/combi.jpg", alt: "Blodgett and Houno commercial combi ovens", text: "Steaming, baking, roasting, and regeneration in a single footprint. From 6-tray countertop to 40-tray roll-in models.", href: "/business/hotels-restaurants" },
  { title: "Cooking Suites", image: "/images/whatwedo/chef-cooking.jpg", alt: "Professional chef cooking suites by Jade and Southbend", text: "From Jade to Southbend \u2014 the perfect fit for your kitchen. Visit us and we\u2019ll customize it for you.", href: "/business/hotels-restaurants" },
  { title: "Beverage", image: "/images/whatwedo/beverage.jpg", alt: "Commercial beverage equipment including espresso and frozen drink machines", text: "Hot, cold, blended, ice cream, nitro coffee, and more. Taylor, Follett, Concordia, Synesso, and SkyFlo.", href: "/business/hotels-restaurants" },
  { title: "Brewing", image: "/images/whatwedo/brewing.jpg", alt: "On-premise micro and craft brewing systems", text: "Ss Brewtech and Deutsche \u2014 leaders in on-premise micro and craft brewing with 1-barrel and 3.5-barrel systems.", href: "/business/hotels-restaurants" },
  { title: "Frying", image: "/images/whatwedo/frying.jpg", alt: "Commercial deep fryers by Pitco and Ultrafryer", text: "Pitco, Ultrafryer, BKI, PerfectFry \u2014 a fryer for every product and volume, from c-store to full-production.", href: "/business/hotels-restaurants" },
  { title: "Griddling", image: "/images/whatwedo/griddling.jpg", alt: "Taylor double-sided clamshell grill for automated griddling", text: "Automation and griddling together with the Taylor double-sided clamshell grill \u2014 the benchmark in griddling automation.", href: "/business/hotels-restaurants" },
  { title: "IoT & Connected Kitchen", image: "/images/whatwedo/iot.png", alt: "Open Kitchen IoT platform for connected commercial kitchens", text: "Open Kitchen IoT \u2014 automation, food safety, and equipment connectivity modules. See how a connected kitchen saves time and labor.", href: "/about/innovation" },
  { title: "Pizza", image: "/images/whatwedo/pizza.jpg", alt: "Commercial pizza production equipment for all styles", text: "Traditional, deep dish, wood-fired, or New York style. Fifteen brands covering slicing, mixing, dividing, proofing, and baking.", href: "/business/hotels-restaurants" },
  { title: "Range & Induction", image: "/images/whatwedo/range.jpg", alt: "Commercial gas and induction cooking ranges", text: "From gas to induction \u2014 the highest quality and most energy efficient ranges. Southbend with patented TruVapor technology.", href: "/business/hotels-restaurants" },
  { title: "Solid & Dual Fuel", image: "/images/whatwedo/solid-fuel.jpg", alt: "Solid fuel charcoal and wood-fired commercial cooking equipment", text: "Cook with all five elements. Products from Beech, Josper, Jade \u2014 dry-aged steak cooked to perfection.", href: "/business/hotels-restaurants" },
  { title: "Steam", image: "/images/whatwedo/steam.jpg", alt: "Crown and FirEx commercial steam cooking equipment", text: "Crown and FirEx for all heavy-duty needs. Compartment steamers, kettles, tilt skillets, and automated pressurized skillets.", href: "/business/hotels-restaurants" },
  { title: "Ventless", image: "/images/whatwedo/ventless.jpg", alt: "Ventless commercial kitchen cooking solutions", text: "A full commercial kitchen without traditional ventilation. Nearly a dozen brands, 350,000 ventless systems operating worldwide.", href: "/about/innovation" },
];

export const experienceSpaces: WhatWeDoItem[] = [
  { title: "The Elements", image: "/images/whatwedo/elements.jpg", alt: "The Elements 14-seat chef table experience", text: "A 14-seat chef\u2019s table experience featuring multi-course meals prepared using wood, fire, earth, water, and metal.", href: "/demo-centers" },
  { title: "Dining Room", image: "/images/whatwedo/dining-room.jpg", alt: "MB Equipment 70-person dining room with full bar", text: "A 70-person dining room with full SkyFlo bar, Viking wine cellars, and Bluezone air purification.", href: "/demo-centers" },
  { title: "Training Room", image: "/images/whatwedo/training-room.jpg", alt: "State-of-the-art 70-person equipment training room", text: "70-person training room with advanced equipment and amenities, protected by Bluezone air purification.", href: "/demo-centers" },
  { title: "Ad Hoc Kitchen", image: "/images/whatwedo/adhoc-kitchen.jpg", alt: "Configurable test kitchen for equipment specification", text: "Design it, build it, test it, tear it down. Configured to help you design, test, and specify the right kitchen.", href: "/demo-centers" },
];

export const processSteps: ProcessStep[] = [
  { title: "Consultation & Specification", description: "We work with architects and F&B directors from the earliest planning stages \u2014 specifying equipment based on menu, volume, space, and budget." },
  { title: "Supply & Logistics", description: "Direct factory orders, competitive pricing, consolidated shipping, customs clearance, and last-mile delivery \u2014 all handled." },
  { title: "Installation & Commissioning", description: "Our technical team installs and commissions every piece. Gas, electric, ventilation hookups \u2014 tested before handover." },
  { title: "Staff Training", description: "Equipment without training is furniture. We train kitchen staff on operation, cleaning protocols, and troubleshooting." },
  { title: "After-Sales & Service", description: "Genuine spare parts, factory-trained technicians, preventive maintenance, and emergency service. The equipment runs." },
];

export const companyValues: ValueItem[] = [
  { title: "Precision Over Volume", description: "We would rather specify the right piece of equipment once than replace the wrong one twice. Every recommendation is based on the actual operating conditions of the project." },
  { title: "Direct Relationships", description: "No middlemen, no gray-market sourcing. Our factory relationships are direct and documented. That matters when you need a part in 48 hours, not 48 days." },
  { title: "Long-Term Thinking", description: "We service what we sell. That creates a natural incentive to sell equipment that lasts. Our reference list is our reputation." },
];
```

**Step 2: Update page.tsx imports — remove inline data, import from data file**

Replace lines 1-47 of `page.tsx` with:

```typescript
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { COMPANY } from "@/lib/constants";
import {
  milestones,
  equipmentCategories,
  experienceSpaces,
  processSteps,
  companyValues,
} from "@/data/company-overview";
```

**Step 3: Verify build**

Run: `cd /Users/branislavmadjarevic/Desktop/mb-equipment && npx next build`
Expected: Build succeeds, 14 static pages

**Step 4: Commit**

```bash
git add src/data/company-overview.ts src/app/about/company-overview/page.tsx
git commit -m "refactor(company-overview): extract data to typed file with interfaces"
```

---

### Task 2: Add structured data (AboutPage + BreadcrumbList)

**Files:**
- Modify: `src/app/about/company-overview/page.tsx` (metadata + JSON-LD schemas)

**Step 1: Upgrade metadata with OG tags and keyword-rich title**

Replace the metadata export:

```typescript
export const metadata: Metadata = {
  title: "Company Overview — Middleby Endorsed Kitchen Equipment Partner",
  description:
    "MB Equipment Solutions: Belgrade-based commercial kitchen equipment company endorsed by Middleby Corporation. Full-cycle service from design to after-sales across 40+ countries.",
  alternates: { canonical: "/about/company-overview" },
  openGraph: {
    title: "Company Overview — MB Equipment Solutions",
    description:
      "Middleby endorsed kitchen equipment partner. 110+ brands, full-cycle service from design to after-sales.",
    url: "/about/company-overview",
    images: [{ url: "/images/whatwedo/chef-cooking.jpg", width: 1200, height: 630 }],
  },
};
```

**Step 2: Add AboutPage and BreadcrumbList JSON-LD schemas**

Add before the component function:

```typescript
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${COMPANY.url}/about/company-overview#webpage`,
  url: `${COMPANY.url}/about/company-overview`,
  name: "Company Overview — MB Equipment Solutions",
  description: metadata.description,
  isPartOf: { "@id": `${COMPANY.url}/#website` },
  about: { "@id": `${COMPANY.url}/#organization` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: COMPANY.url },
    { "@type": "ListItem", position: 2, name: "About", item: `${COMPANY.url}/about` },
    { "@type": "ListItem", position: 3, name: "Company Overview", item: `${COMPANY.url}/about/company-overview` },
  ],
};
```

Add inside the component return, before the first `<section>`:

```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
```

**Step 3: Verify build**

**Step 4: Commit**

```bash
git add src/app/about/company-overview/page.tsx
git commit -m "feat(company-overview): add AboutPage + BreadcrumbList structured data, improve metadata"
```

---

### Task 3: Refactor timeline to mapped loop with dates

**Files:**
- Modify: `src/app/about/company-overview/page.tsx:97-157` (timeline section)

**Step 1: Replace 4 copy-pasted milestone blocks with a single map**

The `milestones` data (from Task 1) already has `year`, `color`, `number`, `title`, `description`. Replace lines 97-157 with:

```tsx
{/* Timeline */}
<div className="relative max-w-4xl mx-auto">
  <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gold/20 lg:-translate-x-px" />

  <ol aria-label="Company timeline" className="list-none">
    {milestones.map((m, i) => {
      const dotColor = m.color === "gold" ? "bg-gold" : "bg-red";
      const numColor = m.color === "gold" ? "text-gold/20" : "text-red/20";
      return (
        <li key={m.number}>
          <AnimatedSection delay={i * 0.1}>
            <div className={`relative flex flex-col lg:flex-row gap-8 lg:gap-16 pl-20 lg:pl-0 ${i < milestones.length - 1 ? "mb-20" : ""}`}>
              <div className={`absolute left-6 lg:left-1/2 top-2 w-4 h-4 rounded-full ${dotColor} border-4 border-white lg:-translate-x-1/2 z-10`} />
              <div className="lg:w-1/2 lg:text-right lg:pr-16">
                <span className={`hidden lg:block font-display text-6xl lg:text-7xl font-bold ${numColor} italic leading-none`}>{m.number}</span>
                <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">{m.year}</span>
                <h3 className="text-xl font-bold text-text-primary mt-1">{m.title}</h3>
              </div>
              <div className="lg:w-1/2 lg:pl-16">
                <p className="text-text-secondary leading-relaxed">{m.description}</p>
              </div>
            </div>
          </AnimatedSection>
        </li>
      );
    })}
  </ol>
</div>
```

**Step 2: Verify build**

**Step 3: Commit**

```bash
git add src/app/about/company-overview/page.tsx
git commit -m "refactor(company-overview): timeline mapped loop with dates, semantic ol/li"
```

---

### Task 4: Split What We Do into Equipment (15) + Experience Spaces (4), add internal links

**Files:**
- Modify: `src/app/about/company-overview/page.tsx:161-195` (What We Do section)

**Step 1: Replace single 19-card grid with two groups + card links**

```tsx
{/* What We Do — Equipment Categories */}
<section className="py-24 bg-navy">
  <div className="max-w-7xl mx-auto px-6">
    <AnimatedSection>
      <SectionHeading heading="What We Do" theme="dark" subtext="From automation to brewing, we cover every aspect of the modern commercial kitchen." />
    </AnimatedSection>

    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {equipmentCategories.map((item, i) => (
        <AnimatedSection key={item.title} delay={Math.min(i * 0.04, 0.32)}>
          <Link href={item.href ?? "#"} className="group relative bg-navy-light/50 overflow-hidden h-full border border-white/5 hover:border-gold/30 transition-all duration-500 block">
            <div className="relative h-52 overflow-hidden">
              <Image src={item.image} alt={item.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
        </AnimatedSection>
      ))}
    </div>

    {/* Experience Spaces */}
    <AnimatedSection>
      <div className="flex items-center gap-4 mt-20 mb-8">
        <div className="w-12 h-px bg-gold/40" />
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold/70">Experience Spaces</span>
      </div>
    </AnimatedSection>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {experienceSpaces.map((item, i) => (
        <AnimatedSection key={item.title} delay={i * 0.08}>
          <Link href={item.href ?? "#"} className="group relative bg-navy-light/50 overflow-hidden h-full border border-white/5 hover:border-gold/30 transition-all duration-500 block">
            <div className="relative h-52 overflow-hidden">
              <Image src={item.image} alt={item.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
        </AnimatedSection>
      ))}
    </div>
  </div>
</section>
```

Key changes:
- Cards wrapped in `<Link>` for internal linking (SEO: from 2 links to 19+ links)
- `bg-[#1A2B4A]/50` replaced with `bg-navy-light/50` (design token)
- `text-white/50` bumped to `text-white/60` (contrast)
- Stagger delay capped at 0.32s (was 1.08s for last card)
- Descriptive `alt` text per card (was single-word)
- Experience Spaces separated visually with subheading

**Step 2: Verify build**

**Step 3: Commit**

```bash
git add src/app/about/company-overview/page.tsx
git commit -m "feat(company-overview): split What We Do 15+4, add internal links, fix tokens"
```

---

### Task 5: Fix section rhythm — break adjacent navy sections

**Files:**
- Modify: `src/app/about/company-overview/page.tsx` (Full Cycle section)

**Step 1: Change Full Cycle from bg-navy to bg-white with navy cards inside**

Current section rhythm: Hero(navy) → White → **Navy → Navy** → Offwhite → Navy
Target rhythm: Hero(navy) → White → Navy → **White** → Offwhite → Navy

Replace the Full Cycle section wrapper:

```tsx
{/* Full Cycle */}
<section className="relative py-28 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <AnimatedSection>
      <div className="text-center mb-20">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-gold" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">The Process</span>
          <div className="w-12 h-px bg-gold" />
        </div>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary italic">The Full Cycle</h2>
        <p className="text-text-secondary mt-4 max-w-lg mx-auto">Most equipment companies stop at delivery. We do not.</p>
      </div>
    </AnimatedSection>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {processSteps.map((step, i) => (
        <AnimatedSection key={step.title} delay={i * 0.1}>
          <div className="relative bg-navy border border-navy-light p-6 h-full hover:border-gold/40 transition-all duration-500 group">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-display text-3xl font-bold text-gold italic">{String(i + 1).padStart(2, "0")}</span>
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-gold/30">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              )}
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </AnimatedSection>
      ))}
    </div>
  </div>
</section>
```

**Step 2: Verify build**

**Step 3: Commit**

```bash
git add src/app/about/company-overview/page.tsx
git commit -m "fix(company-overview): break adjacent navy sections, Full Cycle on white bg"
```

---

### Task 6: Improve CTA section + Values section polish

**Files:**
- Modify: `src/app/about/company-overview/page.tsx` (CTA + Values sections)

**Step 1: Replace generic CTA with targeted copy**

```tsx
{/* CTA */}
<section className="py-28 bg-navy">
  <div className="max-w-7xl mx-auto px-6">
    <AnimatedSection>
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-gold" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Let&apos;s Talk</span>
          <div className="w-12 h-px bg-gold" />
        </div>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-white italic mb-6">
          The Right Equipment.<br />
          <span className="text-gold">The Right Partner.</span>
        </h2>
        <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Whether you are designing a new kitchen, upgrading an existing one, or expanding across the region — we should be in the conversation early.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="inline-flex bg-red text-white font-semibold px-10 py-4 hover:bg-red-hover hover:-translate-y-px transition-all shadow-lg">
            Request a Consultation
          </Link>
          <Link href="/references" className="inline-flex border border-white/20 text-white font-semibold px-8 py-4 hover:bg-white/10 transition-all">
            See Our References
          </Link>
        </div>
      </div>
    </AnimatedSection>
  </div>
</section>
```

**Step 2: Update Values to use `companyValues` data**

Replace the values `.map` to use `companyValues` and `value.description` instead of `v.text`.

**Step 3: Verify build**

**Step 4: Commit**

```bash
git add src/app/about/company-overview/page.tsx
git commit -m "feat(company-overview): redesign CTA with targeted copy + secondary action"
```

---

### Task 7: Add hero preload header + SectionHeading fix

**Files:**
- Modify: `next.config.ts:52` (add preload header)
- Modify: `src/components/ui/SectionHeading.tsx:12` (text-gray-300 → text-white/70)

**Step 1: Add hero preload for company-overview route**

In `next.config.ts`, after line 52, add:

```typescript
{ source: "/about/company-overview", headers: [{ key: "Link", value: "</images/whatwedo/chef-cooking.jpg>; rel=preload; as=image; fetchpriority=high" }] },
```

**Step 2: Fix SectionHeading dark theme text color**

In `SectionHeading.tsx` line 12, change:
```typescript
const subtextColor = theme === "dark" ? "text-gray-300" : "text-text-secondary";
```
to:
```typescript
const subtextColor = theme === "dark" ? "text-white/70" : "text-text-secondary";
```

**Step 3: Verify build**

**Step 4: Commit**

```bash
git add next.config.ts src/components/ui/SectionHeading.tsx
git commit -m "perf(company-overview): add hero preload header, fix SectionHeading dark text"
```

---

### Task 8: Add error boundary + middleware cleanup

**Files:**
- Create: `src/app/about/company-overview/error.tsx`
- Create: `src/app/not-found.tsx`
- Create: `src/app/global-error.tsx`
- Modify: `src/middleware.ts` (remove broken rate limiter, expand blocked paths)

**Step 1: Create route-level error boundary**

```tsx
// src/app/about/company-overview/error.tsx
"use client";

import Link from "next/link";

export default function CompanyOverviewError({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="font-display text-4xl font-bold text-text-primary italic mb-4">Unable to Load Page</h1>
        <p className="text-text-secondary mb-8">Something went wrong. Please try again.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => reset()} className="bg-red text-white font-semibold px-8 py-4 hover:bg-red-hover transition-all">Try Again</button>
          <Link href="/" className="border border-navy/20 text-navy font-semibold px-8 py-4 hover:bg-navy hover:text-white transition-all">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Create global error boundary (inline styles since Tailwind not available)**

```tsx
// src/app/global-error.tsx
"use client";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  console.error("Global error:", error);
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "#0A1628", color: "#fff", margin: 0 }}>
        <div style={{ textAlign: "center", maxWidth: 480, padding: 32 }}>
          <h1 style={{ fontSize: 24, marginBottom: 16 }}>Something went wrong</h1>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 24 }}>An unexpected error occurred. Please try again.</p>
          <button onClick={() => reset()} style={{ background: "#D32F3D", color: "#fff", border: "none", padding: "12px 24px", cursor: "pointer", fontWeight: 600, fontSize: 14 }}>Try Again</button>
        </div>
      </body>
    </html>
  );
}
```

**Step 3: Create custom 404 page**

```tsx
// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-navy">
      <div className="text-center px-6">
        <h1 className="font-display text-7xl font-bold text-gold italic mb-4">404</h1>
        <p className="text-white/60 text-lg mb-8">The page you are looking for does not exist.</p>
        <Link href="/" className="inline-flex bg-red text-white font-semibold px-8 py-4 hover:bg-red-hover transition-all">Back to Home</Link>
      </div>
    </section>
  );
}
```

**Step 4: Clean up middleware — remove broken in-memory rate limiter, expand blocked paths**

```typescript
// src/middleware.ts
import { NextRequest, NextResponse } from "next/server";

const BLOCKED = [
  "/env", "/.env", "/.env.local", "/wp-admin", "/wp-login", "/wp-content",
  "/.git", "/.svn", "/xmlrpc.php", "/phpmyadmin", "/cgi-bin", "/admin",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (BLOCKED.some((b) => pathname === b || pathname.startsWith(b + "/"))) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|images/|fonts/).*)"],
};
```

**Step 5: Verify build**

**Step 6: Commit**

```bash
git add src/app/about/company-overview/error.tsx src/app/global-error.tsx src/app/not-found.tsx src/middleware.ts
git commit -m "feat: add error boundaries + 404 page, clean middleware rate limiter"
```

---

### Task 9: Final build + push

**Step 1: Full build verification**

Run: `cd /Users/branislavmadjarevic/Desktop/mb-equipment && npx next build`
Expected: Build succeeds, 16+ static pages (14 existing + not-found + error pages)

**Step 2: Push to GitHub**

```bash
git push origin main
```

Vercel auto-deploys from main.
