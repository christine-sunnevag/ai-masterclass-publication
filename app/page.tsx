import { getAbstracts, getConference } from "@/lib/abstracts";
import AbstractList from "@/components/AbstractList";

export default function Home() {
  const c = getConference();
  const abstracts = getAbstracts();

  return (
    <>
      <header className="hero">
        <div className="wrap">
          {c.subtitle && <div className="eyebrow">{c.subtitle}</div>}
          <h1>{c.title}</h1>
          <p className="meta">{[c.date, c.location].filter(Boolean).join(" · ")}</p>
        </div>
      </header>
      <AbstractList abstracts={abstracts} />
    </>
  );
}
