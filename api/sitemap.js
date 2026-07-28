// Generates sitemap.xml on every request, listing the real homepage,
// About/Privacy, every category page, and every published post — pulled
// live from Sanity. Nothing here needs hand-editing when you publish.

const SANITY_PROJECT_ID = "y0yye7lu";
const SANITY_DATASET = "production";
const SANITY_API_VERSION = "v2024-01-01";
const BASE_URL = "https://www.kumalo.biz";

const CATEGORIES = ["Politics", "Business", "Sports", "Entertainment", "Lifestyle", "Health", "Culture", "Events"];

function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toDateOnly(iso) {
  if (!iso) return null;
  const d = new Date(iso);
  if (isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 10);
}

function buildXml(urls) {
  const body = urls
    .map(function (u) {
      const lastmodTag = u.lastmod ? "\n    <lastmod>" + u.lastmod + "</lastmod>" : "";
      return "  <url>\n    <loc>" + escapeXml(u.loc) + "</loc>" + lastmodTag + "\n  </url>";
    })
    .join("\n");
  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    body +
    "\n</urlset>"
  );
}

async function fetchPublishedPosts() {
  const query = '*[_type == "post" && defined(slug.current)]{ "slug": slug.current, publishedAt, _updatedAt }';
  const url =
    "https://" + SANITY_PROJECT_ID + ".api.sanity.io/" + SANITY_API_VERSION + "/data/query/" + SANITY_DATASET +
    "?query=" + encodeURIComponent(query);
  const res = await fetch(url);
  if (!res.ok) throw new Error("Sanity request failed: " + res.status);
  const json = await res.json();
  return json.result || [];
}

module.exports = async (req, res) => {
  const staticUrls = [
    { loc: BASE_URL + "/", lastmod: null },
    { loc: BASE_URL + "/about.html", lastmod: null },
    { loc: BASE_URL + "/privacy.html", lastmod: null },
  ];

  const categoryUrls = CATEGORIES.map(function (c) {
    return { loc: BASE_URL + "/category.html?cat=" + encodeURIComponent(c), lastmod: null };
  });

  let postUrls = [];
  try {
    const posts = await fetchPublishedPosts();
    postUrls = posts.map(function (p) {
      return {
        loc: BASE_URL + "/post.html?slug=" + encodeURIComponent(p.slug),
        lastmod: toDateOnly(p._updatedAt || p.publishedAt),
      };
    });
  } catch (e) {
    // If Sanity is briefly unreachable, still return the static pages
    // rather than failing the whole sitemap.
    postUrls = [];
  }

  const xml = buildXml(staticUrls.concat(categoryUrls, postUrls));

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400");
  res.status(200).send(xml);
};
