# Deploying security.zephryx.in

The site is a static Next.js export (`out/`) served by a Cloudflare Worker
that also answers `/api/quote`. This is a **separate Worker** from
`zephryx-in` and `zephryx-academy` — all three deploy independently on
purpose.

## 1. First deploy

```bash
npm install
npx wrangler login      # once per machine
npm run deploy          # next build + wrangler deploy
```

That creates a Worker named `zephryx-security` and uploads `out/` as its
static assets. It will be live on its `*.workers.dev` URL immediately.

## 1a. Workers Builds (Git integration)

If this repo is connected to Cloudflare's Git integration (Workers & Pages →
zephryx-security → Settings → Build), it runs a **Build command** followed by
a deploy command on every push — but the Build command is empty by default,
which skips `next build` entirely and leaves Wrangler looking for an `out/`
directory that was never created. Set:

- **Build command**: `npm run build`

Workers Builds does not read any build config from `wrangler.jsonc` (Cloudflare
docs: [Configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)),
so this has to be set in the dashboard, not the repo.

## 2. Custom domain

In the Cloudflare dashboard: **Workers & Pages → zephryx-security → Settings
→ Domains & Routes → Add → Custom domain**, and enter `security.zephryx.in`.

Cloudflare creates the DNS record itself — you do not need to add a CNAME by
hand, and you should not, because a manually created record will conflict
with the one the Worker binding wants.

`zephryx.in` must already be on Cloudflare nameservers (it is — the main site
runs there), so no nameserver change is involved.

## 3. Secrets and variables

The request-assessment endpoint needs a mail sender. Set the secret from the
CLI:

```bash
npx wrangler secret put RESEND_API_KEY
```

The two non-secret values are already in `wrangler.jsonc` and deploy with the
Worker:

| Variable    | Value                                        |
| ----------- | --------------------------------------------- |
| `LEAD_TO`   | `contact@zephryx.in`                           |
| `LEAD_FROM` | `Zephryx Security <noreply@mail.zephryx.in>`   |

`LEAD_FROM` must be a sender on a domain verified in Resend. `mail.zephryx.in`
is already verified for the sibling sites' forms, so this reuses it.

`LEAD_TO` points at `contact@zephryx.in` rather than a `security.zephryx.in`
subdomain address on purpose: `zephryx.in` mail is hosted externally (not
Cloudflare Email Routing, which is disabled on the zone), and a
`security.zephryx.in`-scoped address would need its own mail hosting set up
before it could receive anything. `contact@zephryx.in` is already a live,
delivering inbox — confirmed via the Resend "Sending" log — so reuse it
unless a dedicated inbox for this site gets set up later.

## 4. KV namespaces — already provisioned

Both namespaces exist on the account already and their ids are wired into
`wrangler.jsonc`. Nothing to do here unless you're rotating them:

```bash
npx wrangler kv namespace create LEADS
npx wrangler kv namespace create LEADS_RL
```

Each command prints an `id`. Update `wrangler.jsonc`:

```jsonc
"kv_namespaces": [
  { "binding": "LEADS", "id": "<id from the first command>" },
  { "binding": "LEADS_RL", "id": "<id from the second command>" }
]
```

- **`LEADS`** — stores each request under `lead:<timestamp>:<lowercased
  email>`. With this bound, a Resend outage no longer loses a lead: the Worker
  stores first, mails second, and returns success if the store succeeded.
- **`LEADS_RL`** — IP rate limit, 5 requests per hour. Without it the endpoint
  still has the origin check, the size caps, the honeypot and the time-trap,
  but no per-IP ceiling.

Read the list back with:

```bash
npx wrangler kv key list --binding LEADS
```

## 5. Verifying

```bash
curl -I https://security.zephryx.in/                        # 200, security headers present
curl -I https://security.zephryx.in/nope/                   # 404 from out/404.html
curl -X GET https://security.zephryx.in/api/quote           # 405
curl -X POST https://security.zephryx.in/api/quote \
  -H 'content-type: application/json' -d '{}'                # 403 — no Origin header
```

The last one returning 403 is the point: the endpoint only accepts
same-origin submissions, so a bare `curl` is supposed to be rejected. Test the
real path by submitting the form on the live site.

## Notes

- `public/_headers` carries the CSP and the rest of the security headers,
  applied at the edge to every static asset. Adding an external script, font
  or analytics origin means widening that policy — `default-src 'self'`
  blocks it otherwise.
- The Worker runs first on every request (`run_worker_first: true`). Anything
  that is not `/api/*` falls straight through to the static assets.
- To roll back, `npx wrangler rollback` or redeploy from an earlier commit.
  The static assets are versioned with the Worker.
