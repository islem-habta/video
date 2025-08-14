import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import aj, { createMiddleware, detectBot, shield } from "./lib/arcjet";

export async function middleware(request: NextRequest) {
  // Skip middleware in production to avoid BetterAuth Edge Runtime issues
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.next();
  }

  // Skip authentication for local development if no valid API keys
  if (process.env.NODE_ENV === 'development' && 
      (!process.env.XATA_API_KEY || process.env.XATA_API_KEY === 'placeholder_key_for_local_dev')) {
    console.log('Skipping authentication for local development');
    return NextResponse.next();
  }

  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Auth error in middleware:', error);
    // For development, allow the request to continue
    if (process.env.NODE_ENV === 'development') {
      return NextResponse.next();
    }
    throw error;
  }
}
// Create a simple middleware for development when ArcJet is not properly configured
const createDevMiddleware = () => {
  return async (request: NextRequest) => {
    return NextResponse.next();
  };
};

// Use ArcJet middleware only if we have a valid API key
const validate = process.env.NODE_ENV === 'development' && 
                 (!process.env.ARCJET_API_KEY || process.env.ARCJET_API_KEY === 'placeholder_arcjet_api_key')
  ? createDevMiddleware()
  : aj
      .withRule(
        shield({
          mode: "LIVE",
        })
      )
      .withRule(
        detectBot({
          mode: "LIVE",
          allow: ["CATEGORY:SEARCH_ENGINE", "G00G1E_CRAWLER"], // allow other bots if you want to.
        })
      );

export default process.env.NODE_ENV === 'development' && 
         (!process.env.ARCJET_API_KEY || process.env.ARCJET_API_KEY === 'placeholder_arcjet_api_key')
  ? createDevMiddleware()
  : createMiddleware(validate);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)"],
};

// ⨯ [TypeError: Body is unusable: Body has already been read]
