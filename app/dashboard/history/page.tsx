import Template from "@/app/(data)/Template";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import Image from "next/image";
import React from "react";
import { TEMPLATE as TEMPLATE_LIST } from "@/app/dashboard/_components/TemplateListSection";

export interface HISTORY {
  [x: string]: any;
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

async function History() {
  const user = await currentUser();

  const LOCAL_TEMPLATE = [
    { slug: "template1", name: "Template 1", icon: "/icon1.png" },
    { slug: "template2", name: "Template 2", icon: "/icon2.png" },
  ];


  
  // Fetching the history list from the database
  const HistoryList: HISTORY[] = (await db
    .select({
      id: AIOutput.id,
      formData: AIOutput.formData,
      aiResponse: AIOutput.aiResponse,
      createdAt: AIOutput.createdAt,
      templateSlug: AIOutput.templateSlug, // Corrected the typo here
      createdBy: AIOutput.createdBy,
    })
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, user?.primaryEmailAddressId ?? ""))
    .orderBy(desc(AIOutput.createdAt))
  ).map(item => ({
    ...item,
    aiResponse: item.aiResponse ?? "",
    createdAt: item.createdAt ?? ""
  }));

  // Function to get the template name and icon by its slug
  const GetTemplateData = (slug: string) => {
    const template = LOCAL_TEMPLATE.find((item) => item?.slug === slug);
    return {
      name: template?.name || "Unknown Template",
      icon: template?.icon || "/default-icon.png" // Ensure this property exists
    };
  };

  return (
    <div className="m-5 p-5 border rounded-lg bg-white">
      <h2 className="font-bold text-3xl">History</h2>
      <p className="text-gray-500">Search your previously generated AI content history</p>
      <div className="grid grid-cols-7 font-bold bg-secondary mt-5 py-3">
        <h2 className="col-span-2">TEMPLATE</h2>
        <h2 className="col-span-2">AI RESPONSE</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>

      {HistoryList.length > 0 ? (
        HistoryList?.map((item: HISTORY) => {
          const { name, icon } = GetTemplateData(item.templateSlug);
          return (
            <div key={item?.id} className="grid grid-cols-7 my-5 py-3 px-3 border-b">
              <h2 className="col-span-2 flex gap-2 items-center">
                <Image
                  src={icon}
                  width={25}
                  height={25}
                  alt={name}
                />
                {name}
              </h2>
              <h2 className="col-span-2 line-clamp-3">{item?.aiResponse}</h2>
              <h2>{new Date(item?.createdAt).toLocaleDateString()}</h2>
              <h2>{item?.aiResponse?.split(" ").length}</h2>
              <h2>
                <Button
                  variant="ghost"
                  className="text-primary"
                  onClick={() => navigator.clipboard.writeText(item?.aiResponse)}
                >
                  Copy
                </Button>
              </h2>
            </div>
          );
        })
      ) : (
        <p className="text-center mt-5">No history found for your account.</p>
      )}
    </div>
  );
}

export default History;
