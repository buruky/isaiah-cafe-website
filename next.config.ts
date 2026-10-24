import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Resized on Cloudflare via the IMAGES binding in wrangler.jsonc.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
