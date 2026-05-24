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

  async redirects() {
    return [
      { source: "/solutions", destination: "/projects", permanent: true },
      { source: "/sectors", destination: "/themes", permanent: true },
      { source: "/funding-partnerships", destination: "/partner", permanent: true },
      { source: "/contact", destination: "/partner", permanent: true },
      { source: "/insights", destination: "/projects", permanent: false },
    ];
  },
};

export default nextConfig;
