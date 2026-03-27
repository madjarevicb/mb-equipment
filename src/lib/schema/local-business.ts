export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.mbequipmentsolutions.com/#local-business",
    name: "MB Equipment Solutions",
    url: "https://www.mbequipmentsolutions.com",
    email: "info@mbequipmentsolutions.com",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vladimira Popovića 6",
      addressLocality: "Beograd",
      postalCode: "11070",
      addressCountry: "RS",
    },
    geo: { "@type": "GeoCoordinates", latitude: 44.8125, longitude: 20.4188 },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    }],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Professional Kitchen Equipment",
      itemListElement: [
        { "@type": "OfferCatalog", name: "Commercial Kitchen Equipment", description: "Professional cooking, refrigeration, and preparation equipment." },
        { "@type": "OfferCatalog", name: "Residential Kitchen Equipment", description: "Premium home appliances from Viking, La Cornue, AGA." },
        { "@type": "OfferCatalog", name: "Industrial Food Processing", description: "Large-scale processing machinery and production lines." },
      ],
    },
  };
}
