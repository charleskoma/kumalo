"use strict";
const C = require("../lib/config");
const { query } = require("../lib/sanity");
const { postUrl, catUrl } = require("../lib/util");

const xml = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const day = (iso) => (iso ? String(iso).slice(0, 10) : "");
const entry = (path, lastmod) =>
  `  <url><loc>${xml(C.BASE_URL + path)}</loc>${lastmod ? `<lastmod>${day(lastmod)}</lastmod>` : ""}</url>`;

module.exports = async (req, res) => {
  let posts;
  try {
    posts = await query('*[_type == "post" && defined(slug.current)] | order(publishedAt desc){"slug": slug.current, publishedAt, _updatedAt}');
  } catch (err) {
    // Return an error (not a post-less sitemap) so Google keeps its last good copy and retries.
    console.error("sitemap:", err);
    res.status(503).setHeader("Cache-Control", "no-store");
    return res.send("Sitemap temporarily unavailable");
  }

  const newest = posts[0] && (posts[0]._updatedAt || posts[0].publishedAt);
  const urls = [
    entry("/", newest),
    ...C.CATEGORIES.map((c) => entry(catUrl(c))),
    entry("/about.html"),
    entry("/privacy.html"),
    ...posts.map((p) => entry(postUrl(p.slug), p._updatedAt || p.publishedAt)),
  ];

  res.status(200);
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400");
  res.send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`);
};
