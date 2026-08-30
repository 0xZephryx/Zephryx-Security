/**
 * Single source of truth for identity, links, services and metadata.
 * Nothing else in the app should hardcode a link, an email address, or a
 * service name.
 */

export const SITE = {
  name: 'Zephryx Security',
  short: 'Security',
  // Same person as zephryx.in's `legalName` — stated here too so the Person
  // entity resolves to one identity across every domain in the network.
  legalName: 'Mihir Sarwan',
  parentName: 'Zephryx',
  parentUrl: 'https://zephryx.in',
  domain: 'security.zephryx.in',
  url: 'https://security.zephryx.in',
  tagline: 'Penetration testing for startups and growing businesses, run by the person who does the work.',
  description:
    'Zephryx Security is boutique offensive security — web, network, cloud, Active Directory and API penetration testing for startups and growing businesses, run by a working penetration tester and detection engineer. No bench of juniors, no scanner-and-forward: every engagement is tested, reported and retested by the same person you scoped it with.',
  locale: 'en_IN',
} as const;

export const MAILBOX = {
  address: 'hello@security.zephryx.in',
} as const;

/**
 * Secondary destinations: reachable from the footer, deliberately kept out
 * of the primary nav. The disclosure policy is centralized at
 * zephryx.in/security/ (same as this site's own security.txt Policy field
 * points there) rather than duplicated on each domain.
 */
export const FOOTER_LINKS: { href: string; label: string; asset: boolean; external: boolean }[] = [
  { href: '/privacy/', label: 'privacy', asset: false, external: false },
  { href: 'https://zephryx.in/security/', label: 'disclosure policy', asset: false, external: true },
  { href: '/.well-known/security.txt', label: 'security.txt', asset: true, external: false },
];

export type SocialLink = {
  id: string;
  label: string;
  handle: string;
  href: string;
  blurb: string;
  /** Simple-icons style path, drawn at 24x24. */
  icon: string;
  accent: string;
};

/**
 * Same channels as zephryx.in — one person, one set of accounts, shared
 * verbatim across every domain rather than re-curated per site.
 */
