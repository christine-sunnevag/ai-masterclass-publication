import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAbstract, getAbstracts, withBase } from "@/lib/abstracts";
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

  return (
    <>
      <header className="hero hero-detail">
        <div className="wrap">
          <Link href="/" className="back">← All abstracts</Link>
          {a.session && <div className="eyebrow">{a.session}</div>}
          <h1>{a.title}</h1>
          <p className="meta">{a.authors.join(", ")}</p>
        </div>
      </header>

      <div className="wrap layout detail">
        <article className="prose" dangerouslySetInnerHTML={{ __html: a.html }} />

        <aside className="facts">
          <dl>
            <dt>Author{a.authors.length > 1 ? "s" : ""}</dt>
            <dd>{a.authors.map((n) => <div key={n}>{n}</div>)}</dd>
            {a.supervisor && (
              <>
                <dt>Supervisor / partner</dt>
                <dd>{a.supervisor}</dd>
              </>
            )}
            {a.keywords.length > 0 && (
              <>
                <dt>Keywords</dt>
                <dd className="tags">{a.keywords.map((k) => <span key={k} className="tag">{k}</span>)}</dd>
              </>
            )}
          </dl>
          <div className="actions">
            {a.pdf && <a className="btn btn-primary" href={withBase(a.pdf)} target="_blank" rel="noopener">Open PDF</a>}
            <CopyLink />
          </div>
        </aside>
      </div>
    </>
  );
}
