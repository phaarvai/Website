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

  async redirects() {
    // XFactorY runs as its own app (sign-in, accounts and dashboards need their own address).
    // /xfactory on this site sends visitors there; /xfactory/live/... is the old iframe path.
    const XFACTORY = "https://x-factor-y-full-stack-cwlx.vercel.app";
    return [
      { source: "/xfactory/live", destination: `${XFACTORY}/`, permanent: false },
      { source: "/xfactory/live/:path*", destination: `${XFACTORY}/:path*`, permanent: false },
      { source: "/xfactory", destination: `${XFACTORY}/`, permanent: false },
      { source: "/xfactory/:path*", destination: `${XFACTORY}/:path*`, permanent: false },
      { source: "/XfactorY", destination: `${XFACTORY}/`, permanent: false },
      { source: "/XfactorY/:path*", destination: `${XFACTORY}/:path*`, permanent: false },
      { source: "/solutions", destination: "/projects", permanent: true },
      { source: "/sectors", destination: "/themes", permanent: true },
      { source: "/funding-partnerships", destination: "/partner", permanent: true },
      { source: "/insights", destination: "/projects", permanent: false },
    ];
  },
};

export default nextConfig;
