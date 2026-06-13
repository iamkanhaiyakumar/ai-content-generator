"use client";

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (
    value: string
  ) => void;
}

const categories = [
  "All",
  "Writing",
  "Marketing",
  "Social Media",
  "Coding",
  "Business",
];

export default function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() =>
            setSelectedCategory(category)
          }
          className={`px-4 py-2 rounded-full border ${
            selectedCategory === category
              ? "bg-black text-white"
              : ""
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}