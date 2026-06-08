<<<<<<< HEAD
import PublicHeader from "@/components/public-header";
import PublicFooter from "@/components/public-footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Pricing } from "@/components/ui/pricing";
import { Faq } from "@/components/ui/faq";
import { Review } from "@/components/ui/review";
import UseCases from "@/components/ui/use-cases";   // ← NEW IMPORT
=======
'use client';
import { Button } from "@/components/ui/button";
import {
  Zap,
  FileText,
  MessageSquare,
  ShoppingBag,
  Mail,
  Search,
  Megaphone,
  CheckCircle,
  Clipboard,
  Edit3,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import PublicHeader from "@/components/public-header";
import PublicFooter from "@/components/public-footer";
import FaqPage from "@/components/ui/faq";
import Pricing from "@/components/ui/pricing";
import Review from '@/components/ui/review';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Loading from '@/public/LoadingPage.png';

export default function LandingPage() {
  const [loading, setLoading] = useState(true); // State to track loading
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50); // Adjust the speed here

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "AI-Powered Writing",
      description: "Create SEO-optimized blog posts, social media captions, and product descriptions with AI, tailored to your audience.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Streamlined Content Creation",
      description: "Automate your content workflows for blogs, YouTube, Instagram, and more, allowing faster turnaround on content production.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Content Quality Checker",
      description: "Automatically detect and correct grammar, spelling, and style issues to ensure your content is polished and professional.",
    },
    {
      icon: <Clipboard className="h-6 w-6" />,
      title: "Template Library",
      description: "Access a growing library of pre-built templates for various content types, including blogs, social media, and marketing.",
    },
    {
      icon: <Edit3 className="h-6 w-6" />,
      title: "Plagiarism-Free Rewrite",
      description: "Easily rewrite existing content while ensuring it remains plagiarism-free and optimized for search engines.",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Advanced Text Refinement",
      description: "Refine your writing by eliminating redundancies, fixing grammar issues, and adding clarity, using Gemini-powered AI.",
    },
  ];

  const useCases = [
    { icon: <FileText />, title: "Blog Posts and Articles", description: "Generate engaging blog content and in-depth articles on various topics." },
    { icon: <MessageSquare />, title: "Social Media Content", description: "Create catchy posts and captions for multiple social media platforms." },
    { icon: <ShoppingBag />, title: "Product Descriptions", description: "Craft compelling product descriptions for e-commerce websites." },
    { icon: <Mail />, title: "Email Newsletters", description: "Compose informative and engaging email newsletters for your subscribers." },
    { icon: <Search />, title: "SEO Optimized Content", description: "Generate content optimized for search engines to improve rankings." },
    { icon: <Megaphone />, title: "Marketing Copy", description: "Create persuasive marketing copy for various campaigns and platforms." },
  ];

  // Simulate loading time (e.g., 3 seconds)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);
>>>>>>> upstream/master

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
            
              href="/sign-up"
              className="rounded-xl bg-violet-600 px-8 py-3 text-base font-semibold text-white shadow-md transition hover:bg-violet-500"
            >
              Get Started Free
            </a>
            
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
<<<<<<< HEAD
      </section>
=======
      </div>
      ) : (
        <>
          <PublicHeader />
          <main className="container mx-auto">
            <section className="my-10 sm:my-14 px-3 sm:px-4 md:px-0">
              <div className="relative overflow-hidden rounded-3xl border border-violet-400/25 bg-gradient-to-br from-[#050b1f] via-[#0a1330] to-[#111938] px-5 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 text-center shadow-[0_0_60px_rgba(112,78,248,0.18)]">
                <BackgroundBeams className="opacity-30" />
                <div className="relative z-10 max-w-4xl mx-auto">
                  <span
                    className="inline-flex items-center rounded-full border border-violet-400/50 bg-violet-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium tracking-wide text-violet-200"
                  >
                    Built for founders, marketers, and content teams
                  </span>
                  <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-balance">
                    <span className="text-white">Turn Ideas into </span>
                    <span className="bg-gradient-to-r from-[#8f73ff] via-[#704ef8] to-[#bc9aff] bg-clip-text text-transparent">
                      Brand-Ready Content
                    </span>
                  </h1>
                  <p className="mt-6 text-base sm:text-lg text-slate-200/90 max-w-3xl mx-auto leading-relaxed">
                    Plan, draft, and refine polished copy in minutes. AI Content Generator helps you ship blogs, social posts, and marketing campaigns with a consistent voice your audience trusts.
                  </p>
                  <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/dashboard">
                      <Button className="bg-[#704ef8] text-white hover:bg-[#5a3cc7] w-fit mx-auto px-10 md:mx-0">
                        Start Writing Free
                      </Button>
                    </Link>
                    <Link href="#features">
                      <Button
                        variant="outline"
                        className="border-violet-300/50 text-violet-100 hover:bg-violet-500/20 hover:text-white bg-white/5 w-fit mx-auto px-10 md:mx-0"
                      >
                        Explore Features
                      </Button>
                    </Link>
                  </div>
                  <ul aria-label="Platform statistics" className="mt-10 grid gap-4 sm:grid-cols-3 text-left">
                    <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                      <p className="text-2xl font-semibold text-white">50+</p>
                      <p className="text-sm text-slate-300">Ready-to-use content templates</p>
                    </li>
                    <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                      <p className="text-2xl font-semibold text-white">{"< 60 sec"}</p>
                      <p className="text-sm text-slate-300">Average first draft generation</p>
                    </li>
                    <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                      <p className="text-2xl font-semibold text-white">10k+</p>
                      <p className="text-sm text-slate-300">Teams and creators served</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
>>>>>>> upstream/master

      {/* Use Cases Section — fixes issue #138 */}
      <UseCases />    {/* ← NEW: renders the #use-cases section the navbar links to */}

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