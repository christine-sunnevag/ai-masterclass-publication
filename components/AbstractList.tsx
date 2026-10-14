"use client";

import Link from "next/link";
import { Fragment, useMemo, useState } from "react";
import type { Abstract } from "@/lib/types";

function Highlight({ text, q }: { text: string; q: string }) {
  if (!q) return <>{text}</>;
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return (
    <>
      {text.split(re).map((part, i) =>
        i % 2 ? <mark key={i}>{part}</mark> : <Fragment key={i}>{part}</Fragment>
      )}
    </>
  );
}

function snippet(text: string, q: string, len = 220) {
  if (!q) return text.length > len ? text.slice(0, len).trimEnd() + "…" : text;
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i < 0) return text.slice(0, len) + (text.length > len ? "…" : "");
  const start = Math.max(0, i - 80);
  return (start ? "…" : "") + text.slice(start, start + len) + (start + len < text.length ? "…" : "");
}

export default function AbstractList({ abstracts }: { abstracts: Abstract[] }) {
  const [query, setQuery] = useState("");
  const [session, setSession] = useState<string | null>(null);

  const sessions = useMemo(
    () => [...new Set(abstracts.map((a) => a.session).filter(Boolean))] as string[],
    [abstracts]
  );

  const q = query.trim();
  const hits = useMemo(() => {
    const ql = q.toLowerCase();
    return abstracts.filter(
      (a) =>
        (!session || a.session === session) &&
        (!ql ||
          [a.title, a.authors.join(" "), a.keywords.join(" "), a.text, a.supervisor, a.session]
            .join(" ")
            .toLowerCase()
            .includes(ql))
    );
  }, [abstracts, q, session]);

  const grouped = sessions.length > 1 && !session;
  const groups = grouped
    ? [...sessions, undefined].map((s) => ({ s, items: hits.filter((a) => a.session === s) }))
    : [{ s: undefined, items: hits }];

  return (
    <>
      <div className="controls">
        <div className="wrap">
          <input
            className="search"
            type="search"
            placeholder="Search titles, authors, keywords, abstract text…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
          {sessions.length > 1 && (
            <div className="chips">
              {[null, ...sessions].map((s) => (
                <button
                  key={s ?? "all"}
                  className="chip"
                  aria-pressed={session === s}
                  onClick={() => setSession(s)}
                >
                  {s ?? "All"}
                </button>
              ))}
            </div>
          )}
          <div className="count">
            {hits.length} of {abstracts.length} abstract{abstracts.length === 1 ? "" : "s"}
          </div>
        </div>
      </div>

      <main className="wrap list">
        {hits.length === 0 && <div className="empty">No abstracts match “{q}”.</div>}
        {groups.map(({ s, items }) =>
          items.length ? (
            <section key={s ?? "_"}>
              {grouped && <h3 className="session-title">{s ?? "Other"}</h3>}
              {items.map((a) => (
                <Link key={a.id} href={`/abstracts/${a.id}/`} className="card">
                  <h2><Highlight text={a.title} q={q} /></h2>
                  <div className="authors"><Highlight text={a.authors.join(", ")} q={q} /></div>
                  <p className="snippet"><Highlight text={snippet(a.text, q)} q={q} /></p>
                  {a.keywords.length > 0 && (
                    <div className="tags">
                      {a.keywords.map((k) => (
                        <span key={k} className="tag"><Highlight text={k} q={q} /></span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </section>
          ) : null
        )}
      </main>
    </>
  );
}
