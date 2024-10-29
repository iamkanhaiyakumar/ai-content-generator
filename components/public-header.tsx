import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Use Cases", href: "#use-cases" },
];

const PublicHeader = () => {
  return (
    <header className="bg-gray-900 shadow-md px-2 sm:px-3 md:px-0">
      <div className="container mx-auto py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white w-fit">
              AI Content Generator
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <SignedIn>
              <Link href="/dashboard">
                <Button className="w-full border-[#704ef8] text-[#704ef8] hover:bg-[#704ef8] hover:text-white bg-slate-200">
                  Go To Dashboard
                </Button>
              </Link>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in">
                <Button
                  variant="outline"
                  className="w-full border-[#704ef8] text-[#704ef8] hover:bg-[#704ef8] hover:text-white bg-slate-200"
                >
                  Log In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="w-full bg-[#704ef8] text-white hover:bg-[#5a3cc7]">
                  Sign Up
                </Button>
              </Link>
            </SignedOut>
          </div>
          <Sheet>
            <div className="flex items-center gap-2 md:hidden">
              <SignedIn>
                <Link href="/dashboard">
                  <Button
                    className="w-full border-[#704ef8] text-[#704ef8] hover:bg-[#704ef8] hover:text-white bg-slate-200"
                    size={"sm"}
                  >
                    Go To Dashboard
                  </Button>
                </Link>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <Link href="/sign-in">
                  <Button variant="outline" size={"sm"}>
                    Log In
                  </Button>
                </Link>
              </SignedOut>
              <SheetTrigger asChild>
                <button className="">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
            </div>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-gray-800"
            >
              <SheetHeader>
                <SheetTitle className="text-left">
                  AI Content Generator
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <SheetClose key={item.name} className="text-left">
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default PublicHeader;
