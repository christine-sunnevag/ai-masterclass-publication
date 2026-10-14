import { getAbstracts, getConference } from "@/lib/abstracts";
import AbstractList from "@/components/AbstractList";

export default function Home() {
  const c = getConference();
  const abstracts = getAbstracts();

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          {c.subtitle && <div className="eyebrow">{c.subtitle}</div>}
          <h1>{c.title}</h1>
          <div className="meta">{[c.date, c.location].filter(Boolean).join(" · ")}</div>
        </div>
      </header>
      <AbstractList abstracts={abstracts} />
    </>
  );
}
