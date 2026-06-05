import { Zap, Palette, LayoutTemplate, History, Shield, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Generation",
    desc: "Generate high-quality content in under 2 seconds using Gemini's latest models.",
    color: "text-yellow-400",
    glow: "group-hover:shadow-yellow-500/20",
  },
  {
    icon: LayoutTemplate,
    title: "25+ Templates",
    desc: "Blog posts, social captions, email subjects, product descriptions — all covered.",
    color: "text-brand-400",
    glow: "group-hover:shadow-brand-500/20",
  },
  {
    icon: Palette,
    title: "Brand Voice",
    desc: "Tune the tone — professional, casual, witty. The AI adapts to how you speak.",
    color: "text-pink-400",
    glow: "group-hover:shadow-pink-500/20",
  },
  {
    icon: History,
    title: "Full History",
    desc: "Every piece you've generated is saved and searchable. Never lose good copy.",
    color: "text-accent",
    glow: "group-hover:shadow-teal-500/20",
  },
  {
    icon: Shield,
    title: "Secure Auth",
    desc: "Clerk-powered authentication keeps your account and history private.",
    color: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/20",
  },
  {
    icon: Globe,
    title: "Multi-language",
    desc: "Generate content in 20+ languages without switching tools.",
    color: "text-violet-400",
    glow: "group-hover:shadow-violet-500/20",
  },
];

export default function FeatureCards() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 border border-accent/20 rounded-full mb-4 uppercase tracking-wider">
            Everything you need
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Built for real content workflows
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Not just a chatbot wrapper — a purpose-built tool with the features creators actually use daily.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc, color, glow }) => (
            <div
              key={title}
              className={`group card-hover p-6 rounded-2xl bg-surface-card border border-surface-border shadow-lg ${glow}`}
            >
              <div className={`w-10 h-10 flex items-center justify-center rounded-xl bg-surface-DEFAULT mb-4 ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}