export interface Milestone {
  year: string;
  number: string;
  color: "gold" | "red";
  title: string;
  description: string;
}

export interface WhatWeDoItem {
  title: string;
  image: string;
  alt: string;
  description: string;
  href: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

/** HTML string — safe to use with dangerouslySetInnerHTML (sanitized at render time) */
export interface FAQItem {
  question: string;
  answer: string;
}

export interface HeroStat {
  label: string;
}

export interface SocialProofBrand {
  name: string;
  href: string;
}

export interface Testimonial {
  quote: string;
  attribution: string;
}

export const heroStats: HeroStat[] = [
  { label: "2,000+ Projects" },
  { label: "40+ Countries" },
  { label: "110+ Brands" },
];

export const socialProofBrands: SocialProofBrand[] = [
  { name: "Starbucks", href: "/references" },
  { name: "KFC", href: "/references" },
  { name: "McDonald\u2019s", href: "/references" },
  { name: "Hilton", href: "/references" },
  { name: "Marriott", href: "/references" },
  { name: "Hyatt", href: "/references" },
  { name: "Burger King", href: "/references" },
  { name: "Accor", href: "/references" },
];

export const testimonials: Testimonial[] = [
  {
    quote: "We opened 14 locations across three countries in 18 months. MB Equipment specified and delivered every kitchen \u2014 same brands, same standards, every site. That consistency is why we renewed the contract.",
    attribution: "Regional Expansion Director, Multi-unit QSR Chain",
  },
  {
    quote: "Other suppliers quoted equipment. MB Equipment quoted a working kitchen \u2014 with ventilation, gas hookups, commissioning, and a training day for our team. That is a different conversation entirely.",
    attribution: "Executive Chef & Owner, Boutique Hotel Group, Belgrade",
  },
];

export const milestones: Milestone[] = [
  {
    year: "2003",
    number: "01",
    color: "gold",
    title: "Founded in Belgrade",
    description:
      "MB Equipment Solutions opened in Belgrade, Serbia with a three-person team and a clear premise: Southeast Europe needed a professional-grade equipment partner, not just a distributor. First projects were hotel kitchens in Serbia and Montenegro \u2014 site surveys, specs, installation, commissioning, and 24/7 service.",
  },
  {
    year: "2008",
    number: "02",
    color: "red",
    title: "Middleby Authorization",
    description:
      "That hands-on approach attracted attention from Middleby Corporation \u2014 one of the world\u2019s largest foodservice equipment manufacturers with 110+ brands. The authorization meant direct factory engineering access, priority parts supply, and exclusive regional representation.",
  },
  {
    year: "2014",
    number: "03",
    color: "gold",
    title: "Beyond the Restaurant Kitchen",
    description:
      "The commercial kitchen expertise translated into three new verticals: residential luxury with Viking, La Cornue, and AGA; industrial food processing for bakeries, meat plants, and dairy; and multi-unit rollouts for chains including Starbucks, KFC, and McDonald\u2019s across 30+ markets.",
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
  { title: "Commercial Automation", image: "/images/whatwedo/automation.jpg", alt: "Commercial kitchen automation and robotics systems", description: "Picnic, Flippy, and Middleby automation platforms \u2014 robotics saving operators time and labor while producing a consistent product every order.", href: "/about/innovation" },
  { title: "Commercial Baking", image: "/images/whatwedo/baking.jpg", alt: "Professional baking ovens including Blodgett rotating rack oven", description: "Fifteen brands dedicated to baking excellence, anchored by Blodgett XR8 \u2014 the reference standard for rotating rack ovens.", href: "/business/hotels-restaurants" },
  { title: "Commercial Char-Grilling", image: "/images/whatwedo/char-grilling.jpg", alt: "NIECO flame broiler and infrared conveyor grill", description: "Consistent quality grill after grill \u2014 featuring NIECO flame broilers and CTX infrared conveyors for high-volume operations.", href: "/business/hotels-restaurants" },
  { title: "Commercial Combi Ovens", image: "/images/whatwedo/combi.jpg", alt: "Blodgett and Houno commercial combi ovens", description: "Steaming, baking, roasting, and regeneration in a single footprint. From 6-tray countertop to 40-tray roll-in models.", href: "/business/hotels-restaurants" },
  { title: "Professional Cooking Suites", image: "/images/whatwedo/chef-cooking.jpg", alt: "Professional chef cooking suites by Jade and Southbend", description: "Heavy-duty cooking lines built around your menu. Jade, Southbend, and Vulcan \u2014 configured and commissioned by our engineering team.", href: "/business/hotels-restaurants" },
  { title: "Commercial Beverage", image: "/images/whatwedo/beverage.jpg", alt: "Commercial beverage equipment including espresso and frozen drink machines", description: "Every beverage format your operation needs \u2014 from espresso and nitro coffee to frozen drinks and soft-serve. Powered by Taylor, Synesso, and Follett.", href: "/business/hotels-restaurants" },
  { title: "Commercial Brewing", image: "/images/whatwedo/brewing.jpg", alt: "On-premise micro and craft brewing systems", description: "On-premise craft brewing from 1-barrel pilots to 3.5-barrel production. Systems by Ss Brewtech and Deutsche Beverage Technology.", href: "/business/hotels-restaurants" },
  { title: "Commercial Frying", image: "/images/whatwedo/frying.jpg", alt: "Commercial deep fryers by Pitco and Ultrafryer", description: "Pitco, Ultrafryer, BKI, PerfectFry \u2014 a fryer for every product and volume, from c-store to full-production.", href: "/business/hotels-restaurants" },
  { title: "Commercial Griddling", image: "/images/whatwedo/griddling.jpg", alt: "Taylor double-sided clamshell grill for automated griddling", description: "Taylor clamshell grills, Star flat-tops, and Toastmaster countertop units \u2014 from high-volume QSR automation to \u00e0 la carte precision.", href: "/business/hotels-restaurants" },
  { title: "IoT & Connected Kitchen", image: "/images/whatwedo/iot.png", alt: "Open Kitchen IoT platform for connected commercial kitchens", description: "Open Kitchen IoT \u2014 automation, food safety, and equipment connectivity modules. See how a connected kitchen saves time and labor.", href: "/about/innovation" },
  { title: "Commercial Pizza Equipment", image: "/images/whatwedo/pizza.jpg", alt: "Commercial pizza production equipment for all styles", description: "Traditional, deep dish, wood-fired, or New York style. Fifteen brands covering slicing, mixing, dividing, proofing, and baking.", href: "/business/hotels-restaurants" },
  { title: "Commercial Range & Induction", image: "/images/whatwedo/range.jpg", alt: "Commercial gas and induction cooking ranges", description: "From gas to induction \u2014 the highest quality and most energy efficient ranges. Southbend with patented TruVapor technology.", href: "/business/hotels-restaurants" },
  { title: "Solid & Dual Fuel Cooking", image: "/images/whatwedo/solid-fuel.jpg", alt: "Solid fuel charcoal and wood-fired commercial cooking equipment", description: "Charcoal, wood, and dual-fuel cooking for open-flame kitchens. Beech, Josper, and Jade \u2014 built for consistency at high volume.", href: "/business/hotels-restaurants" },
  { title: "Commercial Steam Equipment", image: "/images/whatwedo/steam.jpg", alt: "Crown and FirEx commercial steam cooking equipment", description: "Crown and FirEx for all heavy-duty needs. Compartment steamers, kettles, tilt skillets, and automated pressurized skillets.", href: "/business/hotels-restaurants" },
  { title: "Ventless Kitchen Solutions", image: "/images/whatwedo/ventless.jpg", alt: "Ventless commercial kitchen cooking solutions", description: "A full commercial kitchen without traditional ventilation. Eleven brands and over 350,000 ventless systems operating worldwide.", href: "/about/innovation" },
];

export const experienceSpaces: WhatWeDoItem[] = [
  { title: "The Elements", image: "/images/whatwedo/elements.jpg", alt: "The Elements 14-seat chef table experience", description: "A 14-seat chef\u2019s table experience featuring multi-course meals prepared using wood, fire, earth, water, and metal.", href: "/demo-centers" },
  { title: "Dining Room", image: "/images/whatwedo/dining-room.jpg", alt: "MB Equipment 70-person dining room with full bar", description: "A 70-person dining room with full SkyFlo bar, Viking wine cellars, and Bluezone air purification.", href: "/demo-centers" },
  { title: "Training Room", image: "/images/whatwedo/training-room.jpg", alt: "70-person equipment training room with live cooking stations", description: "70-person capacity with live cooking stations, AV presentation systems, and hands-on equipment for product demos and operator certification.", href: "/demo-centers" },
  { title: "Ad Hoc Kitchen", image: "/images/whatwedo/adhoc-kitchen.jpg", alt: "Configurable test kitchen for equipment specification", description: "Modular test kitchen reconfigured for each project \u2014 prototype layouts, benchmark equipment side by side, and validate specs before committing to a build.", href: "/demo-centers" },
];

export const processSteps: ProcessStep[] = [
  { title: "Consultation & Specification", description: "Bring us in when the floor plan is still on the screen. We spec equipment around your menu, volume, space, and budget \u2014 not the other way around." },
  { title: "Supply & Logistics", description: "Factory-direct orders, consolidated shipping, customs clearance, and last-mile delivery to site. One point of contact, no middlemen in the chain." },
  { title: "Installation & Commissioning", description: "Our technical team installs and commissions every piece. Gas, electric, ventilation hookups \u2014 tested before handover." },
  { title: "Staff Training", description: "Equipment without training is furniture. We train kitchen staff on operation, cleaning protocols, and troubleshooting." },
  { title: "After-Sales & Service", description: "Genuine spare parts, factory-trained technicians, preventive maintenance, and emergency service. The equipment runs." },
];

export const companyValues: ValueItem[] = [
  { title: "Precision Over Volume", description: "We would rather specify the right piece of equipment once than replace the wrong one twice. Every recommendation is based on the actual operating conditions of the project." },
  { title: "Direct Relationships", description: "No middlemen, no gray-market sourcing. Our factory relationships are direct and documented. That matters when you need a part in 48 hours, not 48 days." },
  { title: "Long-Term Thinking", description: "We service what we sell. That creates a natural incentive to sell equipment that lasts. Our reference list is our reputation." },
];

export const faqItems: FAQItem[] = [
  { question: "What countries does MB Equipment Solutions serve?", answer: "We serve over 40 countries across Southeast Europe (Serbia, Croatia, Bosnia, Montenegro, North Macedonia, Albania, Kosovo), the Middle East (UAE, Saudi Arabia, Qatar, Bahrain), and Central Asia. Our <a href='/demo-centers' class='text-gold hover:underline'>demo centers</a> in Belgrade, Istanbul, and Dubai provide hands-on specification support. For markets beyond these regions, we coordinate factory-direct shipping, customs clearance, and on-site commissioning through our logistics network." },
  { question: "What brands does MB Equipment carry?", answer: "We represent 110+ professional foodservice brands through our authorization by <a href='/about/innovation' class='text-gold hover:underline'>Middleby Corporation</a>. Key brands include Blodgett, Pitco, Taylor, Viking, Jade, Southbend, Vulcan, and many more across 15 equipment categories." },
  { question: "Do you only sell equipment or provide full-service support?", answer: "We provide the full cycle: consultation and kitchen design, equipment specification matched to your menu and volume, factory-direct supply with consolidated logistics, professional installation and gas/electric commissioning, hands-on staff training, and ongoing after-sales service with genuine spare parts. Every project gets a dedicated point of contact from first meeting through post-opening support." },
  { question: "Can I visit your demo center before making a purchase decision?", answer: "Yes. Our <a href='/demo-centers' class='text-gold hover:underline'>Belgrade demo center</a> includes The Elements chef\u2019s table, a 70-person dining room, a training room, and a configurable test kitchen. <a href='/contact' class='text-gold hover:underline'>Contact us</a> to schedule a visit and see equipment in action." },
  { question: "What is the typical timeline for a kitchen project?", answer: "Timelines depend on project scope and equipment lead times. A single-restaurant kitchen typically takes 4\u20136 weeks from final specification to commissioning. Multi-unit rollouts across several locations run 3\u20136 months, including staggered deliveries. Large hotel or institutional projects with custom cooking suites may require 6\u20139 months. Involving us during the architectural design phase prevents costly layout revisions and keeps procurement on schedule." },
  { question: "Do you provide warranty and after-sales service?", answer: "Yes. All equipment comes with manufacturer warranty. Our full-time service engineering team provides preventive maintenance, emergency repair, and genuine spare parts with priority delivery. We service what we sell \u2014 that is a core part of our model." },
  { question: "How does MB Equipment differ from a local distributor?", answer: "A local distributor sells boxes. We design, specify, deliver, install, commission, train, and service complete commercial kitchens. As a Middleby-authorized partner, we hold direct factory access with priority parts supply, factory-trained engineers certified on 110+ brands, and exclusive regional representation. When a combi oven needs a part at 2 AM, our service team responds \u2014 not a call center overseas. See our <a href='/references' class='text-gold hover:underline'>references</a> for proof." },
  { question: "Does MB Equipment offer energy-efficient commercial kitchen equipment?", answer: "Yes. Energy efficiency is a core specification criterion in every project. Our portfolio includes ENERGY STAR-certified combi ovens, high-efficiency fryers with built-in oil filtration, induction cooking suites that cut energy use by up to 50% versus gas, and ventless systems that eliminate the cost of traditional hood infrastructure. We calculate projected utility savings during the specification phase so operators can make informed decisions." },
  { question: "How fast can you deliver spare parts for commercial kitchen equipment?", answer: "As a direct Middleby-authorized partner, we maintain regional spare parts inventory for high-demand components and have priority access to factory stock for everything else. Standard parts ship within 24\u201348 hours. For critical breakdowns, our service engineering team carries common wear parts on-vehicle and can often resolve issues same-day. Preventive maintenance contracts further reduce unplanned downtime by catching failures before they happen." },
];
