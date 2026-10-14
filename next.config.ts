import type { NextConfig } from "next";

// On GitHub Pages the site lives under /<repo-name>. The deploy workflow sets
// PAGES_BASE_PATH for you; locally it is empty so the site runs at "/".
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",        // plain static HTML in ./out, hostable anywhere
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
