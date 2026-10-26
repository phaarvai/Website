import type { NextRequest } from "next/server";

const APP_URL = "https://aiman-knowledge-commons-iota.vercel.app/";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function page(targetUrl = APP_URL) {
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>AIMan Knowledge Commons — Phaarvai</title>
    <meta
      name="description"
      content="Human-in-the-Loop AI Knowledge Validation Platform"
    />
    <link rel="icon" href="/favicon.png" type="image/png" sizes="192x192" />
    <link rel="icon" href="/favicon.ico" sizes="48x48 192x192" />
    <style>
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background: #07060f;
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
      src="${targetUrl}"
      title="AIMan Knowledge Commons"
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

export function GET(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const prefix = "/projects/aiman-knowledge-commons";
  const subpath = pathname.startsWith(prefix) ? pathname.slice(prefix.length) : "";
  const targetUrl = subpath
    ? `${APP_URL.replace(/\/$/, "")}${subpath}${request.nextUrl.search}`
    : APP_URL;
  return page(targetUrl);
}

export function HEAD() {
  return new Response(null, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
  });
}
