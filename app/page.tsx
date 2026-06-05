"use client";
import PublicHeader from "@/components/public-header";
import PublicFooter from "@/components/public-footer";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white dark:bg-gray-950">
      <PublicHeader />
      <section className="relative flex flex-col items-center justify-center px-4 py-24 text-center">
        <BackgroundBeams />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            AI-Powered Content Generation
          </h1>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="/sign-up" className="rounded-xl bg-violet-600 px-8 py-3 text-base font-semibold text-white shadow-md transition hover:bg-violet-500">
              Get Started Free
            </a>
          </div>
        </div>
      </section>
      <PublicFooter />
    </main>
  );
}