import { type NextRequest } from "next/server";

const ORIGIN = "https://x-factor-y-full-stack-cwlx.vercel.app";
const PREFIX = "/xfactory/live";

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

const BOOT = `<script>(function(){if(window.top===window)return;var prefix="/xfactory/live";window.TURBOPACK_CHUNK_BASE_PATH=prefix+"/_next/";function bare(path){if(path===prefix||path===prefix+"/")return"/";if(path.indexOf(prefix+"/")===0)return path.slice(prefix.length)||"/";return path}function partsOf(url){var hash="",search="",path=url,hi=url.indexOf("#");if(hi>=0){hash=url.slice(hi);path=url.slice(0,hi)}var si=path.indexOf("?");if(si>=0){search=path.slice(si);path=path.slice(0,si)}return{path:path,search:search,hash:hash}}function prefixed(path){if(path.indexOf(prefix)===0)return path;return prefix+(path.charAt(0)==="/"?path:"/"+path)}function rewrite(url){if(typeof url!=="string")return url;var abs=url;if(url.indexOf(location.origin)===0)abs=url.slice(location.origin.length);if(abs.charAt(0)!=="/"||abs.charAt(1)==="/")return url;var p=partsOf(abs);return prefixed(bare(p.path))+p.search+p.hash}var next=bare(location.pathname);if(next!==location.pathname)history.replaceState(history.state,"",next+location.search+location.hash);function asPath(input){if(typeof input==="string")return input;if(typeof URL!=="undefined"&&input instanceof URL)return input.pathname+input.search+input.hash;if(typeof Request!=="undefined"&&input instanceof Request)return input.url;return null}var origFetch=window.fetch;window.fetch=function(input,init){var path=asPath(input);if(path){var nextUrl=rewrite(path);if(nextUrl!==path){if(typeof input==="string"||(typeof URL!=="undefined"&&input instanceof URL))input=nextUrl;else input=new Request(nextUrl,input)}}return origFetch.call(this,input,init)};var origOpen=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(method,url){if(typeof url==="string")arguments[1]=rewrite(url);return origOpen.apply(this,arguments)};document.addEventListener("click",function(event){if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;var node=event.target&&event.target.closest?event.target.closest("a"):null;if(!node||node.target==="_blank")return;var href=node.getAttribute("href");if(!href||href.charAt(0)==="#")return;var target=rewrite(href);if(typeof target!=="string"||target.indexOf(prefix)!==0)return;event.preventDefault();event.stopPropagation();location.assign(target)},true)})();</script>`;

