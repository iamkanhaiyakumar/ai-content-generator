import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

const navItems = [
  { name: "Features",    href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Use Cases",   href: "#use-cases" },
  { name: "Contributors", href: "contributors/" },
];

const socialLinks = [
  { Icon: Twitter,  href: "https://twitter.com/Kanhaiyakr01",                         label: "Twitter" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/kanhaiyakumar01/",              label: "LinkedIn" },
  { Icon: Github,   href: "https://github.com/iamkanhaiyakumar/ai-content-generator", label: "GitHub" },
];

const PublicFooter = () => {
  return (
    <footer
      className="pt-16 pb-12"
      style={{
        background: "rgba(14,19,55,0.95)",
        borderTop: "1px solid rgba(114,136,174,0.18)",
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">

          {/* Brand blurb */}
          <div className="lg:w-1/3">
            <h3 className="text-lg font-semibold tracking-tight mb-3" style={{ color: "#EAE0CF" }}>
              AI Content{" "}
              <span style={{ color: "#7288AE" }}>Generator</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "rgba(234,224,207,0.5)" }}>
              Empowering content creators with advanced AI technology. Join us in
              revolutionizing the content creation process.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 bg-brand-mid/15 border border-brand-light/20 text-brand-cream/55 hover:text-brand-cream hover:border-brand-light/50 hover:bg-brand-mid/30"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:w-1/2">
            <div>
              <h4
                className="text-xs font-semibold uppercase tracking-widest mb-5 text-brand-light/80"
              >
                Project
              </h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm transition-colors duration-200 text-brand-cream/50 hover:text-brand-cream"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="text-xs font-semibold uppercase tracking-widest mb-5 text-brand-light/80"
              >
                Legal
              </h4>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm transition-colors duration-200 text-brand-cream/50 hover:text-brand-cream"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 text-xs text-center"
          style={{
            borderTop: "1px solid rgba(114,136,174,0.12)",
            color: "rgba(234,224,207,0.35)",
          }}
        >
          © {new Date().getFullYear()} AI Content Generator. Licensed under MIT.
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
