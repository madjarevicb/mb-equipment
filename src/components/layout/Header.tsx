import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navItems = [
  {
    label: "About Us",
    children: [
      { label: "Company Overview", href: "/about/company-overview" },
      { label: "Innovation", href: "/about/innovation" },
    ],
  },
  {
    label: "Business & Brands",
    children: [
      { label: "Hotels & Restaurants", href: "/business/hotels-restaurants" },
      { label: "Residential", href: "/business/residential" },
      { label: "Food Processing", href: "/business/food-processing" },
    ],
  },
  { label: "References", href: "/references" },
  { label: "Demo Centers", href: "/demo-centers" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-[#0A1628] text-white/80 text-xs hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">
          <span>Mon-Fri: 08:00 - 17:00 CET</span>
          <div className="flex gap-4">
            <a href="tel:+381111234567" className="hover:text-white transition-colors">+381 11 123 4567</a>
            <span className="text-white/30">|</span>
            <a href="mailto:info@mbequipmentsolutions.com" className="hover:text-white transition-colors">info@mbequipmentsolutions.com</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#0A1628]">MB</span>
            <div className="hidden sm:block">
              <span className="text-sm font-medium text-[#0A1628] leading-none block">Equipment Solutions</span>
              <span className="text-[10px] text-[#C9A84C] uppercase tracking-wider">Endorsed by Middleby</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button className="text-sm font-medium text-[#212529] hover:text-[#D32F3D] transition-colors py-2 flex items-center gap-1">
                    {item.label}
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="block px-4 py-2.5 text-sm text-[#212529] hover:bg-[#F8F9FA] hover:text-[#D32F3D] transition-colors">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.label} href={item.href!} className="text-sm font-medium text-[#212529] hover:text-[#D32F3D] transition-colors">
                  {item.label}
                </Link>
              )
            )}
            <Link href="/contact" className="bg-[#D32F3D] text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-[#B82735] hover:-translate-y-px transition-all shadow-sm">
              Get a Quote
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-3 lg:hidden">
            <a href="tel:+381111234567" className="text-[#0A1628] p-2" aria-label="Call us">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </a>
            <MobileMenu navItems={navItems} />
          </div>
        </div>
      </nav>
    </header>
  );
}
