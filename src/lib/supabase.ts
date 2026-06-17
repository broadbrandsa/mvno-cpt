import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let cached: SupabaseClient | null | undefined;

/**
 * Returns a Supabase admin client (service-role key) for server-side
 * writes from API routes. Returns `null` when env vars are not set so
 * the caller can fall back to a no-op (e.g. console.log only) without
 * hard-failing local dev.
 *
 * Never expose this client to the browser - the service-role key
 * bypasses Row Level Security.
 */
export function getSupabaseAdmin(): SupabaseClient | null {
  if (cached !== undefined) return cached;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    cached = null;
    return cached;
  }

  cached = createClient(url, serviceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
  return cached;
}
