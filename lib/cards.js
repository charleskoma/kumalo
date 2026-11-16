"use strict";
/* Story cards. One function per layout, used by the home, category and article pages. */
const { esc, formatDate, postUrl } = require("./util");
const { photo } = require("./sanity");

const meta = (p, short) =>
  [formatDate(p.publishedAt), p.readTime ? `${p.readTime} min${short ? "" : " read"}` : ""].filter(Boolean).join(" · ");
const alt = (p) => (p.coverImage && p.coverImage.alt) || p.title;
const kicker = (p) => `<span class="kicker">${esc(p.category)}</span>`;
const dek = (p) => (p.excerpt ? `<p class="dek">${esc(p.excerpt)}</p>` : "");

// Big overlay story at the top of the homepage
const lead = (p) =>
  `<a class="lead" href="${postUrl(p.slug)}">${photo(p.coverImage, { widths: [640, 960, 1280], sizes: "(min-width:900px) 66vw, 100vw", ratio: 1.6, alt: alt(p), eager: true })}
  <div class="lead-body">${kicker(p)}<h2>${esc(p.title)}</h2>${dek(p)}<div class="meta">${meta(p)}</div></div></a>`;

// Small thumbnail + headline, stacked beside the lead
const mini = (p) =>
  `<a class="mini" href="${postUrl(p.slug)}"><div class="thumb">${photo(p.coverImage, { widths: [160, 240], sizes: "112px", ratio: 4 / 3, alt: alt(p) })}</div>
  <div>${kicker(p)}<h3>${esc(p.title)}</h3><div class="meta">${meta(p, true)}</div></div></a>`;

// Grid card
const card = (p) =>
  `<article class="card"><a href="${postUrl(p.slug)}"><div class="thumb">${photo(p.coverImage, { widths: [400, 600, 800], sizes: "(min-width:900px) 380px, (min-width:600px) 50vw, 100vw", ratio: 1.5, alt: alt(p) })}</div>
  ${kicker(p)}<h3>${esc(p.title)}</h3><div class="meta">${meta(p, true)}</div></a></article>`;

// Feed row: text left, thumbnail right
const row = (p) =>
  `<article class="row"><a href="${postUrl(p.slug)}"><div class="row-text">${kicker(p)}<h3>${esc(p.title)}</h3>${dek(p)}<div class="meta">${meta(p)}</div></div>
  <div class="thumb">${photo(p.coverImage, { widths: [240, 360, 480], sizes: "(min-width:600px) 180px, 112px", ratio: 1.5, alt: alt(p) })}</div></a></article>`;

module.exports = { lead, mini, card, row, meta };
