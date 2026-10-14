import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Abstract, Conference } from "./types";
import conference from "@/content/conference.json";

const DIR = path.join(process.cwd(), "content", "abstracts");

export function getConference(): Conference {
  return conference;
}

const htmlToText = (html: string) =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/\s+([.,;:!?])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

const asList = (v: unknown): string[] =>
  Array.isArray(v) ? v.map(String) : v ? String(v).split(",").map((s) => s.trim()) : [];

export function getAbstracts(): Abstract[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((file) => {
      const id = file.replace(/\.md$/, "");
      const { data, content } = matter(fs.readFileSync(path.join(DIR, file), "utf8"));
      if (!data.title) throw new Error(`content/abstracts/${file} is missing a "title"`);
      const html = marked.parse(content, { async: false }) as string;
      return {
        id,
        title: String(data.title),
        authors: asList(data.authors),
        supervisor: data.supervisor ? String(data.supervisor) : undefined,
        session: data.session ? String(data.session) : undefined,
        keywords: asList(data.keywords),
        pdf: data.pdf ? String(data.pdf) : undefined,
        order: typeof data.order === "number" ? data.order : 9999,
        html,
        text: htmlToText(html),
      };
    })
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export function getAbstract(id: string): Abstract | undefined {
  return getAbstracts().find((a) => a.id === id);
}

/** Prefix a site-relative path (e.g. "/pdfs/x.pdf") with the GitHub Pages base path. */
export function withBase(p: string): string {
  if (/^https?:\/\//.test(p)) return p;
  return (process.env.NEXT_PUBLIC_BASE_PATH || "") + (p.startsWith("/") ? p : "/" + p);
}
