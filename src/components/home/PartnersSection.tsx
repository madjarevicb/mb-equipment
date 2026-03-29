import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { name: "Starbucks", logo: "/logos/starbucks.svg" },
  { name: "KFC", logo: "/logos/kfc.svg" },
  { name: "McDonald's", logo: "/logos/mcdonalds.svg" },
  { name: "Burger King", logo: "/logos/burger-king.svg" },
  { name: "Chipotle", logo: "/logos/chipotle.svg" },
  { name: "Pizza Hut", logo: "/logos/pizza-hut.png" },
  { name: "Taco Bell", logo: "/logos/taco-bell.svg" },
  { name: "Chick-fil-A", logo: "/logos/chick-fil-a.svg" },
  { name: "Subway", logo: "/logos/subway.svg" },
  { name: "Wendy's", logo: "/logos/wendys.svg" },
  { name: "Dunkin' Donuts", logo: "/logos/dunkin-donuts.png" },
];

export default function PartnersSection() {
  return (
    <section id="partners" aria-label="Partner logos" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h2 className="sr-only">Our Global Partners and Clients</h2>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold text-center">
          Trusted by Global Foodservice Leaders
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex items-center gap-20 animate-scroll-partners will-change-transform">
          {[...partners, ...partners].map((partner, i) => (
            <div key={`${partner.name}-${i}`} className="flex-shrink-0 flex items-center justify-center h-24 w-44 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={160}
                height={80}
                className="object-contain max-h-20 w-auto"
                loading="lazy"
                quality={75}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
