"use client";

import { useEffect, useRef, useState } from "react";

const observers = new Map<string, IntersectionObserver>();
const callbacks = new Map<Element, (isIntersecting: boolean) => void>();

function getSharedObserver(threshold: number): IntersectionObserver {
  const key = `${threshold}`;
  let observer = observers.get(key);
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cb = callbacks.get(entry.target);
          if (cb) cb(entry.isIntersecting);
        });
      },
      { threshold }
    );
    observers.set(key, observer);
  }
  return observer;
}

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getSharedObserver(threshold);

    callbacks.set(el, (isIntersecting) => {
      if (isIntersecting) {
        setInView(true);
        observer.unobserve(el);
        callbacks.delete(el);
      }
    });

    observer.observe(el);

    return () => {
      observer.unobserve(el);
      callbacks.delete(el);
    };
  }, [threshold]);

  return { ref, inView };
}
