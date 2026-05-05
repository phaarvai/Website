import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    return [
      {
        source: "/x-y/:path*",
        destination: "https://x-y-app-nextjs-app.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;