export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.mbequipmentsolutions.com/#website",
    name: "MB Equipment Solutions",
    url: "https://www.mbequipmentsolutions.com",
    publisher: { "@id": "https://www.mbequipmentsolutions.com/#organization" },
    inLanguage: ["en", "sr"],
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: "https://www.mbequipmentsolutions.com/search?q={search_term_string}" },
      "query-input": "required name=search_term_string",
    },
  };
}
