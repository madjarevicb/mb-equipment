"use client";

import { useState, useEffect } from "react";
import { useInView } from "@/hooks/useInView";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale-in";
}

const transforms: Record<string, string> = {
  "fade-up": "translateY(24px)",
  "fade-left": "translateX(-24px)",
  "fade-right": "translateX(24px)",
  "scale-in": "scale(0.96)",
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
}: AnimatedSectionProps) {
  const { ref, inView } = useInView(0.15);
  const [state, setState] = useState<"idle" | "hidden" | "visible">("idle");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setState("hidden");
  }, []);

  useEffect(() => {
    if (inView && state === "hidden") {
      setState("visible");
    }
  }, [inView, state]);

  const style: React.CSSProperties =
    state === "hidden"
      ? {
          opacity: 0,
          transform: transforms[animation],
          transition: "none",
        }
      : state === "visible"
      ? {
          opacity: 1,
          transform: "none",
          transition: `opacity 0.6s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 0.6s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
        }
      : {}; // idle: no inline styles, content visible by default (SSR)

  return (
    <div ref={ref} className={className} style={style} suppressHydrationWarning>
      {children}
    </div>
  );
}
