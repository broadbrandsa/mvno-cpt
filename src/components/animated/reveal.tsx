"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Fade + translateY when the element scrolls into view.
 *
 * Usage:
 *   <Reveal>...</Reveal>                  // simple reveal
 *   <Reveal delay={120}>...</Reveal>      // staggered reveal
 *   <Reveal as="li">...</Reveal>          // change rendered tag
 *
 * Honours `prefers-reduced-motion: reduce`.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: As = "div",
  threshold = 0.15,
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
  threshold?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  // Lazy initializer: skip the animation outright for reduced-motion users
  // by starting in the "shown" state. Avoids any setState inside an effect.
  const [shown, setShown] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            if (once) io.disconnect();
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once, shown]);

  return (
    <As
      ref={ref as React.Ref<HTMLElement>}
      className={cn(
        "transition-all duration-700 [transition-timing-function:var(--ease-expo-out)]",
        shown
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </As>
  );
}
