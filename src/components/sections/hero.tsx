import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import { DeckCTA } from "@/components/deck-cta";
import { ParallaxBackground } from "@/components/parallax-background";
import { CursorSpotlight } from "@/components/animated/cursor-spotlight";
import { CountUp } from "@/components/animated/count-up";
import { Reveal } from "@/components/animated/reveal";
import { event, groupBrands } from "@/content/deck";
import { cn } from "@/lib/utils";

// Three hero stats. All three are sourced from the workshop deck.
// See docs/FACT_CHECK.md once written for slide references.
const heroStats = [
  {
    // Section 01 - "870M people in sub-Saharan Africa offline or barely connected"
    end: 870,
    suffix: "M",
    label: "Offline or barely connected",
    caption: "sub-Saharan Africa headroom",
    tone: "azure" as const,
  },
  {
    // Section 02 - "Combined invested capital: US$2.0bn+ · Combined investor return: near zero"
    end: 2,
    prefix: "US$",
    suffix: "bn+",
    label: "Lost on price-led MVNOs",
    caption: "near-zero investor return across 10 launches",
    tone: "rose" as const,
  },
  {
    // Section 02 - US$428 (identity-led) ÷ US$78 (price-led) ≈ 5.49
    end: 5.5,
    decimals: 1,
    suffix: "×",
    label: "LTV uplift",
    caption: "identity-led vs price-led MVNOs",
    tone: "mint" as const,
  },
] as const;

const toneClass = {
  azure: "text-azure-400",
  rose: "text-rose-400",
  mint: "text-mint-400",
} as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden noise">
      <ParallaxBackground
        src="/images/hero-bg.jpg"
        alt=""
        speed={0.25}
      />
      <div
        className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(7,17,31,0.78)_0%,rgba(10,22,40,0.4)_55%,rgba(10,22,40,0.05)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,transparent_0%,transparent_55%,rgba(10,22,40,0.7)_85%,#0a1628_100%)]"
        aria-hidden
      />
      <CursorSpotlight />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-20 sm:px-10 lg:pb-24 lg:pt-28">
        <div className="max-w-3xl space-y-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-mint-500/30 bg-mint-500/[0.08] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-mint-300 backdrop-blur">
              <span className="relative flex size-1.5">
                <span className="absolute inset-0 rounded-full bg-mint-400 pulse-dot" />
                <span className="relative size-1.5 rounded-full bg-mint-400" />
              </span>
              <MapPin className="size-3 text-mint-300" />
              {event.series} · {event.venue} · {event.dates}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-balance text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl lg:text-7xl">
              The MVNO Success{" "}
              <span className="bg-gradient-to-br from-mint-300 to-mint-500 bg-clip-text text-transparent">
                Blueprint.
              </span>{" "}
              What it takes to win in{" "}
              <span className="bg-gradient-to-br from-azure-400 to-azure-600 bg-clip-text text-transparent">
                2026 and beyond.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
              {event.tagline} Hosted by DSG in Cape Town, with MDS Global,
              Broadbrand, MVNE, Xanite and CXG.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <DeckCTA
                primaryLabel="Download the deck"
                grantedLabel="Download again"
                className="shimmer press"
              />
              <a
                href="#agenda"
                className="press inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-fg backdrop-blur transition-colors hover:bg-white/[0.10]"
              >
                See what we covered
                <ArrowDown className="size-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="space-y-2 pt-4">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.18em] text-fg-faint">
                <span className="inline-flex items-center gap-1.5 text-mint-300">
                  <span className="size-1.5 rounded-full bg-mint-400" />
                  Delivered live
                </span>
                <span aria-hidden>·</span>
                <span>{event.venue}</span>
                <span aria-hidden>·</span>
                <span>{event.dates}</span>
              </div>
              <p className="text-sm text-fg-muted">
                Hosted by{" "}
                <span className="font-semibold text-fg">
                  {event.host.name}
                </span>{" "}
                - {event.host.title}. Six perspectives, six speakers,
                one operating model.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={340}>
          <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="lift bg-bg/85 p-6 sm:p-7 hover:bg-bg/95"
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-faint">
                  {stat.label}
                </dt>
                <dd
                  className={cn(
                    "mt-2 text-3xl font-semibold tracking-tight sm:text-4xl",
                    toneClass[stat.tone],
                  )}
                >
                  <CountUp
                    end={stat.end}
                    decimals={"decimals" in stat ? stat.decimals : 0}
                    prefix={"prefix" in stat ? stat.prefix : ""}
                    suffix={stat.suffix}
                  />
                </dd>
                <p className="mt-1 text-xs text-fg-muted">{stat.caption}</p>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:gap-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-fg-faint">
              Presented by
            </span>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-5">
              {groupBrands.map((brand) => {
                const isLead = "lead" in brand && brand.lead === true;
                return (
                  <li key={brand.name} style={{ height: 32 }}>
                    <a
                      href={brand.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${brand.name} - opens in a new tab`}
                      className={cn(
                        "press flex h-full items-center transition-all duration-300 hover:scale-[1.06] hover:opacity-100",
                        isLead ? "opacity-100" : "opacity-60",
                      )}
                    >
                      <Image
                        src={brand.src}
                        alt={brand.name}
                        width={brand.w}
                        height={brand.h}
                        className={cn(
                          "h-auto w-auto",
                          isLead ? "max-h-7" : "max-h-6 brightness-0 invert",
                        )}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>

      <a
        href="#agenda"
        aria-label="Scroll to the agenda"
        className="group absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-fg-faint hover:text-fg"
      >
        <span className="text-[10px] uppercase tracking-[0.24em]">Scroll</span>
        <span className="flex size-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] backdrop-blur transition-transform duration-300 group-hover:translate-y-1">
          <ArrowDown className="size-4 animate-bounce" />
        </span>
      </a>
    </section>
  );
}
