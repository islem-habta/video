import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // Simple production middleware that just passes through
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)"],
};

