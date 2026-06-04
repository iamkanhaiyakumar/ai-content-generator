"use client";

import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import type { HISTORY } from "../history/page";

function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

  useEffect(() => {
    if (user) {
      GetData();
    }
  }, [user]);

  const GetData = async () => {
    /* @ts-ignore */
    const results: HISTORY[] = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

    GetTotalUsage(results);
  };

  const GetTotalUsage = (results: HISTORY[]) => {
    let total: number = 0;
    results.forEach((element: { aiResponse: string | any[] }) => {
      total = total + Number(element.aiResponse?.length);
    });
    setTotalUsage(total);
  };

  const usagePercentage = Math.min((Number(totalUsage) / 100000) * 100, 100);

  return (
    <div className="p-5">
      <div className="rounded-lg bg-primary p-3 text-white">
        <h2 className="font-medium">Credits</h2>
        <div className="mt-3 h-2 w-full rounded-full bg-[#9981f9]">
          <div
            className="h-2 rounded-full bg-white"
            style={{ width: `${usagePercentage}%` }}
          />
        </div>
        <h2 className="my-2 text-sm">
          {Number(totalUsage).toLocaleString()}/100,000 credit used
        </h2>
      </div>
      <Button asChild variant="secondary" className="my-3 w-full text-primary">
        <Link href="/dashboard/billing">Upgrade Plan</Link>
      </Button>
    </div>
  );
}

export default UsageTrack;
