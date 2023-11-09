import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/page-url-to-rewrite")) {
    return NextResponse.rewrite(
      new URL("/page-rewritten?foo=bar", request.url)
    );
  }

  if (request.nextUrl.pathname.startsWith("/app-url-to-rewrite")) {
    return NextResponse.rewrite(new URL("/app-rewritten?foo=bar", request.url));
  }
}
