"use client";

import { useEffect, useRef, useState } from "react";

const observers = new Map<string, IntersectionObserver>();
const callbacks = new Map<Element, (isIntersecting: boolean) => void>();
const elementThresholds = new Map<Element, string>();

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

function cleanupObserver(threshold: number) {
  const key = `${threshold}`;
  const hasActive = Array.from(elementThresholds.values()).some((k) => k === key);
  if (!hasActive) {
    const observer = observers.get(key);
    if (observer) {
      observer.disconnect();
      observers.delete(key);
    }
  }
}

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const key = `${threshold}`;
    const observer = getSharedObserver(threshold);

    callbacks.set(el, (isIntersecting) => {
      if (isIntersecting) {
        setInView(true);
        observer.unobserve(el);
        callbacks.delete(el);
        elementThresholds.delete(el);
        cleanupObserver(threshold);
      }
    });
    elementThresholds.set(el, key);

    observer.observe(el);

    return () => {
      observer.unobserve(el);
      callbacks.delete(el);
      elementThresholds.delete(el);
      cleanupObserver(threshold);
    };
  }, [threshold]);

  return { ref, inView };
}
