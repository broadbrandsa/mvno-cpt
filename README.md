# MVNO Success Blueprint · Cape Town 2026

Post-event recap site for the Cape Town stop of the DSG MVNO Nation
world tour. Visitors land from a Mailchimp email, scan the hero +
agenda + session highlights, accept the NDA, and download the full
workshop deck.

> **Delivered live · Cape Town · 8 June 2026**

## Quick start

```bash
pnpm install
cp .env.example .env.local        # then fill in Supabase values (optional in dev)
pnpm dev --port 3002              # http://localhost:3002
pnpm build                        # production build
pnpm lint                         # eslint
```

Without Supabase env vars, form submissions still validate and succeed
- rows are `console.log`'d on the server only. Apply the
`supabase/migrations/20260617000000_create_cpt_leads.sql` migration to
your Supabase project, then set `NEXT_PUBLIC_SUPABASE_URL` and
`SUPABASE_SERVICE_ROLE_KEY` in `.env.local` (or Vercel project env).

## The deck PDF

The download flow serves the PDF from
[`public/MVNO-Nation-Africa-Workshop-2026.pdf`](./public/). The path
is centralised in
[`src/lib/deck-access.ts`](./src/lib/deck-access.ts) - edit
`PDF_PATH` + `PDF_FILENAME` (and the matching `deckFile` constant in
`src/content/deck.ts`) if the filename ever changes.

## Stack

Identical to the sibling DSG sites.

- **Next.js 16** (App Router)
- **TypeScript 5**
- **Tailwind CSS v4** (CSS-first theme in `src/app/globals.css`)
- **lucide-react** icons
- **Supabase** (`cpt_leads` table - see `supabase/migrations/`)
- **pnpm**

## Editing event details

Event date, deck title, host info, the 6 sessions, the 6 speakers and
the group brand strip all live in
[`src/content/deck.ts`](./src/content/deck.ts). One place to edit,
everything else picks it up.

## Speaker photos

Drop 1:1 head-and-shoulders crops at
`public/images/speakers/<slug>.jpg` matching each speaker's `slug` in
deck.ts:

- `yaron-assabi.jpg` ✓
- `edward-wicks.jpg` ✓
- `vincent-maher.jpg` ✓
- `brandon-meszaros.jpg` ✓
- `ryan-ohanlon.jpg` (TODO)
- `david-fielding.jpg` (TODO)

Missing photos fall back to a coloured initials avatar so nothing
breaks.

## Hero photo

The hero uses the Camps Bay sunset photo carried over from the
sibling Africa pre-event site. Swap
[`public/images/hero-bg.jpg`](./public/images/hero-bg.jpg) at any
time - the parallax + overlay adapt to any landscape photo at ~16:9.

## Deployment

Push to `main`, Vercel auto-deploys. Framework preset: **Next.js**.
Set the two Supabase env vars in the Vercel project before the first
form submission goes live.

## Relationship to the sibling DSG sites

- **`../mvno-nation-2026` (Miami)** - post-event recap, deck-download
  lead magnet, writes to `leads`
- **`../mvno-nation-africa` (pre-event Cape Town invitation)** - the
  RSVP capture site that ran before this workshop
- **`./` (this project, MVNO Success Blueprint Cape Town)** -
  post-event recap from the same workshop, deck-download lead magnet,
  writes to `cpt_leads`

Same design system, animation primitives and section components across
all three; only the content layer (`src/content/deck.ts`) and the form
target differ. When one site picks up a polish/refactor that would
benefit the others, cherry-pick by hand. There is no shared package -
they are deliberate forks, not a monorepo.
