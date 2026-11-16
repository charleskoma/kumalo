"use strict";
const { SANITY } = require("./config");
const { esc } = require("./util");

// Read-only query against Sanity's CDN endpoint (fast, cached, safe for public datasets).
async function query(groq, params = {}) {
  const qs = new URLSearchParams({ query: groq });
  for (const [k, v] of Object.entries(params)) qs.set("$" + k, JSON.stringify(v));
  const url = `https://${SANITY.projectId}.apicdn.sanity.io/${SANITY.apiVersion}/data/query/${SANITY.dataset}?${qs}`;
  const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
  if (!res.ok) throw new Error(`Sanity responded ${res.status}`);
  return (await res.json()).result;
}

// "image-<id>-<width>x<height>-<ext>"
function parseRef(source) {
  const [, id, dims, ext] = String((source && source.asset && source.asset._ref) || "").split("-");
  if (!id || !dims || !ext) return null;
  const [w, h] = dims.split("x").map(Number);
  return { id, ext, w, h };
}

// Sanity image URL. With `ratio` (width/height) the image is cropped on Sanity's side,
// centred on the editor's hotspot if one was set.
function imageUrl(source, width, ratio) {
  const ref = parseRef(source);
  if (!ref) return "";
  let url = `https://cdn.sanity.io/images/${SANITY.projectId}/${SANITY.dataset}/${ref.id}-${ref.w}x${ref.h}.${ref.ext}?w=${width}&auto=format`;
  if (ratio) {
    url += `&h=${Math.round(width / ratio)}&fit=crop`;
    const hs = source.hotspot;
    if (hs && typeof hs.x === "number" && typeof hs.y === "number") url += `&crop=focalpoint&fp-x=${hs.x}&fp-y=${hs.y}`;
  }
  return url;
}

// Responsive <img> with srcset. Never asks Sanity for more pixels than the original has.
function photo(source, { widths = [480, 800, 1200], sizes = "100vw", ratio, alt = "", eager = false, cls = "" } = {}) {
  const ref = parseRef(source);
  if (!ref) return "";
  let ws = widths.filter((w) => w <= ref.w);
  if (!ws.length) ws = [Math.min(ref.w, widths[0])];
  const src = ws[Math.floor(ws.length / 2)];
  const h = Math.round(src / (ratio || ref.w / ref.h));
  const srcset = ws.map((w) => `${esc(imageUrl(source, w, ratio))} ${w}w`).join(", ");
  return (
    `<img${cls ? ` class="${cls}"` : ""} src="${esc(imageUrl(source, src, ratio))}" srcset="${srcset}" sizes="${sizes}" ` +
    `width="${src}" height="${h}" alt="${esc(alt)}" ` +
    (eager ? 'fetchpriority="high" decoding="async"' : 'loading="lazy" decoding="async"') +
    ">"
  );
}

// "file-<id>-<ext>"
function fileUrl(source) {
  const [, id, ext] = String((source && source.asset && source.asset._ref) || "").split("-");
  return id && ext ? `https://cdn.sanity.io/files/${SANITY.projectId}/${SANITY.dataset}/${id}.${ext}` : "";
}

module.exports = { query, imageUrl, photo, fileUrl };
