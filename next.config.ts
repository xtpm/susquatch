import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep local preview assets separate from production build output. Running
  // `next build` while the preview is open can otherwise leave stale chunks.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
};

export default nextConfig;
