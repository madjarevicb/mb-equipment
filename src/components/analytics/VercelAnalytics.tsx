"use client";

import { useEffect, useState } from "react";

export default function VercelAnalytics() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Defer loading until after initial paint + idle time
    // Safari/iOS doesn't support requestIdleCallback — fallback to setTimeout
    if (typeof requestIdleCallback === "function") {
      const id = requestIdleCallback(() => setMounted(true), { timeout: 3000 });
      return () => cancelIdleCallback(id);
    } else {
      const id = setTimeout(() => setMounted(true), 2000);
      return () => clearTimeout(id);
    }
  }, []);

  if (!mounted) return null;

  // Dynamic imports — loaded only after page is idle
  return <DeferredScripts />;
}

function DeferredScripts() {
  const [Analytics, setAnalytics] = useState<React.ComponentType | null>(null);
  const [SpeedInsights, setSpeedInsights] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import("@vercel/analytics/react").then((mod) => setAnalytics(() => mod.Analytics));
    import("@vercel/speed-insights/next").then((mod) => setSpeedInsights(() => mod.SpeedInsights));
  }, []);

  return (
    <>
      {Analytics && <Analytics />}
      {SpeedInsights && <SpeedInsights />}
    </>
  );
}
