"use client";
import { useState } from "react";

export default function CopyLink({ path }: { path?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="btn"
      onClick={async () => {
        const url = path ? new URL(path, location.origin).href : location.href;
        try {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {
          prompt("Copy this link:", url);
        }
      }}
    >
      {copied ? "Copied!" : "Copy link"}
    </button>
  );
}
