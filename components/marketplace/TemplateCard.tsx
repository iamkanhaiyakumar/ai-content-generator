"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TemplateProps {
  template: {
    id: number;
    title: string;
    description: string;
    category: string;
    likes: number;
    prompt: string;
  };
}

export default function TemplateCard({
  template,
}: TemplateProps) {
  const router = useRouter();

  const handleFavorite = () => {
    const favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    if (!favorites.includes(template.id)) {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, template.id])
      );
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(
      template.prompt
    );

    alert("Prompt copied!");
  };

  const handleUseTemplate = () => {
    router.push(
      `/dashboard?prompt=${encodeURIComponent(
        template.prompt
      )}`
    );
  };

  return (
    <Card className="p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border">
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-bold">
          {template.title}
        </h2>

        <button
          onClick={handleFavorite}
          className="text-xl hover:scale-110 transition"
        >
          ❤️
        </button>
      </div>

      <p className="text-gray-500 mt-3">
        {template.description}
      </p>

      <div className="mt-4">
        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
          {template.category}
        </span>
      </div>

      <div className="flex justify-between items-center mt-6">
        <p>🔥 {template.likes}</p>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={handleCopy}
          >
            Copy
          </Button>

          <Button onClick={handleUseTemplate}>
            Use Template
          </Button>
        </div>
      </div>
    </Card>
  );
}