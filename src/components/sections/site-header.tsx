"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { DeckCTA } from "@/components/deck-cta";
import { cn } from "@/lib/utils";
import { event } from "@/content/deck";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-200",
        scrolled
          ? "border-b border-white/10 bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-10">
        <a
          href="https://www.dsg.co.za/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Digital Solutions Group - opens in a new tab"
          className="press flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <Image
            src="/images/dsg-logo.png"
            alt="DSG · Digital Solutions Group"
            width={70}
            height={30}
            priority
            className="h-7 w-auto"
          />
          <span className="hidden h-6 w-px bg-white/15 sm:block" />
          <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-fg-muted sm:inline">
            {event.series}
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-fg-muted lg:flex">
          <a href="#agenda" className="hover:text-fg">
            Agenda
          </a>
          <a href="#blueprint" className="hover:text-fg">
            Framework
          </a>
          <a href="#case-studies" className="hover:text-fg">
            Proof
          </a>
          <a href="#get-the-deck" className="hover:text-fg">
            Get the deck
          </a>
        </nav>

        <DeckCTA
          variant="primary"
          size="sm"
          primaryLabel="Get the deck"
          grantedLabel="Download again"
        />
      </div>
    </header>
  );
}
