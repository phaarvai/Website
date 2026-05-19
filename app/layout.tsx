import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Phaarvai — AI for Good, Built for Public Impact",
    template: "%s | Phaarvai",
  },
  description:
    "Phaarvai is an AI for Good company building practical technology solutions for governance, climate, economic development, startups, technology, and policy.",
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
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
