import Image from "next/image";
import { groupBrands } from "@/content/deck";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-bg/95">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <a
              href="https://www.dsg.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Digital Solutions Group - opens in a new tab"
              className="press inline-block transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/dsg-logo.png"
                alt="DSG · Digital Solutions Group"
                width={88}
                height={38}
                className="h-9 w-auto"
              />
            </a>
            <p className="max-w-md text-sm text-fg-muted">
              Digital Solutions Group - strategy, customer experience, MVNO
              enablement and platform engineering, delivered as one team.
            </p>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-fg-faint">
              Group brands
            </p>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-5">
              {groupBrands.map((b) => {
                const isLead = "lead" in b && b.lead === true;
                return (
                  <li key={b.name} style={{ height: 28 }}>
                    <a
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "press flex h-full items-center transition-all duration-300 hover:scale-[1.06]",
                        isLead
                          ? "opacity-100"
                          : "opacity-70 hover:opacity-100",
                      )}
                      aria-label={`${b.name} - opens in a new tab`}
                    >
                      <Image
                        src={b.src}
                        alt={b.name}
                        width={b.w}
                        height={b.h}
                        className={cn(
                          "h-auto w-auto",
                          isLead ? "max-h-6" : "max-h-5 brightness-0 invert",
                        )}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-fg-faint">
          <span>© {new Date().getFullYear()} Digital Solutions Group</span>
          <span className="uppercase tracking-[0.2em]">
            Miami · Alicante · Cape Town
          </span>
        </div>
      </div>
    </footer>
  );
}
