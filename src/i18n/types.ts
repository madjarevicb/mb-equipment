/* ------------------------------------------------------------------ */
/*  Dictionary type — single source of truth for both en.ts and sr.ts  */
/* ------------------------------------------------------------------ */

export interface Dictionary {
  /* ── Navigation ── */
  nav: {
    aboutUs: string;
    companyOverview: string;
    innovation: string;
    businessBrands: string;
    ourBrands: string;
    residential: string;
    foodProcessing: string;
    equipment: string;
    cooking: string;
    cookingLine: string;
    josper: string;
    thermalProcessing: string;
    charcoalGrills: string;
    ranges: string;
    heavyDutyRanges: string;
    fryers: string;
    boilingPans: string;
    tiltingPans: string;
    pastaCookers: string;
    bainMarie: string;
    combiOvens: string;
    refrigeration: string;
    displayCases: string;
    foodRefrigeration: string;
    coldRooms: string;
    neutralInox: string;
    neutralAndInox: string;
    customFabrication: string;
    warewashing: string;
    wasteManagement: string;
    wasteStationIhc: string;
    references: string;
    demoCenters: string;
    contact: string;
    getAQuote: string;
    allCategory: string;
  };

  /* ── Common / shared ── */
  common: {
    learnMore: string;
    startProject: string;
    requestConsultation: string;
    seeOurWork: string;
    viewSolutions: string;
    explore: string;
    bookDemo: string;
    contactUs: string;
    seeAllReferences: string;
    startYourProject: string;
    sendFloorPlan: string;
    downloadPdf: string;
    authorizedMiddleby: string;
    authorizedPartnerOf: string;
    openMenu: string;
    closeMenu: string;
    projectsDelivered: string;
    brandsRepresented: string;
    regionLabel: string;
    responseTime: string;
  };

  /* ── Footer ── */
  footer: {
    solutions: string;
    equipment: string;
    company: string;
    getInTouch: string;
    tagline: string;
    authorizedPartner: string;
    privacyPolicy: string;
    builtBy: string;
  };

  /* ── Breadcrumb ── */
  breadcrumb: {
    home: string;
  };

