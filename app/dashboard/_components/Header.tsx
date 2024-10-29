import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";

function Header() {
  return (
    <div className="p-5 bg-white shadow-sm border-b-2 flex justify-between items-center">
      <div className=" bg-white flex gap-2 items-center p-2 rounded-md max-w-lg">
        <Search />
        <input
          type="text"
          placeholder="Search...."
          className="outline-none rounded-md  text-black"
        />
      </div>
      <div className="flex items-center gap-2">
        <h2 className="bg-primary p-1 rounded-full text-s text-white px-1 cursor-pointer">
          🥳🔥Join Membership just for $00.00
        </h2>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
