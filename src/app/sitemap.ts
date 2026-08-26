import type { MetadataRoute } from 'next';
import { NAV, SERVICES, SITE } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = NAV.filter((item) => !item.external).map((item) => ({
    url: `${SITE.url}${item.href}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: item.href === '/' ? 1 : 0.8,
  }));

  const services: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE.url}/services/${s.id}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...pages,
    ...services,
    { url: `${SITE.url}/privacy/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
