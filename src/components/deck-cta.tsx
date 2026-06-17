"use client";

import { ArrowRight, CheckCircle2, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  scrollToDeckForm,
  triggerDownload,
  useDeckAccess,
} from "@/lib/deck-access";

type Variant = "primary" | "secondary" | "link";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-mint-500 text-bg shadow-[0_10px_30px_-8px_rgba(16,185,129,0.6)] hover:bg-mint-400",
  secondary:
    "border border-white/15 bg-white/[0.04] text-fg hover:bg-white/[0.08]",
  link: "text-mint-400 hover:text-mint-300 underline-offset-4 hover:underline",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-4 text-sm rounded-full",
  md: "h-11 px-5 text-sm rounded-full",
  lg: "h-12 px-6 text-sm rounded-full",
};

/**
 * Smart CTA used everywhere "Download the deck" appears on the page.
 *
 * Behaviour:
 *  - Pre-submit: button that smooth-scrolls to the #get-the-deck form
 *  - Post-submit: pill that re-triggers the PDF download
 */
export function DeckCTA({
  variant = "primary",
  size = "lg",
  className,
  primaryLabel = "Download the deck",
  grantedLabel = "Download again",
  showIcon = true,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
  primaryLabel?: string;
  grantedLabel?: string;
  showIcon?: boolean;
}) {
  const status = useDeckAccess();
  const granted = status === "granted";

  if (variant === "link") {
    return (
      <button
        type="button"
        onClick={granted ? triggerDownload : scrollToDeckForm}
        className={cn(
          "inline-flex items-center gap-2 text-sm font-semibold text-mint-400 hover:text-mint-300",
          className,
        )}
      >
        {granted ? grantedLabel : primaryLabel}
        {showIcon &&
          (granted ? (
            <Download className="size-4" />
          ) : (
            <ArrowRight className="size-4" />
          ))}
      </button>
    );
  }

  if (granted) {
    return (
      <button
        type="button"
        onClick={triggerDownload}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold transition-colors",
          "border border-mint-500/40 bg-mint-500/[0.12] text-mint-300 hover:bg-mint-500/[0.18]",
          sizeStyles[size],
          className,
        )}
      >
        {showIcon && <CheckCircle2 className="size-4" />}
        {grantedLabel}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={scrollToDeckForm}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
    >
      {showIcon && <Download className="size-4" />}
      {primaryLabel}
    </button>
  );
}
