import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Our Brands | MB Equipment Solutions",
  description:
    "25+ professional kitchen equipment brands. Josper, Pitco, Hobart, TurboChef, Middleby Marshall and more. Commercial, residential, and industrial foodservice equipment.",
  alternates: { canonical: "/business/hotels-restaurants" },
};

/* ------------------------------------------------------------------ */
/*  All 25 brands from the old site                                    */
/* ------------------------------------------------------------------ */
const brands = [
  { name: "Josper", text: "JOSPER has been manufacturing for over 50 years, combining tradition and the knowledge of local craftsmen with the most innovative design and production technologies.", category: "Grilling", logo: "/images/brands/josper-logo.svg" },
  { name: "Pitco", text: "Pitco is a world leader in fryers, rethermalizers, and reduced oil use technology. Pitco technology delivers great food while saving energy, oil, and time.", category: "Frying", logo: "/images/brands/pitco-logo.png" },
  { name: "Hobart", text: "HOBART is the global market leader for commercial dishwasher and warewash systems. A leading innovator in commercial warewashing technology.", category: "Warewashing", logo: "/images/brands/hobart-logo.png" },
  { name: "Hounö", text: "HOUNÖ Invoq Combi, Hybrid & bake ovens, as well as CombiSlim model ovens — the key to unlock high efficiency and significant cost savings.", category: "Combi Ovens", logo: "/images/brands/houno-logo.png" },
  { name: "Dalmec", text: "Dalmec provides complete solutions for the hotel sector and collective catering with hundreds of Industrial Manipulators in use worldwide.", category: "Material Handling", logo: "/images/brands/dalmec-logo.png" },
  { name: "Sveba Dahlen", text: "Sveba Dahlen, established in 1948, manufactures high-quality, user-friendly ovens and baking equipment delivering the best baking results.", category: "Baking", logo: null },
  { name: "TurboChef", text: "TurboChef speed-cook ovens fit virtually every cooking application, offering high-quality results, superior cook speeds, and ventless operation.", category: "Speed Cooking", logo: "/images/brands/turbochef-logo.svg" },
  { name: "Silko", text: "Since 1980, Silko has stood out for its attention to detail, quality materials and originality of solutions designed to optimise kitchen productivity.", category: "Cooking Equipment", logo: "/images/brands/silko-logo.png" },
  { name: "Firex", text: "For 40 years, Firex has been a leading manufacturer producing highly-automated, innovative cooking systems that save energy and resources.", category: "Automated Cooking", logo: "/images/brands/firex-logo.png" },
  { name: "Lincat", text: "Lincat, the UK's leading manufacturer of commercial fryers, ovens, griddles, grills, chargrills, induction hobs, and merchandisers.", category: "Cooking & Grilling", logo: "/images/brands/lincat-logo.png" },
  { name: "Infrico", text: "INFRICO generates the best cooling solutions adapted to specific client needs. Technological vanguard, certified quality and excellence.", category: "Refrigeration", logo: "/images/brands/infrico-logo.png" },
  { name: "Nieco", text: "Building Automatic Broilers that guarantee delicious, juicy, flavorful, flame broiled meals quickly and efficiently, every time.", category: "Broiling", logo: "/images/brands/nieco-logo.png" },
  { name: "Desmon", text: "Desmon Food Service Equipment is a world leader in chilling and freezing technologies, manufacturing blast chillers and professional refrigeration.", category: "Blast Chilling", logo: "/images/brands/desmon-logo.png" },
  { name: "Follett", text: "Follett manufactures innovative ice machines, ice and water dispensers, and ice storage and transport products for the foodservice industry.", category: "Ice Systems", logo: "/images/brands/follett-logo.png" },
  { name: "IMC", text: "Specializing in commercial under bar, bottle coolers, glass frosters, and food waste management equipment. Robust and reliable.", category: "Bar Equipment", logo: null },
  { name: "Middleby Marshall", text: "Middleby Marshall is the world leader in conveyor cooking. Known for consistent bake, durability and longevity.", category: "Conveyor Ovens", logo: "/images/brands/middleby-marshall-logo.png" },
  { name: "Perfect Fry", text: "Perfect Fry commercial ventless fryers are the best deep fryers of their kind on the market, solving all deep frying challenges.", category: "Ventless Frying", logo: "/images/brands/perfectfry-logo.png" },
  { name: "Varimixer", text: "Varimixer is a worldwide renowned Danish manufacturer of planetary mixers for bakeries, kitchens, and food processing. Founded in 1915.", category: "Mixing", logo: "/images/brands/varimixer-logo.png" },
  { name: "Viking Commercial", text: "Viking Commercial bar refrigeration solutions embody innovation and reliability. Wine refrigerators, dispensers, and craft ice machines.", category: "Bar Refrigeration", logo: "/images/brands/viking-logo.svg" },
  { name: "Bake Off", text: "Professional electrical and gas ovens for baking and bread making.", category: "Baking", logo: "/images/brands/bakeoff-logo.png" },
  { name: "Anets", text: "For over 80 years, ANETS has offered innovation and quality with a full line of fryers and pasta cookers.", category: "Frying & Pasta", logo: null },
  { name: "APW Wyott", text: "APW Wyott is a leading source of quality equipment solutions to the foodservice and retail industries worldwide.", category: "Foodservice Equipment", logo: "/images/brands/apwwyott-logo.png" },
  { name: "Bakers Pride", text: "Founded in The Bronx in the mid 1940's, Bakers Pride initiated one of the most dramatic innovations by inventing the modern production pizza oven.", category: "Pizza Ovens", logo: "/images/brands/bakerspride-logo.png" },
  { name: "Beech Ovens", text: "Beech Ovens offers a comprehensive product range including ovens, rotisseries, specialty chargrills, and custom-made hearths.", category: "Wood-Fired Ovens", logo: "/images/brands/beechovens-logo.png" },
  { name: "BKI", text: "Dedicated to the culinary arts — quality construction, durability and design elements that set BKI commercial cooking equipment apart.", category: "Commercial Cooking", logo: null },
  { name: "Blodgett", text: "Blodgett is a leading manufacturer of convection and combi ovens. Operators have trusted Blodgett for consistency and quality for more than 160 years.", category: "Ovens", logo: "/images/brands/blodgett-logo.png" },
  { name: "Bloomfield", text: "Bloomfield is known in the beverage industry as a supplier of coffee brewers, tea brewers, hot water machines, coffee warmers, and beverage dispensing equipment.", category: "Beverage", logo: "/images/brands/bloomfield-logo.png" },
  { name: "Bluezone", text: "Middleby Bluezone offers the most innovative and advanced air purification technology available. Bluezone UV light units destroy 99.9995% of viruses and other indoor contaminants.", category: "Air Purification", logo: null },
  { name: "Britannia", text: "Britannia provides a wide range of ventilation canopies and ventilated ceilings to solve any kitchen ventilation problem. Britannia manufactures and installs commercial and institutional kitchen ventilation solutions.", category: "Ventilation", logo: null },
  { name: "Carter-Hoffmann", text: "Carter-Hoffmann is the industry expert and leader in food holding and transporting solutions. GardenChef Micro Green and Herb Growing cabinets help you present the highest quality dishes.", category: "Holding & Transport", logo: "/images/brands/carter-hoffmann-logo.svg" },
  { name: "Celfrost", text: "Celfrost is a leading supplier of cold side products including professional refrigerators, coldrooms, ice machines, and freezers. Celfrost can address any cold side needs.", category: "Cold Storage", logo: null },
  { name: "Concordia", text: "Concordia Beverage is a world leader in super-automatic espresso machines and bean-to-cup coffee brewers, offering one-touch solutions for specialty coffee.", category: "Espresso", logo: null },
  { name: "CookTek", text: "CookTek continues to be the leading innovator in induction warming, cooking, and heated delivery systems for commercial kitchens and restaurants.", category: "Induction", logo: "/images/brands/cooktek-logo.png" },
  { name: "Crown", text: "Crown is a leader in the design and manufacture of steam cooking equipment for the commercial foodservice industry.", category: "Steam Cooking", logo: null },
  { name: "CTX", text: "CTX is the leading brand in long wave infrared radiant heat, which produces outstanding quality consistency for proteins while reducing energy and labor costs.", category: "Infrared Cooking", logo: null },
  { name: "Deutsche Beverage + Process", text: "The leading equipment partner for custom, turn-key brewing, distilling, coffee, craft beverage, and processing solutions.", category: "Brewing & Distilling", logo: null },
  { name: "Doyon", text: "Whether a retail store, wholesale manufacturer, pizza shop, or artisan bakery, Doyon provides everything needed to complete a baking cycle, from water meter, mixer, proofer, divider and rounder, sheeter, ovens, all the way to slicers.", category: "Bakery Equipment", logo: null },
  { name: "Emery Thompson", text: "An industry-leading brand since 1905, Emery Thompson is known for its best-in-class batch freezers and innovation in frozen dessert equipment.", category: "Frozen Dessert", logo: "/images/brands/emerythompson-logo.png" },
  { name: "Eswood", text: "Eswood is a world leader in durable, commercial under-counter dishwashers and glasswasher equipment. Eswood is the largest manufacturer of commercial kitchen and food service equipment in Australia.", category: "Dishwashing", logo: null },
  { name: "EVO America", text: "Evo cooktops are the leading live-action display cooking equipment in the world.", category: "Display Cooking", logo: null },
  { name: "Flavor Burst", text: "Located in Danville, Indiana, Flavor Burst has specialized in developing flavor and candy injection machines for 30 years, offering products and services to over 30 different countries.", category: "Flavor Injection", logo: "/images/brands/flavorburst-logo.png" },
  { name: "Frifri", text: "Frifri is a leader in oil cooking systems, including free-standing, tabletop, and built-in fryers and pasta cookers. High specification fryers with pumped oil filtration.", category: "Oil Cooking", logo: null },
  { name: "Globe", text: "Globe's dedication to quality manufacturing, exceptional service, and value is well known. Not only for our broad slicer and mixer selections, but also for our expanded line of countertop grills, fryers, cookers and scales.", category: "Slicers & Mixers", logo: "/images/brands/globe-logo.png" },
  { name: "Goldstein", text: "Goldstein Eswood is the largest manufacturer of commercial kitchen and food service equipment in Australia. The extensive range of Australian designed products cater for all kitchen sizes and menu requirements.", category: "Commercial Cooking", logo: null },
  { name: "Holman", text: "Holman conveyor toasters are synonymous with quality and superior reliability.", category: "Conveyor Toasting", logo: null },
  { name: "Hydra Rinse", text: "Hydra Rinse uses revolutionary technology to standardize the cleaning and sanitizing process of frozen dessert dispensing equipment.", category: "Cleaning Systems", logo: null },
  { name: "Icetro", text: "ICETRO is a global leader in ice machines and dispensers as well as soft serve ice cream equipment and slush dispensers for commercial foodservice.", category: "Ice & Soft Serve", logo: null },
  { name: "Imperial Range", text: "Imperial has remained a family-owned company whose mission is to be the preferred global supplier of high quality, top value cooking equipment to the foodservice industry.", category: "Ranges", logo: "/images/brands/imperial-logo.png" },
  { name: "Induc", text: "Induc is a leader in induction cooking equipment, with a broad line of innovative products marketed under the name ECO Kitchen.", category: "Induction Cooking", logo: null },
  { name: "Jade", text: "Home of the best commercial ranges. Jade Range is continuously redefining technology with regard to design, engineering, manufacturing, quality control, and customer-oriented service.", category: "Premium Ranges", logo: "/images/brands/jade-logo.png" },
  { name: "JoeTap", text: "JoeTap is the leader in on-demand Nitro Cold Brew Coffee dispensing. Whether you are looking for a ready-to-drink solution or post-mix, JoeTap can dispense still or nitro coffee from keg or bag-in-box.", category: "Nitro Coffee", logo: "/images/brands/joetap-logo.svg" },
  { name: "Kloppenberg", text: "Kloppenberg has supplied commercial ice solutions for more than 80 years and provides an exceptional line of products to a myriad of industries, including healthcare, recreation, oil & gas, agriculture, construction, marine, hospitality and food service.", category: "Ice Solutions", logo: null },
  { name: "L2F", text: "For years, L2F has helped companies innovate and bring new ideas from the lab to full-scale fabrication (Lab2Fab). Our clients have been acquired by major multi-nationals and launched disruptive technologies.", category: "Innovation Lab", logo: null },
  { name: "Lang", text: "High quality cooking solutions: convection ovens, griddles, ranges, two-sided cooking, cheesemelters. The Future of Your Kitchen.", category: "Cooking Solutions", logo: null },
  { name: "MagiKitch'n", text: "Best in class charbroilers, griddles, refrigerated bases. Quality kitchen equipment since 1942. New refrigerated bases for griddles and charbroilers.", category: "Charbroilers", logo: "/images/brands/magikitchn-logo.svg" },
  { name: "Marco", text: "Industry leaders with over 40 years of experience in the coffee, foodservice, and catering industries. Beverage solutions found in coffee shops, offices, hotels, convenience stores and restaurants worldwide.", category: "Coffee & Beverage", logo: null },
  { name: "Market Forge", text: "Leaders in Steam. The beauty of steam is found in its ease of use and the quality of its results. Market Forge leads the industry in design and quality.", category: "Steam Equipment", logo: null },
  { name: "Marsal", text: "For over 40 years, Marsal has manufactured innovative restaurant equipment, including commercial deck pizza ovens and refrigerated prep tables that have revolutionized the industry.", category: "Pizza Ovens", logo: "/images/brands/marsal-logo.png" },
  { name: "Marvel Scientific", text: "Marvel Scientific is synonymous with trusted refrigeration products specifically engineered to perform to the precise demands of the health, sciences, and industrial field.", category: "Scientific Refrigeration", logo: null },
  { name: "Newton CFV", text: "Newton's patented CFV TM technology provides accurate and cost-effective flow, pressure and ratio control for applications across several industries.", category: "Flow Control", logo: null },
  { name: "Nu-Vu", text: "NU-VU, the leader in on-premise baking, manufactures a complete line of oven/proofers, ovens, proofers, carts and racks designed to complete any cooking.", category: "On-Premise Baking", logo: null },
  { name: "Powerhouse Dynamics", text: "Founded in 2009, Powerhouse Dynamics is the leading provider of IoT-based solutions to connect, analyze and control equipment to deliver enterprise-wide operational efficiencies to food service operators.", category: "IoT Platform", logo: null },
  { name: "QualServ", text: "QualServ Solutions, a Middleby Corporation Company, is a US-based manufacturer providing innovative services, products, comprehensive design and turn-key solutions with a global supply chain team.", category: "Turn-Key Solutions", logo: null },
  { name: "RAM", text: "The RAM dispenses frozen food in a way that the food is cooked from a frozen state, resulting in improved product quality, consistency and yield.", category: "Frozen Dispensing", logo: null },
  { name: "Southbend", text: "Southbend manufactures heavy-duty commercial cooking equipment, including sectionals, ranges, broilers, convection ovens, counterlines, and steam equipment.", category: "Heavy-Duty Cooking", logo: "/images/brands/southbend-logo.png" },
  { name: "Ss Brewtech Pro", text: "Based in Southern California, Ss Brewtech has quickly become the industry leader in home and professional craft brewing equipment.", category: "Craft Brewing", logo: null },
  { name: "Star", text: "Star is a leader in innovative, high-quality commercial cooking equipment. Star manufactures griddles, charbroilers, hot plates, sandwich/panini grills, toasters, concession equipment, and more.", category: "Countertop Cooking", logo: "/images/brands/star-logo.png" },
  { name: "Starline", text: "Starline is a line of non-carbonated beverage dispensers.", category: "Beverage Dispensers", logo: null },
  { name: "Synesso", text: "Our mission is to build the best espresso machines on the planet.", category: "Espresso Machines", logo: "/images/brands/synesso-logo.png" },
  { name: "Taylor", text: "When it comes to the success of your business, turn to the Taylor Company, an industry leader in foodservice equipment. We manufacture technologically innovative and versatile foodservice equipment.", category: "Foodservice Equipment", logo: "/images/brands/taylor-logo.png" },
  { name: "TERRY", text: "Utilizing an environmentally friendly formulation of Citryne, TERRY products eliminate scale without the use of hazardous chemicals. TERRY products are NSF and FDA approved.", category: "Scale Control", logo: null },
  { name: "Toastmaster", text: "Toastmaster manufactures high-quality commercial toasting solutions, drawer warmers, countertop convection ovens, griddles, charbroilers, hot plates, smokers, and proofers.", category: "Toasting & Warming", logo: null },
  { name: "U-Line Commercial", text: "U-Line's suite of commercial kitchen refrigeration solutions focus on food safety and preservation. From blast chillers to chef bases, and prep tables to reach-in refrigeration — trusted since 1962.", category: "Commercial Refrigeration", logo: "/images/brands/uline-logo.png" },
  { name: "Ultrafryer", text: "Ultrafryer has been producing premium-performance gas and electric fryers since 1969.", category: "Premium Fryers", logo: "/images/brands/ultrafryer-logo.png" },
  { name: "Wells", text: "Wells Manufacturing is nationally and internationally renowned as the industry leader in ventless hoods, hot and cold drop-in/built-in food wells, and electric cooking equipment.", category: "Ventless Hoods", logo: null },
  { name: "Wild Goose Filling", text: "Two innovative engineers. One ambitious brewer.", category: "Filling Systems", logo: "/images/brands/wildgoose-logo.png" },
  { name: "Wunder-Bar", text: "Wunder-Bar manufactures beverage dispensing systems used by leading restaurant chains, convenience stores, and foodservice operations.", category: "Beverage Dispensing", logo: null },
];

