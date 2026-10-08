import type { NextRequest } from "next/server";

const ORIGIN = "https://x-factor-y-full-stack-cwlx.vercel.app";
const PREFIX = "/XfactorY";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const HOP_BY_HOP = new Set([
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailers",
  "transfer-encoding",
  "upgrade",
  "content-encoding",
  "content-length",
]);

const STRIP_RESPONSE_HEADERS = new Set([
  "x-frame-options",
  "content-security-policy",
  "content-security-policy-report-only",
]);

function buildUpstreamUrl(request: NextRequest, slug?: string[]) {
  const path = slug?.length ? `/${slug.map(encodeURIComponent).join("/")}` : "/";
  const upstream = new URL(path, ORIGIN);
  upstream.search = request.nextUrl.search;
  return upstream;
}

function rewriteLocation(location: string) {
  try {
    const url = new URL(location, ORIGIN);
    if (url.origin === ORIGIN || location.startsWith("/")) {
      const prefixed = url.pathname === "/" ? PREFIX : `${PREFIX}${url.pathname}`;
      return `${prefixed}${url.search}${url.hash}`;
    }
  } catch {
    /* keep original */
  }
  return location;
}

function rewriteText(content: string) {
  let next = content.split(ORIGIN).join("");

  // Keep the live app under /XfactorY so the address bar stays on Phaarvai.
  next = next.replace(
    /([`"'])\/(?!\/)(?!XfactorY(?:\/|[`"'?#]|$))/g,
    `$1${PREFIX}/`
  );

  next = next.replace(/url\(\/(?!\/)(?!XfactorY\/)/g, `url(${PREFIX}/`);

  next = next.split(`${PREFIX}${PREFIX}`).join(PREFIX);

  return next;
}

function shouldRewriteBody(contentType: string | null) {
  if (!contentType) return false;
  return (
    contentType.includes("text/html") ||
    contentType.includes("text/css") ||
    contentType.includes("javascript") ||
    contentType.includes("application/json") ||
    contentType.includes("text/x-component") ||
    contentType.includes("+json")
  );
}

function filterRequestHeaders(headers: Headers) {
  const out = new Headers();
  headers.forEach((value, key) => {
    const lower = key.toLowerCase();
    if (HOP_BY_HOP.has(lower)) return;
    if (lower === "host") return;
    if (lower === "origin") {
      out.set("origin", ORIGIN);
      return;
    }
    if (lower === "referer") {
      out.set("referer", ORIGIN + "/");
      return;
    }
    out.set(key, value);
  });
  out.set("accept-encoding", "identity");
  return out;
}

function filterResponseHeaders(headers: Headers) {
  const out = new Headers();
  headers.forEach((value, key) => {
    const lower = key.toLowerCase();
    if (HOP_BY_HOP.has(lower) || STRIP_RESPONSE_HEADERS.has(lower)) return;
    if (lower === "location") {
      out.set(key, rewriteLocation(value));
      return;
    }
    out.set(key, value);
  });
  return out;
}

async function proxy(request: NextRequest, slug?: string[]) {
  const upstreamUrl = buildUpstreamUrl(request, slug);
  const init: RequestInit = {
    method: request.method,
    headers: filterRequestHeaders(request.headers),
    redirect: "manual",
  };

  if (request.method !== "GET" && request.method !== "HEAD") {
    init.body = await request.arrayBuffer();
  }

  const upstream = await fetch(upstreamUrl, init);
  const contentType = upstream.headers.get("content-type");
  const responseHeaders = filterResponseHeaders(upstream.headers);

  if (request.method === "HEAD" || !shouldRewriteBody(contentType)) {
    return new Response(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: responseHeaders,
    });
  }

  const text = await upstream.text();
  const rewritten = rewriteText(text);
  responseHeaders.delete("content-length");

  return new Response(rewritten, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers: responseHeaders,
  });
}

type RouteContext = {
  params: Promise<{ slug?: string[] }>;
};

export async function GET(request: NextRequest, context: RouteContext) {
  const { slug } = await context.params;
  return proxy(request, slug);
}

export async function HEAD(request: NextRequest, context: RouteContext) {
  const { slug } = await context.params;
  return proxy(request, slug);
}

export async function POST(request: NextRequest, context: RouteContext) {
  const { slug } = await context.params;
  return proxy(request, slug);
}

export async function PUT(request: NextRequest, context: RouteContext) {
  const { slug } = await context.params;
  return proxy(request, slug);
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  const { slug } = await context.params;
  return proxy(request, slug);
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  const { slug } = await context.params;
  return proxy(request, slug);
}

export async function OPTIONS(request: NextRequest, context: RouteContext) {
  const { slug } = await context.params;
  return proxy(request, slug);
}
