import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
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