function shell() {
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>XFactorY</title>
    <style>
      html, body, iframe { margin: 0; width: 100%; height: 100%; border: 0; background: #fff; }
      body { overflow: hidden; }
    </style>
  </head>
  <body>
    <iframe src="${PREFIX}" title="XFactorY"></iframe>
  </body>
</html>`;
  return new Response(html, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
  });
}

function upstreamPath(slug: string[]) {
  const rest = slug[0] === "live" ? slug.slice(1) : slug;
  if (rest.some((part) => part === ".." || part.includes("\\") || part.includes("/"))) return "/";
  return rest.length ? `/${rest.join("/")}` : "/";
}

function rewriteBody(content: string, contentType: string) {
  let next = content.split(ORIGIN).join("");
  next = next.split("https://www.phaarvai.com").join(PREFIX);
  next = next.split("https://phaarvai.com").join(PREFIX);
  if (contentType.includes("text/html")) {
    next = next.replace(
      /(\s(?:href|src|action|srcset|imagesrcset)=["'])\/(?!\/|xfactory\/)/gi,
      `$1${PREFIX}/`
    );
    next = next.replace(/,(\s*)\/(?!\/|xfactory\/)/g, `,$1${PREFIX}/`);
    next = next.replace(/url\(\/(?!\/|xfactory\/)/g, `url(${PREFIX}/`);
    next = next.replace(/(["'])\/__clerk/g, `$1${PREFIX}/__clerk`);
    next = next.replace(/(["'])\/_next\//g, `$1${PREFIX}/_next/`);
    if (next.includes("<head>")) next = next.replace("<head>", `<head>${BOOT}`);
    else next = BOOT + next;
  } else if (contentType.includes("text/css")) {
    next = next.replace(/url\(\/(?!\/|xfactory\/)/g, `url(${PREFIX}/`);
  }
  next = next.split(`${PREFIX}${PREFIX}`).join(PREFIX);
  return next;
}

function filterRequestHeaders(headers: Headers) {
  const out = new Headers();
  headers.forEach((value, key) => {
    const lower = key.toLowerCase();
    if (HOP_BY_HOP.has(lower) || lower === "host") return;
    if (
      lower === "x-forwarded-host" ||
      lower === "x-forwarded-proto" ||
      lower === "x-forwarded-port" ||
      lower === "x-forwarded-for" ||
      lower === "forwarded" ||
      lower === "x-real-ip" ||
      lower === "x-vercel-forwarded-for" ||
      lower === "x-vercel-id"
    ) {
      return;
    }
    if (lower === "origin") {
      out.set("origin", ORIGIN);
      return;
    }
    if (lower === "referer") {
      out.set("referer", `${ORIGIN}/`);
      return;
    }
    out.set(key, value);
  });
  out.set("accept-encoding", "identity");
  return out;
}

function toProxyLocation(value: string) {
  try {
    const url = new URL(value, ORIGIN);
    const host = url.hostname;
    const onApp =
      value.startsWith("/") ||
      host === "x-factor-y-full-stack-cwlx.vercel.app" ||
      host === "phaarvai.com" ||
      host === "www.phaarvai.com" ||
      host === "localhost";
    if (!onApp) return value;
    if (url.pathname === PREFIX || url.pathname.startsWith(`${PREFIX}/`)) {
      return `${url.pathname}${url.search}${url.hash}`;
    }
    const path = url.pathname === "/" ? PREFIX : `${PREFIX}${url.pathname}`;
    return `${path}${url.search}${url.hash}`;
  } catch {
    return value;
  }
}

function filterResponseHeaders(headers: Headers) {
  const out = new Headers();
  headers.forEach((value, key) => {
    const lower = key.toLowerCase();
    if (HOP_BY_HOP.has(lower) || STRIP_RESPONSE_HEADERS.has(lower) || lower === "set-cookie") return;
    if (lower === "location") {
      out.set(key, toProxyLocation(value));
      return;
    }
    out.set(key, value);
  });
  for (const cookie of headers.getSetCookie?.() ?? []) {
    out.append("set-cookie", cookie.replace(/;\s*domain=[^;]*/i, ""));
  }
  return out;
}

async function proxy(request: NextRequest, slug: string[]) {
  const upstream = new URL(upstreamPath(slug), ORIGIN);
  upstream.search = request.nextUrl.search;
  const init: RequestInit = {
    method: request.method,
    headers: filterRequestHeaders(request.headers),
    redirect: "manual",
  };
  if (request.method !== "GET" && request.method !== "HEAD") {
    init.body = await request.arrayBuffer();
  }

  let response: Response | null = null;
  let lastError: unknown;
  for (let attempt = 0; attempt < 3 && !response; attempt++) {
    try {
      response = await fetch(upstream, { ...init, signal: AbortSignal.timeout(30000) });
    } catch (error) {
      lastError = error;
    }
  }
  if (!response) throw lastError;

  const contentType = response.headers.get("content-type") || "";
  const headers = filterResponseHeaders(response.headers);
  const rewrite = contentType.includes("text/html") || contentType.includes("text/css");
  if (request.method === "HEAD" || !rewrite) {
    return new Response(response.body, { status: response.status, headers });
  }
  const body = rewriteBody(await response.text(), contentType);
  headers.delete("content-length");
  return new Response(body, { status: response.status, headers });
}

type RouteContext = { params: Promise<{ slug?: string[] }> };

async function handle(request: NextRequest, context: RouteContext) {
  const { slug } = await context.params;
  if (!slug?.length) return shell();
  return proxy(request, slug);
}

export function GET(request: NextRequest, context: RouteContext) {
  return handle(request, context);
}
export function HEAD(request: NextRequest, context: RouteContext) {
  return handle(request, context);
}
export function POST(request: NextRequest, context: RouteContext) {
  return handle(request, context);
}
export function PUT(request: NextRequest, context: RouteContext) {
  return handle(request, context);
}
export function PATCH(request: NextRequest, context: RouteContext) {
  return handle(request, context);
}
export function DELETE(request: NextRequest, context: RouteContext) {
  return handle(request, context);
}
