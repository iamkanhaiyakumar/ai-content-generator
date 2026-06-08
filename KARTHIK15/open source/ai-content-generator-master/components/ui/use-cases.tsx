import {
  PenLine,
  Megaphone,
  Mail,
  BookOpen,
  Code2,
  BarChart2,
} from "lucide-react";

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

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="bg-white py-20 px-4 dark:bg-gray-950 sm:px-6 lg:px-8"
      aria-labelledby="use-cases-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full bg-violet-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
            Use Cases
          </span>
          <h2
            id="use-cases-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Built for Every Content Need
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500 dark:text-gray-400">
            From solo creators to enterprise marketing teams, our AI adapts to your
            workflow and helps you produce content that resonates with your audience.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-200 hover:border-violet-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-violet-700"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 transition-colors group-hover:bg-violet-200 dark:bg-violet-900/40 dark:group-hover:bg-violet-900/60">
                <Icon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}