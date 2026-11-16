"use strict";
const pages = require("../lib/pages");
const { page, send, notFound } = require("../lib/layout");

module.exports = (req, res) => {
  const name = String(req.query.name || "");
  const p = Object.prototype.hasOwnProperty.call(pages, name) ? pages[name] : null;
  if (!p) return notFound(res);
  send(
    res,
    page({
      title: p.title.includes("Kumalo") ? p.title : `${p.title} — Kumalo`,
      description: p.description,
      path: `/${name}.html`,
      main: `<div class="wrap"><div class="prose">${p.html}</div></div>`,
    }),
    { cache: "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400" }
  );
};
