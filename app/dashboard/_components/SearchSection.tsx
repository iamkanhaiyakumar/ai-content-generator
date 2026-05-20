"use client";

import { Search } from "lucide-react";
import React, {
  useEffect,
  useState,
} from "react";

interface PROPS {
  onSearchInput: (value: string) => void;
  initialValue?: string;
}

function SearchSection({
  onSearchInput,
  initialValue = "",
}: PROPS) {
  const [searchInput, setSearchInput] =
    useState(initialValue);

  useEffect(() => {
    setSearchInput(initialValue);
  }, [initialValue]);

  return (
    <div className="p-10 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 flex-col flex justify-center items-center text-white">
      <h2 className="text-3xl font-bold">
        Browse All Templates
      </h2>

      <p>
        What would you like to create
        today?
      </p>

      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-full md:w-[50%]">
          <Search className="text-primary" />

          <input
            type="text"
            placeholder="Search Templates"
            value={searchInput}
            onChange={(event) => {
              setSearchInput(
                event.target.value
              );

              onSearchInput(
                event.target.value
              );
            }}
            className="bg-transparent w-full outline-none text-black"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;