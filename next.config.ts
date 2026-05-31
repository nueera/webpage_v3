import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    remotePatterns: [],
  },
};

export default nextConfig;
