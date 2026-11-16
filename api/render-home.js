"use strict";
const C = require("../lib/config");
const { query } = require("../lib/sanity");
const { esc, catUrl, postUrl } = require("../lib/util");
const { page, send, unavailable, newsletter } = require("../lib/layout");
const cards = require("../lib/cards");

const FIELDS = '{title, "slug": slug.current, category, excerpt, coverImage, author, publishedAt, readTime}';
const BASE = '_type == "post" && defined(slug.current)';

// One request: the newest stories plus the newest few for each homepage section.
const HOME_QUERY = `{
  "latest": *[${BASE}] | order(publishedAt desc)[0...24]${FIELDS},
  ${C.SECTIONS.map(
    (s, i) => `"s${i}": *[${BASE} && category in ${JSON.stringify(s.cats)}] | order(publishedAt desc)[0...3]${FIELDS}`
  ).join(",\n  ")}
}`;

const ticker = (posts) => {
  if (!posts.length) return "";
  const items = posts.slice(0, 6).map((p) => `<a href="${postUrl(p.slug)}">${esc(p.title)}</a>`).join("");
  const clone = items.replace(/<a /g, '<a tabindex="-1" ');
  return `<div class="ticker"><div class="wrap"><b>Latest</b><div class="ticker-track"><div class="ticker-move"><div>${items}</div><div aria-hidden="true">${clone}</div></div></div></div></div>`;
};

module.exports = async (req, res) => {
  let data;
  try {
    data = await query(HOME_QUERY);
  } catch (err) {
    console.error("home:", err);
    return unavailable(res);
  }

  const latest = (data && data.latest) || [];
  let main;

  if (!latest.length) {
    main = `<div class="wrap"><div class="empty"><h1>No stories yet</h1><p>Check back soon — new stories go up every day.</p></div></div>`;
  } else {
    const [top, ...rest] = latest;
    const side = rest.slice(0, 3);
    const feed = rest.slice(3);

    const sections = C.SECTIONS.map((s, i) => {
      const posts = (data["s" + i] || []).filter((p) => p && p.slug);
      if (!posts.length) return "";
      return `<section class="block" aria-labelledby="sec-${i}">
  <div class="section-head"><h2 id="sec-${i}">${esc(s.title)}</h2><div class="more">${s.cats.map((c) => `<a href="${catUrl(c)}">${esc(c)} →</a>`).join("")}</div></div>
  <div class="grid">${posts.map(cards.card).join("")}</div>
</section>`;
    }).join("");

    main = `<div class="wrap">
  <section class="hero" aria-label="Top stories">
    ${cards.lead(top)}
    ${side.length ? `<div class="side">${side.map(cards.mini).join("")}</div>` : ""}
  </section>
  <div class="layout">
    <section aria-labelledby="latest-h">
      <div class="section-head"><h2 id="latest-h">Latest</h2></div>
      ${feed.length ? feed.map(cards.row).join("") : '<p class="muted">More stories coming soon.</p>'}
    </section>
    <aside class="aside" aria-label="More from Kumalo">
      ${newsletter()}
      <section class="topics"><h2>Browse by topic</h2><div class="chips">${C.CATEGORIES.map((c) => `<a href="${catUrl(c)}">${esc(c)}</a>`).join("")}</div></section>
    </aside>
  </div>
  ${sections}
</div>`;
  }

  send(res, page({ title: C.DEFAULT_TITLE, path: "/", active: "home", before: ticker(latest), main }));
};
