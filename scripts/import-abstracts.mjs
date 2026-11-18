#!/usr/bin/env node
// Turns the submission form's Excel export into one Markdown file per abstract.
//
//   npm run import -- path/to/responses.xlsx
//
// Safe to re-run: files previously created by this script (marked `source: form`)
// are replaced; hand-written abstracts and any `session`/`order`/`pdf` you added
// to an imported file are kept.
import fs from "node:fs";
import path from "node:path";
import readXlsxFile from "read-excel-file/node";
import matter from "gray-matter";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const OUT = path.join(ROOT, "content", "abstracts");
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, "scripts", "import-config.json"), "utf8"));

const file = process.argv[2];
if (!file) {
  console.error("Usage: npm run import -- path/to/responses.xlsx");
  process.exit(1);
}

// ---------- helpers ----------
const str = (v) => (v == null ? "" : String(v)).trim();
const norm = (s) => s.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim();

const slug = (s) => {
  const words = norm(s.replace(/[æÆ]/g, "ae").replace(/[øØ]/g, "o").replace(/[åÅ]/g, "a")).split(" ");
  let out = "";
  for (const w of words) {
    if ((out + "-" + w).length > 60) break;
    out = out ? out + "-" + w : w;
  }
  return out || "abstract";
};

const splitList = (s, re) =>
  str(s).split(re).map((x) => x.trim()).filter(Boolean);

const uniq = (xs) => {
  const seen = new Set();
  return xs.filter((x) => (seen.has(norm(x)) ? false : (seen.add(norm(x)), true)));
};

// Text pasted from a PDF has a hard line break every ~80 characters and words split with
// hyphens. Join those lines; keep real paragraph breaks (blank lines, or a newline after
// a long line that ends a sentence).
function cleanAbstract(raw) {
  let t = str(raw).replace(/\r\n?/g, "\n").replace(/[ \t]+\n/g, "\n");
  const paragraphs = t.split(/\n\s*\n/).flatMap((block) => {
    const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
    const out = [];
    let cur = "";
    for (const line of lines) {
      if (!cur) { cur = line; continue; }
      if (cur.length > 120 && /[.!?:]["”')]?$/.test(cur)) { out.push(cur); cur = line; continue; }
      if (/[A-Za-zÀ-ÿ]-$/.test(cur)) {
        cur = /^[a-zà-ÿ]/.test(line) ? cur.slice(0, -1) + line : cur + line; // resem-|ble → resemble
      } else {
        cur += " " + line;
      }
    }
    if (cur) out.push(cur);
    return out;
  });
  return paragraphs
    .map((p) =>
      p
        .replace(/\\(?:textit|emph)\{([^}]*)\}/g, "*$1*")
        .replace(/\\textbf\{([^}]*)\}/g, "**$1**")
        .replace(/\s{2,}/g, " ")
        .trim()
    )
    .join("\n\n");
}

const cleanSupervisor = (s) => str(s).replace(/^supervisors?:\s*/i, "").replace(/\s+/g, " ");

// ---------- read ----------
const sheets = await readXlsxFile(file);
const sheet = sheets.find((s) => s.sheet === cfg.sheet) ?? sheets[0];
const [header, ...rows] = sheet.data;
const col = {};
for (const [key, name] of Object.entries(cfg.columns)) {
  col[key] = header.findIndex((h) => str(h) === name);
}
for (const k of ["title", "authors", "abstract"]) {
  if (col[k] < 0) {
    console.error(`Column "${cfg.columns[k]}" not found in sheet "${sheet.sheet}". Check scripts/import-config.json.`);
    process.exit(1);
  }
}
const get = (row, k) => (col[k] >= 0 ? row[col[k]] : null);

const skipTitles = new Set(cfg.skipTitles.map(norm));
const skipStatuses = new Set(cfg.skipStatuses.map((s) => s.toLowerCase()));
const warnings = [];
const skipped = [];

