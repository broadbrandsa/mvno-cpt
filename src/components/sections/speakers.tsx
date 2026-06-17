import { Section } from "./section";
import { speakers } from "@/content/deck";
import { Reveal } from "@/components/animated/reveal";
import { SpeakerAvatar } from "@/components/speaker-avatar";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const accent = {
  mint: {
    border: "border-mint-500/25 hover:border-mint-500/55",
    bg: "bg-gradient-to-br from-mint-500/[0.06] via-white/[0.02] to-transparent",
    brandText: "text-mint-300",
    brandHover: "hover:text-mint-200",
  },
  azure: {
    border: "border-azure-500/25 hover:border-azure-500/55",
    bg: "bg-gradient-to-br from-azure-500/[0.06] via-white/[0.02] to-transparent",
    brandText: "text-azure-300",
    brandHover: "hover:text-azure-200",
  },
} as const;

export function Speakers() {
  return (
    <Section
      id="speakers"
      eyebrow="The speakers"
      eyebrowTone="azure"
      title="In the"
      highlight="Cape Town room."
      description="Six speakers across DSG, MDS Global, Broadbrand, MVNE and CXG. Each one runs the business they speak about."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {speakers.map((s, i) => {
          const a = accent[s.accent];
          return (
            <Reveal key={s.slug} delay={i * 90}>
              <article
                className={cn(
                  "lift group flex h-full flex-col gap-5 rounded-2xl border p-6 transition-colors",
                  a.border,
                  a.bg,
                )}
              >
                <SpeakerAvatar
                  name={s.name}
                  src={`/images/speakers/${s.slug}.jpg`}
                  accent={s.accent}
                />

                <div>
                  <h3 className="text-lg font-semibold leading-tight tracking-tight text-fg">
                    {s.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-fg-faint">
                    {s.role}
                  </p>
                  <a
                    href={s.brandUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.brand} - opens in a new tab`}
                    className={cn(
                      "press mt-2 inline-flex items-center gap-1 text-sm font-semibold transition-colors",
                      a.brandText,
                      a.brandHover,
                    )}
                  >
                    {s.brand}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>

                <p className="mt-auto border-t border-white/10 pt-4 text-sm leading-relaxed text-fg-muted">
                  {s.bio}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
