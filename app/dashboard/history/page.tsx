import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import React from "react";
import Templates from "@/app/(data)/Template";
import HistoryTable, { HistoryRow } from "./_components/HistoryTable";

// A generic icon for a generation whose template is no longer in the catalog.
const FALLBACK_ICON =
  "https://cdn-icons-png.flaticon.com/128/6062/6062646.png";

type TemplateMeta = { slug: string; name: string; icon: string };

function getTemplateMeta(slug: string) {
  const template = (Templates as TemplateMeta[]).find(
    (item) => item.slug === slug
  );
  return {
    name: template?.name ?? "Unknown Template",
    icon: template?.icon ?? FALLBACK_ICON,
  };
}

export default async function HistoryPage() {
  const user = await currentUser();
  const email = user?.primaryEmailAddress?.emailAddress ?? "";

  // Order by id (serial) — createdAt is stored as a "DD/MM/YYYY" string, so
  // ordering by it sorts lexically (wrong). id gives true newest-first order.
  const rows = email
    ? await db
        .select({
          id: AIOutput.id,
          formData: AIOutput.formData,
          aiResponse: AIOutput.aiResponse,
          templateSlug: AIOutput.templateSlug,
          createdBy: AIOutput.createdBy,
          createdAt: AIOutput.createdAt,
        })
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, email))
        .orderBy(desc(AIOutput.id))
    : [];

  const historyList: HistoryRow[] = rows.map((item) => {
    const meta = getTemplateMeta(item.templateSlug);
    return {
      id: item.id,
      formData: item.formData ?? "",
      aiResponse: item.aiResponse ?? "",
      templateSlug: item.templateSlug,
      templateName: meta.name,
      templateIcon: meta.icon,
      createdBy: item.createdBy ?? "",
      createdAt: item.createdAt ?? "",
    };
  });

  return <HistoryTable historyList={historyList} />;
}
