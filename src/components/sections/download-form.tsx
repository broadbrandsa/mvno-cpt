"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Download,
  FileText,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  recordAccess,
  triggerDownload,
  useDeckAccess,
} from "@/lib/deck-access";
import { Reveal } from "@/components/animated/reveal";
import { event } from "@/content/deck";
import { cn } from "@/lib/utils";

export function DownloadForm() {
  const access = useDeckAccess();
  const alreadyGranted = access === "granted";

  return (
    <section
      id="get-the-deck"
      className="relative isolate scroll-mt-24 overflow-hidden border-t border-white/5"
    >
      <div
        className="aurora float right-[-12rem] top-1/4 h-[34rem] w-[34rem]"
        style={{ ["--aurora" as string]: "rgba(16, 185, 129, 0.18)" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 grid-bg opacity-[0.07]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <Reveal>
            <div className="max-w-xl space-y-6">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
                <Image
                  src="/images/cape-town-cbd.jpg"
                  alt="Cape Town CBD at sunrise with the Hottentots Holland mountains in the distance"
                  width={1067}
                  height={1600}
                  className="aspect-[16/9] w-full object-cover"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent_0%,rgba(10,22,40,0.85)_100%)]"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-4 py-3 text-xs text-fg-muted">
                  <span className="inline-flex items-center gap-1.5 font-semibold uppercase tracking-[0.16em] text-mint-300">
                    <MapPin className="size-3" />
                    Cape Town
                  </span>
                  <span className="uppercase tracking-[0.16em] text-fg-faint">
                    {event.dates}
                  </span>
                </div>
              </div>

              <Badge tone="mint">
                <FileText className="size-3" /> Workshop deck recap
              </Badge>
              <h2 className="text-balance text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
                Want the full{" "}
                <span className="bg-gradient-to-br from-mint-300 to-mint-500 bg-clip-text text-transparent">
                  MVNO Success Blueprint?
                </span>
              </h2>
              <p className="text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
                Whether you were in the Cape Town room or hearing about
                the workshop now, drop your details below and the full
                deck downloads in seconds. The materials are confidential
                and provided under NDA - please don&apos;t redistribute
                outside your organisation.
              </p>

              <ul className="space-y-2.5 pt-2 text-sm text-fg-muted">
                <Bullet>
                  Six sessions, six speakers: market, CVPs, CVM, CX, tech and VAS
                </Bullet>
                <Bullet>
                  Ten case studies of price-led failures (US$2bn+ burned)
                </Bullet>
                <Bullet>
                  The CVP pyramid, the LTV math and the commercial roadmap
                </Bullet>
                <Bullet>
                  Xanite, MDS Global and Digital Mobile platform architectures
                </Bullet>
              </ul>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-3 text-[11px] uppercase tracking-[0.18em] text-fg-faint">
                <span className="inline-flex items-center gap-1">
                  <Sparkles className="size-3 text-mint-400" /> Instant download
                </span>
                <span aria-hidden>·</span>
                <span>NDA-gated</span>
                <span aria-hidden>·</span>
                <span>PDF</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            {alreadyGranted ? <SuccessCard /> : <FormCard />}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-mint-400" />
      <span>{children}</span>
    </li>
  );
}

function FormCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid work email address.");
      return;
    }
    if (company.trim().length < 2) {
      setError("Please tell us which organisation you're with.");
      return;
    }
    if (!accepted) {
      setError("You must accept the NDA to download the deck.");
      return;
    }

    setSubmitting(true);
    try {
      const cleanEmail = email.trim().toLowerCase();
      const cleanName = name.trim();
      const cleanCompany = company.trim();

      const res = await fetch("/api/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          company: cleanCompany,
          acceptedTerms: true,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(data.error ?? "Could not register your access.");
      }

      recordAccess({
        name: cleanName,
        email: cleanEmail,
        company: cleanCompany,
      });
      triggerDownload();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="gradient-border rounded-3xl bg-bg-card/85 p-6 shadow-2xl shadow-black/40 backdrop-blur-md sm:p-8"
      style={
        {
          ["--gb-color" as string]: "rgba(16, 185, 129, 0.55)",
        } as React.CSSProperties
      }
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-full bg-mint-500/15 text-mint-400">
          <ShieldCheck className="size-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-fg">
            Request the Cape Town workshop deck
          </p>
          <p className="text-xs text-fg-faint">
            NDA-gated · download starts on submit
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <Field
          id="form-name"
          label="Full name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={setName}
          placeholder="Jane Doe"
          required
        />
        <Field
          id="form-email"
          label="Work email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={setEmail}
          placeholder="jane@company.com"
          required
        />
        <Field
          id="form-company"
          label="Company / organisation"
          type="text"
          autoComplete="organization"
          value={company}
          onChange={setCompany}
          placeholder="Your MVNO / operator / fund"
          required
        />

        <label className="group flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-white/20">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="mt-0.5 size-4 shrink-0 cursor-pointer rounded border-white/20 bg-transparent accent-mint-500"
          />
          <span className="text-xs leading-relaxed text-fg-muted">
            I agree that the deck is{" "}
            <strong className="text-fg">
              confidential and provided under NDA
            </strong>
            . I will not share, redistribute, or publish it outside my
            organisation without written permission from DSG.
          </span>
        </label>

        {error && (
          <p
            role="alert"
            className="rounded-lg bg-rose-500/10 px-3 py-2 text-xs text-rose-400 ring-1 ring-inset ring-rose-500/30"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className={cn(
            "shimmer press inline-flex h-12 w-full items-center justify-center gap-2 rounded-full font-semibold transition-colors",
            "bg-mint-500 text-bg shadow-[0_10px_30px_-8px_rgba(16,185,129,0.6)]",
            "hover:bg-mint-400 disabled:opacity-60 disabled:cursor-not-allowed",
          )}
        >
          {submitting ? (
            <span className="inline-flex items-center gap-2">
              <span className="size-4 animate-spin rounded-full border-2 border-bg/40 border-t-bg" />
              Verifying…
            </span>
          ) : (
            <>
              <Download className="size-4" />
              Download the deck (PDF)
            </>
          )}
        </button>

        <p className="text-center text-[11px] leading-relaxed text-fg-faint">
          PDF · One follow-up email max - we never share your details.
        </p>
      </div>
    </form>
  );
}

function SuccessCard() {
  return (
    <div className="flex h-full flex-col gap-5 rounded-3xl border border-mint-500/30 bg-gradient-to-br from-mint-500/[0.08] via-bg-card/60 to-bg-card/80 p-8 shadow-2xl shadow-black/40 backdrop-blur-md">
      <div className="flex size-12 items-center justify-center rounded-full bg-mint-500/15 text-mint-400">
        <CheckCircle2 className="size-6" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-fg">
          You&apos;re in. Thanks for accepting the NDA.
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
          Your download should have started. If it didn&apos;t, click the
          button below to grab the PDF again.
        </p>
      </div>
      <button
        type="button"
        onClick={triggerDownload}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-mint-500 px-6 text-sm font-semibold text-bg shadow-[0_10px_30px_-8px_rgba(16,185,129,0.6)] transition-colors hover:bg-mint-400"
      >
        <Download className="size-4" />
        Download the deck again
      </button>
      <p className="text-[11px] uppercase tracking-[0.16em] text-fg-faint">
        From the Cape Town workshop · {event.dates}
      </p>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  ...rest
}: {
  id: string;
  label: string;
  value: string;
  onChange: (next: string) => void;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "id"
>) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-fg-faint"
      >
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-fg placeholder:text-fg-faint transition-colors focus:border-mint-500/60 focus:outline-none focus:ring-2 focus:ring-mint-500/30"
        {...rest}
      />
    </div>
  );
}
