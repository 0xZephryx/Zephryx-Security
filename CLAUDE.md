> # ⚠️ RETIRED — this repo is not deployed
>
> The four-site network was consolidated onto **`zephryx.in`**. This site's
> content now lives there at `/services/`, and `security.zephryx.in` serves
> permanent redirects only.
>
> **Do not add content or fix bugs here.** Work in the `zephryx.in` repo; its
> `CLAUDE.md` is the current one. Everything below this line describes the
> split architecture and is kept for history — several of its rules are now
> actively wrong, including any instruction to keep content on this domain.
>
> The redirect configuration and the retirement checklist are in
> `zephryx.in/docs/redirects.md`.

---

# Working notes for this repo

Next.js 15 App Router, static export (`out/`) served by Cloudflare Workers.
Sibling of `zephryx.in` and `zephryx-academy` — deliberately a separate
Worker so a bad push here can't take the other sites down.

This is the **commercial** site: penetration testing services sold to
startups and businesses. Unlike `zephryx-academy`'s pre-launch state, there
is no placeholder content here — services, pricing posture (custom-scoped,
not fixed packages), process, and the lead-capture form are all live.

## Where things live

- `src/lib/site.ts` is the single source of truth for identity, nav, the
  eight `SERVICES`, `PROCESS` steps, and `FAQ`. Nothing else should hardcode
  a service name, link, or email address. The services index and every
  `/services/[slug]/` page (via `generateStaticParams`) render entirely from
  the `SERVICES` array — adding or re-scoping a service is a one-place edit.
- `worker/index.ts` handles `/api/quote` and nothing else; every other
  request falls through to the static assets.
- `public/_headers` carries the CSP and the rest of the security headers,
  applied at the edge because a static export has no server to set them.

## Don't fabricate business credibility

This is a real services business, not a demo. Never invent client names,
testimonials, case studies, certifications, or specific pricing — none of
that exists yet and putting fake versions on a live site selling security
services is the kind of thing that gets a pentesting firm's own credibility
questioned. The credibility story this site tells is the honest one that's
actually verifiable: the same person runs `zephryx.in` (public writeups,
open-source tooling, published Sigma rules) and `zephryx-academy`, and that
public work is what's linked from `/about/` instead of claims that can't be
checked. If real testimonials, certs, or case studies exist later, add them
— just keep the same "verifiable, not asserted" standard.

Pricing is deliberately absent — every service says "scoped to your
environment" rather than listing numbers, because real pentest pricing
varies enormously with scope and inventing a price list would just be
another kind of fabrication. If real rate cards exist later, that's a
deliberate decision to add them, not a gap to quietly fill in.

## The request-assessment endpoint is the only attack surface — keep it that way

It is the sole piece of this site that accepts input, so the layers matter:
same-origin check, body-size cap, per-field caps, honeypot, submission
time-trap, DNS check on the email domain, service-id allow-list shape check,
optional KV rate limit. If you extend it, keep all of them and mirror any new
caps in `QuoteForm.tsx` so the client fails fast and identically.

Two rules worth stating outright:

- **Store before you notify.** A lead persisted to KV is the durable record;
  the email is a notification. A Resend outage must not lose a real business
  inquiry, which is why the handler returns success when the KV write
  succeeded even if the mail failed.
- **Never reflect a secret or an upstream error to the client.** Generic
  message to the visitor, detail to `console.error`.

## Other things worth knowing

- `npm run lint` is not usable — there's no ESLint config, so `next lint`
  drops into an interactive setup prompt. Use `npx tsc --noEmit` plus
  `npm run build`.
- The CSP is `default-src 'self'`. Any external script, font or analytics
  origin needs `public/_headers` widened first, and that should be a
  deliberate decision rather than a fix for a broken embed.
- If this site ever adds anything a reader might copy — a rule, a hash, an
  IOC — follow `zephryx.in`'s standing copy-control rule (see that repo's
  `CLAUDE.md`): nothing that exists to be taken should require a scroll-drag
  out of a `<pre>` to get it.
