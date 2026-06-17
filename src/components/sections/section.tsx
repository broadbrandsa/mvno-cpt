import { cn } from "@/lib/utils";
import { Badge, type BadgeTone } from "@/components/ui/badge";
import { Reveal } from "@/components/animated/reveal";

export function Section({
  id,
  eyebrow,
  eyebrowTone = "azure",
  title,
  highlight,
  description,
  children,
  className,
  contentClassName,
}: {
  id?: string;
  eyebrow?: string;
  eyebrowTone?: BadgeTone;
  title: React.ReactNode;
  highlight?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative border-t border-white/5 py-20 sm:py-28",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="max-w-3xl">
          {eyebrow && (
            <Reveal>
              <Badge tone={eyebrowTone} className="mb-5">
                {eyebrow}
              </Badge>
            </Reveal>
          )}
          <Reveal delay={60}>
            <h2 className="text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              {title}
              {highlight && (
                <>
                  {" "}
                  <span className="bg-gradient-to-br from-azure-400 to-azure-600 bg-clip-text text-transparent">
                    {highlight}
                  </span>
                </>
              )}
            </h2>
          </Reveal>
          {description && (
            <Reveal delay={140}>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
                {description}
              </p>
            </Reveal>
          )}
        </div>

        <div className={cn("mt-12 sm:mt-16", contentClassName)}>{children}</div>
      </div>
    </section>
  );
}
