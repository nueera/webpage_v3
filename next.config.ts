import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    remotePatterns: [],
  },
};

export default nextConfig;
