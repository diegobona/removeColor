import type { APIRoute } from 'astro';
import { seoPages } from '../data/seoPages';

const staticPaths = ['/', ...seoPages.map((page) => `/${page.slug}/`)];

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL('https://removecolor.com');
  const urls = staticPaths
    .map((path) => {
      const loc = new URL(path, baseUrl).toString();

      return `<url><loc>${loc}</loc><changefreq>weekly</changefreq><priority>${path === '/' ? '1.0' : '0.8'}</priority></url>`;
    })
    .join('');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
