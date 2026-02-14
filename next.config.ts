import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
      "@components": path.resolve(__dirname, "components"),
      "@styles": path.resolve(__dirname, "styles"),
      "@app": path.resolve(__dirname, "app"),
    };
    return config;
  },
};

export default nextConfig;