export const SOCIALS: SocialLink[] = [
  {
    id: 'youtube',
    label: 'YouTube',
    handle: '@0xZephryx',
    href: 'https://www.youtube.com/@0xZephryx',
    blurb: 'Long-form videos when I actually finish editing them — box walkthroughs, mostly.',
    accent: '#ff0033',
    icon: 'M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@0xzephryx',
    href: 'https://www.instagram.com/0xzephryx',
    blurb: 'The non-work stuff. Desk setup, conference trips, occasionally my face.',
    accent: '#e1306c',
    icon: 'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2ZM12 0C8.7 0 8.3 0 7 .1 5.7.1 4.8.3 4.1.6c-.8.3-1.4.7-2.1 1.4C1.3 2.7.9 3.3.6 4.1.3 4.8.1 5.7.1 7 0 8.3 0 8.7 0 12s0 3.7.1 5c0 1.3.2 2.2.5 2.9.3.8.7 1.4 1.4 2.1.7.7 1.3 1.1 2.1 1.4.7.3 1.6.5 2.9.5 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3 0 2.2-.2 2.9-.5.8-.3 1.4-.7 2.1-1.4.7-.7 1.1-1.3 1.4-2.1.3-.7.5-1.6.5-2.9.1-1.3.1-1.7.1-5s0-3.7-.1-5c0-1.3-.2-2.2-.5-2.9-.3-.8-.7-1.4-1.4-2.1C21.3 1.3 20.7.9 19.9.6 19.2.3 18.3.1 17 .1 15.7 0 15.3 0 12 0Zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.8-10.4a1.4 1.4 0 1 1-2.9 0 1.4 1.4 0 0 1 2.9 0Z',
  },
  {
    id: 'x',
    label: 'X / Twitter',
    handle: '@0xZephryx',
    href: 'https://x.com/0xZephryx',
    blurb: 'I end up posting most of my in-progress notes here before they turn into a full writeup.',
    accent: '#e7e9ea',
    icon: 'M18.9 1.2h3.7l-8.1 9.2 9.5 12.4h-7.4l-5.8-7.6-6.7 7.6H.4l8.6-9.9L0 1.2h7.6l5.2 6.9 6.1-6.9Zm-1.3 19.4h2L6.5 3.3H4.4l13.2 17.3Z',
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: '@0xZephryx',
    href: 'https://github.com/0xZephryx',
    blurb: "Where the actual code lives — tools I've built, PoCs, and the Sigma rules from this site.",
    accent: '#f0f6fc',
    icon: 'M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z',
  },
  {
    id: 'medium',
    label: 'Medium',
    handle: '@0xZephryx',
    href: 'https://medium.com/@0xZephryx',
    blurb: 'Longer-form writing that outgrew a site post — same research, more room to explain the reasoning.',
    accent: '#f0f6fc',
    icon: 'M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12ZM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12Z',
  },
  {
    id: 'tryhackme',
    label: 'TryHackMe',
    handle: 'zephryx',
    href: 'https://tryhackme.com/p/zephryx',
    blurb: 'Rooms, rank, and badges — receipts if you want proof I actually do this and not just write about it.',
    accent: '#c6002b',
    icon: 'M10.705 0C7.54 0 4.902 2.285 4.349 5.291a4.525 4.525 0 0 0-4.107 4.5 4.525 4.525 0 0 0 4.52 4.52h6.761a.625.625 0 1 0 0-1.25H4.761a3.273 3.273 0 0 1-3.27-3.27A3.273 3.273 0 0 1 6.59 7.08a.625.625 0 0 0 .7-1.035 4.488 4.488 0 0 0-1.68-.69 5.223 5.223 0 0 1 5.096-4.104 5.221 5.221 0 0 1 5.174 4.57 4.489 4.489 0 0 0-.488.305.625.625 0 1 0 .731 1.013 3.245 3.245 0 0 1 1.912-.616 3.278 3.278 0 0 1 3.203 2.61.625.625 0 0 0 1.225-.251 4.533 4.533 0 0 0-4.428-3.61 4.54 4.54 0 0 0-.958.105C16.556 2.328 13.9 0 10.705 0z',
  },
  {
    id: 'hackthebox',
    label: 'HackTheBox',
    handle: 'zephryx',
    href: 'https://profile.hackthebox.com/profile/01a01c0d-96cc-7136-8160-fe54d9ff1c52',
    blurb: 'Boxes, ranks, and challenges — the other half of the CTF receipts.',
    accent: '#9fef00',
    icon: 'm22.5106 6.4566.0008-.0123a.888.888 0 0 0-.2717-.6384c-.0084-.0084-.018-.0155-.0267-.0235-.0186-.0166-.0371-.0333-.0572-.0484-.0193-.0147-.04-.0276-.0607-.0406-.0096-.006-.0182-.0131-.0281-.0188L12.4576.1266a.891.891 0 0 0-.9223.0043L1.933 5.6744c-.0107.0062-.0203.014-.0307.0205-.0073.0047-.015.008-.0223.0128-.007.0047-.013.0106-.02.0155a.8769.8769 0 0 0-.147.1333l-.0026.003a.8872.8872 0 0 0-.2218.5847l.0009.014c-.0002.0088-.0015.0176-.0015.0264v11.0708c0 .3277.1802.6288.469.7836l9.5986 5.5417c.0076.0044.0158.0075.0236.0117a.8754.8754 0 0 0 .166.0687c.0134.004.0266.0083.0401.0117a.8793.8793 0 0 0 .072.0142c.0117.0019.0232.0045.0349.006a.835.835 0 0 0 .2157 0c.0117-.0015.0232-.0041.0348-.006a.9.9 0 0 0 .072-.0142c.0135-.0034.0267-.0077.04-.0117a.895.895 0 0 0 .0646-.0217.9134.9134 0 0 0 .1015-.047c.0078-.0042.016-.0072.0236-.0117l9.5986-5.5417a.8888.8888 0 0 0 .469-.7836V6.4779c0-.0071-.0012-.0142-.0014-.0213zM5.2543 6.0822l6.5367-3.774a.4182.4182 0 0 1 .4182 0l6.5366 3.774a.4182.4182 0 0 1 0 .7243l-6.5367 3.774a.4182.4182 0 0 1-.4182 0l-6.5366-3.774a.4182.4182 0 0 1 0-.7243zm5.6134 14.3449a.4172.4172 0 0 1-.626.3613L3.718 17.0218a.4173.4173 0 0 1-.2086-.3613V9.1279a.4172.4172 0 0 1 .6258-.3613l6.524 3.7666a.4172.4172 0 0 1 .2086.3614v7.5325zm9.623-3.7666a.4173.4173 0 0 1-.2086.3613l-6.5239 3.7666a.4172.4172 0 0 1-.6259-.3613v-7.5325c0-.149.0796-.2868.2087-.3614l6.5239-3.7666a.4172.4172 0 0 1 .6258.3613v7.5326z',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: '/in/zephryx',
    href: 'https://www.linkedin.com/in/zephryx/',
    blurb: "The boring-but-necessary one — work history, and how to reach me if it's actually business.",
    accent: '#0a66c2',
    icon: 'M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1a3.8 3.8 0 0 1 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Zm1.8 13H3.5V9h3.6v11.4ZM22.2 0H1.8A1.8 1.8 0 0 0 0 1.8v20.4C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.8c0-1-.8-1.8-1.8-1.8Z',
  },
  {
    id: 'mastodon',
    label: 'Mastodon',
    handle: '@zephryx',
    href: 'https://mastodon.social/@zephryx',
    blurb: 'Where the actual infosec community hangs out — most of my raw thoughts land here first.',
    accent: '#6364ff',
    icon: 'M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.837 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.523.363 3.084.546 4.65.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.34V9.396c0-1.133-.477-1.708-1.431-1.708-1.053 0-1.582.68-1.582 2.022v2.929h-2.327v-2.93c0-1.34-.529-2.021-1.582-2.021-.954 0-1.43.575-1.43 1.708v5.112H6.487V9.211c0-1.133.288-2.033.867-2.699.596-.666 1.377-1.008 2.345-1.008 1.12 0 1.967.43 2.529 1.29l.545.915.546-.915c.562-.86 1.41-1.29 2.529-1.29.968 0 1.749.342 2.345 1.008.579.666.867 1.566.867 2.699z',
  },
] as const;

