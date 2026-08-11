"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Globe } from "lucide-react";
import { useLanguage } from "./language-provider";
import { LANGUAGES } from "@/app/(data)/translations";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current =
    LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  // Close on outside click.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Change language"
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1 rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
      >
        <Globe className="h-5 w-5" />
        <span className="text-sm" aria-hidden>
          {current.flag}
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-800 dark:bg-gray-900"
        >
          {LANGUAGES.map((l) => (
            <li key={l.code}>
              <button
                role="option"
                aria-selected={l.code === language}
                onClick={() => {
                  setLanguage(l.code);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                <span className="flex items-center gap-2">
                  <span aria-hidden>{l.flag}</span>
                  {l.label}
                </span>
                {l.code === language && (
                  <Check className="h-4 w-4 text-violet-600" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
