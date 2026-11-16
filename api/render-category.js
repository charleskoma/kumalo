"use strict";
const C = require("../lib/config");
const { query } = require("../lib/sanity");
const { esc, catUrl } = require("../lib/util");
const { page, send, notFound, unavailable } = require("../lib/layout");
const cards = require("../lib/cards");

const FIELDS = '{title, "slug": slug.current, category, excerpt, coverImage, author, publishedAt, readTime}';
const FILTER = '_type == "post" && category == $cat && defined(slug.current)';
const CATEGORY_QUERY = `{
  "items": *[${FILTER}] | order(publishedAt desc)[$from...$to]${FIELDS},
  "total": count(*[${FILTER}])
}`;

module.exports = async (req, res) => {
  const wanted = String(req.query.cat || "").toLowerCase();
  const cat = C.CATEGORIES.find((c) => c.toLowerCase() === wanted);
  if (!cat) return notFound(res, "category");

  const pageNo = Math.max(1, parseInt(req.query.page, 10) || 1);
  const size = C.PAGE_SIZE;

  let data;
  try {
    data = await query(CATEGORY_QUERY, { cat, from: (pageNo - 1) * size, to: pageNo * size });
  } catch (err) {
    console.error("category:", err);
    return unavailable(res);
  }

  const total = (data && data.total) || 0;
  const items = (data && data.items) || [];
  const pages = Math.max(1, Math.ceil(total / size));
  if (pageNo > pages) return notFound(res, "page");

  const pager =
    pages > 1
      ? `<nav class="pager" aria-label="Pages">
    ${pageNo > 1 ? `<a class="btn ghost" href="${esc(catUrl(cat, pageNo - 1))}">← Newer</a>` : "<span></span>"}
    <span class="muted">Page ${pageNo} of ${pages}</span>
    ${pageNo < pages ? `<a class="btn ghost" href="${esc(catUrl(cat, pageNo + 1))}">Older →</a>` : "<span></span>"}
  </nav>`
      : "";

  const body = items.length
    ? `<div class="list">${items.map(cards.row).join("")}</div>${pager}`
    : `<div class="empty"><h2>No ${esc(cat)} stories yet</h2><p>Check back soon — new stories go up regularly.</p><a class="btn" href="/">Back to the homepage</a></div>`;

  const main = `<div class="wrap narrow">
  <header class="page-head">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>${esc(cat)}</span></nav>
    <h1>${esc(cat)}</h1>
    <p class="muted">${total} ${total === 1 ? "story" : "stories"}</p>
  </header>
  ${body}
</div>`;

  send(
    res,
    page({
      title: `${cat} — ${C.SITE_NAME}`,
      description: `Kumalo ${cat} coverage — Ugandan news, updated daily.`,
      path: catUrl(cat, pageNo),
      active: cat,
      main,
    })
  );
};
