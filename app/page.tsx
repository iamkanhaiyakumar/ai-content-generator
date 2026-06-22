"use client";

import PublicHeader from "@/components/public-header";
import PublicFooter from "@/components/public-footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Pricing from "@/components/ui/pricing";
import Faq from "@/components/ui/faq";
import Review from "@/components/ui/review";
import UseCases from "@/components/ui/use-cases";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white dark:bg-gray-950">
      <PublicHeader />

      {/* Hero Section */}
      <section id="features" className="relative flex flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <BackgroundBeams />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            AI-Powered Content Generation
          </h1>
          <TypewriterEffect
            words={[
              { text: "Write" },
              { text: "faster." },
              { text: "Think" },
              { text: "smarter." },
              { text: "Create" },
              { text: "better.", className: "text-violet-500" },
            ]}
            className="mb-8 text-xl font-medium text-gray-600 dark:text-gray-300"
          />
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/sign-up"
              className="rounded-xl bg-violet-600 px-8 py-3 text-base font-semibold text-white shadow-md transition hover:bg-violet-500"
            >
              Get Started Free
            </a>
            <a
              href="#use-cases"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("use-cases")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-xl border border-gray-300 px-8 py-3 text-base font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              See Use Cases
            </a>
          </div>
        </div>
      </section>


      <UseCases />

      {/* Pricing Section */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* Reviews */}
      <Review />

      {/* FAQ */}
      <Faq />

      <PublicFooter />
    </main>
  );
}