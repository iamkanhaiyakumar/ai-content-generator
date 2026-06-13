"use client";

import { useState } from "react";

import { templates } from "../(data)/templates";

import TemplateCard from "@/components/marketplace/TemplateCard";
import SearchBar from "@/components/marketplace/SearchBar";
import CategoryFilter from "@/components/marketplace/CategoryFilter";
import TrendingTemplates from "@/components/marketplace/TrendingTemplate";

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredTemplates = templates.filter(
    (template) => {
      const matchesSearch =
        template.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        template.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        template.category === selectedCategory;

      return (
        matchesSearch && matchesCategory
      );
    }
  );

  return (
    <div className="min-h-screen px-6 py-10 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Prompt Marketplace
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Discover and use powerful AI
          prompt templates.
        </p>
      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CategoryFilter
        selectedCategory={
          selectedCategory
        }
        setSelectedCategory={
          setSelectedCategory
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredTemplates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
          />
        ))}
      </div>

      <TrendingTemplates
        templates={templates}
      />
    </div>
  );
}