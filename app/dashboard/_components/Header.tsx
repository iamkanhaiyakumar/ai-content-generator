import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import MobileSidebar from "./MobileSidebar";

function Header() {
  return (
    <header className="bg-white shadow-sm border-b-2 p-5 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <MobileSidebar />
        <div className="bg-white flex gap-2 items-center p-2 rounded-md max-w-lg border focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
          <Search className="h-5 w-5 text-gray-500" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search...."
            aria-label="Search templates and content"
            className="outline-none rounded-md text-black w-full focus:outline-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <h2 className="bg-primary p-1 rounded-full text-xs md:text-sm text-white px-3 cursor-pointer hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" role="button" tabIndex={0} aria-label="Upgrade membership">
          🥳🔥Join Membership just for $00.00
        </h2>
        <UserButton />
      </div>
    </header>
  );
}

export default Header;
