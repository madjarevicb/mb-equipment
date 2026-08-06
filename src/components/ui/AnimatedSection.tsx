"use client";

import { useSyncExternalStore } from "react";
import { useInView } from "@/hooks/useInView";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale-in";
  stagger?: boolean;
}

const transforms: Record<NonNullable<AnimatedSectionProps["animation"]>, string> = {
  "fade-up": "translateY(24px)",
  "fade-left": "translateX(-24px)",
  "fade-right": "translateX(24px)",
  "scale-in": "scale(0.96)",
};

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

/**
 * Animations run only on the client and only when the user hasn't requested
 * reduced motion. Read via useSyncExternalStore so the server snapshot is
 * `false` — content renders visible without JS (progressive enhancement) and
 * there is no hydration mismatch or setState-in-effect.
 */
function useAnimationsEnabled() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
  stagger = false,
}: AnimatedSectionProps) {
  const { ref, inView } = useInView(0.15);
  const animationsEnabled = useAnimationsEnabled();
  const state: "idle" | "hidden" | "visible" = !animationsEnabled
    ? "idle"
    : inView
    ? "visible"
    : "hidden";

  if (stagger) {
    const visibleClass = state === "visible" ? "stagger-children is-visible" : "stagger-children";
    return (
      <div ref={ref} className={`${visibleClass} ${className}`} suppressHydrationWarning>
        {children}
      </div>
    );
  }

  const style: React.CSSProperties =
    state === "hidden"
      ? {
          opacity: 0,
          transform: transforms[animation],
          transition: "none",
          willChange: "transform, opacity",
        }
      : state === "visible"
      ? {
          opacity: 1,
          transform: "none",
          transition: `opacity 0.6s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 0.6s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
          willChange: "auto",
        }
      : {}; // idle: no inline styles, content visible by default (SSR)

  return (
    <div ref={ref} className={className} style={style} suppressHydrationWarning>
      {children}
    </div>
  );
}
