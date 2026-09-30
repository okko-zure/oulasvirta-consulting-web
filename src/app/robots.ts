import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

/** Everything may be crawled. Preview deployments are kept out of search engines by Vercel itself (X-Robots-Tag). */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