// ---------- parse + merge duplicates (same title) ----------
const byTitle = new Map();
rows.forEach((row, i) => {
  const line = i + 2; // Excel row number
  const title = str(get(row, "title")).replace(/\s+/g, " ");
  if (!title && !str(get(row, "abstract"))) return;
  if (skipTitles.has(norm(title)) || skipStatuses.has(str(get(row, "status")).toLowerCase())) {
    skipped.push(`row ${line}: "${title}"`);
    return;
  }
  const entry = {
    line,
    time: get(row, "timestamp") ? new Date(get(row, "timestamp")).getTime() : line,
    title,
    authors: splitList(get(row, "authors"), /\s*(?:,|&|\band\b|;)\s*/),
    supervisor: cleanSupervisor(get(row, "supervisor")),
    keywords: uniq(splitList(get(row, "keywords"), /\s*(?:·|•|,|;|\\and\b)\s*/)),
    abstract: cleanAbstract(get(row, "abstract")),
  };
  const key = norm(title);
  const prev = byTitle.get(key);
  if (prev) {
    // keep the newest submission, but credit every author from both
    const [older, newer] = prev.time <= entry.time ? [prev, entry] : [entry, prev];
    newer.authors = uniq([...older.authors, ...newer.authors]);
    newer.mergedFrom = [...(older.mergedFrom ?? [older.line]), ...(newer.mergedFrom ?? []), newer.line];
    byTitle.set(key, newer);
  } else byTitle.set(key, entry);
});

// ---------- write ----------
fs.mkdirSync(OUT, { recursive: true });
const keep = {}; // fields added by hand to earlier imports
for (const f of fs.readdirSync(OUT).filter((f) => f.endsWith(".md"))) {
  const { data } = matter(fs.readFileSync(path.join(OUT, f), "utf8"));
  if (data.source === "form") {
    keep[f] = { session: data.session, order: data.order, pdf: data.pdf };
    fs.unlinkSync(path.join(OUT, f));
  }
}

const used = new Set(fs.readdirSync(OUT));
let written = 0;
for (const a of byTitle.values()) {
  const where = a.mergedFrom ? `rows ${a.mergedFrom.join("+")}` : `row ${a.line}`;
  if (!a.title) warnings.push(`${where}: missing title`);
  if (!a.authors.length) warnings.push(`${where}: missing authors`);
  if (!a.abstract) warnings.push(`${where}: missing abstract`);
  const words = a.abstract.split(/\s+/).filter(Boolean).length;
  if (words > cfg.wordLimit) warnings.push(`${where}: ${words} words (limit ${cfg.wordLimit}) — "${a.title}"`);
  if (/\\[a-zA-Z]+|\$[^$]+\$/.test(a.abstract)) warnings.push(`${where}: contains LaTeX that won't render — "${a.title}"`);
  if (a.mergedFrom) warnings.push(`${where}: duplicate title, merged (authors: ${a.authors.join(", ")}) — "${a.title}"`);

  let name = slug(a.title) + ".md";
  for (let n = 2; used.has(name); n++) name = `${slug(a.title)}-${n}.md`;
  used.add(name);

  const fm = { title: a.title, authors: a.authors };
  if (a.supervisor) fm.supervisor = a.supervisor;
  if (a.keywords.length) fm.keywords = a.keywords;
  for (const [k, v] of Object.entries(keep[name] ?? {})) if (v != null) fm[k] = v;
  fm.source = "form";

  fs.writeFileSync(path.join(OUT, name), matter.stringify("\n" + a.abstract + "\n", fm));
  written++;
}

console.log(`✓ Wrote ${written} abstracts to content/abstracts/`);
if (skipped.length) console.log(`\nSkipped (${skipped.length}):\n  ` + skipped.join("\n  "));
if (warnings.length) console.log(`\nCheck these (${warnings.length}):\n  ` + warnings.join("\n  "));
