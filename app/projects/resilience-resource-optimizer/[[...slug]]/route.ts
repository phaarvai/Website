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
    </style>
  </head>
  <body>
    <iframe
      src="${APP_URL}"
      title="Resilience Resource Optimizer"
      allow="fullscreen; geolocation; camera; microphone; clipboard-read; clipboard-write"
    ></iframe>
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
