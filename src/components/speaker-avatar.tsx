"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Avatar for a speaker. Tries to load the photo at `src`; falls back to
 * an initials chip in the speaker's accent colour if the file is missing
 * (e.g. before the user has dropped the photo into /public/images/speakers/).
 *
 * Wrapped in next/image so cropped photos still get optimisation +
 * lazy-loading from Vercel's image pipeline.
 */
export function SpeakerAvatar({
  name,
  src,
  accent,
}: {
  name: string;
  src: string;
  accent: "mint" | "azure";
}) {
  const [errored, setErrored] = useState(false);

  const initials = name
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const fallbackBg =
    accent === "mint"
      ? "bg-mint-500/15 text-mint-300 ring-mint-500/30"
      : "bg-azure-500/15 text-azure-300 ring-azure-500/30";

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-2xl ring-1 ring-inset ring-white/10">
      {!errored ? (
        <Image
          src={src}
          alt={`${name} - portrait`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 [transition-timing-function:var(--ease-expo-out)] group-hover:scale-[1.04]"
          onError={() => setErrored(true)}
        />
      ) : (
        <div
          className={cn(
            "flex h-full w-full items-center justify-center",
            "ring-1 ring-inset",
            fallbackBg,
          )}
        >
          <span className="text-3xl font-bold tracking-tight sm:text-4xl">
            {initials}
          </span>
        </div>
      )}
    </div>
  );
}
