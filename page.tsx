import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import DemoPreview from "@/components/DemoPreview";
import FeatureCards from "@/components/FeatureCards";

const STATS = [
  { value: "25+", label: "Content Templates" },
  { value: "2s",  label: "Avg. Generation Time" },
  { value: "20+", label: "Languages Supported" },
  { value: "99%", label: "Uptime" },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-surface-DEFAULT text-white overflow-x-hidden">

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-surface-border bg-surface-DEFAULT/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-brand-400" />
          <span className="font-display font-bold text-lg tracking-tight">ContentAI</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/sign-in"
            className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
          >
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className="btn-primary text-sm font-semibold px-4 py-2 rounded-lg text-white"
          >
            Get started free
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center text-center pt-36 pb-20 px-4">
        {/* Background glow blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-600/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold uppercase tracking-wider">
            <span className="glow-dot" />
            Powered by Gemini AI
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight max-w-3xl mx-auto mb-5">
            Generate content that{" "}
            <span className="gradient-text">actually sounds like you</span>
          </h1>

          <p className="text-slate-400 text-lg sm:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
            AI-powered blog posts, captions, and copy — tailored to your voice.
            No prompt engineering required. Just pick a template and create.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/sign-up"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-base"
            >
              Start creating for free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/sign-in"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-surface-border text-slate-300 font-semibold text-base hover:border-brand-400 hover:text-white transition-all duration-200"
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-surface-card border border-surface-border">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display font-bold text-2xl text-white">{value}</p>
              <p className="text-slate-500 text-xs mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Demo Preview ── */}
      <section className="px-4 mb-4">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-brand-300 bg-brand-500/10 border border-brand-500/20 rounded-full mb-3 uppercase tracking-wider">
            Try it right now
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
            See real output before you sign up
          </h2>
        </div>
        <DemoPreview />
      </section>

      {/* ── Features ── */}
      <FeatureCards />

      {/* ── CTA Banner ── */}
      <section className="px-4 pb-24">
        <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.3),transparent_60%)]" />
          <div className="relative z-10">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
              Your first 50 generations are free
            </h2>
            <p className="text-brand-200 text-lg mb-8 max-w-md mx-auto">
              No credit card. No time limit. Just create.
            </p>
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-brand-700 font-bold text-base hover:bg-brand-50 transition-colors duration-200 shadow-xl"
            >
              Get started — it's free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-surface-border px-6 py-8 text-center text-slate-500 text-sm">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-brand-400" />
          <span className="font-display font-bold text-white text-sm">ContentAI</span>
        </div>
        <p>© {new Date().getFullYear()} AI Content Generator · Built for GSSoC</p>
      </footer>
    </main>
  );
}