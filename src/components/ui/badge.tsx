import { cn } from "@/lib/utils";

export type BadgeTone = "default" | "mint" | "azure" | "rose" | "amber";

const toneStyles: Record<BadgeTone, string> = {
  default:
    "bg-white/[0.06] text-fg-muted ring-1 ring-inset ring-white/10",
  mint: "bg-mint-500/[0.12] text-mint-300 ring-1 ring-inset ring-mint-500/30",
  azure:
    "bg-azure-500/[0.12] text-azure-400 ring-1 ring-inset ring-azure-500/30",
  rose: "bg-rose-500/[0.12] text-rose-400 ring-1 ring-inset ring-rose-500/30",
  amber:
    "bg-amber-400/[0.12] text-amber-400 ring-1 ring-inset ring-amber-400/30",
};

export function Badge({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em]",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
