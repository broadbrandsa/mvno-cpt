"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Subtle scroll-driven parallax wrapper around a background image.
 *
 * The outer container clips to the section bounds. An inner wrapper -
 * deliberately taller than the clip area - holds the image and is the
 * element we translate on scroll. The vertical "buffer" prevents image
 * edges from peeking into the section as the inner wrapper moves.
 *
 * Honours `prefers-reduced-motion: reduce`.
 */
export function ParallaxBackground({
  src,
  alt,
  speed = 0.25,
  className,
  priority = true,
}: {
  src: string;
  alt: string;
  /** 0 = no movement, 1 = locks to scroll. Keep small for "slight" parallax. */
  speed?: number;
  className?: string;
  priority?: boolean;
}) {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    let raf = 0;
    let latestScroll = window.scrollY;

    const apply = () => {
      raf = 0;
      const sectionTop =
        el.parentElement?.parentElement?.getBoundingClientRect().top ?? 0;
      const sectionTopPage = sectionTop + window.scrollY;
      const distance = latestScroll - sectionTopPage;
      el.style.transform = `translate3d(0, ${distance * speed}px, 0)`;
    };

    const onScroll = () => {
      latestScroll = window.scrollY;
      if (raf) return;
      raf = window.requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", apply);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", apply);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className,
      )}
    >
      <div
        ref={innerRef}
        className="absolute -inset-y-[20%] inset-x-0 will-change-transform"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          fetchPriority={priority ? "high" : "auto"}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="size-full object-cover"
        />
      </div>
    </div>
  );
}