  /* ── Homepage ── */
  home: {
    hero: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
      partnerOf: string;
    };
    partners: {
      eyebrow: string;
    };
    sectors: {
      heading1: string;
      heading2: string;
      body: string;
      commercial: string;
      hotelsRestaurants: string;
      commercialDesc: string;
      luxuryHome: string;
      residentialLabel: string;
      residentialDesc: string;
      industrial: string;
      foodProcessingLabel: string;
      foodProcessingDesc: string;
    };
    stats: {
      middlebyAuthorized: string;
      equipmentBrands: string;
      projectsDelivered: string;
    };
    about: {
      heading1: string;
      heading2: string;
      body1: string;
      pullQuote: string;
      body2: string;
      cta: string;
    };
    cta: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    faq: {
      heading1: string;
      heading2: string;
      body: string;
    };
  };

  /* ── Company Overview ── */
  companyOverview: {
    hero: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      srOnly: string;
      body: string;
      subtitle: string;
    };
    partnership: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
    };
    equipment: {
      heading1: string;
      heading2: string;
      body: string;
      viewAll: string;
      showLess: string;
      exploreDemos: string;
      experienceSpaces: string;
    };
    process: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
    };
    midCta: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
    };
    values: {
      heading1: string;
      heading2: string;
    };
    references: {
      heading1: string;
      heading2: string;
      body: string;
    };
    faq: {
      heading1: string;
      heading2: string;
      body: string;
    };
    cta: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
    };
  };

  /* ── Innovation ── */
  innovation: {
    hero: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
    };
    featured: {
      eyebrow: string;
      heading1: string;
      body: string;
    };
    themes: {
      eyebrow: string;
      heading1: string;
      body: string;
    };
    cta: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
      note: string;
    };
  };

  /* ── Hotels & Restaurants (Our Brands) ── */
  hotelsRestaurants: {
    hero: {
      eyebrow: string;
      body: string;
    };
    segments: {
      eyebrow: string;
    };
    brandsGrid: {
      heading1: string;
      heading2: string;
      body: string;
    };
    process: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
    };
    cta: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
    };
  };

  /* ── Residential ── */
  residential: {
    hero: {
      srOnly: string;
    };
    portfolio: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
      authNote: string;
    };
    showcase: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
      brandNote: string;
    };
    brochures: {
      eyebrow: string;
      heading1: string;
      heading2: string;
    };
    cta: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
      liveDemos: string;
      liveDemosDesc: string;
      designConsultation: string;
      designConsultationDesc: string;
      belgradeShowroom: string;
      belgradeShowroomDesc: string;
    };
  };

  /* ── Food Processing ── */
  foodProcessing: {
    hero: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
    };
    intro: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
      cta: string;
    };
    equipment: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
    };
    applications: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      bakery: string;
      protein: string;
    };
    brands: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body1: string;
      body2: string;
      rawMaterial: string;
      rawMaterialDesc: string;
      production: string;
      productionDesc: string;
      packaging: string;
      packagingDesc: string;
    };
    innovationCenters: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
      ctaPrimary: string;
      ctaSecondary: string;
      stat: string;
      statLabel: string;
      statSublabel: string;
    };
    cta: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
    };
  };

  /* ── References ── */
  references: {
    hero: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
    };
    whoWeAre: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
      founded: string;
      headquarters: string;
      employees: string;
      globalPresence: string;
    };
    marketLeadership: {
      heading: string;
      body: string;
    };
    globalChains: {
      eyebrow: string;
      heading1: string;
      heading2: string;
    };
    localProjects: {
      eyebrow: string;
      heading1: string;
      heading2: string;
    };
    designEngineering: {
      eyebrow: string;
      heading1: string;
      heading2: string;
    };
    showcase: {
      body: string;
    };
    brandsPartners: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
    };
    cta: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
    };
  };

  /* ── Demo Centers ── */
  demoCenters: {
    hero: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
    };
    intro: {
      body: string;
    };
    cta: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
    };
  };

  /* ── Contact ── */
  contact: {
    hero: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      body: string;
    };
    form: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      nameLabel: string;
      emailLabel: string;
      phoneLabel: string;
      companyLabel: string;
      interestLabel: string;
      messageLabel: string;
      interestOptions: { value: string; label: string }[];
      requiredNote: string;
      submitIdle: string;
      submitSending: string;
      successEyebrow: string;
      successHeading1: string;
      successHeading2: string;
      successBody: string;
      successReset: string;
      errorFallback: string;
    };
    directContact: {
      eyebrow: string;
      heading1: string;
      heading2: string;
      officeLabel: string;
      contactLabel: string;
      hoursLabel: string;
      hours: string;
    };
  };

  /* ── Equipment pages ── */
  equipmentIndex: {
    heading1: string;
    heading2: string;
    body: string;
  };

  thermal: {
    hero: { heading1: string; heading2: string; body: string };
    overview: { eyebrow: string; heading1: string; heading2: string; body: string };
    subcategories: { eyebrow: string; heading1: string; heading2: string; body: string };
    brands: { eyebrow: string; heading1: string; heading2: string; body: string };
    cta: { eyebrow: string; heading1: string; heading2: string; body: string };
  };

  refrigerationPage: {
    hero: { heading1: string; heading2: string; body: string };
    overview: { eyebrow: string; heading1: string; heading2: string; body: string };
    subcategories: { eyebrow: string; heading1: string; heading2: string; body: string };
    brands: { eyebrow: string; heading1: string; heading2: string; body: string };
    cta: { eyebrow: string; heading1: string; heading2: string; body: string };
  };

  neutralInoxPage: {
    hero: { heading1: string; heading2: string; body: string };
    overview: { eyebrow: string; heading1: string; heading2: string; body: string };
    capabilities: { eyebrow: string; heading1: string; heading2: string; body: string };
    fabrication: { eyebrow: string; heading1: string; heading2: string; body: string };
    additional: { eyebrow: string; heading1: string; heading2: string; body: string };
    cta: { eyebrow: string; heading1: string; heading2: string; body: string };
  };

  /* ── Privacy ── */
  privacy: {
    eyebrow: string;
    heading1: string;
    heading2: string;
    subtitle: string;
    sections: { title: string; body: string }[];
    lastUpdated: string;
  };

  /* ── Page metadata ── */
  metadata: {
    home: { title: string; description: string };
    companyOverview: { title: string; description: string };
    innovation: { title: string; description: string };
    hotelsRestaurants: { title: string; description: string };
    residential: { title: string; description: string };
    foodProcessing: { title: string; description: string };
    references: { title: string; description: string };
    demoCenters: { title: string; description: string };
    contact: { title: string; description: string };
    privacy: { title: string; description: string };
    equipmentGuide: { title: string; description: string };
    thermalProcessing: { title: string; description: string };
    refrigeration: { title: string; description: string };
    neutralInox: { title: string; description: string };
    charcoalGrills: { title: string; description: string };
    ranges: { title: string; description: string };
    fryers: { title: string; description: string };
    pastaCookers: { title: string; description: string };
    bainMarie: { title: string; description: string };
    combiOvens: { title: string; description: string };
    displayCases: { title: string; description: string };
    foodRefrigeration: { title: string; description: string };
    coldRooms: { title: string; description: string };
    warewashing: { title: string; description: string };
    wasteManagement: { title: string; description: string };
  };

  /* ── Data translations (structured arrays) ── */
  data: {
    partnershipBlocks: { title: string; description: string }[];
    processSteps: { title: string; description: string }[];
    companyValues: { title: string; description: string }[];
    faqItems: { question: string; answer: string }[];
    segments: { title: string; text: string }[];
    brandProcessSteps: { step: string; desc: string }[];
    thermalSubcategories: { name: string; description: string }[];
    refrigerationSubcategories: { name: string; description: string }[];
    neutralCapabilities: { name: string; description: string }[];
    fabricationSteps: { title: string; description: string }[];
    innovationFeatured: { title: string; text: string }[];
    innovationThemes: {
      title: string;
      subtitle: string;
      text: string;
      statLabel: string;
      statSource: string;
    }[];
    demoCenters: { name: string; description: string; highlights: string[] }[];
    equipmentCategories: { title: string; description: string }[];
    experienceSpaces: { title: string; description: string }[];
    projectReferences: { label: string; name: string; description: string }[];
  };
}
