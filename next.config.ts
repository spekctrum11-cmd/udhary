import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
    ],
  },
  // Disable type checks during build to significantly reduce memory usage
  typescript: {
    ignoreBuildErrors: true,
  },

  // Aggressive memory optimizations for 512MB limit
  productionBrowserSourceMaps: false,
  experimental: {
    webpackMemoryOptimizations: true,
  },
};

export default nextConfig;
