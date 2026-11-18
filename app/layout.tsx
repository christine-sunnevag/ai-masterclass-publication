import type { Metadata } from "next";
import Link from "next/link";
import { getConference, withBase } from "@/lib/abstracts";
import "@fontsource-variable/open-sans";
import "@fontsource-variable/open-sans/wght-italic.css";
import "./globals.css";

const c = getConference();

export const metadata: Metadata = {
  title: { default: `${c.title} — ${c.subtitle ?? "Abstracts"}`, template: `%s · ${c.title}` },
  description: `${c.subtitle ?? "Abstracts"} from ${c.title}`,
  icons: { icon: withBase("/ntnu-logo.svg") },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="topbar">
          <div className="wrap topbar-inner">
            <a href="https://www.ntnu.edu/" className="logo" aria-label="NTNU – Norwegian University of Science and Technology">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={withBase("/ntnu-logo.svg")} alt="NTNU" width={194} height={36} />
            </a>
            <Link href="/" className="topbar-title">{c.title}</Link>
          </div>
        </div>
        {children}
        <footer className="site-footer">
          <div className="wrap footer-inner">
            <div>
              <strong>{c.title}</strong>
              {[c.date, c.location].filter(Boolean).length > 0 && (
                <span> · {[c.date, c.location].filter(Boolean).join(" · ")}</span>
              )}
            </div>
            <div className="vision">Knowledge for a better world</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
