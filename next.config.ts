import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server bundle for VPS deployment (node .next/standalone/server.js).
  output: "standalone",
  images: {
    // All imagery is bundled locally under /public/assets.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
