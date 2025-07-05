import type { NextConfig } from "next";

const repo = "mik.github.io";                 // your GH-Pages sub-folder
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },

  /* only add the prefix when we build for GitHub Pages */
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};

export default nextConfig;
