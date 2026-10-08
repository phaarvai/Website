import type { NextRequest } from "next/server";

const DASHBOARD_URL = "https://ai-energy-demand-dashboard.vercel.app/dashboard";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function page() {
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>AI Energy Demand Analytics</title>
    <style>
      html, body { margin: 0; height: 100%; background: #fff; }
      iframe { display: block; width: 100%; height: 100%; border: 0; }
    </style>
  </head>
  <body>
    <iframe
      src="${DASHBOARD_URL}"
      title="AI Energy Demand Analytics"
      allow="fullscreen"
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
