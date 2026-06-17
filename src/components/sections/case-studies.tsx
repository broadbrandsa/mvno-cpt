import { Section } from "./section";
import { Badge } from "@/components/ui/badge";
import { CountUp } from "@/components/animated/count-up";
import { Reveal } from "@/components/animated/reveal";
import { cn } from "@/lib/utils";
import { Tv, Bot } from "lucide-react";

const compactCases = [
  {
    name: "DStv Internet",
    tagline: "Integrated CX excellence at scale",
    Icon: Tv,
    // Source: deck slide 22 - "250,000 subscribers" / "250k Active subscribers"
    headlineEnd: 250,
    headlineSuffix: "k",
    headlineLabel: "Active subscribers",
    metrics: [
      // Source: deck slide 22 - 85.8% CSAT score (target: 80%)
      { value: "85.8%", label: "CSAT", end: 85.8, suffix: "%", decimals: 1 },
      // Source: deck slide 22 - 16s First response time (FRT)
      { value: "16s", label: "First response", end: 16, suffix: "s" },
      // Source: deck slide 22 - 99.5% ticket resolution within 24 hours
      { value: "99.5%", label: "24h resolution", end: 99.5, suffix: "%", decimals: 1 },
    ],
    tone: "azure" as const,
  },
  {
    name: "Boxer Telecom",
    tagline: "Self-service at scale, no fixed headcount ceiling",
    Icon: Bot,
    headlineEnd: 45,
    headlineSuffix: "%",
    headlineLabel: "BOT deflection",
    metrics: [
      { value: "92.31%", label: "CSAT", end: 92.31, suffix: "%", decimals: 2 },
      { value: "4.77/5", label: "Star rating", end: 4.77, suffix: "/5", decimals: 2 },
      { value: "98%", label: "24h resolution", end: 98, suffix: "%" },
    ],
    tone: "mint" as const,
  },
] as const;

const toneToText = {
  azure: "text-azure-400",
  mint: "text-mint-400",
} as const;

export function CaseStudies() {
  return (
    <Section
      id="case-studies"
      eyebrow="Session 04 · The proof - both South African"
      eyebrowTone="mint"
      title="Two African MVNOs. One"
      highlight="operating model."
      description="Two production MVNO case studies from the DSG group - both delivered out of CXG's Johannesburg and Cape Town contact-centre footprint (1,180+ seats). Live proof that the operating model in the deck is built here."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {compactCases.map((cs, idx) => {
          const Icon = cs.Icon;
          return (
            <Reveal key={cs.name} delay={idx * 120}>
              <article className="lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-7 transition-colors hover:border-white/25 sm:p-9">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex size-11 items-center justify-center rounded-2xl ring-1 ring-inset transition-transform duration-300 group-hover:scale-110",
                        cs.tone === "mint"
                          ? "bg-mint-500/12 text-mint-400 ring-mint-500/30"
                          : "bg-azure-500/12 text-azure-400 ring-azure-500/30",
                      )}
                    >
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-fg">
                        {cs.name}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.14em] text-fg-faint">
                        {cs.tagline}
                      </p>
                    </div>
                  </div>
                  <Badge tone={cs.tone}>Case study</Badge>
                </div>

                {/* Massive headline metric - the visual anchor of each card. */}
                <div className="mt-8 flex items-baseline gap-3">
                  <span
                    className={cn(
                      "text-7xl font-bold leading-none tracking-tight sm:text-8xl",
                      toneToText[cs.tone],
                    )}
                  >
                    <CountUp end={cs.headlineEnd} suffix={cs.headlineSuffix} />
                  </span>
                  <span className="text-xs uppercase tracking-[0.16em] text-fg-faint">
                    {cs.headlineLabel}
                  </span>
                </div>

                {/* Supporting metrics row. */}
                <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/10">
                  {cs.metrics.map((m) => {
                    const decimals = "decimals" in m ? m.decimals : 0;
                    return (
                      <div key={m.label} className="bg-bg-card/85 px-3 py-4">
                        <dd className="text-lg font-semibold text-fg sm:text-xl">
                          <CountUp
                            end={m.end}
                            decimals={decimals}
                            suffix={m.suffix}
                          />
                        </dd>
                        <dt className="mt-1 text-[11px] leading-snug text-fg-faint">
                          {m.label}
                        </dt>
                      </div>
                    );
                  })}
                </dl>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={300}>
        <div className="mt-8">
          <a
            href="#get-the-deck"
            className="press inline-flex items-center gap-2 text-sm font-semibold text-mint-400 hover:text-mint-300"
          >
            Full integration architecture · in the deck →
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
