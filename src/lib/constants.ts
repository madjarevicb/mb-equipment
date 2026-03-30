export const COMPANY = {
  name: "MB Equipment Solutions",
  phone: "+381111234567",
  phoneDisplay: "+381 11 123 4567",
  email: "info@mbequipmentsolutions.com",
  url: "https://www.mbequipmentsolutions.com",
  address: {
    street: "Vladimira Popovića 6",
    city: "Beograd",
    zip: "11070",
    country: "RS",
  },
  geo: { lat: 44.8176, lng: 20.4633 },
} as const;

/**
 * Lightweight HTML sanitizer — allows only <a> tags with href/class attributes.
 * All other tags are stripped. Only relative hrefs (starting with /) are allowed.
 */
export function sanitizeHTML(html: string): string {
  let cleaned = html.replace(/<\/?(?!a[\s/>])[a-z][^>]*>/gi, "");
  cleaned = cleaned.replace(/<a\s+([^>]*)>/gi, (_match, attrs: string) => {
    const href = attrs.match(/href=(['"])(.*?)\1/)?.[0] ?? "";
    const cls = attrs.match(/class=(['"])(.*?)\1/)?.[0] ?? "";
    const safe = [href, cls].filter(Boolean).join(" ");
    return safe ? `<a ${safe}>` : "<a>";
  });
  cleaned = cleaned.replace(/href=['"](?!\/)[^'"]*['"]/gi, 'href="#"');
  return cleaned;
}
