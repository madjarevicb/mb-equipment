import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.google-analytics.com https://maps.googleapis.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://*.googleapis.com https://*.gstatic.com;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://vitals.vercel-insights.com;
  frame-src 'self' https://www.google.com https://maps.google.com https://www.youtube.com https://www.youtube-nocookie.com;
  media-src 'self' blob: data:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;

const securityHeaders = [
  { key: "Content-Security-Policy", value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim() },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self), browsing-topics=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000,
  },

  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      { source: "/_next/static/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/hero-web.mp4", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/logos/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/images/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/hero-poster.jpg", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/", headers: [{ key: "Link", value: "</hero-poster.jpg>; rel=preload; as=image; fetchpriority=high" }] },
    ];
  },

  async redirects() {
    return [
      { source: "/", has: [{ type: "query", key: "page", value: "company-overview" }], destination: "/about/company-overview", permanent: true },
      { source: "/", has: [{ type: "query", key: "page", value: "innovation" }], destination: "/about/innovation", permanent: true },
      { source: "/", has: [{ type: "query", key: "page", value: "hotels-restaurants" }], destination: "/business/hotels-restaurants", permanent: true },
      { source: "/", has: [{ type: "query", key: "page", value: "residential" }], destination: "/business/residential", permanent: true },
      { source: "/", has: [{ type: "query", key: "page", value: "food-processing" }], destination: "/business/food-processing", permanent: true },
      { source: "/", has: [{ type: "query", key: "page", value: "references" }], destination: "/references", permanent: true },
      { source: "/", has: [{ type: "query", key: "page", value: "demo-centers" }], destination: "/demo-centers", permanent: true },
      { source: "/", has: [{ type: "query", key: "page", value: "contact" }], destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
