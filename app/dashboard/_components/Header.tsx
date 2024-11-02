import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import MobileSidebar from "./MobileSidebar";

function Header() {
  return (
    <header className="bg-white shadow-sm border-b-2 p-5 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <MobileSidebar />
        <div className="bg-white flex gap-2 items-center p-2 rounded-md max-w-lg border">
          <Search className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search...."
            className="outline-none rounded-md text-black w-full"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <h2 className="bg-primary p-1 rounded-full text-xs md:text-sm text-white px-3 cursor-pointer">
          🥳🔥Join Membership just for $00.00
        </h2>
        <UserButton />
      </div>
    </header>
  );
}

export default Header;