/**
 * `external` marks a link to a different origin (the parent research site,
 * not a page on this one) — rendered as a plain anchor opened in a new tab
 * so it never enters client-side routing. The footer already carries a
 * dedicated zephryx.in link in its CONTACT column, so Footer filters this
 * entry out of the ROUTES list rather than showing it twice.
 */
/**
 * The rest of the network.
 *
 * Hostnames belong here rather than inline in a page, same rule as everything
 * else in this file — the research corpus moving to its own domain broke two
 * links on /about/ and a label in the footer precisely because those were
 * written out by hand where nobody would think to look for them.
 *
 * `blurb` is what each site is for. Three hostnames off one domain is exactly
 * the case where a bare hostname makes a reader guess.
 */
export const NETWORK = [
  {
    href: 'https://zephryx.in/',
    host: 'zephryx.in',
    label: 'Portfolio',
    blurb: 'Portfolio, tooling and CVEs, contact.',
  },
  {
    href: 'https://writeups.zephryx.in/',
    host: 'writeups.zephryx.in',
    label: 'Research',
    blurb: 'Writeups, detection rules, and the ATT&CK coverage board.',
  },
  {
    href: 'https://academy.zephryx.in/',
    host: 'academy.zephryx.in',
    label: 'Training',
    blurb: 'Hands-on offensive security tracks and free cheatsheets.',
  },
] as const;

/**
 * The public work this site points at as evidence.
 *
 * This is the credibility story: verifiable rather than asserted. Each entry
 * has to resolve directly — a link that only works via a redirect is a link
 * that will eventually stop working, and these exist to be checked.
 */
export const PUBLIC_WORK = [
  {
    href: 'https://writeups.zephryx.in/writeups/',
    label: 'writeups.zephryx.in/writeups',
    title: 'Writeups',
    blurb:
      'Attack-path research, dead ends included — the same reasoning that goes into a client engagement.',
  },
  {
    href: 'https://zephryx.in/arsenal/',
    label: 'zephryx.in/arsenal',
    title: 'Tooling',
    blurb:
      'Open-source recon and detection-engineering tools, including SigmaWarden, the Sigma-rule linter used to validate the rules delivered on Purple Team engagements.',
  },
  {
    href: 'https://writeups.zephryx.in/detections/',
    label: 'writeups.zephryx.in/detections',
    title: 'Detections',
    blurb:
      'Published Sigma rules mapped to MITRE ATT&CK — the format every Purple Team deliverable follows.',
  },
] as const;

