"use client";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({
  search,
  setSearch,
}: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search prompt templates..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="w-full border rounded-xl p-3 outline-none"
    />
  );
}