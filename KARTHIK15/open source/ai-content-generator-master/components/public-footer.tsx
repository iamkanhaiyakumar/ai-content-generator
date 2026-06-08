import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Use Cases", href: "#use-cases" },
  { name: "Contributors", href: "contributors/" },
];

const PublicFooter = () => {
  return (
    <footer className="bg-gray-900 pt-8 sm:pt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              AI Content Generator
            </h3>
            <p className="text-sm sm:text-base text-gray-400 max-w-md">
              Empowering content creators with advanced AI technology. Join us
              in revolutionizing the content creation process.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:w-1/2">
            <div>
              <h4 className="font-semibold mb-4">Project</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://twitter.com/Kanhaiyakr01"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/kanhaiyakumar01/"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                </Link>
                <Link
                  href="https://github.com/iamkanhaiyakumar/ai-content-generator"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 py-6 sm:py-8 border-t border-gray-800 text-xs sm:text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} AI Content Generator. Licensed under MIT.
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
