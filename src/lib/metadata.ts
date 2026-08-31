import type { Metadata } from 'next';
import { SITE } from './site';

/**
 * Next.js metadata merges `openGraph`/`twitter` shallowly: a page that sets
 * either object replaces the root layout's wholesale, rather than layering
 * page-specific fields onto the site defaults. A page that only overrides
 * `title`/`description` inherits the root's openGraph.title too, since the
 * `title.template` string interpolation only applies to the plain `title`
 * field — so it still previews as the homepage. This helper builds a
 * complete, self-sufficient openGraph + twitter pair for every page, so a
 * shared link always previews with that page's own title, description and
 * image rather than the generic root defaults.
 */
export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE.url}${path}`;
  // `title` goes through the root layout's `title.template` for the <title>
  // tag automatically, but openGraph.title/twitter.title are not templated —
  // they need the fully expanded string to match what the tab actually shows.
  const fullTitle = `${title} — ${SITE.name}`;
  // Setting openGraph here replaces the root's wholesale, which also drops
  // the root's auto-wired opengraph-image file-convention image — so every
  // page needs to point back at it explicitly.
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
      images: [{ url: `${SITE.url}/opengraph-image`, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@zephryxsec',
      creator: '@zephryxsec',
      title: fullTitle,
      description,
    },
  };
}
