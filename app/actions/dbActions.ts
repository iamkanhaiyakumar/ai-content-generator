"use server";

import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { eq } from "drizzle-orm";
import moment from "moment";
import { currentUser } from "@clerk/nextjs/server";

export async function saveGeneratedContent(
  formData: any,
  slug: string,
  aiRes: string
) {
  try {
    const user = await currentUser();
    const userEmail = user?.primaryEmailAddress?.emailAddress;
    
    if (!userEmail) throw new Error("Unauthorized");

    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiRes,
      createdBy: userEmail,
      createdAt: moment().format("DD/MM/YYYY"),
    });

    return { success: true };
  } catch (error) {
    console.error("Error saving to DB:", error);
    return { success: false, error: "Failed to save generated content" };
  }
}

export async function getUserTotalUsage() {
  try {
    const user = await currentUser();
    const userEmail = user?.primaryEmailAddress?.emailAddress;

    if (!userEmail) return 0;

    const results = await db
      .select({ aiResponse: AIOutput.aiResponse })
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, userEmail));

    let total = 0;
    results.forEach((element) => {
      total += Number(element.aiResponse?.length || 0);
    });

    return total;
  } catch (error) {
    console.error("Error fetching usage:", error);
    return 0;
  }
}