export const NAV = [
  { href: '/', label: 'Home', cmd: '~', external: false },
  { href: '/services/', label: 'Services', cmd: 'ls', external: false },
  { href: '/process/', label: 'Process', cmd: 'run', external: false },
  { href: '/about/', label: 'About', cmd: 'whoami', external: false },
  { href: SITE.parentUrl, label: 'zephryx.in', cmd: 'parent', external: true },
  { href: '/contact/', label: 'Contact', cmd: 'handshake', external: false },
] as const;

export type Service = {
  id: string;
  title: string;
  short: string;
  tagline: string;
  summary: string;
  description: string;
  idealFor: string[];
  inScope: string[];
  deliverables: string[];
  duration: string;
};

export const SERVICES: Service[] = [
  {
    id: 'web-application-penetration-testing',
    title: 'Web Application Penetration Testing',
    short: 'Web App',
    tagline: 'Manual testing of the app your customers actually log into.',
    summary:
      'Authenticated and unauthenticated manual testing of your web application — auth, access control, business logic, injection, and the OWASP Top 10 done properly rather than skimmed.',
    description:
      "Automated scanners catch the obvious. They miss broken access control between two account roles, a business-logic flaw in a checkout flow, or an IDOR that only shows up once you understand what the app is for. This engagement is manual-first: the scanner runs, but the findings that matter come from reading the app the way an attacker would — mapping every role, every state transition, every place user input reaches a decision.",
    idealFor: [
      'SaaS products ahead of a launch, funding round, or enterprise deal',
      'Apps handling auth, payments, or customer data',
      'Teams that have only ever run an automated scan',
    ],
    inScope: [
      'Authentication, session management & authorization (including role/tenant isolation)',
      'Business logic abuse (pricing, checkout, invite/referral flows, rate limits)',
      'Injection classes: SQLi, SSTI, command injection, XXE',
      'XSS, CSRF, SSRF, and insecure deserialization',
      'API endpoints backing the app (see also API Security Testing)',
      'File upload, IDOR, and mass-assignment issues',
    ],
    deliverables: [
      'Scoped, written rules of engagement before anything is touched',
      'A findings report: CVSS-scored, reproducible, with a fix for each',
      'A live debrief walking through every finding with your team',
      'One free retest once fixes ship',
    ],
    duration: 'Typically 1–3 weeks depending on the size of the app',
  },
  {
    id: 'network-infrastructure-penetration-testing',
    title: 'Network & Infrastructure Penetration Testing',
    short: 'Network',
    tagline: 'External perimeter and internal network, tested the way an intruder would move.',
    summary:
      'External perimeter testing to find what an internet-facing attacker can reach, and internal testing to find how far a foothold travels once someone is already in.',
    description:
      "External testing answers 'what can someone on the internet reach and break into.' Internal testing answers the harder question: once a laptop is phished or a foothold lands, how far does it go before someone notices? That second question is where most real breaches actually happen, and it's the one automated scans can't answer at all.",
    idealFor: [
      'Companies with their own VPCs, VPNs, or on-prem infrastructure',
      'Businesses about to open a new office network or acquire another company\'s infrastructure',
      'Anyone who has never had lateral movement tested, only the firewall',
    ],
    inScope: [
      'External attack surface enumeration and exploitation',
      'Internal network segmentation and lateral movement',
      'Credential exposure, weak services, and default configurations',
      'Firewall and VPN configuration review',
      'Privilege escalation paths from a standard foothold',
    ],
    deliverables: [
      'Scoped, written rules of engagement before anything is touched',
      'A findings report: CVSS-scored, reproducible, with a fix for each',
      'A live debrief walking through every finding with your team',
      'One free retest once fixes ship',
    ],
    duration: 'Typically 1–2 weeks per network segment',
  },
  {
    id: 'active-directory-security-assessment',
    title: 'Active Directory Security Assessment',
    short: 'Active Directory',
    tagline: 'The attack paths that turn one phished laptop into domain admin.',
    summary:
      'The specific attack paths — Kerberoasting, ACL abuse, delegation misconfiguration, credential relay — that turn a single compromised workstation into full domain control.',
    description:
      "Active Directory is where most real internal compromises end, not where they start. A misconfigured ACL three hops from a help-desk account, a service account with an old password and an SPN, unconstrained delegation left on from a migration years ago — none of that shows up in a vulnerability scan, and all of it is how domains actually fall. This assessment builds and chains those attack paths the way a real intrusion does, then hands you the graph so you can see exactly which fix breaks which path.",
    idealFor: [
      'Any business running Windows AD for identity — most mid-size companies do',
      'Post-acquisition environments where two domains were merged in a hurry',
      'Teams who\'ve had a pentest before but it never actually touched AD',
    ],
    inScope: [
      'Kerberoasting & AS-REP roasting',
      'ACL and delegation abuse (constrained, unconstrained, RBCD)',
      'Credential relay and pass-the-hash paths',
      'GPO and trust misconfiguration',
      'Domain admin path mapping from a standard user foothold',
    ],
    deliverables: [
      'Scoped, written rules of engagement before anything is touched',
      'An attack-path map, not just a findings list — see which fix collapses which path',
      'A findings report: CVSS-scored, reproducible, with a fix for each',
      'One free retest once fixes ship',
    ],
    duration: 'Typically 1–2 weeks',
  },
  {
    id: 'cloud-security-assessment',
    title: 'Cloud Security Assessment',
    short: 'Cloud',
    tagline: 'AWS, Azure, or GCP configuration reviewed like an attacker with a leaked key.',
    summary:
      'Configuration review and exploitation testing across AWS, Azure, or GCP — IAM, storage, network boundaries, and the identity chains that turn one leaked key into an account takeover.',
    description:
      "Cloud breaches are almost never a zero-day — they're a public bucket, an over-permissioned IAM role, a Lambda that trusts input it shouldn't, or a secret sitting in an environment variable three roles away from admin. This assessment reviews configuration against the cloud provider's own hardening guidance and then tries to actually exploit the gaps: what does one leaked access key, one compromised service, or one over-scoped role actually get an attacker.",
    idealFor: [
      'Companies born in the cloud with no on-prem network to test',
      'Teams scaling infrastructure faster than their IAM policies',
      'Anyone about to hand a customer a security questionnaire',
    ],
    inScope: [
      'IAM policy and privilege-escalation path review',
      'Storage, database, and secret exposure (public buckets, open indices, hardcoded keys)',
      'Network boundary and security group configuration',
      'Serverless and container misconfiguration',
      'Identity federation and cross-account trust chains',
    ],
    deliverables: [
      'Scoped, written rules of engagement before anything is touched',
      'A findings report: CVSS-scored, reproducible, with a fix for each',
      'A live debrief walking through every finding with your team',
      'One free retest once fixes ship',
    ],
    duration: 'Typically 1–2 weeks per cloud account/environment',
  },
  {
    id: 'api-security-testing',
    title: 'API Security Testing',
    short: 'API',
    tagline: 'REST and GraphQL tested against OWASP API Top 10, endpoint by endpoint.',
    summary:
      'REST and GraphQL APIs tested for broken object-level authorization, mass assignment, rate-limit gaps, and the rest of the OWASP API Security Top 10 — the class of bug that never shows up in a UI walkthrough.',
    description:
      "Most APIs ship faster than the frontend that calls them, which means the frontend hides bugs the API doesn't fix. Broken object-level authorization — one user's ID swapped for another's in a request that still returns 200 — is the single most common API finding, and it's invisible if you only click through the UI. This engagement tests the API directly: every endpoint, every role, every object reference.",
    idealFor: [
      'Products with a public or partner-facing API',
      'Mobile apps where most of the real logic lives server-side',
      'Multi-tenant SaaS where tenant isolation is the whole security model',
    ],
    inScope: [
      'Broken object & function-level authorization (BOLA/BFLA)',
      'Mass assignment and excessive data exposure',
      'Rate limiting, resource exhaustion, and abuse of business flows',
      'Authentication & token handling (JWT misconfig, key confusion, replay)',
      'GraphQL-specific issues: introspection, query depth, batching abuse',
    ],
    deliverables: [
      'Scoped, written rules of engagement before anything is touched',
      'A findings report: CVSS-scored, reproducible, with a fix for each',
      'A live debrief walking through every finding with your team',
      'One free retest once fixes ship',
    ],
    duration: 'Typically 1–2 weeks depending on endpoint count',
  },
  {
    id: 'social-engineering-phishing-simulation',
    title: 'Social Engineering & Phishing Simulation',
    short: 'Phishing',
    tagline: 'Test the control that every other control depends on — your people.',
    summary:
      'Realistic, scoped phishing campaigns that measure click-through, credential submission, and reporting rate — with the goal of building a training plan, not a shame list.',
    description:
      "Every technical control in this list sits behind one human clicking a link or not. A phishing simulation measures where that line actually holds — click rate, credential-submission rate, and (the metric that matters most) how many people reported it. Results are aggregate by design: this is built to fix a process, not to name names.",
    idealFor: [
      'Companies onboarding new hires faster than security awareness training keeps up',
      'Teams that want a baseline before rolling out training or a reporting button',
      'Businesses handling wire transfers or sensitive data over email',
    ],
    inScope: [
      'Pretext design scoped and approved with you in advance',
      'Simulated phishing send with tracked click/submit/report rates',
      'Optional pretext calls (vishing) where in scope',
      'Aggregate reporting — never named individual results',
    ],
    deliverables: [
      'Written pretext and scope sign-off before any send',
      'Aggregate results report with click, submission, and report rates',
      'Concrete recommendations for training and reporting workflow',
    ],
    duration: 'Typically a 1–2 week campaign window',
  },
  {
    id: 'purple-team-detection-engineering',
    title: 'Purple Team: Attack Simulation + Detection Engineering',
    short: 'Purple Team',
    tagline: "Every attack path comes back as the Sigma rule that would have caught it.",
    summary:
      "The differentiator: every technique run during the engagement is handed back as a detection rule your SOC can actually deploy, not just a paragraph telling you to 'improve monitoring.'",
    description:
      "Most pentest reports end at 'here's what we found.' This one keeps going: every technique that was actually run — the Kerberoast, the lateral movement, the C2 beacon — comes back mapped to MITRE ATT&CK and paired with a Sigma detection rule for it, tested against your own logs where possible. This is the same detection-engineering work published openly on zephryx.in, applied to your environment instead of a lab. You get to see not just where you're exposed, but exactly what you'd need logging to catch it next time.",
    idealFor: [
      'Teams with a SOC or SIEM who want detections, not just findings',
      'Companies that have already run a standard pentest and want the other half',
      'Anyone who wants to know what their logging would have actually caught',
    ],
    inScope: [
      'Scoped attack simulation across chosen techniques (web, network, AD, or cloud)',
      'MITRE ATT&CK mapping for every technique executed',
      'A Sigma rule per technique, validated against your log sources where accessible',
      'Log-source coverage gap analysis',
    ],
    deliverables: [
      'Scoped, written rules of engagement before anything is touched',
      'Attack narrative mapped to ATT&CK, technique by technique',
      'A ready-to-deploy Sigma rule set with coverage notes',
      'A live debrief with both the offensive and detection teams if you have them',
    ],
    duration: 'Typically 2–3 weeks',
  },
  {
    id: 'compliance-ready-penetration-testing',
    title: 'Compliance-Ready Penetration Testing',
    short: 'Compliance',
    tagline: 'A real test that also produces the artifact your auditor asked for.',
    summary:
      'A genuine, manual penetration test — not a rubber stamp — scoped and reported to satisfy the pentest requirement in SOC 2, ISO 27001, or a customer security questionnaire.',
    description:
      "SOC 2 and ISO 27001 both expect an annual penetration test, and most auditors will accept a report from an independent tester as long as it's real testing with a clear methodology, scope, and remediation evidence. This engagement is the same manual testing as the rest of this list, scoped and written specifically to satisfy that requirement — a report your auditor recognizes, not a scanner PDF with a logo on it.",
    idealFor: [
      'Companies mid-way through a SOC 2 or ISO 27001 audit',
      'Startups closing enterprise deals that require a recent pentest report',
      'Anyone who has been handed a security questionnaire with a pentest checkbox on it',
    ],
    inScope: [
      'Scope agreed jointly against your audit requirements before testing starts',
      'Manual testing of the in-scope system(s) — web, network, cloud, or a combination',
      'A report formatted for auditor and customer consumption',
      'Attestation letter confirming test dates, scope, and methodology on request',
    ],
    deliverables: [
      'Scoped, written rules of engagement mapped to your compliance requirement',
      'An auditor-ready findings report with remediation evidence',
      'One free retest once fixes ship, with updated evidence',
    ],
    duration: 'Typically 1–3 weeks depending on scope',
  },
];

