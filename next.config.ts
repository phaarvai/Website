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
    // XFactorY at /projects/xfactory (only these rules; no other app is affected). Every
    // /projects/xfactory/... request — pages, its /projects/xfactory/_next files and its Clerk
    // sign-in — is forwarded to the SAME path on the XFactorY deployment, which must be built for
    // this path (NEXT_PUBLIC_BASE_PATH=/projects/xfactory in the XFactorY Vercel project).
    // The path in the browser, the forwarded path and the XFactorY base path must be identical:
    // otherwise its pages 404 or its buttons (e.g. "Join Our Ecosystem") do not navigate.
    // Set XFACTORY_ORIGIN in this project's Vercel settings to that deployment's URL.
    // A trailing "/", "/xfactory" or "/projects/xfactory" in the value is ignored.
    const XFACTORY = (process.env.XFACTORY_ORIGIN || "https://x-factor-y-full-stack-cwlx.vercel.app")
      .trim()
      .replace(/\/+$/, "")
      .replace(/\/projects\/xfactory$/i, "")
      .replace(/\/xfactory$/i, "");
    return {
      beforeFiles: [
        { source: "/projects/xfactory", destination: `${XFACTORY}/projects/xfactory` },
        { source: "/projects/xfactory/:path*", destination: `${XFACTORY}/projects/xfactory/:path*` },
        // XFactorY's sign-in service (Clerk). Only XFactorY uses /__clerk on this website.
        { source: "/__clerk/:path*", destination: `${XFACTORY}/projects/xfactory/__clerk/:path*` },
      ],
    };
  },

  async redirects() {
    return [
      { source: "/solutions", destination: "/projects", permanent: true },
      { source: "/sectors", destination: "/themes", permanent: true },
      { source: "/funding-partnerships", destination: "/partner", permanent: true },
      { source: "/insights", destination: "/projects", permanent: false },
      { source: "/system", destination: "/projects", permanent: true },
      { source: "/systems", destination: "/projects", permanent: true },
      { source: "/project", destination: "/projects", permanent: true },
      { source: "/xfactory", destination: "/projects/xfactory", permanent: true },
      { source: "/xfactory/:path*", destination: "/projects/xfactory/:path*", permanent: true },
      { source: "/ai-energy", destination: "/projects/ai-energy", permanent: true },
      { source: "/ai-energy/:path*", destination: "/projects/ai-energy/:path*", permanent: true },
      { source: "/projects/x-y", destination: "/projects/xfactory", permanent: true },
      { source: "/projects/x-y/:path*", destination: "/projects/xfactory/:path*", permanent: false },
    ];
  },
};

export default nextConfig;
