import { Section } from "./section";
import { ltvComparison } from "@/content/deck";
import { CountUp } from "@/components/animated/count-up";
import { Reveal } from "@/components/animated/reveal";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp, Sparkles } from "lucide-react";

const accentMap = {
  rose: {
    bar: "from-rose-600 via-rose-500 to-rose-400",
    text: "text-rose-400",
    glow: "shadow-[0_0_60px_-12px_rgba(244,63,94,0.45)]",
  },
  azure: {
    bar: "from-azure-600 via-azure-500 to-azure-400",
    text: "text-azure-400",
    glow: "shadow-[0_0_60px_-12px_rgba(59,130,246,0.5)]",
  },
  mint: {
    bar: "from-mint-600 via-mint-500 to-mint-300",
    text: "text-mint-400",
    glow: "shadow-[0_0_80px_-8px_rgba(16,185,129,0.55)]",
  },
} as const;

// Bar widths normalized against the max LTV (identity-led: 428).
const maxLtv = 428;

const numericLtv = (s: string) => Number(s.replace(/[^0-9.]/g, ""));
const numericChurn = (s: string) => Number(s.replace(/[^0-9.]/g, ""));

export function LtvMath() {
  return (
    <Section
      eyebrow="Session 02 · The math"
      eyebrowTone="amber"
      title="Why churn - not wholesale rate -"
      highlight="decides profitability"
      description="Drop monthly churn from 5% to 3% and LTV rises 67%. Drop wholesale rate by 10% and LTV moves about 10%. Retention compounds. Discounting does not."
    >
      <div className="space-y-5">
        {ltvComparison.map((row, i) => {
          const accent = accentMap[row.tone];
          const value = numericLtv(row.ltv);
          const widthPct = (value / maxLtv) * 100;
          const isWinner = i === ltvComparison.length - 1;
          const churnValue = numericChurn(row.churn);

          return (
            <Reveal key={row.label} delay={i * 100}>
              <article
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6",
                  "lift hover:border-white/20",
                  isWinner && "gradient-border",
                  isWinner && accent.glow,
                )}
                style={
                  isWinner
                    ? ({
                        "--gb-color": "rgba(16, 185, 129, 0.55)",
                        borderRadius: "1rem",
                      } as React.CSSProperties)
                    : undefined
                }
              >
                {isWinner && (
                  <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-mint-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-mint-300 ring-1 ring-inset ring-mint-500/30">
                    <Sparkles className="size-3" />
                    Winner
                  </span>
                )}

                <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto] sm:gap-8">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-faint">
                        {row.label}
                      </p>
                      <p className="text-xs text-fg-muted">
                        {row.arpu}
                      </p>
                    </div>

                    {/* Animated bar - width relative to max LTV in the comparison. */}
                    <div className="relative h-4 overflow-hidden rounded-full bg-white/[0.04] ring-1 ring-inset ring-white/5">
                      <div
                        className={cn(
                          "h-full origin-left rounded-full bg-gradient-to-r",
                          accent.bar,
                          "transition-[width] duration-1000 [transition-timing-function:var(--ease-expo-out)] motion-reduce:transition-none",
                          "group-[.in-view]:w-[var(--w)]",
                        )}
                        style={{ width: `${widthPct}%` }}
                      />
                      {/* Subtle inner highlight */}
                      <div
                        className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,transparent_45%)]"
                        aria-hidden
                      />
                    </div>
                  </div>

                  <div className="flex items-end gap-6 sm:items-center sm:justify-end">
                    <div className="text-right">
                      <p className={cn("text-5xl font-bold leading-none tracking-tight sm:text-6xl", accent.text)}>
                        <CountUp
                          end={value}
                          duration={1600}
                          prefix="US$"
                        />
                      </p>
                      <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-fg-faint">
                        24-month LTV
                      </p>
                    </div>
                    <div className="hidden flex-col items-start border-l border-white/10 pl-6 sm:flex">
                      <span className="flex items-center gap-1 text-[11px] uppercase tracking-[0.16em] text-fg-faint">
                        {row.tone === "rose" ? (
                          <TrendingDown className="size-3.5" />
                        ) : (
                          <TrendingUp className="size-3.5" />
                        )}
                        Churn / mo
                      </span>
                      <span className={cn("mt-1 text-xl font-semibold tabular-nums", accent.text)}>
                        <CountUp end={churnValue} decimals={1} suffix="%" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={300}>
        <div className="mt-10 flex items-center gap-3 rounded-2xl border border-mint-500/20 bg-mint-500/[0.04] px-5 py-4 text-sm">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-mint-500/15 text-mint-400">
            <Sparkles className="size-4" />
          </div>
          <p className="text-fg-muted">
            <span className="font-semibold text-mint-300">5.5×</span> the LTV of
            the price-led operator - for the cost of building a brand customers
            belong to. The full math, the CVP pyramid, and the 24-month
            commercial model - walked through live in Cape Town.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
