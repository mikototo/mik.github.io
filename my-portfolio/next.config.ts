import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Enable static export (for GitHub Pages, etc.)
  output: "export",
  // Disable Next.js image optimization (since it's not supported with static export)
  images: {
    unoptimized: true,
  },
  // Optional: If your site will be hosted on a subpath, e.g.,
  // https://yourusername.github.io/your-repo, uncomment and adjust these:
  // basePath: "/your-repo",
  // assetPrefix: "/your-repo/",
};

export default nextConfig;
