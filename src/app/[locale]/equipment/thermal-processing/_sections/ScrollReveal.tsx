"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  /** delay in ms */
  delay?: number;
  /** stagger children by line (each direct child) */
  staggerLines?: boolean;
  style?: React.CSSProperties;
}

/**
 * Refined scroll-triggered reveal. Line-by-line when requested.
 * Uses a single shared IntersectionObserver (module-level singleton)
 * to avoid the per-instance observer cost when many ScrollReveal
 * instances live on the same page. Respects prefers-reduced-motion.
 */

type RevealCallback = () => void;
const subscribers = new Map<Element, RevealCallback>();
let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const cb = subscribers.get(entry.target);
          if (cb) {
            cb();
            sharedObserver?.unobserve(entry.target);
            subscribers.delete(entry.target);
          }
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
  );
  return sharedObserver;
}

export default function ScrollReveal({
  children,
  as = "div",
  className = "",
  delay = 0,
  staggerLines = false,
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mql.matches);
  }, []);

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = getObserver();
    subscribers.set(el, () => setVisible(true));
    obs.observe(el);
    return () => {
      subscribers.delete(el);
      obs.unobserve(el);
    };
  }, [reduced]);

  const Tag = as as React.ElementType;

  if (staggerLines) {
    const arr = React.Children.toArray(children);
    return (
      <Tag
        ref={ref as React.Ref<HTMLElement>}
        className={className}
        style={style}
      >
        {arr.map((child, i) => (
          <span
            key={i}
            style={{
              display: "block",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
              transition: reduced
                ? "none"
                : `opacity 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) ${delay + i * 90}ms, transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) ${delay + i * 90}ms`,
              willChange: "transform, opacity",
            }}
          >
            {child}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: reduced
          ? "none"
          : `opacity 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) ${delay}ms, transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) ${delay}ms`,
        willChange: "transform, opacity",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