export function getService(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}

export type ProcessStep = {
  n: string;
  title: string;
  body: string;
};

export const PROCESS: ProcessStep[] = [
  {
    n: '01',
    title: 'Scoping call',
    body: "A short call to understand what you're building, what's in scope, and what 'done' looks like for you. No engagement starts without this — scope written from a form nobody read is how testing goes sideways.",
  },
  {
    n: '02',
    title: 'Rules of engagement',
    body: 'A written scope document: exact targets, testing windows, what is and isn\'t authorized, and an emergency contact on both sides. You sign it before anything is touched — this is also what makes the testing legal.',
  },
  {
    n: '03',
    title: 'Testing',
    body: "Manual testing against the agreed scope. You get a status check-in at the midpoint of any engagement over a week, and immediate notice — not a footnote in the final report — if something critical or exploitable-right-now turns up.",
  },
  {
    n: '04',
    title: 'Reporting & debrief',
    body: 'A written report: every finding reproducible, severity-scored, with a specific fix — not "harden your configuration." Then a live call to walk through it with whoever is going to actually fix it.',
  },
  {
    n: '05',
    title: 'Retest',
    body: 'One retest of the reported findings is included once fixes ship, confirming what closed and what didn\'t — so the report you hand to a customer or an auditor reflects the current state, not the day testing ended.',
  },
];

