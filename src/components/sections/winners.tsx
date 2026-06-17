import { Section } from "./section";
import { winners } from "@/content/deck";
import { Trophy, Star } from "lucide-react";
import { Reveal } from "@/components/animated/reveal";
import { cn } from "@/lib/utils";

export function Winners() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Mint ambient blob - the success counterpart to the red graveyard. */}
      <div
        className="aurora float right-[-10rem] top-1/4 h-[32rem] w-[32rem]"
        style={{ ["--aurora" as string]: "rgba(16, 185, 129, 0.18)" }}
        aria-hidden
      />
      <div
        className="aurora float left-[-12rem] bottom-0 h-[26rem] w-[26rem]"
        style={{
          ["--aurora" as string]: "rgba(52, 231, 168, 0.10)",
          animationDelay: "-6s",
        }}
        aria-hidden
      />

      <Section
        eyebrow="Session 02 · The winners"
        eyebrowTone="mint"
        title="The ones that endure all"
        highlight="solved a specific problem for a defined audience"
        description="None won on price. Each chose a community, an experience or an identity their target customer was already paying for. Lebara and Lycamobile have 10M+ combined subscribers across Europe; FRiENDi Mobile is profitable in one of the most price-sensitive regions on earth. The deck unpacks how each one did it."
      >
        {/* Asymmetric layout: lead winner card spans 2 cols on desktop. */}
        <div className="grid gap-4 lg:grid-cols-3">
          {winners.map((w, i) => {
            const isLead = i === 0;
            return (
              <Reveal
                key={w.name}
                delay={i * 100}
                className={cn(isLead && "lg:col-span-2")}
              >
                <article
                  className={cn(
                    "lift group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-mint-500/25 p-6 transition-colors hover:border-mint-500/55 hover:shadow-[0_8px_40px_-12px_rgba(16,185,129,0.4)]",
                    isLead
                      ? "bg-gradient-to-br from-mint-500/[0.10] via-white/[0.02] to-transparent sm:p-8"
                      : "bg-gradient-to-br from-mint-500/[0.06] via-white/[0.02] to-transparent",
                  )}
                >
                  {/* Star rating row only on the lead winner. */}
                  {isLead && (
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className="size-3.5 fill-current"
                          aria-hidden
                        />
                      ))}
                      <span className="ml-2 text-[11px] uppercase tracking-[0.16em] text-fg-faint">
                        Top winner
                      </span>
                    </div>
                  )}

                  <div className="flex items-start justify-between">
                    <div>
                      <h3
                        className={cn(
                          "font-semibold text-fg",
                          isLead ? "text-2xl sm:text-3xl" : "text-base",
                        )}
                      >
                        {w.name}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.14em] text-fg-faint">
                        {w.region}
                      </p>
                    </div>
                    <div className="flex size-9 items-center justify-center rounded-full bg-mint-500/15 text-mint-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-8deg]">
                      <Trophy className="size-4" />
                    </div>
                  </div>

                  <div>
                    <p
                      className={cn(
                        "font-bold tracking-tight text-mint-400",
                        isLead ? "text-5xl sm:text-6xl" : "text-4xl",
                      )}
                    >
                      {w.headline}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-fg-faint">
                      {w.headlineLabel}
                    </p>
                  </div>

                  <p
                    className={cn(
                      "mt-auto border-t border-white/10 pt-4 leading-relaxed text-fg-muted",
                      isLead ? "text-base" : "text-sm",
                    )}
                  >
                    {w.insight}
                  </p>
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
              See the full breakdown of every winner in the deck →
            </a>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
