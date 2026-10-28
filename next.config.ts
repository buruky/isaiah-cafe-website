import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Resized on Cloudflare via the IMAGES binding in wrangler.jsonc.
    formats: ["image/avif", "image/webp"],
  },
  // Client admin lives on Pages CMS (see .pages.yml); /admin is just a memorable shortcut.
  async redirects() {
    return [
      { source: "/admin", destination: "https://app.pagescms.org/buruky/isaiah-cafe-website/main", permanent: false },
      // Target of the printed QR codes. Change the destination, never the source: the codes are already printed.
      { source: "/qr", destination: "/?utm_source=qr&utm_medium=print", permanent: false },
    ];
  },
};

export default nextConfig;
