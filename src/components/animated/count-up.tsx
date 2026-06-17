"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Animated number ticker that runs once when scrolled into view.
 *
 * Usage:
 *   <CountUp end={300} suffix="M+" />
 *   <CountUp end={5.5} decimals={1} suffix="×" />
 *   <CountUp end={2} prefix="US$" suffix="bn+" />
 *
 * Honours `prefers-reduced-motion: reduce` - falls back to the final value.
 */
export function CountUp({
  end,
  duration = 1400,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  formatter,
}: {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  formatter?: (value: number) => string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  // Reduced-motion users get the final value immediately via the lazy
  // initializer, so we never need to setState in an effect for that case.
  const [reducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [value, setValue] = useState(() => (reducedMotion ? end : 0));
  const [started, setStarted] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el || started) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setStarted(true);
            io.disconnect();
            const startTs = performance.now();
            const ease = (t: number) =>
              t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
            const tick = (now: number) => {
              const t = Math.min((now - startTs) / duration, 1);
              setValue(end * ease(t));
              if (t < 1) requestAnimationFrame(tick);
              else setValue(end);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration, started, reducedMotion]);

  const display = formatter
    ? formatter(value)
    : `${prefix}${value.toFixed(decimals)}${suffix}`;

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {display}
    </span>
  );
}
