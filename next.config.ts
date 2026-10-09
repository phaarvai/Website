import type { NextConfig } from "next";
import path from "node:path";

const XFACTORY = "https://x-factor-y-full-stack-cwlx.vercel.app";

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

  allowedDevOrigins: [
    "*.janeway.replit.dev",
    "*.replit.dev",
    "*.repl.co",
  ],

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/xfactory",
          destination: `${XFACTORY}/xfactory`,
        },
        {
          source: "/xfactory/:path*",
          destination: `${XFACTORY}/xfactory/:path*`,
        },
      ],
    };
  },

  async redirects() {
    return [
      // Keep legacy XFactorY links on the Phaarvai domain.
      {
        source: "/xfactory/live",
        destination: "/xfactory",
        permanent: false,
      },
      {
        source: "/xfactory/live/:path*",
        destination: "/xfactory/:path*",
        permanent: false,
      },
      {
        source: "/XfactorY",
        destination: "/xfactory",
        permanent: false,
      },
      {
        source: "/XfactorY/:path*",
        destination: "/xfactory/:path*",
        permanent: false,
      },

      // Existing Phaarvai website redirects.
      {
        source: "/solutions",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/sectors",
        destination: "/themes",
        permanent: true,
      },
      {
        source: "/funding-partnerships",
        destination: "/partner",
        permanent: true,
      },
      {
        source: "/insights",
        destination: "/projects",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
