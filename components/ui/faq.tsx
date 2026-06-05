"use client";
import '@/styles/bento.css';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuBrain,
  LuRocket,
  LuZap,
  LuDollarSign,
  LuUsers,
  LuMessageSquare,
  LuCpu,
  LuWrench,
  LuFileText,
  LuChevronDown,
  LuMail,
  LuPhone,
} from "react-icons/lu";

interface Faq {
  question: string;
  answer: string;
  icon: React.ReactNode;
  category: string;
}

interface ContactMethod {
  icon: JSX.Element;
  title: string;
  description: string;
  contact: string;
  action: string;
}

const faqs: Faq[] = [
  {
    category: "Getting Started",
    question: "What is AI Content Generator?",
    answer:
      "AI Content Generator is a powerful tool that uses artificial intelligence to create high-quality content automatically, helping users save time and enhance their writing process.",
    icon: <LuBrain className="w-5 h-5" />,
  },
  {
    category: "Getting Started",
    question: "How do I get started with AI Content Generator?",
    answer:
      "To start using our AI Content Generator, sign up for an account on our website, choose a pricing plan, and explore our user-friendly interface.",
    icon: <LuRocket className="w-5 h-5" />,
  },
  {
    category: "Features",
    question: "What features does AI Content Generator offer?",
    answer:
      "Our AI Content Generator offers features like content creation, editing, optimization, SEO suggestions, and support for multiple languages to enhance your writing.",
    icon: <LuZap className="w-5 h-5" />,
  },
  {
    category: "Pricing",
    question: "What are the pricing plans for AI Content Generator?",
    answer:
      "We offer flexible pricing plans including a free tier, monthly subscriptions, and annual plans to suit different needs. Check our pricing page for more details.",
    icon: <LuDollarSign className="w-5 h-5" />,
  },
  {
    category: "Community",
    question: "How can I contribute to the development of AI Content Generator?",
    answer:
      "You can contribute by providing feedback, reporting bugs, or suggesting features that can enhance our AI Content Generator.",
    icon: <LuUsers className="w-5 h-5" />,
  },
  {
    category: "Features",
    question: "Is there a collaboration feature in AI Content Generator?",
    answer:
      "Yes, our AI Content Generator supports collaborative features, allowing multiple users to work on content simultaneously.",
    icon: <LuMessageSquare className="w-5 h-5" />,
  },
  {
    category: "Technical",
    question: "What technologies power AI Content Generator?",
    answer:
      "Our AI Content Generator is built using advanced machine learning algorithms, natural language processing, and state-of-the-art cloud infrastructure for optimal performance.",
    icon: <LuCpu className="w-5 h-5" />,
  },
  {
    category: "Support",
    question: "How can I get support for AI Content Generator?",
    answer:
      "For support, you can reach out through our contact methods provided on the website. We're here to help you with any issues or questions.",
    icon: <LuWrench className="w-5 h-5" />,
  },
  {
    category: "Features",
    question: "Are there templates available in AI Content Generator?",
    answer:
      "Yes, we provide a variety of templates for different types of content, including blog posts, social media updates, and marketing copy.",
    icon: <LuFileText className="w-5 h-5" />,
  },
];

const contactMethods: ContactMethod[] = [
  {
    icon: <LuMail className="w-5 h-5 text-brand-light" />,
    title: "Email Support",
    description: "Get help via email",
    contact: "support@aicontentgenerator.com",
    action: "mailto:support@aicontentgenerator.com",
  },
  {
    icon: <LuPhone className="w-5 h-5 text-brand-light" />,
    title: "Phone Support",
    description: "Call us directly",
    contact: "+1 (555) 123-4567",
    action: "tel:+15551234567",
  },
];

/* ── Sub-components ── */

interface FaqItemProps {
  faq: Faq;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ faq, isOpen, onToggle }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35 }}
    className={`rounded-xl overflow-hidden transition-all duration-300 border ${
      isOpen
        ? "bg-brand-mid/12 border-brand-light/30"
        : "bg-brand-mid/6 border-brand-light/12"
    }`}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-6 text-left font-medium transition-colors duration-200"
    >
      <span className="flex items-center gap-3">
        <span className="text-brand-light">{faq.icon}</span>
        <span className="text-sm font-medium text-brand-cream">
          {faq.question}
        </span>
      </span>
      <LuChevronDown
        className={`transform transition-transform duration-300 text-brand-light ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 text-sm leading-relaxed text-brand-cream/55">
            {faq.answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

interface ContactSupportProps {
  methods: ContactMethod[];
}

const ContactSupport: React.FC<ContactSupportProps> = ({ methods }) => {
  const [selectedMethodIndex, setSelectedMethodIndex] = useState(0);

  return (
    <div
      className="p-6 rounded-xl bg-brand-mid/10 border border-brand-light/18"
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {methods.map((method, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
              selectedMethodIndex === index
                ? "bg-brand-mid/30 border border-brand-light/40 text-brand-cream"
                : "bg-transparent border border-transparent text-brand-cream/50"
            }`}
            onClick={() => setSelectedMethodIndex(index)}
          >
            {method.title}
          </button>
        ))}
      </div>
      <div className="flex items-start space-x-4">
        <div className="mt-1">{methods[selectedMethodIndex].icon}</div>
        <div>
          <h3 className="font-semibold text-sm mb-1 text-brand-cream">
            {methods[selectedMethodIndex].title}
          </h3>
          <p className="text-xs mb-2 text-brand-cream/45">
            {methods[selectedMethodIndex].description}
          </p>
          <a
            href={methods[selectedMethodIndex].action}
            className="text-xs transition-colors duration-200 hover:underline text-brand-light hover:text-brand-light/85"
          >
            {methods[selectedMethodIndex].contact}
          </a>
        </div>
      </div>
    </div>
  );
};

/* ── Main FAQ Page ── */

const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...new Set(faqs.map((faq) => faq.category))];

  const filteredFaqs = faqs.filter((faq) => {
    return selectedCategory === "all" || faq.category === selectedCategory;
  });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-deep border-t border-brand-light/12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full px-5 py-2 text-[11px] font-bold uppercase tracking-widest bg-brand-mid/15 border border-brand-light/25 text-brand-light"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-3 font-bold tracking-tight text-brand-cream text-3xl sm:text-4xl"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base text-brand-cream/55"
          >
            Everything you need to know about AI Content Generator. Can't find what you're looking for? Contact our support team.
          </motion.p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setOpenIndex(null);
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-brand-mid text-brand-cream border border-brand-mid"
                    : "bg-brand-mid/10 border border-brand-light/15 text-brand-cream/60 hover:bg-brand-mid/15"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-brand-cream uppercase tracking-wide">
              Need Help?
            </h3>
            <ContactSupport methods={contactMethods} />
          </aside>

          <div className="lg:col-span-3 space-y-3">
            {filteredFaqs.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
