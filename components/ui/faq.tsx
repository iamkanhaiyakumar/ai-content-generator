'use client';
import { useState } from 'react';
import { FiChevronDown, FiMail, FiPhone } from 'react-icons/fi';

interface Faq {
  question: string;
  answer: string;
  icon: string;
  category: string;
}

interface ContactMethod {
  icon: JSX.Element;
  title: string;
  description: string;
  contact: string;
  action: string;
}

// Updated FAQs relevant to AI content generation
const faqs: Faq[] = [
  {
    category: "Getting Started",
    question: "What is AI Content Generator?",
    answer: "AI Content Generator is a powerful tool that uses artificial intelligence to create high-quality content automatically, helping users save time and enhance their writing process.",
    icon: "🤖"
  },
  {
    category: "Getting Started",
    question: "How do I get started with AI Content Generator?",
    answer: "To start using our AI Content Generator, sign up for an account on our website, choose a pricing plan, and explore our user-friendly interface.",
    icon: "🚀"
  },
  {
    category: "Features",
    question: "What features does AI Content Generator offer?",
    answer: "Our AI Content Generator offers features like content creation, editing, optimization, SEO suggestions, and support for multiple languages to enhance your writing.",
    icon: "⚡"
  },
  {
    category: "Pricing",
    question: "What are the pricing plans for AI Content Generator?",
    answer: "We offer flexible pricing plans including a free tier, monthly subscriptions, and annual plans to suit different needs. Check our pricing page for more details.",
    icon: "💰"
  },
  {
    category: "Community",
    question: "How can I contribute to the development of AI Content Generator?",
    answer: "You can contribute by providing feedback, reporting bugs, or suggesting features that can enhance our AI Content Generator.",
    icon: "🤝"
  },
  {
    category: "Features",
    question: "Is there a collaboration feature in AI Content Generator?",
    answer: "Yes, our AI Content Generator supports collaborative features, allowing multiple users to work on content simultaneously.",
    icon: "👥"
  },
  {
    category: "Technical",
    question: "What technologies power AI Content Generator?",
    answer: "Our AI Content Generator is built using advanced machine learning algorithms, natural language processing, and state-of-the-art cloud infrastructure for optimal performance.",
    icon: "⚙️"
  },
  {
    category: "Support",
    question: "How can I get support for AI Content Generator?",
    answer: "For support, you can reach out through our contact methods provided on the website. We're here to help you with any issues or questions.",
    icon: "🛠️"
  },
  {
    category: "Features",
    question: "Are there templates available in AI Content Generator?",
    answer: "Yes, we provide a variety of templates for different types of content, including blog posts, social media updates, and marketing copy.",
    icon: "📄"
  },
];

const contactMethods: ContactMethod[] = [
  {
    icon: <FiMail className="w-6 h-6 text-[#704EF8]" />, // Set icon color
    title: "Email Support",
    description: "Get help via email",
    contact: "support@aicontentgenerator.com",
    action: "mailto:support@aicontentgenerator.com"
  },
  {
    icon: <FiPhone className="w-6 h-6 text-[#704EF8]" />, // Set icon color
    title: "Phone Support",
    description: "Call us directly",
    contact: "+1 (555) 123-4567",
    action: "tel:+15551234567"
  }
];

interface FaqItemProps {
  faq: Faq;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ faq, isOpen, onToggle }) => (
  <div className={`rounded-xl overflow-hidden transition-all duration-300 bg-black hover:bg-gray-800 shadow-md`}>
    <button onClick={onToggle} className="w-full flex items-center justify-between p-6 text-left font-medium">
      <span className="flex items-center gap-3">
        <span className="text-2xl text-[#704EF8]">{faq.icon}</span> {/* Set icon color */}
        <span className="text-lg text-white font-bold">{faq.question}</span> {/* Set question color */}
      </span>
      <FiChevronDown className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""} text-gray-600`} />
    </button>
    <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
      <div className={`p-6 pt-0 text-white`}> {/* Set description color */}
        {faq.answer}
      </div>
    </div>
  </div>
);

interface ContactSupportProps {
  methods: ContactMethod[];
}

const ContactSupport: React.FC<ContactSupportProps> = ({ methods }) => {
  const [selectedMethodIndex, setSelectedMethodIndex] = useState(0);

  return (
    <div className={`p-6 rounded-xl bg-black shadow-md`}>
      <div className="flex flex-wrap gap-2 mb-4">
        {methods.map((method, index) => (
          <button
            key={index}
            className={`px-4 py-2 font-semibold rounded-lg transition-all duration-300 ${selectedMethodIndex === index ? 'bg-[#704EF8] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setSelectedMethodIndex(index)}
          >
            {method.title}
          </button>
        ))}
      </div>
      <div className="flex items-start space-x-4">
        <div className='text-[#704EF8]'>{methods[selectedMethodIndex].icon}</div> {/* Set icon color */}
        <div>
          <h3 className="font-semibold mb-1 text-[#704EF8]">{methods[selectedMethodIndex].title}</h3> {/* Set title color */}
          <p className={`text-sm text-white mb-2`}> {/* Set description color */}
            {methods[selectedMethodIndex].description}
          </p>
          <a
            href={methods[selectedMethodIndex].action}
            className={`text-sm text-[#704EF8] font-medium hover:underline`}
          >
            {methods[selectedMethodIndex].contact}
          </a>
        </div>
      </div>
    </div>
  );
};

const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...new Set(faqs.map(faq => faq.category))];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`min-h-screen bg-[#080C14] text-gray-900`}>
      <header className="w-full"></header>

      <section className="w-full py-12 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 bg-white bg-clip-text text-transparent`}>
            Frequently Asked Questions
          </h1>
          <p className={`text-lg mb-8 text-gray-600`}>
            Everything you need to know about AI Content Generator
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category ? 'bg-[#704EF8] text-white' : 'bg-black text-gray-600 hover:bg-gray-100'}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <aside className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold text-white">Contact Support</h2>
            <ContactSupport methods={contactMethods} />
          </aside>

          <div className="lg:col-span-2 space-y-4">


            {/* FAQ List */}
            <div className="space-y-4">
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
      </main>
    </div>
  );
};

export default FaqPage;
