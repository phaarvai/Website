import { NextResponse, type NextRequest } from "next/server";

/** Real Phaarvai routes — never rewrite these into /x-y, even if Referer is /x-y (Back button). */
const PHAARVAI_FIRST_SEGMENTS = new Set([
  "about",
  "admin",
  "assistant",
  "capabilities",
  "contact",
  "dashboard",
  "funding-partnerships",
  "insights",
  "login",
  "partner",
  "projects",
  "result",
  "review",
  "sectors",
  "solutions",
  "submit",
  "team",
  "themes",
  "x-y",
]);

function isFromXy(referer: string | null, origin: string) {
  if (!referer) return false;
  try {
    const url = new URL(referer);
    return url.origin === origin && url.pathname.startsWith("/x-y");
  } catch {
    return false;
  }
}

/**
 * X!Y is reverse-proxied under /x-y. Its client router may still emit root-absolute
 * paths (e.g. /browse). Rewrite (do not redirect) those requests to the /x-y proxy
 * so we do not insert extra history entries that break the browser Back button.
 *
 * Phaarvai routes are excluded so Back from /x-y → /themes (etc.) works.
 */
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname.startsWith("/x-y") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  if (!isFromXy(request.headers.get("referer"), request.nextUrl.origin)) {
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
  rewriteUrl.pathname = `/x-y${pathname}`;
  rewriteUrl.search = search;
  return NextResponse.rewrite(rewriteUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
