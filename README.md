# AI Masterclass: abstracts site

Next.js (React + TypeScript) site that publishes every extended abstract from the conference.
It has search, session filters, and one page plus one shareable link per abstract. It builds to plain
static HTML and deploys to GitHub Pages automatically when you push to `main`.

## Run it locally
Requires Node.js 20.9 or later (`node -v` to check; get it from nodejs.org otherwise).

```bash
npm install      # first time only
npm run dev      # → http://localhost:3000, reloads on every save
```

## Add or edit an abstract
Each abstract is one Markdown file in `content/abstracts/`. The file name becomes the URL
(`content/abstracts/thermal-sar.md` → `/abstracts/thermal-sar/`), so use lowercase-with-dashes.

Copy `content/abstracts/_TEMPLATE.md.txt` to `your-id.md` and fill it in:

```markdown
---
title: "Title of the abstract"
authors: ["First Author", "Second Author"]
supervisor: "Supervisor Name"            # optional
session: "Session name"                  # optional: groups + filter buttons
keywords: ["keyword one", "keyword two"] # optional
pdf: "/pdfs/my-abstract.pdf"             # optional: file goes in public/pdfs/
order: 10                                # optional: lower comes first
---

Abstract text in Markdown. Blank line between paragraphs.
```

Delete the three `example-*.md` files before the conference.
Conference name, date and venue are in `content/conference.json`.

## Publish on GitHub Pages
1. Create an empty **public** repo on GitHub.
2. Push:
   ```bash
   git init && git add . && git commit -m "Abstracts site"
   git branch -M main
   git remote add origin https://github.com/<user>/<repo>.git
   git push -u origin main
   ```
3. On GitHub go to **Settings → Pages → Source: GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys. After 1–2 minutes the site is at
   `https://<user>.github.io/<repo>/`. You can follow progress under the **Actions** tab.

After that, every `git push` to `main` updates the live site.

## Project structure
```
content/abstracts/*.md     ← the abstracts (the only thing you normally edit)
content/conference.json    ← conference name / date / venue
public/pdfs/               ← optional PDF files
app/page.tsx               ← front page
app/abstracts/[id]/        ← one page per abstract
components/AbstractList.tsx← search + filters (client component)
lib/abstracts.ts           ← reads and parses the Markdown files
```

`npm run build` writes the static site to `out/`, which you can host anywhere (Netlify, Vercel, a uni server).