/* ------------------------------------------------------------------ */
/*  Segments we serve                                                  */
/* ------------------------------------------------------------------ */
const segments = [
  {
    title: "Fine Dining & Boutique",
    text: "Custom-specified lines. Josper charcoal grills, Jade heavy-duty ranges, Desmon blast chillers.",
  },
  {
    title: "Hotels & Resorts",
    text: "Main kitchens, banquet production, pastry, garde manger, room service pantries, pool bars.",
  },
  {
    title: "Quick-Service & Fast Casual",
    text: "Standardized equipment packages for multi-unit rollouts across 50+ locations.",
  },
  {
    title: "Cafes & Bakeries",
    text: "Espresso systems, display cases, deck ovens, proofers, mixers.",
  },
  {
    title: "Institutional & Catering",
    text: "Hospitals, corporate dining, universities, airlines. High-volume production equipment.",
  },
];

export default function HotelsRestaurantsPage() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative min-h-[60vh] flex items-center bg-[#0A1628]">
        <div className="absolute inset-0 bg-[url('/images/innovation/hero.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <AnimatedSection>
            <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em]">
              Commercial Solutions
            </span>
            <div className="w-12 h-[2px] bg-[#C9A84C] mt-4 mb-6" />
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-3xl">
              Our Brands
            </h1>
            <p className="text-white/70 text-lg max-w-xl mt-6 leading-relaxed">
              MB Equipment Solutions develops industry leading solutions for commercial restaurants,
              fast food chains, hospitality, healthcare, and convenience store operations.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/contact"
                className="inline-flex bg-[#D32F3D] text-white font-semibold px-8 py-4 rounded-sm hover:bg-[#B82735] transition-all"
              >
                Request a Quote
              </Link>
              <Link
                href="/demo-centers"
                className="inline-flex border border-white/30 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-all"
              >
                Visit a Demo Center
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SEGMENTS — elegant inline strip                              */}
      {/* ============================================================ */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-center gap-5">
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-8 h-[2px] bg-[#C9A84C]" />
                <span className="text-[#0A1628] text-sm font-semibold uppercase tracking-widest">
                  We equip
                </span>
              </div>
              <div className="hidden md:block w-[1px] h-6 bg-gray-200" />
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {segments.map((s, i) => (
                  <span key={s.title} className="flex items-center gap-x-6">
                    <span className="text-[15px] text-[#595F66] hover:text-[#0A1628] transition-colors cursor-default">
                      {s.title}
                    </span>
                    {i < segments.length - 1 && (
                      <span className="hidden sm:inline text-[#C9A84C]/40 text-xs">●</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BRANDS GRID — all brands                                     */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-[2px] bg-[#C9A84C]" />
                    <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest">
                      Brand Portfolio
                    </span>
                  </div>
                  <h2 className="font-display text-3xl lg:text-5xl font-bold text-[#0A1628] leading-[1.1]">
                    The Names Behind<br className="hidden lg:block" /> the Kitchens
                  </h2>
                  <p className="text-[#595F66] text-sm mt-4">77 brands in our portfolio</p>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-[#595F66] leading-relaxed lg:border-l-2 lg:border-[#C9A84C]/30 lg:pl-6">
                    We represent over 25 brands from Middleby Corporation and beyond.
                    Each one selected for build quality, factory-direct service network,
                    and proven performance under pressure.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, i) => (
              <AnimatedSection key={brand.name} delay={Math.min(i * 0.04, 0.4)}>
                <div className="group bg-white border border-gray-100 hover:border-[#0A1628]/20 h-full transition-all duration-300 hover:shadow-lg overflow-hidden">
                  {/* Logo area */}
                  <div className="h-32 bg-[#F8F9FA] border-b border-gray-100 flex items-center justify-center p-6 group-hover:bg-[#0A1628] transition-colors duration-500">
                    {brand.logo ? (
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="max-h-16 max-w-[180px] w-auto object-contain group-hover:brightness-0 group-hover:invert transition-all duration-500"
                      />
                    ) : (
                      <span className="font-display text-2xl font-bold text-[#0A1628] group-hover:text-white transition-colors duration-500">
                        {brand.name}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-display text-lg font-bold text-[#0A1628]">
                        {brand.name}
                      </h3>
                      <span className="text-[9px] font-semibold uppercase tracking-widest text-[#C9A84C]">
                        {brand.category}
                      </span>
                    </div>
                    <p className="text-[#595F66] text-sm leading-relaxed">
                      {brand.text}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PROCESS — editorial split with numbered list                 */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left column — sticky heading */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[2px] bg-[#C9A84C]" />
                  <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest">Process</span>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight">
                  From First Call<br />to First Service
                </h2>
                <p className="text-white/50 mt-4 leading-relaxed text-sm">
                  Every project follows the same discipline. No shortcuts, no gaps between what&apos;s specified and what&apos;s delivered.
                </p>
              </AnimatedSection>
            </div>

            {/* Right column — steps */}
            <div className="lg:col-span-8">
              {[
                { step: "Brief", desc: "We collect what matters — menu, covers, service style, space constraints, utility availability, and budget." },
                { step: "Design Support", desc: "CAD layouts, equipment schedules, utility requirement documents. Coordinated with the architect and GC." },
                { step: "Specification", desc: "Brand and model selection based on actual operating needs. No filler, no upsell." },
                { step: "Procurement", desc: "Direct factory orders. Consolidated shipping. Customs clearance handled. Accurate lead times." },
                { step: "Installation", desc: "Our technicians on site. Gas, electric, plumbing coordination. Every connection tested." },
                { step: "Training", desc: "Kitchen staff trained on operation, cleaning protocols, and troubleshooting before the first service." },
                { step: "Ongoing Support", desc: "Genuine spare parts. Factory-trained technicians. Preventive maintenance. Emergency call-out." },
              ].map((item, i) => (
                <AnimatedSection key={item.step} delay={i * 0.06}>
                  <div className={`flex gap-6 py-7 ${i < 6 ? "border-b border-white/10" : ""}`}>
                    <span className="font-display text-2xl font-bold text-[#C9A84C]/30 w-8 shrink-0 text-right">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{item.step}</h3>
                      <p className="text-white/45 text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA — clean, no stat cards                                   */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#F8F9FA] border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#0A1628] mb-4">
              Let&apos;s Spec Your Kitchen.
            </h2>
            <p className="text-[#595F66] leading-relaxed mb-8">
              Tell us the project scope. We&apos;ll come back with brands, models, drawings, and a number.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex bg-[#D32F3D] text-white font-semibold px-8 py-4 rounded-sm hover:bg-[#B82735] transition-all"
              >
                Start a Project
              </Link>
              <Link
                href="/references"
                className="inline-flex border border-[#0A1628]/20 text-[#0A1628] font-semibold px-8 py-4 rounded-sm hover:bg-[#0A1628] hover:text-white transition-all"
              >
                See Our References
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
