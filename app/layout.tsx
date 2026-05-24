import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: {
    default: "Phaarvai — AI for Good, Built for Public Impact",
    template: "%s | Phaarvai",
  },
  description:
    "Phaarvai develops AI-powered systems and intelligent infrastructure for governments, institutions, and real-world operational environments.",
  openGraph: {
    type: "website",
    siteName: "Phaarvai",
  },
  robots: { index: true, follow: true },
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
