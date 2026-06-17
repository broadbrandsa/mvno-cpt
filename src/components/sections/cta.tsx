import { event, worldTour } from "@/content/deck";
import { ArrowUpRight, MapPin, Check } from "lucide-react";
import { DeckCTA } from "@/components/deck-cta";
import { Reveal } from "@/components/animated/reveal";
import { CountUp } from "@/components/animated/count-up";

export function CTA() {
  return (
    <section
      id="deck-cta"
      className="relative isolate overflow-hidden border-t border-white/5"
    >
      {/* Twin auroras for closing-section drama. */}
      <div
        className="aurora float left-[-10rem] top-0 h-[28rem] w-[28rem]"
        style={{ ["--aurora" as string]: "rgba(37, 99, 235, 0.18)" }}
        aria-hidden
      />
      <div
        className="aurora float right-[-12rem] bottom-0 h-[32rem] w-[32rem]"
        style={{
          ["--aurora" as string]: "rgba(16, 185, 129, 0.18)",
          animationDelay: "-5s",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 grid-bg opacity-[0.07]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-mint-500/30 bg-mint-500/[0.08] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-mint-300">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 rounded-full bg-mint-400 pulse-dot" />
              <span className="relative size-1.5 rounded-full bg-mint-400" />
            </span>
            From the Cape Town room
          </span>
        </Reveal>

        {/* Massive closing headline with animated counter. */}
        <Reveal delay={80}>
          <h2 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Let&apos;s build the next{" "}
            <span className="bg-gradient-to-br from-mint-300 to-mint-500 bg-clip-text text-transparent">
              300 million subscribers
            </span>{" "}
            together.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
            Six perspectives, one operating model. Price gets customers
            through the door; value, experience and identity keep them
            inside. A generation of price-led MVNOs lost{" "}
            <CountUp end={2} prefix="US$" suffix="bn+" /> chasing the
            wrong subscriber. The full {event.deckTitle} deck is yours
            to take back to your team.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-8 flex flex-wrap gap-3">
            <DeckCTA
              primaryLabel="Download the deck"
              grantedLabel="Download again"
              className="shimmer press"
            />
            <a
              href={`mailto:${event.host.email}?subject=MVNO Success Blueprint - Cape Town inquiry`}
              className="press inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-fg backdrop-blur transition-colors hover:bg-white/[0.10]"
            >
              Talk to the team
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        {/* World tour + speaker grid. */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal delay={260}>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-fg-faint">
                World tour 2026
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {worldTour.map((stop) => {
                  const isDelivered = stop.status === "delivered";
                  return (
                    <li
                      key={stop.city}
                      className={`lift rounded-2xl border p-4 backdrop-blur transition-colors ${
                        isDelivered
                          ? "border-mint-500/40 bg-mint-500/[0.08]"
                          : "border-white/10 bg-white/[0.03] hover:border-white/20"
                      }`}
                    >
                      <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-fg-faint">
                        <MapPin className="size-3" />
                        {stop.region}
                      </span>
                      <span className="mt-1.5 flex items-center gap-2 text-xl font-semibold text-fg">
                        {stop.city}
                        {isDelivered && (
                          <span className="inline-flex size-5 items-center justify-center rounded-full bg-mint-500/15 text-mint-300 ring-1 ring-inset ring-mint-500/40">
                            <Check className="size-3" strokeWidth={3} />
                          </span>
                        )}
                      </span>
                      <span
                        className={`mt-1 block text-xs ${
                          isDelivered ? "text-mint-300" : "text-fg-faint"
                        }`}
                      >
                        {isDelivered
                          ? `Delivered · ${stop.dates}`
                          : stop.dates}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="rounded-3xl border border-white/10 bg-bg-card/60 p-6 backdrop-blur-md sm:p-7">
              <Person
                role="Hosted by"
                name={event.host.name}
                title={event.host.title}
                email={event.host.email}
              />
              <div className="my-5 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <a
                href="#speakers"
                className="press inline-flex items-center gap-1.5 text-sm font-semibold text-mint-400 transition-colors hover:text-mint-300"
              >
                Meet the full team
                <ArrowUpRight className="size-3.5 -rotate-90" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Person({
  role,
  name,
  title,
  email,
}: {
  role: string;
  name: string;
  title: string;
  email: string;
}) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-fg-faint">
        {role}
      </p>
      <p className="mt-1.5 text-base font-semibold text-fg">{name}</p>
      <p className="text-sm text-fg-muted">{title}</p>
      <a
        href={`mailto:${email}`}
        className="press mt-2 inline-flex items-center gap-1.5 text-sm text-mint-400 transition-colors hover:text-mint-300"
      >
        {email}
        <ArrowUpRight className="size-3.5" />
      </a>
    </div>
  );
}
