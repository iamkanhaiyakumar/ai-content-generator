"use client";

import React, {
  useEffect,
  useState,
} from "react";

import { useSearchParams } from "next/navigation";

import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";

function DashBoard() {
  const [userSearchInput, setUserSearchInput] =
    useState<string>("");

  const searchParams = useSearchParams();

  const templatePrompt =
    searchParams.get("prompt");

  useEffect(() => {
    if (templatePrompt) {
      setUserSearchInput(templatePrompt);
    }
  }, [templatePrompt]);

  return (
    <div>
      <SearchSection
        initialValue={userSearchInput}
        onSearchInput={(value: string) =>
          setUserSearchInput(value)
        }
      />

      <TemplateListSection
        userSearchInput={userSearchInput}
      />
    </div>
  );
}

export default DashBoard;