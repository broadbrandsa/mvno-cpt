"use client";

import { useSyncExternalStore } from "react";

/**
 * Client-side helper for tracking whether the visitor has already
 * accepted the NDA and unlocked the deck. Source of truth is the
 * Supabase cpt_leads row; localStorage is a UX-smoothing hint so
 * repeat visitors see a "You're in" state and can re-trigger the
 * download without resubmitting.
 */

export const STORAGE_KEY = "mvnoNationCptDeck.v1";
export const ACCESS_EVENT = "mvno-nation-cpt-access-changed";
export const PDF_PATH = "/MVNO-Nation-Africa-Workshop-2026.pdf";
export const PDF_FILENAME = "MVNO-Nation-Africa-Workshop-2026.pdf";

export type StoredAccess = {
  name: string;
  email: string;
  company: string;
  acceptedTerms: true;
  acceptedAt: string;
};

function subscribe(onChange: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", onChange);
  window.addEventListener(ACCESS_EVENT, onChange);
  const handle = window.setTimeout(onChange, 0);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(ACCESS_EVENT, onChange);
    window.clearTimeout(handle);
  };
}

function readSnapshot(): "loading" | "granted" | "denied" {
  if (typeof window === "undefined") return "loading";
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return "denied";
    const parsed = JSON.parse(raw) as StoredAccess;
    return parsed?.acceptedTerms === true ? "granted" : "denied";
  } catch {
    return "denied";
  }
}

function getServerSnapshot(): "loading" {
  return "loading";
}

export function useDeckAccess() {
  return useSyncExternalStore(subscribe, readSnapshot, getServerSnapshot);
}

export function recordAccess(
  data: Omit<StoredAccess, "acceptedTerms" | "acceptedAt">,
) {
  if (typeof window === "undefined") return;
  const record: StoredAccess = {
    ...data,
    acceptedTerms: true,
    acceptedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  window.dispatchEvent(new Event(ACCESS_EVENT));
}

export function triggerDownload() {
  if (typeof window === "undefined") return;
  const link = document.createElement("a");
  link.href = PDF_PATH;
  link.download = PDF_FILENAME;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function scrollToDeckForm() {
  if (typeof window === "undefined") return;
  const target = document.getElementById("get-the-deck");
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}
