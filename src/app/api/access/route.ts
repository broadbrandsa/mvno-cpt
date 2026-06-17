import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Captures deck-download leads for the Cape Town stop of the MVNO Nation
 * world tour. Writes to `public.cpt_leads` (one row per submission).
 *
 * Falls back to console.log when Supabase env vars are unset - useful
 * during early dev before the Supabase project is provisioned.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const { name, email, company, acceptedTerms } = body as {
    name?: unknown;
    email?: unknown;
    company?: unknown;
    acceptedTerms?: unknown;
  };

  if (typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (typeof email !== "string" || !emailPattern.test(email)) {
    return NextResponse.json(
      { error: "A valid work email is required" },
      { status: 400 },
    );
  }
  if (typeof company !== "string" || company.trim().length < 2) {
    return NextResponse.json(
      { error: "Company / organisation is required" },
      { status: 400 },
    );
  }
  if (acceptedTerms !== true) {
    return NextResponse.json(
      { error: "You must accept the NDA to continue" },
      { status: 400 },
    );
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim().toLowerCase();
  const cleanCompany = company.trim();
  const userAgent = request.headers.get("user-agent") ?? null;
  const referrer = request.headers.get("referer") ?? null;

  const supabase = getSupabaseAdmin();

  if (supabase) {
    const { error } = await supabase.from("cpt_leads").insert({
      name: cleanName,
      email: cleanEmail,
      company: cleanCompany,
      accepted_terms: true,
      user_agent: userAgent,
      referrer,
    });

    if (error) {
      console.error("[access] supabase insert failed", {
        message: error.message,
        code: error.code,
      });
      return NextResponse.json(
        { error: "Could not record submission. Please try again." },
        { status: 500 },
      );
    }
  } else {
    console.log("[access] (no supabase configured) recorded:", {
      table: "cpt_leads",
      name: cleanName,
      email: cleanEmail,
      company: cleanCompany,
      at: new Date().toISOString(),
    });
  }

  return NextResponse.json({ ok: true });
}
