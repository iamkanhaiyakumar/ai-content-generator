"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Copy, Search } from "lucide-react";

export interface HistoryRow {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  templateName: string;
  templateIcon: string;
  createdBy: string;
  createdAt: string;
}

function wordCount(text: string): number {
  const trimmed = text?.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}

function CopyCell({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard can be unavailable (insecure context / permissions) — fail quietly.
    }
  };

  return (
    <Button
      variant="ghost"
      className="text-primary flex items-center gap-1"
      onClick={onCopy}
      disabled={!text}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {copied ? "Copied" : "Copy"}
    </Button>
  );
}

export default function HistoryTable({
  historyList,
}: {
  historyList: HistoryRow[];
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return historyList;
    return historyList.filter(
      (item) =>
        item.templateName.toLowerCase().includes(q) ||
        item.aiResponse.toLowerCase().includes(q) ||
        item.formData.toLowerCase().includes(q)
    );
  }, [historyList, query]);

  return (
    <div className="m-5 p-5 border rounded-lg bg-white">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-bold text-3xl">History</h2>
          <p className="text-gray-500">
            Search your previously generated AI content history
          </p>
        </div>
        <div className="relative mt-3 sm:mt-0 w-full sm:w-72">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search template or content…"
            aria-label="Search history"
            className="w-full rounded-md border py-2 pl-8 pr-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
      </div>

      <div className="grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3 rounded">
        <h2 className="col-span-2">TEMPLATE</h2>
        <h2 className="col-span-2">AI RESPONSE</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>

      {filtered.length > 0 ? (
        filtered.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-7 my-5 py-3 px-3 border-b items-start"
          >
            <h2 className="col-span-2 flex gap-2 items-center">
              <Image
                src={item.templateIcon}
                width={25}
                height={25}
                alt={item.templateName}
              />
              {item.templateName}
            </h2>
            <h2 className="col-span-2 line-clamp-3 pr-3">{item.aiResponse}</h2>
            <h2>{item.createdAt || "—"}</h2>
            <h2>{wordCount(item.aiResponse)}</h2>
            <h2>
              <CopyCell text={item.aiResponse} />
            </h2>
          </div>
        ))
      ) : (
        <p className="text-center mt-5 text-gray-500">
          {query
            ? "No history matches your search."
            : "No history found for your account."}
        </p>
      )}
    </div>
  );
}
