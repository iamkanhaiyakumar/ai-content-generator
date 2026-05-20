"use client";

import { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq, desc } from "drizzle-orm";
import Templates from "@/app/(data)/Template";
import { Button } from "@/components/ui/button";
import { Search, Copy, Eye, EyeOff, FileClock } from "lucide-react";
import Image from "next/image";
import moment from "moment";

export type HISTORY = {
  id: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string;
  createdAt: string | null;
}[];

function HistoryPage() {
  const { user } = useUser();
  const [historyList, setHistoryList] = useState<HISTORY>([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  useEffect(() => {
    if (user) fetchHistory();
  }, [user]);

  const fetchHistory = async () => {
    setLoading(true);
    try {
      {/* @ts-ignore */}
      const result: HISTORY = await db
        .select()
        .from(AIOutput)
        .where(
          eq(
            AIOutput.createdBy,
            user?.primaryEmailAddress?.emailAddress as string
          )
        )
        .orderBy(desc(AIOutput.id));
      setHistoryList(result);
    } catch (error) {
      console.error("Error fetching history:", error);
    } finally {
      setLoading(false);
    }
  };

  const getTemplateData = (slug: string) => {
    return Templates.find((t) => t.slug === slug);
  };

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredHistory = historyList.filter((item) => {
    if (!searchInput) return true;
    const search = searchInput.toLowerCase();
    const templateName = (
      getTemplateData(item.templateSlug)?.name || item.templateSlug
    ).toLowerCase();
    const content = (item.aiResponse || "").toLowerCase();
    return templateName.includes(search) || content.includes(search);
  });

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "";
    const parsed = moment(dateStr, "DD/MM/YYYY");
    if (!parsed.isValid()) return dateStr;
    return parsed.fromNow();
  };

  return (
    <div className="p-5 md:p-10">
      <h2 className="font-bold text-2xl md:text-3xl text-black">History</h2>
      <p className="text-gray-500 mt-2">
        Search your previously generated AI content
      </p>

      <div className="flex gap-2 items-center border rounded-lg p-3 mt-5 bg-white max-w-lg">
        <Search className="h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search by template name or content..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="outline-none w-full text-black"
        />
      </div>

      {loading ? (
        <div className="flex items-center justify-center mt-20">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
        </div>
      ) : filteredHistory.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-gray-400">
          <FileClock className="h-16 w-16 mb-4" />
          <h3 className="text-xl font-medium">No history found</h3>
          <p className="text-sm mt-1">
            {searchInput
              ? "Try a different search term"
              : "Start generating content to see it here"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 mt-5">
          {filteredHistory.map((item) => {
            const template = getTemplateData(item.templateSlug);
            const isExpanded = expandedId === item.id;
            const wordCount = item.aiResponse
              ? item.aiResponse.split(/\s+/).filter(Boolean).length
              : 0;

            return (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md border p-5 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {template?.icon && (
                      <Image
                        src={template.icon}
                        alt="icon"
                        width={40}
                        height={40}
                        className="flex-shrink-0"
                      />
                    )}
                    <div>
                      <h3 className="font-medium text-lg text-black">
                        {template?.name || item.templateSlug}
                      </h3>
                      <div className="flex flex-wrap gap-2 items-center mt-1">
                        <p className="text-gray-400 text-sm">
                          {formatDate(item.createdAt)}
                        </p>
                        <span className="text-gray-300 text-xs hidden sm:inline">
                          {item.createdAt}
                        </span>
                        <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full">
                          {wordCount} words
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 flex-shrink-0">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        handleCopy(item.aiResponse || "", item.id)
                      }
                    >
                      <Copy className="h-4 w-4 mr-1" />
                      {copiedId === item.id ? "Copied!" : "Copy"}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setExpandedId(isExpanded ? null : item.id)
                      }
                    >
                      {isExpanded ? (
                        <>
                          <EyeOff className="h-4 w-4 mr-1" /> Collapse
                        </>
                      ) : (
                        <>
                          <Eye className="h-4 w-4 mr-1" /> View
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <div className="mt-3 text-gray-600 text-sm">
                  {isExpanded ? (
                    <div className="whitespace-pre-wrap bg-gray-50 p-4 rounded-lg border max-h-96 overflow-y-auto">
                      {item.aiResponse}
                    </div>
                  ) : (
                    <p className="line-clamp-3">
                      {(item.aiResponse || "").substring(0, 150)}
                      {(item.aiResponse || "").length > 150 ? "..." : ""}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default HistoryPage;
