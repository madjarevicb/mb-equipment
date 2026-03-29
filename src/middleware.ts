import { NextRequest, NextResponse } from "next/server";

const BLOCKED = [
  "/env", "/.env", "/.env.local", "/wp-admin", "/wp-login", "/wp-content",
  "/.git", "/.svn", "/xmlrpc.php", "/phpmyadmin", "/cgi-bin", "/admin",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (BLOCKED.some((b) => pathname === b || pathname.startsWith(b + "/"))) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|images/|fonts/).*)"],
};
