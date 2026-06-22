"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "./theme-provider";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Use Cases", href: "/#use-cases" },   // ← was broken; now points to section
  { label: "Pricing", href: "/#pricing" },
];

export default function PublicHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#")) {
      const id = href.slice(2); // e.g. "use-cases"
      if (pathname === "/") {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
      // If on another page, Next.js Link will navigate to / then the hash handles the rest
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex shrink-0 items-center justify-center" style={{ width: 32, height: 32 }}>
            <Image
              src="/logo.svg"
              alt="AI Content Generator"
              width={32}
              height={32}
              style={{ display: 'block' }}
            />
          </div>
          <span className="self-center text-lg font-bold leading-none text-gray-900 dark:text-white">
            AI Content Generator
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="rounded-md px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Dark / Light toggle */}
          <button
            id="theme-toggle-desktop"
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            className="rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 transition-transform duration-300 rotate-0 scale-100" />
            ) : (
              <Moon className="h-5 w-5 transition-transform duration-300 rotate-0 scale-100" />
            )}
          </button>
          {/* <Link
            href="/sign-in"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-500"
          >
            Get Started
          </Link> */}
          
          <SignedOut>
            <Link
              href="/sign-in"
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-4 py-2.5 text-center text-sm font-medium"
            >
              Sign In
            </Link>

            <Link
              href="/sign-up"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-violet-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get Started
            </Link>
          </SignedOut>

          <SignedIn>
            <Link
              href="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-violet-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Dashboard
            </Link>

            <div className="flex justify-center">
              <UserButton />
            </div>
          </SignedIn>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Dark / Light toggle (mobile) */}
          <button
            id="theme-toggle-mobile"
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            className="rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <button
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 pb-4 dark:border-gray-800 dark:bg-gray-950 md:hidden">
          <nav className="mt-2 flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="rounded-md px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-gray-200 pt-3 dark:border-gray-800">
            <Link
              href="/sign-in"
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-4 py-2.5 text-center text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-violet-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-violet-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}