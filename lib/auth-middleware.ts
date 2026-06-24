import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

/**
 * Higher-order function to protect API routes with authentication
 * Ensures the user is authenticated before allowing the request to proceed
 */
export async function withAuth(
  handler: (req: NextRequest, session: any) => Promise<NextResponse>
) {
  return async (req: NextRequest) => {
    try {
      const session = await auth();

      if (!session.userId) {
        return NextResponse.json(
          { error: "Unauthorized - Authentication required" },
          { status: 401 }
        );
      }

      return handler(req, session);
    } catch (error) {
      console.error("Auth middleware error:", error);
      return NextResponse.json(
        { error: "Authentication failed" },
        { status: 500 }
      );
    }
  };
}
