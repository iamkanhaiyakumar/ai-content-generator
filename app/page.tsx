"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PublicHeader from "@/components/public-header";
import PublicFooter from "@/components/public-footer";
import Pricing from "@/components/ui/pricing";
import Faq from "@/components/ui/faq";
import Review from "@/components/ui/review";
import UseCases from "@/components/ui/use-cases";
import { LuSparkles, LuCopy, LuCheck, LuArrowRight } from "react-icons/lu";
import { PenLine, Megaphone, Mail, BookOpen, Code2, BarChart2, Sparkles, Check } from "lucide-react";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<"blog" | "social" | "email">("blog");
  const [copied, setCopied] = useState(false);

  const demoContent = {
    blog: {
      prompt: "Write a short hook about developer tools...",
      title: "Building Tools for Developers",
      body: "The best developer tools don't just solve problems; they fit into your workflow like second nature. When building for engineers, speed is your feature, clarity is your design, and trust is your currency. Simplify the complex.",
    },
    social: {
      prompt: "Generate a LinkedIn post hook about shipping products...",
      title: "Shipping fast > Shipping perfect",
      body: "We shipped three small updates this week. None of them were perfect, but all of them are already in users' hands. Real user feedback is worth 10x more than internal debates. Keep momentum. 🚀",
    },
    email: {
      prompt: "Draft a concise product feature announcement email...",
      title: "New feature: AI sandbox is live",
      body: "Hi team, we just shipped a live interactive playground directly to the landing page. Users can now test the model's capabilities before signing up. Check it out and let us know what you think.",
    },
  };

  const handleCopy = () => {
    const contentText = `${demoContent[selectedTab].title}\n\n${demoContent[selectedTab].body}`;
    navigator.clipboard.writeText(contentText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden antialiased bg-brand-deep text-brand-cream"
    >
      <PublicHeader />

      {/* ── Bento Hero Section ────────────────────── */}
      <section id="hero" className="relative grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-28 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Left Column: Text */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest bg-brand-mid/15 border border-brand-light/30 text-brand-light"
          >
            <LuSparkles className="w-3.5 h-3.5" />
            <span>Experience Next‑Gen Copywriting</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-bold tracking-tight leading-[1.04] text-brand-cream"
            style={{ fontSize: "clamp(3rem,8vw,5.5rem)" }}
          >
            Copywriting that
            <br />
            <span className="text-brand-light">resonates at scale.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="max-w-xl text-lg leading-relaxed text-brand-cream/60"
          >
            A minimalist workspace built to generate high‑performing blog posts, engaging social media copy, and personalized campaigns in seconds.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(75,86,148,0.4)" }}
              whileTap={{ scale: 0.97 }}
              href="/sign-up"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold bg-brand-mid text-brand-cream shadow-[0_0_20px_rgba(75,86,148,0.3)] hover:bg-brand-mid/90"
            >
              Get Started Free
              <LuArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#use-cases"
              onClick={(e) => { e.preventDefault(); document.getElementById("use-cases")?.scrollIntoView({ behavior: "smooth" }); }}
              className="rounded-xl px-8 py-3.5 text-sm font-medium bg-brand-light/10 border border-brand-light/25 text-brand-cream/70 hover:bg-brand-light/20"
            >
              See Use Cases
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column: Interactive Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.45 }}
          className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden bg-[#0f1541]/60 border border-brand-light/20 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-[20px]"
        >
          {/* Window Chrome */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-brand-light/12">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-brand-light/25" />
              <span className="w-3 h-3 rounded-full bg-brand-light/25" />
              <span className="w-3 h-3 rounded-full bg-brand-light/25" />
            </div>
            <div className="text-xs font-medium tracking-widest text-brand-light/60">demo_playground.json</div>
            <div className="w-12" />
          </div>
          <div className="p-6 sm:p-8 text-left">
            <label className="text-xs font-semibold uppercase tracking-widest mb-4 block text-brand-light/70">Select a template</label>
            {/* Tabs */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              {(["blog", "social", "email"] as const).map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 capitalize border ${selectedTab === tab ? "bg-brand-mid/40 border-brand-light/50 text-brand-cream" : "bg-transparent border-brand-light/15 text-brand-cream/45 hover:bg-brand-light/5"}`}
                >
                  {tab === "blog" ? "Blog Hook" : tab === "social" ? "LinkedIn Post" : "Email Template"}
                </motion.button>
              ))}
            </div>
            {/* Prompt */}
            <div className="rounded-xl p-4 mb-5 flex items-center justify-between gap-4 bg-brand-mid/8 border border-brand-light/15">
              <span className="text-sm italic text-brand-cream/50">“{demoContent[selectedTab].prompt}”</span>
              <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-brand-mid/20 border border-brand-light/25 text-brand-light/90">Prompt</span>
            </div>
            {/* Output */}
            <div className="rounded-xl p-6 relative group min-h-[160px] flex flex-col justify-between bg-[#0a0e2d]/70 border border-brand-light/12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-sm font-semibold mb-3 text-brand-cream">{demoContent[selectedTab].title}</h3>
                  <p className="text-sm leading-relaxed text-brand-cream/55">{demoContent[selectedTab].body}</p>
                </motion.div>
              </AnimatePresence>
              <div className="flex justify-end mt-6">
                <motion.button
                  onClick={handleCopy}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 text-xs font-medium py-2 px-4 rounded-lg bg-brand-mid/15 border border-brand-light/20 text-brand-cream/60 hover:bg-brand-mid/25"
                >
                  {copied ? (<><LuCheck className="w-3.5 h-3.5 text-brand-light" /><span className="text-brand-light">Copied!</span></>) : (<><LuCopy className="w-3.5 h-3.5" /><span>Copy output</span></>) }
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── BENTO GRID LANDING SECTION ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-brand-deep border-t border-brand-light/12">
        <div className="max-w-7xl mx-auto">
          {/* Section Intro */}
          <div className="mb-20 text-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest bg-brand-mid/15 border border-brand-light/25 text-brand-light mb-4"
            >
              What You Can Do
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-brand-cream mb-4"
            >
              Everything You Need to Generate Content at Scale
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-lg text-brand-cream/60 max-w-2xl mx-auto"
            >
              From blog posts to social media, AI-powered tools built for creators, marketers, and founders.
            </motion.p>
          </div>

          {/* Bento Grid */}
          <div className="landing-bento">
            {/* ── ROW 1 ── */}
            {/* Use Case 1 - Small Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="bento-card bento-col-quarter group"
            >
              <div className="icon-badge mb-4">
                <PenLine className="w-5 h-5 text-brand-light" />
              </div>
              <h3 className="font-bold text-brand-cream mb-2">Blog Posts</h3>
              <p className="text-sm text-brand-cream/60">SEO-optimized long-form content in seconds</p>
            </motion.div>

            {/* Use Case 2 - Small Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bento-card bento-col-quarter group"
            >
              <div className="icon-badge mb-4">
                <Megaphone className="w-5 h-5 text-brand-light" />
              </div>
              <h3 className="font-bold text-brand-cream mb-2">Social Posts</h3>
              <p className="text-sm text-brand-cream/60">Engaging content for all platforms</p>
            </motion.div>

            {/* Use Case 3 - Small Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bento-card bento-col-quarter group"
            >
              <div className="icon-badge mb-4">
                <Mail className="w-5 h-5 text-brand-light" />
              </div>
              <h3 className="font-bold text-brand-cream mb-2">Email Campaigns</h3>
              <p className="text-sm text-brand-cream/60">High-converting subject lines & copy</p>
            </motion.div>

            {/* Use Case 4 - Small Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bento-card bento-col-quarter group"
            >
              <div className="icon-badge mb-4">
                <BookOpen className="w-5 h-5 text-brand-light" />
              </div>
              <h3 className="font-bold text-brand-cream mb-2">Product Copy</h3>
              <p className="text-sm text-brand-cream/60">Persuasive listings & descriptions</p>
            </motion.div>

            {/* Featured Pricing - Half Width, Taller */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="bento-card bento-col-half featured-pulse flex flex-col"
              style={{
                background: "linear-gradient(135deg, rgba(75,86,148,0.15) 0%, rgba(75,86,148,0.08) 100%)",
                borderColor: "rgba(114,136,174,0.3)",
              }}
            >
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-light/15 border border-brand-light/30 text-brand-light mb-4">
                  Most Popular
                </span>
                <h3 className="text-2xl font-bold text-brand-cream mb-2">Content Creator</h3>
                <p className="text-brand-cream/60 text-sm mb-6">Perfect for bloggers and social creators</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-brand-light">$20</span>
                <span className="text-brand-cream/60 text-sm">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-cream/70">
                  <Check className="w-4 h-4 text-brand-light mt-0.5 flex-shrink-0" />
                  <span>Instagram tools & generators</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-brand-cream/70">
                  <Check className="w-4 h-4 text-brand-light mt-0.5 flex-shrink-0" />
                  <span>YouTube SEO suggestions</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-brand-cream/70">
                  <Check className="w-4 h-4 text-brand-light mt-0.5 flex-shrink-0" />
                  <span>Unlimited monthly prompts</span>
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg font-semibold bg-brand-light/20 border border-brand-light/40 text-brand-cream hover:bg-brand-light/30 transition-all mt-auto"
              >
                Get Started
              </motion.button>
            </motion.div>

            {/* Testimonial Preview - Half Width */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bento-card bento-col-half flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-brand-light" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-light">Success Stories</span>
              </div>
              <blockquote className="text-lg leading-relaxed italic text-brand-cream/75 mb-6 flex-grow">
                "This AI is a game-changer! It's like having an entire research team that never sleeps. My productivity has skyrocketed."
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-brand-light/10">
                <div className="w-10 h-10 rounded-full bg-brand-mid/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-brand-light">LG</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-cream">Liam Garcia</p>
                  <p className="text-xs text-brand-light/60">AI Enthusiast</p>
                </div>
              </div>
            </motion.div>

            {/* More Use Cases - Row 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bento-card bento-col-quarter group"
            >
              <div className="icon-badge mb-4">
                <Code2 className="w-5 h-5 text-brand-light" />
              </div>
              <h3 className="font-bold text-brand-cream mb-2">Documentation</h3>
              <p className="text-sm text-brand-cream/60">API docs & developer guides</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bento-card bento-col-quarter group"
            >
              <div className="icon-badge mb-4">
                <BarChart2 className="w-5 h-5 text-brand-light" />
              </div>
              <h3 className="font-bold text-brand-cream mb-2">Ad Copy</h3>
              <p className="text-sm text-brand-cream/60">High-converting ad headlines</p>
            </motion.div>

            {/* CTA Feature Card - Half Width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="bento-card bento-col-half"
            >
              <h3 className="text-xl font-bold text-brand-cream mb-3">Trusted by Creators & Teams</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-brand-cream/70">
                  <div className="w-2 h-2 rounded-full bg-brand-light" />
                  <span>10,000+ content creators</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-cream/70">
                  <div className="w-2 h-2 rounded-full bg-brand-light" />
                  <span>50M+ words generated</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-cream/70">
                  <div className="w-2 h-2 rounded-full bg-brand-light" />
                  <span>99% uptime guaranteed</span>
                </div>
              </div>
            </motion.div>

            {/* FAQ Preview - Full Width CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bento-card bento-col-full flex flex-col sm:flex-row items-center justify-between gap-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-brand-cream mb-2">Ready to Transform Your Content?</h3>
                <p className="text-brand-cream/60">Start generating high-quality content in seconds. No credit card required.</p>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/sign-up"
                className="px-8 py-3 rounded-xl font-semibold bg-brand-mid text-brand-cream shadow-lg hover:bg-brand-mid/90 transition-all whitespace-nowrap"
              >
                Start Free Trial
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FULL COMPONENTS BELOW BENTO (Detailed Sections) ── */}
      <UseCases />
      <section id="pricing"><Pricing /></section>
      <Review />
      <Faq />

      <PublicFooter />
    </main>
  );
}