"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home",      href: "/" },
  { label: "Features",  href: "/#features" },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "Pricing",   href: "/#pricing" },
];

export default function PublicHeader() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (pathname === "/") {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(17,24,68,0.92)"
          : "rgba(17,24,68,0.7)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(114,136,174,0.2)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/logo.svg"
            alt="AI Content Generator"
            width={28}
            height={28}
            className="brightness-110 group-hover:scale-110 transition-transform duration-200"
          />
          <span className="text-base font-semibold tracking-tight" style={{ color: "#EAE0CF" }}>
            AI Content
            <span style={{ color: "#7288AE" }}> Generator</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all duration-200 text-brand-cream/65 hover:text-brand-cream hover:bg-white/5"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/sign-in"
            className="text-sm font-medium text-brand-cream/60 hover:text-brand-cream transition-colors duration-200"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-lg bg-brand-mid text-brand-cream shadow-[0_0_20px_rgba(75,86,148,0.35)]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="rounded-lg p-2 md:hidden transition-colors duration-200"
          style={{ color: "rgba(234,224,207,0.7)" }}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden md:hidden"
            style={{ borderTop: "1px solid rgba(114,136,174,0.15)", background: "rgba(17,24,68,0.97)" }}
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200 text-brand-cream/70 hover:text-brand-cream hover:bg-white/5"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2 px-4 pb-6 pt-2 border-t border-brand-light/10">
              <Link
                href="/sign-in"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-center text-sm font-medium transition-colors text-brand-cream/60 hover:text-brand-cream"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-center text-sm font-semibold bg-brand-mid text-brand-cream"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}