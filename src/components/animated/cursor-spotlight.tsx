"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Soft radial spotlight that follows the cursor inside its container.
 * Updates a CSS custom property on each pointer move via rAF, so the
 * paint stays cheap.
 *
 * Drop into a `position:relative` parent. Pointer events pass through.
 */
export function CursorSpotlight({
  className,
  color = "rgba(52, 231, 168, 0.18)",
  size = 600,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let raf = 0;
    let nextX = parent.clientWidth / 2;
    let nextY = parent.clientHeight / 3;

    const apply = () => {
      raf = 0;
      el.style.setProperty("--x", `${nextX}px`);
      el.style.setProperty("--y", `${nextY}px`);
    };
    apply();

    const onMove = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      nextX = e.clientX - rect.left;
      nextY = e.clientY - rect.top;
      if (raf) return;
      raf = requestAnimationFrame(apply);
    };
    parent.addEventListener("pointermove", onMove);
    return () => {
      parent.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-[2] opacity-70 transition-opacity duration-500",
        className,
      )}
      style={{
        background: `radial-gradient(${size}px circle at var(--x, 50%) var(--y, 30%), ${color}, transparent 60%)`,
      }}
    />
  );
}
