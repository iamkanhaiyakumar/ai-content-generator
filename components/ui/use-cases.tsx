"use client";
import '@/styles/bento.css';



import {
  PenLine,
  Megaphone,
  Mail,
  BookOpen,
  Code2,
  BarChart2,
} from "lucide-react";
import { motion } from "framer-motion";

const useCases = [
  {
    icon: PenLine,
    title: "Blog & Article Writing",
    description:
      "Generate SEO-optimized long-form blog posts, articles, and editorial content in seconds — tailored to your niche and tone of voice.",
  },
  {
    icon: Megaphone,
    title: "Social Media Content",
    description:
      "Craft engaging captions, threads, and posts for Instagram, Twitter/X, and LinkedIn with platform-aware formatting and hooks.",
  },
  {
    icon: Mail,
    title: "Email Campaigns",
    description:
      "Write compelling subject lines, cold outreach emails, newsletters, and follow-up sequences that drive opens and conversions.",
  },
  {
    icon: BookOpen,
    title: "Product Descriptions",
    description:
      "Produce persuasive and accurate product copy for e-commerce listings, landing pages, and marketing materials at scale.",
  },
  {
    icon: Code2,
    title: "Technical Documentation",
    description:
      "Generate clear API docs, developer guides, README files, and knowledge-base articles from simple natural-language prompts.",
  },
  {
    icon: BarChart2,
    title: "Ad Copy & Marketing",
    description:
      "Create high-converting ad headlines, taglines, and campaign briefs for Google Ads, Meta, and other advertising platforms.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-deep via-[#0e1340] to-brand-deep border-t border-brand-light/12"
      aria-labelledby="use-cases-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full px-5 py-2 text-[11px] font-bold uppercase tracking-widest bg-brand-mid/15 border border-brand-light/25 text-brand-light"
          >
            Use Cases
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            id="use-cases-heading"
            className="mt-3 font-bold tracking-tight text-brand-cream text-3xl sm:text-4xl"
          >
            Built for Every Content Need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base text-brand-cream/55"
          >
            From solo creators to enterprise marketing teams, our AI adapts to your
            workflow and helps you produce content that resonates with your audience.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="bento-grid">
          {useCases.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              className="bento-card group flex flex-col"
            >
              <div className="icon-badge mb-4">
                <Icon className="w-6 h-6 text-brand-light" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-brand-cream leading-snug">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-brand-cream/60 flex-grow">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}