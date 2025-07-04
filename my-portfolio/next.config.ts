import type { NextConfig } from "next";


  const nextConfig = {
    reactStrictMode: true,
    output: "export",
    images: { unoptimized: true },

    basePath: "/mik.github.io",
    assetPrefix: "/mik.github.io/",
  };
  export default nextConfig;
