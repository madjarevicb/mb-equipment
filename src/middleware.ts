import { NextRequest, NextResponse } from "next/server";

const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

const BLOCKED = ["/env", "/.env", "/.env.local", "/wp-admin", "/wp-login", "/.git", "/.svn"];

function getIp(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? req.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  if (rateLimitMap.size > 100) {
    for (const [k, v] of rateLimitMap) { if (now - v.firstRequest > WINDOW_MS) rateLimitMap.delete(k); }
  }
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.firstRequest > WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (BLOCKED.some((b) => pathname === b || pathname.startsWith(b + "/"))) {
    return new NextResponse(null, { status: 404 });
  }

  if (request.method === "POST" && isRateLimited(getIp(request))) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|images/|fonts/).*)"],
};
