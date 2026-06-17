"use client";

import { useEffect, useRef } from "react";

/**
 * Thin gradient progress bar at the top of the viewport that fills as
 * the user scrolls through the page. Fixed positioning, z-50 so it sits
 * above the sticky header.
 */
export function ReadingProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = ref.current;
    if (!bar) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      bar.style.transform = `scaleX(${Math.min(pct, 100) / 100})`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px]"
    >
      <div
        ref={ref}
        className="h-full origin-left bg-gradient-to-r from-mint-400 via-azure-500 to-mint-400"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
