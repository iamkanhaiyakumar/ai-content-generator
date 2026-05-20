import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

function getDb() {
  const url = process.env.NEXT_PUBLIC_DATABASE_URL;
  if (!url) {
    return null;
  }
  return drizzle(neon(url));
}

export async function GET() {
  const db = getDb();
  if (!db) {
    return NextResponse.json(
      { error: "Database connection string is not configured" },
      { status: 500 }
    );
  }

  const user = await currentUser();
  if (!user?.primaryEmailAddress?.emailAddress) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const email = user.primaryEmailAddress.emailAddress;

  const result = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, email))
    .orderBy(desc(AIOutput.id));

  return NextResponse.json({ data: result });
}

export async function POST(req: NextRequest) {
  const db = getDb();
  if (!db) {
    return NextResponse.json(
      { error: "Database connection string is not configured" },
      { status: 500 }
    );
  }

  const user = await currentUser();
  if (!user?.primaryEmailAddress?.emailAddress) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { templateSlug, formData, aiResponse } = body;

  if (!templateSlug || !aiResponse) {
    return NextResponse.json(
      { error: "templateSlug and aiResponse are required" },
      { status: 400 }
    );
  }

  const email = user.primaryEmailAddress.emailAddress;

  const result = await db.insert(AIOutput).values({
    formData: formData || "",
    templateSlug,
    aiResponse,
    createdBy: email,
    createdAt: new Date().toLocaleDateString("en-GB"),
  });

  return NextResponse.json({ data: result });
}
