import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  skipTrailingSlashRedirect: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  allowedDevOrigins: ["*.janeway.replit.dev", "*.replit.dev", "*.repl.co"],

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  async rewrites() {
    return {
      beforeFiles: [
        { source: "/xfactory", destination: "/XfactorY" },
        { source: "/xfactory/:path*", destination: "/XfactorY/:path*" },
        {
          source: "/_next/static/immutable/:path*",
          destination:
            "https://x-factor-y-full-stack-cwlx.vercel.app/_next/static/immutable/:path*",
        },
        {
          source: "/__clerk/:path*",
          destination: "https://x-factor-y-full-stack-cwlx.vercel.app/__clerk/:path*",
        },
      ],
    };
  },

  async redirects() {
    return [
      { source: "/solutions", destination: "/projects", permanent: true },
      { source: "/sectors", destination: "/themes", permanent: true },
      { source: "/funding-partnerships", destination: "/partner", permanent: true },
      { source: "/insights", destination: "/projects", permanent: false },
    ];
  },
};

export default nextConfig;
