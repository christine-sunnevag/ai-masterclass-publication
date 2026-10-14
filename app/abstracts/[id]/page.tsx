import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAbstract, getAbstracts, getConference, withBase } from "@/lib/abstracts";
import CopyLink from "@/components/CopyLink";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return getAbstracts().map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getAbstract((await params).id);
  return a ? { title: a.title, description: a.text.slice(0, 160) } : {};
}

export default async function AbstractPage({ params }: Props) {
  const a = getAbstract((await params).id);
  if (!a) notFound();
  const c = getConference();

  return (
    <main className="wrap detail">
      <Link href="/" className="back">← All abstracts</Link>
      {a.session && <div className="eyebrow">{a.session}</div>}
      <h1>{a.title}</h1>
      <div className="authors">{a.authors.join(", ")}</div>
      {a.supervisor && <div className="supervisor">Supervisor: {a.supervisor}</div>}
      {a.keywords.length > 0 && (
        <div className="tags">{a.keywords.map((k) => <span key={k} className="tag">{k}</span>)}</div>
      )}
      <div className="prose" dangerouslySetInnerHTML={{ __html: a.html }} />
      <div className="actions">
        {a.pdf && <a className="btn" href={withBase(a.pdf)} target="_blank" rel="noopener">Open PDF</a>}
        <CopyLink />
      </div>
      <footer className="detail-footer">{c.title}{c.date ? ` · ${c.date}` : ""}</footer>
    </main>
  );
}
