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
 * Uses IntersectionObserver + CSS transition. Respects prefers-reduced-motion.
 */
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
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
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
