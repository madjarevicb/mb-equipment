import Link from "next/link";
import Image from "next/image";
import { getSolutionLinks, getEquipmentLinks, getCompanyLinks } from "@/lib/navigation";
import { COMPANY } from "@/lib/constants";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

interface FooterProps {
  locale: Locale;
  nav: Dictionary["nav"];
  footer: Dictionary["footer"];
}

export default function Footer({ locale, nav, footer: f }: FooterProps) {
  const solutionLinks = getSolutionLinks(locale, nav);
  const equipmentLinks = getEquipmentLinks(locale, nav);
  const companyLinks = getCompanyLinks(locale, nav);

  return (
    <footer className="bg-navy text-white">
      {/* Top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        {/* Primary row — asymmetric: brand wide left, nav compact right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Brand column — dominant */}
          <div className="lg:col-span-5">
            <Image
              src="/mb-logo.svg"
              alt="MB Equipment Solutions"
              width={160}
              height={80}
              className="h-12 w-auto brightness-0 invert mb-8"
            />
            <p className="font-display text-xl lg:text-2xl text-white/60 italic leading-snug max-w-sm mb-8">
              {f.tagline}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-gold/40" />
              <span className="text-gold/70 text-[11px] font-medium uppercase tracking-[0.2em]">
                {f.authorizedPartner}
              </span>
            </div>
          </div>

          {/* Nav columns — compact, pushed right */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 lg:gap-6 lg:pl-12">
              {/* Solutions */}
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 mb-5">{f.solutions}</p>
                <ul className="space-y-3">
                  {solutionLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-[13px] text-white/60 hover:text-white transition-colors duration-300">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Equipment */}
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 mb-5">{f.equipment}</p>
                <ul className="space-y-3">
                  {equipmentLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-[13px] text-white/60 hover:text-white transition-colors duration-300">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 mb-5">{f.company}</p>
                <ul className="space-y-3">
                  {companyLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-[13px] text-white/60 hover:text-white transition-colors duration-300">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 mb-5">{f.getInTouch}</p>
                <div className="space-y-3">
                  <a href={`mailto:${COMPANY.email}`} className="block text-[13px] text-white/60 hover:text-white transition-colors duration-300">{COMPANY.email}</a>
                  <a href={`tel:${COMPANY.phone}`} className="block text-[13px] text-white/60 hover:text-white transition-colors duration-300">{COMPANY.phoneDisplay}</a>
                  <p className="text-[13px] text-white/50 leading-relaxed pt-1">
                    {COMPANY.address.street}<br />
                    {COMPANY.address.zip} {COMPANY.address.city}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar — minimal */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-[11px] text-white/50 tracking-[0.2em]">&copy; {new Date().getFullYear()} {COMPANY.name}</span>
          <div className="flex items-center gap-4">
            <Link href={`/${locale}/privacy`} className="text-[11px] text-white/50 tracking-[0.2em] hover:text-white/70 transition-colors duration-300">{f.privacyPolicy}</Link>
            <span className="text-white/10">|</span>
            <a
              href="https://ironbuild.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] text-white/50 tracking-[0.2em] hover:text-white/70 transition-colors duration-300"
            >
              {f.builtBy}
              <Image
                src="/images/ironbuild-logo.svg"
                alt="IronBuild"
                width={16}
                height={16}
                className="inline-block brightness-0 invert opacity-40"
              />
              <span className="font-medium">IronBuild</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
