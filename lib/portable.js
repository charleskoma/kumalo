"use strict";
/* Turns Sanity "Portable Text" (the article body) into HTML.
   Handles the block types in the Studio schema: paragraphs, h2/h3, quotes,
   bold/italic/links, inline images, and the video block (YouTube or uploaded file). */
const { esc, safeHref } = require("./util");
const { photo, fileUrl } = require("./sanity");

const youtubeId = (url) => {
  const m = String(url || "").match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/))([\w-]{11})/);
  return m ? m[1] : null;
};

function spans(children, markDefs) {
  return (children || [])
    .map((child) => {
      let out = esc(child.text);
      const marks = child.marks || [];
      if (marks.includes("strong")) out = `<strong>${out}</strong>`;
      if (marks.includes("em")) out = `<em>${out}</em>`;
      marks.forEach((key) => {
        const def = (markDefs || []).find((d) => d._key === key && d._type === "link");
        const href = def && def.href ? safeHref(def.href) : "#";
        if (def && href !== "#") out = `<a href="${esc(href)}" target="_blank" rel="noopener">${out}</a>`; // unsafe links stay plain text
      });
      return out;
    })
    .join("");
}

function caption(text) {
  return text ? `<figcaption>${esc(text)}</figcaption>` : "";
}

function renderBody(blocks) {
  if (!Array.isArray(blocks)) return "";
  return blocks
    .map((b) => {
      if (b._type === "block") {
        const tag = { h2: "h2", h3: "h3", blockquote: "blockquote" }[b.style] || "p";
        return `<${tag}>${spans(b.children, b.markDefs)}</${tag}>`;
      }
      if (b._type === "image") {
        const img = photo(b, { widths: [600, 900, 1200], sizes: "(min-width:760px) 740px, 100vw", alt: b.alt || "" });
        return img ? `<figure>${img}${caption(b.caption)}</figure>` : "";
      }
      if (b._type === "videoBlock") {
        if (b.source === "youtube") {
          const id = youtubeId(b.youtubeUrl);
          if (!id) return "";
          return (
            `<figure class="video-embed"><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${id}" ` +
            `title="${esc(b.caption || "YouTube video")}" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ` +
            `allowfullscreen loading="lazy"></iframe></div>${caption(b.caption)}</figure>`
          );
        }
        if (b.source === "upload" && b.uploadedFile) {
          const src = fileUrl(b.uploadedFile);
          return src ? `<figure class="video-embed"><video controls preload="metadata" src="${esc(src)}"></video>${caption(b.caption)}</figure>` : "";
        }
      }
      return "";
    })
    .join("");
}

module.exports = { renderBody };
