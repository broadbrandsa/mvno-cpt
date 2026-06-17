import { Section } from "./section";
import { failures } from "@/content/deck";
import { Skull } from "lucide-react";
import { CountUp } from "@/components/animated/count-up";
import { Reveal } from "@/components/animated/reveal";

export function Failures() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Red ambient blob - the danger signal of this section. */}
      <div
        className="aurora float left-[-8rem] top-1/4 h-[30rem] w-[30rem]"
        style={{ ["--aurora" as string]: "rgba(239, 68, 68, 0.16)" }}
        aria-hidden
      />
      <div
        className="aurora float right-[-12rem] bottom-0 h-[28rem] w-[28rem]"
        style={{
          ["--aurora" as string]: "rgba(220, 38, 38, 0.10)",
          animationDelay: "-4s",
        }}
        aria-hidden
      />

      <Section
        eyebrow="Session 02 · The graveyard"
        eyebrowTone="rose"
        title="Every price-led MVNO ended"
        highlight="the same way"
        description="Combined invested capital across a generation of price-first MVNO launches: $2bn+ - combined investor return: near zero. Three of ten cautionary tales below; the full gallery is in the deck. Africa has its own price-led MVNO graveyard - and the same lessons apply."
      >
        {/* Headline kill-stat banner. */}
        <Reveal>
          <div className="mb-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-rose-500/15 backdrop-blur-md sm:grid-cols-3">
            <KillStat
              value={<CountUp end={2} prefix="US$" suffix="bn+" />}
              label="Investor capital burned"
            />
            <KillStat
              value={<CountUp end={10} suffix=" of 10" />}
              label="Price-led MVNOs studied"
            />
            <KillStat
              value="0"
              label="Successful exits"
              hideOnMobile
            />
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {failures.map((f, i) => (
            <Reveal key={f.name} delay={i * 100}>
              <article className="lift group relative flex h-full flex-col gap-4 rounded-2xl border border-rose-500/20 bg-gradient-to-br from-rose-500/[0.06] via-white/[0.02] to-transparent p-6 transition-colors hover:border-rose-500/45 hover:shadow-[0_8px_40px_-12px_rgba(239,68,68,0.35)]">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-fg">
                      {f.name}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.14em] text-fg-faint">
                      {f.region}
                    </p>
                  </div>
                  <div className="flex size-9 items-center justify-center rounded-full bg-rose-500/12 text-rose-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[8deg]">
                    <Skull className="size-4" />
                  </div>
                </div>

                <div>
                  <p className="text-3xl font-bold tracking-tight text-rose-400">
                    {f.headline}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-fg-faint">
                    {f.headlineLabel}
                  </p>
                </div>

                <p className="mt-auto border-t border-white/10 pt-4 text-sm leading-relaxed text-fg-muted">
                  <span className="font-semibold text-fg">The lesson.</span>{" "}
                  <span className="italic">{f.lesson}</span>
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-8">
            <a
              href="#get-the-deck"
              className="press inline-flex items-center gap-2 text-sm font-semibold text-mint-400 hover:text-mint-300"
            >
              See all 10 failures - and what they had in common · in the deck
              →
            </a>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}

function KillStat({
  value,
  label,
  hideOnMobile = false,
}: {
  value: React.ReactNode;
  label: string;
  hideOnMobile?: boolean;
}) {
  return (
    <div
      className={`bg-bg/85 px-5 py-5 ${hideOnMobile ? "hidden sm:block" : ""}`}
    >
      <p className="text-3xl font-bold tracking-tight text-rose-400 sm:text-4xl">
        {value}
      </p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-fg-faint">
        {label}
      </p>
    </div>
  );
}
