import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function BrandsPartnersSection() {
  return (
    <section className="py-14 bg-white" aria-labelledby="brands-partners-heading">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-2">
              <p className="text-gold-text text-sm font-semibold uppercase tracking-[0.2em] mb-2">
                Our Network
              </p>
              <h2
                id="brands-partners-heading"
                className="font-display text-2xl sm:text-3xl font-bold text-navy mb-3"
              >
                Brands &<br />Partners
              </h2>
              <div className="w-10 h-[2px] bg-gold mb-3" />
              <p className="text-text-secondary text-sm leading-relaxed">
                Authorized distributor for 110+ commercial kitchen brands.
              </p>
            </div>
            <div className="lg:col-span-10">
              <Image
                src="/images/references/ref-61.jpg"
                alt="MB Equipment Solutions — Complete brand and partner logo grid"
                width={1200}
                height={400}
                sizes="(max-width: 1024px) 100vw, 960px"
                loading="lazy"
                className="w-full object-contain"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
