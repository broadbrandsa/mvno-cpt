# MVNO Success Blueprint · Cape Town 2026 - Email campaigns

Two ready-to-send Mailchimp emails advertising the post-event deck
landing page. Both drive clicks to <https://mvno-cpt.vercel.app/#get-the-deck>
where recipients accept the NDA and download the workshop deck.

## Files

Two campaigns share the same design - only the copy that speaks
directly to the recipient changes.

| File | Audience | When to send |
|---|---|---|
| `mvno-nation-cpt-attendees.html` + `.txt` | People who attended the Cape Town workshop | "Thanks for being in the room" - recap + deck handoff |
| `mvno-nation-cpt-no-shows.html` + `.txt` | People who registered but didn't attend | "You missed Cape Town - here's the deck" - sympathy + recovery |

Run **two** sends:

1. Segment your audience in Mailchimp by attendance status (use a tag
   you applied on registration, or import the attendance list directly).
2. Send `attendees` to one segment, `no-shows` to the other.

### What's the same in both

- Hero photo + dark navy overlay + headline
- Stats strip (870M / US$2bn+ / 5.5×)
- 6 session cards (Setting the scene · CVPs · CVM · CX · Tech · VAS)
- "Download the deck" CTA buttons - both linking to `https://mvno-cpt.vercel.app/#get-the-deck`
- 6-speaker line-up (Yaron, Ryan, David, Edward, Vincent, Brandon)
- Group brands strip (DSG, MDS Global, Broadbrand, MVNE, Xanite, CXG)

### What changes per variant

| Element | Attendees | No-shows |
|---|---|---|
| HTML `<title>` | "Your MVNO Success Blueprint deck from Cape Town - as promised" | "You missed Cape Town - here's the full MVNO Success Blueprint deck" |
| Inbox preview | "Thanks for being in the room in Cape Town. The full deck is yours..." | "You signed up for Cape Town but couldn't make it. No worries - the full deck is now yours..." |
| Hero headline | "Your MVNO Success Blueprint from Cape Town, as promised." | "You missed Cape Town. The deck is yours anyway." |
| Hero sub-copy | "Thanks for being in the room... ready to take back to your team" | "You signed up but couldn't make it. No worries... Everything we covered, none of the jet lag." |
| Recap header | "Recap · The 6 sessions from the workshop" | "What you missed · 6 sessions from the workshop" |
| Recap subtitle | "Every session as we presented it on the day. Take it back to your team." | "Everything we covered on the day, ready to read at your own pace." |
| Speaker strip eyebrow | "On the day" | "Who was on the day" |
| Footer sign-off | "You attended... thanks again for being in the room..." | "You registered but couldn't attend. Sorry we missed you - hope the deck makes up for it." |

## Subject lines per segment

### Attendees (people who were in the room)

Ranked by likely open rate:

1. **Your MVNO Success Blueprint deck from Cape Town - as promised** *(direct, fulfils a promise, safe bet)*
2. **As promised: your Cape Town workshop deck** *(restates a commitment, high open rate)*
3. **The deck from Monday's workshop is yours** *(specific day-of-week works if your send is mid-week post-event)*
4. **Yaron's slides from Cape Town - for your team** *(personalises the speaker, hints at sharability)*

### No-shows (registered but didn't attend)

Ranked by likely open rate:

1. **You missed Cape Town - here's the full workshop deck** *(direct, acknowledges + recovers)*
2. **Couldn't make it to Cape Town? The deck is yours anyway** *(question opener tests well)*
3. **6 sessions, ten case studies - everything you missed in Cape Town** *(specificity + recovery)*
4. **The Cape Town workshop deck, since you couldn't be there** *(soft, no shame)*

## Preview text (what shows after the subject in the inbox)

Each variant ships with its own preview text inside the HTML (the
hidden `<div>` just after `<body>`). If you override in Mailchimp,
use:

| Variant | Preview text |
|---|---|
| Attendees | Thanks for being in the room in Cape Town. The full MVNO Success Blueprint deck is yours to download - every slide we walked through together, ready to take back to your team. |
| No-shows | You signed up for MVNO Nation Africa Cape Town but couldn't make it. No worries - the full MVNO Success Blueprint deck is now yours to download. Everything we covered, none of the jet lag. |

## How to import into Mailchimp

### Option A - Paste-in-code (recommended)

