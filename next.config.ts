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
    // XFactorY at /xfactory (only these two rules; no other app is affected). Every
    // /xfactory/... request — pages, its /xfactory/_next files and its Clerk sign-in at
    // /xfactory/__clerk — is forwarded to the XFactorY deployment built for this path
    // (NEXT_PUBLIC_BASE_PATH=/xfactory). Set XFACTORY_ORIGIN in this project's Vercel settings
    // to that deployment's URL. The standalone XFactorY deployment stays separate.
    // A trailing "/" or "/xfactory" in the value is ignored.
    const XFACTORY = (process.env.XFACTORY_ORIGIN || "https://x-factor-y-full-stack-cwlx.vercel.app")
      .trim()
      .replace(/\/+$/, "")
      .replace(/\/xfactory$/i, "");
    return {
      beforeFiles: [
        { source: "/xfactory", destination: `${XFACTORY}/xfactory` },
        { source: "/xfactory/:path*", destination: `${XFACTORY}/xfactory/:path*` },
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
