import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.phaarvai.com"),
  title: {
    default: "Phaarvai — Applied AI & Intelligent Infrastructure",
    template: "%s | Phaarvai",
  },
  description:
    "Phaarvai designs, deploys, and operates AI-powered systems and intelligent infrastructure for enterprise, government, and institutional environments.",
  openGraph: {
    type: "website",
    siteName: "Phaarvai",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.ico", sizes: "48x48 192x192" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <SiteChrome>{children}</SiteChrome>
        </Providers>
      </body>
    </html>
  );
}