1. Mailchimp dashboard → **Campaigns** → **Create Campaign** → **Email** → **Regular**
2. Pick the audience (your MVNO/telco list, segmented by attendance)
3. Subject line + preview text from above
4. **From name:** "Yaron Assabi at DSG" or "DSG" (sender name affects open rate ~5-10%; testing real-person-at-company beats company-only)
5. **From email:** something hosted on `dsg.co.za` (e.g. `yaron@dsg.co.za` or `hello@dsg.co.za`) - never use a `@gmail.com` for a business send, deliverability tanks
6. **Design step** → pick "Code your own" template → "Paste in code"
7. Open the relevant `.html` file → Cmd+A → Cmd+C → paste into the Mailchimp window
8. Mailchimp will auto-detect the merge tags (`*|UNSUB|*`, `*|HTML:LIST_ADDRESS_HTML|*`, `*|CURRENT_YEAR|*`). They resolve on send.
9. **Plain-text version** → click "Edit Plain-Text" → paste contents of the matching `.txt` file
10. **Preview & Test** → send a test to yourself first. Check on **desktop Gmail, mobile Gmail, and Outlook web** at minimum.

## Images: heads up

All `<img>` tags reference URLs on `https://mvno-cpt.vercel.app`.
As long as the Vercel deployment is live, the images render in
every client. If you find that some recipients see broken images
(common with corporate Outlook + the Gmail proxy), upload each
asset into Mailchimp's **Content Studio** and swap the URLs - the
same fix we used for the Africa pre-event email.

**Images used (all in `public/email/` and `public/images/dsg-logo.png`):**

- `/email/email-hero.jpg` - Camps Bay sunset hero
- `/images/dsg-logo.png` - top-left coloured header logo
- `/email/dsg-logo-white.png` · `mds-mark-white.png` · `dm-logo-white.png` · `mvne-logo-white.png` · `xanite-logo-white.png` · `cxg-logo-white.png` - bottom strip

If you migrate the site to a custom domain (e.g.
`cpt2026.dsg.co.za`), search-and-replace `https://mvno-cpt.vercel.app`
in both HTML files before sending.

## Merge tags used

| Tag | What it resolves to | Required? |
|---|---|---|
| `*|UNSUB|*` | One-click unsubscribe URL | **Yes** (CAN-SPAM / POPIA / GDPR) |
| `*|UPDATE_PROFILE|*` | Update preferences URL | Recommended |
| `*|FORWARD|*` | Forward-to-friend URL | Optional |
| `*|HTML:LIST_ADDRESS_HTML|*` | Your physical mailing address | **Yes** (CAN-SPAM legal requirement) |
| `*|CURRENT_YEAR|*` | Current year for footer | Recommended |

**Set the physical mailing address** in Mailchimp under *Account →
Settings → Required email footer content* before the campaign will
send. Use DSG's registered business address.

## Send timing

For an African B2B telco/MVNO audience:

- **Best days:** Tuesday, Wednesday, Thursday
- **Best time:** 09:00-10:30 SAST (Mailchimp's *Time Travel* feature handles localisation automatically)
- **Avoid:** Mondays, Fridays after 14:00, all of August, the week of African public holidays
- **Send window for this event:** the attendees send works best **same week** as the event (8-15 June 2026 - while the room still feels recent). The no-shows send is better **1-2 weeks after**, when the news that "you missed it" still stings just enough to drive the click.

## Tracking what works

Mailchimp reports opens, click-through (CTR), and unsubscribes by
default. The single conversion that matters is **clicks on the
"Download the deck" buttons** - both buttons in each HTML file point
to `https://mvno-cpt.vercel.app/#get-the-deck`, which scrolls
directly to the NDA form.

To attribute Supabase `cpt_leads` rows back to a specific campaign,
add a UTM parameter when you paste the link in Mailchimp:

```
# Attendees campaign
https://mvno-cpt.vercel.app/?utm_source=mailchimp&utm_medium=email&utm_campaign=cpt2026_attendees&utm_content=primary_cta#get-the-deck

# No-shows campaign
https://mvno-cpt.vercel.app/?utm_source=mailchimp&utm_medium=email&utm_campaign=cpt2026_no_shows&utm_content=primary_cta#get-the-deck
```

This lets you compare CTR + form-completion side-by-side. Typically
the attendees campaign converts 3-5× higher because the relationship
already exists.

## Pre-send checklist

- [ ] Subject + preview text set
- [ ] From name + verified sender domain configured
- [ ] Physical mailing address set in Mailchimp account
- [ ] Test send to yourself - opened and rendered correctly on desktop + mobile
- [ ] Spam-test using Mailchimp's built-in Inbox Preview
- [ ] Audience segmented correctly (attendees vs no-shows, no overlap)
- [ ] UTM parameters added to the deck link if you want campaign attribution
- [ ] Confirmed delivery time (Tuesday/Wednesday/Thursday 09:00-10:30 SAST)
- [ ] Heads-up sent to the DSG team - "deck downloads will start landing in cpt_leads a few minutes after we send"
