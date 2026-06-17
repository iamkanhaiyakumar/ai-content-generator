import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import PublicHeader from "@/components/public-header";
import PublicFooter from "@/components/public-footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import UseCases from "@/components/ui/use-cases";
import Pricing from "@/components/ui/pricing";
import Review from "@/components/ui/review";
import Faq from "@/components/ui/faq";

const keyBenefits = [
  "Consistent brand voice across channels",
  "SEO-ready outlines and publish-ready drafts",
  "Instant rewrites tuned for your audience",
];

const workflowSteps = [
  {
    title: "Give context",
    description:
      "Share your brand tone, target audience, and campaign goal in one prompt.",
  },
  {
    title: "Generate a first draft",
    description:
      "Get structured content with headline options, hooks, and clear CTA suggestions.",
  },
  {
    title: "Ship confidently",
    description:
      "Edit, repurpose, and publish polished copy in minutes—not days.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b14] text-[#e8efff]">
      <PublicHeader />

      <section id="features" className="px-4 pb-14 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-[#1d2a44] bg-gradient-to-br from-[#0c1220] via-[#121a2e] to-[#1a1d36] p-6 shadow-[0_30px_120px_rgba(6,12,24,0.6)] sm:p-10 lg:p-12">
          <BackgroundBeams className="opacity-20" />
          <div className="relative z-10 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#2b3c60] bg-[#111a2f] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#9dc1ff]">
                <Sparkles className="h-3.5 w-3.5 text-[#52d2c0]" />
                Content engine for modern teams
              </span>

              <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Write trusted marketing content without sounding robotic.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#c3cde4] sm:text-lg">
                AI Content Generator helps founders and marketers go from rough idea to
                conversion-ready copy with a repeatable, brand-safe workflow.
              </p>

              <ul className="mt-7 space-y-3">
                {keyBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-[#d4def5] sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#52d2c0]" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/sign-up">
                  <Button className="h-11 rounded-xl border border-[#2cd4bd] bg-[#2cd4bd] px-6 font-semibold text-[#0a1020] transition-colors hover:bg-[#52d2c0]">
                    Start free
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button
                    variant="outline"
                    className="h-11 rounded-xl border-[#394d74] bg-[#10192f] px-6 text-[#d8e6ff] transition-all hover:border-[#5d74a8] hover:bg-[#172443]"
                  >
                    See how it works
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="group rounded-2xl border border-[#324667] bg-[#0d1528]/95 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#4c6896] hover:shadow-[0_16px_50px_rgba(3,8,18,0.45)] sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8ca5d2]">Live content preview</p>

              <div className="mt-4 rounded-xl border border-[#2b3c5f] bg-[#0a1222] p-4">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#7890bd]">Prompt</p>
                <p className="mt-2 text-sm text-[#d9e5fb]">
                  Launch email for a productivity app aimed at remote startup teams.
                </p>
              </div>

              <div className="mt-4 rounded-xl border border-[#2b3c5f] bg-[#0a1222] p-4">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#7890bd]">Generated output</p>
                <p className="mt-2 text-sm font-medium text-white">
                  Subject: Your team&apos;s new 20-minute planning ritual
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#c6d3eb]">
                  Hi team — if your standups keep slipping, try this: open one workspace,
                  drop priorities, and leave with clear owners. AI Content Generator turns
                  your product notes into launch-ready messaging in minutes.
                </p>
                <div className="mt-4 inline-flex rounded-full bg-[#1a2844] px-3 py-1 text-xs font-medium text-[#96f3e3]">
                  Readability score: 92/100
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">A clearer path from idea to publish</h2>
            <p className="mt-2 max-w-2xl text-sm text-[#9eb0d2] sm:text-base">
              Designed to reduce friction while keeping your voice and quality intact.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {workflowSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-[#223353] bg-[#0e172a] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#37517f]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#72e2cf]">Step {index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#b7c5df]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <UseCases />

      <section id="pricing">
        <Pricing />
      </section>

      <Review />
      <Faq />
      <PublicFooter />
    </main>
  );
}
