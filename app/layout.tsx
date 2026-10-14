import type { Metadata } from "next";
import { getConference } from "@/lib/abstracts";
import "./globals.css";

const c = getConference();

export const metadata: Metadata = {
  title: { default: `${c.title} — ${c.subtitle ?? "Abstracts"}`, template: `%s · ${c.title}` },
  description: `${c.subtitle ?? "Abstracts"} from ${c.title}`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
