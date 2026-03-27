import Link from "next/link";

const solutions = [
  { label: "Hotels & Restaurants", href: "/business/hotels-restaurants" },
  { label: "Residential", href: "/business/residential" },
  { label: "Food Processing", href: "/business/food-processing" },
];

const company = [
  { label: "Company Overview", href: "/about/company-overview" },
  { label: "Innovation", href: "/about/innovation" },
  { label: "References", href: "/references" },
  { label: "Demo Centers", href: "/demo-centers" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold">MB</span>
              <span className="text-sm font-medium ml-2">Equipment Solutions</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              The Balkans&apos; most complete foodservice equipment partner. Endorsed by Middleby Corporation.
            </p>
            <div className="flex items-center gap-2 text-[#C9A84C] text-xs font-medium uppercase tracking-wider">
              <span className="w-8 h-px bg-[#C9A84C]" />
              Endorsed by Middleby
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-white/70">
              <a href="mailto:info@mbequipmentsolutions.com" className="block hover:text-white transition-colors">info@mbequipmentsolutions.com</a>
              <a href="tel:+381111234567" className="block hover:text-white transition-colors">+381 11 123 4567</a>
              <p>Vladimira Popovića 6<br />11070 Beograd, Srbija</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <span>&copy; {new Date().getFullYear()} MB Equipment Solutions. All rights reserved.</span>
          <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
