export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.mbequipmentsolutions.com/#organization",
    name: "MB Equipment Solutions",
    url: "https://www.mbequipmentsolutions.com",
    email: "info@mbequipmentsolutions.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vladimira Popovića 6",
      addressLocality: "Beograd",
      postalCode: "11070",
      addressCountry: "RS",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Middleby Corporation",
      url: "https://www.middleby.com",
    },
    contactPoint: [
      { "@type": "ContactPoint", contactType: "sales", availableLanguage: ["English", "Serbian"], email: "info@mbequipmentsolutions.com" },
    ],
    knowsAbout: ["Commercial Kitchen Equipment", "Industrial Food Processing", "Hospitality Solutions", "Restaurant Equipment"],
  };
}
