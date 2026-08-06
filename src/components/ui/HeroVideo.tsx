"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";

interface HeroVideoProps {
  /** Poster image shown immediately (and the only media loaded on mobile). */
  poster: string;
  /** Video source, loaded and played only on desktop-width viewports. */
  src: string;
  className?: string;
}

function subscribeDesktop(callback: () => void) {
  const mq = window.matchMedia("(min-width: 768px)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

/**
 * Renders the poster as a priority-optimized LCP image on every viewport, and
 * only mounts the autoplaying <video> on desktop widths. On mobile the heavy
 * MP4 is never downloaded — the poster is the LCP element, which keeps hero
 * pages fast on the lowest-powered devices. Read via useSyncExternalStore so
 * the server snapshot is `false` (poster-only) with no hydration mismatch.
 */
export default function HeroVideo({ poster, src, className = "" }: HeroVideoProps) {
  const isDesktop = useSyncExternalStore(
    subscribeDesktop,
    () => window.matchMedia("(min-width: 768px)").matches,
    () => false,
  );

  return (
    <>
      <Image
        src={poster}
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className={`object-cover ${className}`}
      />
      {isDesktop && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover ${className}`}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </>
  );
}
