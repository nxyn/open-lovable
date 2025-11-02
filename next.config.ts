import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static generation for better performance
  experimental: {
    optimizePackageImports: ['@mendable/firecrawl-js', 'lucide-react'],
    turbo: {
      loaders: {
        '.svg': ['@svgr/webpack'],
      },
    },
  },

  // Image optimization for Vercel
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },

  // Build optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Output configuration
  output: 'standalone',

  // Environment variables
  env: {
    FIRECRAWL_API_KEY: process.env.FIRECRAWL_API_KEY,
  },

  // Headers for API routes
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },

  // Rewrites for clean URLs
  async rewrites() {
    return [
      {
        source: '/api/scrape-website',
        destination: '/api/scrape-website',
      },
      {
        source: '/api/scrape-url-enhanced',
        destination: '/api/scrape-url-enhanced',
      },
      {
        source: '/api/search',
        destination: '/api/search',
      },
    ];
  },
};

export default nextConfig;
