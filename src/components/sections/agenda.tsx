import { Section } from "./section";
import { event, sessions } from "@/content/deck";
import { Reveal } from "@/components/animated/reveal";
import {
  Compass,
  Target,
  TrendingUp,
  HeartHandshake,
  Cpu,
  Sparkles,
  ArrowDown,
} from "lucide-react";

// One icon per session, in deck order.
const sessionIcons = [Compass, Target, TrendingUp, HeartHandshake, Cpu, Sparkles] as const;

const accent = {
  mint: {
    border: "border-mint-500/25 hover:border-mint-500/55",
    bg: "bg-gradient-to-br from-mint-500/[0.06] via-white/[0.02] to-transparent",
    iconWrap: "bg-mint-500/12 text-mint-400 ring-mint-500/30",
    num: "text-mint-400/70 group-hover:text-mint-400",
  },
  azure: {
    border: "border-azure-500/25 hover:border-azure-500/55",
    bg: "bg-gradient-to-br from-azure-500/[0.06] via-white/[0.02] to-transparent",
    iconWrap: "bg-azure-500/12 text-azure-400 ring-azure-500/30",
    num: "text-azure-400/70 group-hover:text-azure-400",
  },
  rose: {
    border: "border-rose-500/25 hover:border-rose-500/55",
    bg: "bg-gradient-to-br from-rose-500/[0.06] via-white/[0.02] to-transparent",
    iconWrap: "bg-rose-500/12 text-rose-400 ring-rose-500/30",
    num: "text-rose-400/70 group-hover:text-rose-400",
  },
} as const;

export function Agenda() {
  return (
    <Section
      id="agenda"
      eyebrow={`The agenda · ${event.venue} · ${event.dates}`}
      eyebrowTone="azure"
      title="Six perspectives,"
      highlight="one operating model."
      description={event.tagline}
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sessions.map((session, i) => {
          const a = accent[session.accent];
          const Icon = sessionIcons[i] ?? Compass;
          return (
            <Reveal key={session.n} delay={i * 80}>
              <article
                className={`lift group flex h-full flex-col gap-4 rounded-2xl border p-6 transition-colors sm:p-7 ${a.border} ${a.bg}`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex size-10 items-center justify-center rounded-xl ring-1 ring-inset transition-transform duration-300 group-hover:scale-110 ${a.iconWrap}`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <span className={`font-mono text-2xl font-bold transition-colors ${a.num}`}>
                    {session.n}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold tracking-tight text-fg">
                    {session.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {session.body}
                  </p>
                </div>
                <p className="border-t border-white/10 pt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-fg-faint">
                  {session.speaker}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={600}>
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <a
            href="#nuggets"
            className="press inline-flex items-center gap-2 text-sm font-semibold text-mint-400 hover:text-mint-300"
          >
            Below: the highlights from each session
            <ArrowDown className="size-4 animate-bounce" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
