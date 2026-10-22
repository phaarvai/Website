import type { NextRequest } from "next/server";

const APP_URL = "https://resilience-resource-optimizer-zq3c.vercel.app/";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function page() {
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Resilience Resource Optimizer — Phaarvai</title>
    <meta
      name="description"
      content="Child-centered climate resilience planning and municipal resource optimization."
    />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <style>
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background: #f9fafb;
        overflow: hidden;
      }
      iframe {
        display: block;
        width: 100%;
        height: 100%;
        border: 0;
      }
      .back-to-site {
        position: fixed;
        bottom: 16px;
        left: 16px;
        z-index: 9999;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(15, 23, 42, 0.88);
        color: #ffffff;
        padding: 8px 14px;
        border-radius: 9999px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        font-size: 12px;
        font-weight: 500;
        text-decoration: none;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
        backdrop-filter: blur(8px);
        transition: background 0.2s ease, transform 0.2s ease;
      }
      .back-to-site:hover {
        background: rgba(15, 23, 42, 1);
        transform: translateY(-1px);
      }
    </style>
  </head>
  <body>
    <iframe
      src="${APP_URL}"
      title="Resilience Resource Optimizer"
      allow="fullscreen; geolocation; camera; microphone; clipboard-read; clipboard-write"
    ></iframe>
    <a href="/projects" class="back-to-site" aria-label="Back to Phaarvai Projects">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m15 18-6-6 6-6"/>
      </svg>
      <span>Back to Phaarvai</span>
    </a>
  </body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

export function GET(_request: NextRequest) {
  return page();
}

export function HEAD() {
  return new Response(null, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
  });
}
