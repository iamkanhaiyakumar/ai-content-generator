"use client";

import { useState } from "react";
import { Sparkles, Copy, Check } from "lucide-react";

const DEMO_OUTPUTS: Record<string, string> = {
  "Blog Intro": `Artificial intelligence is no longer the future — it's the present. Every industry from healthcare to finance is being transformed by machine learning models that can predict, reason, and create at scale. In this post, we'll explore how AI is reshaping the content landscape and what it means for creators like you.`,
  "Instagram Caption": `✨ The future of creativity isn't human vs. AI — it's human + AI. We're building tools that amplify your voice, not replace it. Ready to create 10x faster? 🚀 #AIContent #ContentCreator #DigitalMarketing`,
  "Product Description": `Meet the AI Content Generator — your always-on creative partner. Generate blog intros, social captions, product copy, and more in seconds. Powered by the latest large language models, it adapts to your brand voice and delivers polished output every time.`,
};

export default function DemoPreview() {
  const [selected, setSelected] = useState("Blog Intro");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(DEMO_OUTPUTS[selected]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl border border-surface-border bg-surface-card overflow-hidden shadow-2xl">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-surface-border bg-surface-DEFAULT/60">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-slate-400 font-mono">ai-content-generator.vercel.app</span>
        <div className="ml-auto flex items-center gap-1">
          <div className="glow-dot" />
          <span className="text-xs text-accent">Live</span>
        </div>
      </div>

      {/* Template picker */}
      <div className="flex gap-2 px-5 pt-4 flex-wrap">
        {Object.keys(DEMO_OUTPUTS).map((key) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
              selected === key
                ? "bg-brand-500 border-brand-500 text-white shadow-md shadow-brand-500/30"
                : "border-surface-border text-slate-400 hover:border-brand-400 hover:text-white"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Output */}
      <div className="px-5 py-4">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">Generated Output</span>
        </div>
        <div className="relative bg-surface-DEFAULT rounded-xl p-4 border border-surface-border min-h-[100px]">
          <p className="text-slate-300 text-sm leading-relaxed animate-fade-in">
            {DEMO_OUTPUTS[selected]}
          </p>
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-1.5 rounded-lg bg-surface-card border border-surface-border text-slate-400 hover:text-white hover:border-brand-400 transition-all duration-200"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-accent" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
        <p className="mt-3 text-xs text-slate-500 text-right">✦ Generated in 1.2s · No account needed to try</p>
      </div>
    </div>
  );
}