export type FaqItem = { q: string; a: string };

export const FAQ: FaqItem[] = [
  {
    q: 'How is this different from an automated vulnerability scan?',
    a: 'A scanner checks for known signatures and misconfigurations. It cannot understand what your app or network is for, so it cannot find a business-logic flaw, an authorization bug between two account roles, or an attack path that chains three small issues into one serious one. Every engagement here is manual-first; automated tooling supports it but never replaces the person doing the testing.',
  },
  {
    q: 'Will testing affect our production systems?',
    a: "That's exactly what the rules-of-engagement step exists to control. Testing windows, excluded targets, and anything destructive (like denial-of-service style testing) are agreed in writing before testing starts, and are opt-in, not default.",
  },
  {
    q: 'Do you sign an NDA before you see anything?',
    a: "Yes, standard practice, before scoping details are shared and again as part of the rules of engagement. I test other people's businesses for a living — confidentiality isn't optional.",
  },
  {
    q: 'What do we actually receive at the end?',
    a: 'A written report with every finding reproducible and severity-scored, a specific fix for each one, a live debrief call with your team, and one free retest once fixes ship. See the Process page for the full breakdown.',
  },
  {
    q: 'Can this satisfy our SOC 2 / ISO 27001 pentest requirement?',
    a: "Usually, yes — see Compliance-Ready Penetration Testing. Most auditors accept a report from an independent tester as long as the methodology and scope are documented, which every engagement here already produces as standard output.",
  },
  {
    q: 'Do you offer ongoing or retainer testing?',
    a: "Yes, for teams shipping fast enough that an annual test doesn't cover it. Get in touch and it's scoped the same way as a one-off engagement — no pre-set package, no forcing your environment into a template that doesn't fit it.",
  },
  {
    q: "Why work with one person instead of a firm?",
    a: "Every engagement, from scoping call to final retest, is run by the same person — not handed to whoever is on the bench that week. That means direct access to the tester throughout, and a report written by someone who was actually there, not assembled from a junior's notes.",
  },
];
