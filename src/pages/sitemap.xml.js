import posts from '../posts.json';
import config from '../site.config.js';

// Essays are listed only when this site is their canonical home. While Substack holds
// the canonical, listing them here would ask search engines to index a page that says "not me".
export function GET({ site }) {
  const pages = ['/', '/about/', '/work/', '/mentor/', '/art/', '/blog/', '/systems/'];
  const essays = config.blog.canonical === 'substack' ? [] : posts.map((p) => ({ path: `/blog/${p.slug}/`, date: p.date }));
  const row = (path, date) => `<url><loc>${new URL(path, site).href}</loc>${date ? `<lastmod>${date}</lastmod>` : ''}</url>`;
  const body = [...pages.map((p) => row(p)), ...essays.map((e) => row(e.path, e.date))].join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
