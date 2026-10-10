import { NextResponse, type NextRequest } from "next/server";

/** Real Phaarvai routes — never rewrite these into /x-y, even if Referer is /x-y (Back button). */
const PHAARVAI_FIRST_SEGMENTS = new Set([
  "about",
  "ai-energy",
  "admin",
  "assistant",
  "capabilities",
  "contact",
  "dashboard",
  "funding-partnerships",
  "insights",
  "login",
  "operational-domains",
  "partner",
  "projects",
  "result",
  "review",
  "sectors",
  "solutions",
  "submit",
  "systems",
  "team",
  "themes",
  "x-y",
  "xfactory",
  "XfactorY",
]);

function isFromPrefix(referer: string | null, origin: string, prefix: string) {
  if (!referer) return false;
  try {
    const url = new URL(referer);
    return url.origin === origin && (url.pathname === prefix || url.pathname.startsWith(`${prefix}/`));
  } catch {
    return false;
  }
}

/** Hosts where /xfactory is sent to the public domain (Clerk refuses vercel.app addresses). */
const XFACTORY_REDIRECT_HOSTS = new Set(["phaarvai-website.vercel.app"]);
const XFACTORY_PUBLIC_ORIGIN = "https://www.phaarvai.com";

/**
 * Proxied apps may still emit root-absolute paths (e.g. /browse). Rewrite (do not
 * redirect) those requests back under the Phaarvai path so the address bar stays
 * on /x-y or /XfactorY and the browser Back button is not given extra entries.
 *
 * Phaarvai routes are excluded so Back from a proxied app to /themes (etc.) works.
 */
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // XFactorY sign-in (Clerk) only works on the phaarvai.com domain, so /xfactory opened on the
  // website's vercel.app address is sent to the same page on https://www.phaarvai.com.
  // Only /xfactory is affected; every other route on the vercel.app address is unchanged.
  const lowerPath = pathname.toLowerCase();
  if (
    XFACTORY_REDIRECT_HOSTS.has(request.headers.get("host") ?? "") &&
    (lowerPath === "/xfactory" || lowerPath.startsWith("/xfactory/"))
  ) {
    return NextResponse.redirect(`${XFACTORY_PUBLIC_ORIGIN}/xfactory${pathname.slice("/xfactory".length)}${search}`, 307);
  }

  // Old capitalised links (/XfactorY...) go to /xfactory. Only when the case actually differs,
  // so /xfactory itself is never redirected (no redirect loop).
  const lower = pathname.toLowerCase();
  if ((lower === "/xfactory" || lower.startsWith("/xfactory/")) && !(pathname === "/xfactory" || pathname.startsWith("/xfactory/"))) {
    return NextResponse.redirect(new URL(`/xfactory${pathname.slice("/xfactory".length)}${search}`, request.url));
  }

  if (
    pathname.startsWith("/x-y") ||
    pathname === "/xfactory" ||
    pathname.startsWith("/xfactory/") ||
    pathname === "/ai-energy" ||
    pathname.startsWith("/ai-energy/") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  const referer = request.headers.get("referer");
  const origin = request.nextUrl.origin;
  const prefix = isFromPrefix(referer, origin, "/ai-energy")
    ? "/ai-energy"
    : isFromPrefix(referer, origin, "/x-y")
      ? "/x-y"
      : null;

  if (!prefix) {
    return NextResponse.next();
  }

  // Back/forward to a real Phaarvai page must not be captured.
  if (pathname === "/") {
    return NextResponse.next();
  }

  const firstSegment = pathname.replace(/^\//, "").split("/")[0] ?? "";
  if (PHAARVAI_FIRST_SEGMENTS.has(firstSegment)) {
    return NextResponse.next();
  }

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = `${prefix}${pathname}`;
  rewriteUrl.search = search;
  return NextResponse.rewrite(rewriteUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
