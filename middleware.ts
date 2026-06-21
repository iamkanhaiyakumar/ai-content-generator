import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/contributors(.*)",
  "/api/protected(.*)",
]);

export default clerkMiddleware(async (auth: () => Promise<{ userId: string | null }>, request: import("next/server").NextRequest) => {
  // Protect all non-public routes
  if (!isPublicRoute(request)) {
    const session = await auth();
    
    // If attempting to access protected route without auth, redirect to sign-in
    if (isProtectedRoute(request) && !session.userId) {
      const signInUrl = new URL("/sign-in", request.url);
      signInUrl.searchParams.set("redirect_url", request.url);
      return NextResponse.redirect(signInUrl);
    }
    
    // For API routes, return 401 if not authenticated
    if (request.nextUrl.pathname.startsWith("/api/") && !session.userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
  }
  
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};