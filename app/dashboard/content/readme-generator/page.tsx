"use client";

import React, { useContext, useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Sparkles,
  Copy,
  Download,
  Eye,
  Code,
  CheckCircle2,
  XCircle,
  Loader,
  Github,
  Check,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModal";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";
import { marked } from "marked";

interface ProgressStep {
  id: string;
  label: string;
  status: "idle" | "loading" | "success" | "error";
}

interface RepoMetadata {
  name: string;
  description: string;
  stars: number;
  forks: number;
  licenseName: string;
  defaultBranch: string;
}

const TOAST_DISPLAY_DURATION = 2000;

export default function GithubReadmeGenerator() {
  const router = useRouter();
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

  // States
  const [repoUrl, setRepoUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [markdownText, setMarkdownText] = useState<string>("");
  const [previewTab, setPreviewTab] = useState<"preview" | "code">("preview");

  // Metadata extracted
  const [metadata, setMetadata] = useState<RepoMetadata | null>(null);
  const [detectedTechs, setDetectedTechs] = useState<string[]>([]);
  const [scannedFilesCount, setScannedFilesCount] = useState<number>(0);

  // Progress Checklist Steps
  const [steps, setSteps] = useState<ProgressStep[]>([
    { id: "parse", label: "Parsing repository URL", status: "idle" },
    { id: "meta", label: "Fetching repository metadata", status: "idle" },
    { id: "tree", label: "Scanning project directory structure", status: "idle" },
    { id: "config", label: "Analyzing configuration & dependencies", status: "idle" },
    { id: "gemini", label: "Generating README via Gemini AI", status: "idle" },
  ]);

  // Toast notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isErrorToast, setIsErrorToast] = useState(false);
  const [toastId, setToastId] = useState(0);

  useEffect(() => {
    if (!toastMessage) return;
    const timeoutId = window.setTimeout(() => setToastMessage(null), TOAST_DISPLAY_DURATION);
    return () => window.clearTimeout(timeoutId);
  }, [toastMessage, toastId]);

  const showToast = (message: string, isError = false) => {
    setToastMessage(message);
    setIsErrorToast(isError);
    setToastId((id) => id + 1);
  };

  const updateStepStatus = (id: string, status: ProgressStep["status"]) => {
    setSteps((prev) =>
      prev.map((step) => (step.id === id ? { ...step, status } : step))
    );
  };

  const resetSteps = () => {
    setSteps((prev) => prev.map((step) => ({ ...step, status: "idle" })));
  };

  // Helper to parse owner & repo
  const parseGitHubUrl = (url: string) => {
    const cleanUrl = url.trim();
    const match = cleanUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) return null;
    const owner = match[1];
    let repo = match[2];
    if (repo.endsWith(".git")) {
      repo = repo.replace(/\.git$/, "");
    }
    // Remove query params or trailing slashes
    repo = repo.split(/[?#]/)[0].replace(/\/+$/, "");
    // Extract first segment in case they pasted a file path link
    repo = repo.split("/")[0];
    return { owner, repo };
  };

  // Directory Tree builder
  const buildDirectoryTree = (paths: string[]): string => {
    const tree: { [key: string]: any } = {};

    paths.forEach((p) => {
      // Exclude build artifacts and vendor dirs
      if (
        p.startsWith("node_modules/") ||
        p.startsWith(".git/") ||
        p.startsWith(".next/") ||
        p.startsWith("dist/") ||
        p.startsWith("build/") ||
        p.startsWith("out/") ||
        p.includes("/node_modules/") ||
        p.includes("/.git/") ||
        p.includes("/.next/") ||
        p.endsWith(".png") ||
        p.endsWith(".jpg") ||
        p.endsWith(".ico") ||
        p.endsWith(".jpeg")
      ) {
        return;
      }

      const parts = p.split("/");
      if (parts.length > 3) return; // Keep it readable

      let current = tree;
      parts.forEach((part, index) => {
        if (!current[part]) {
          current[part] = index === parts.length - 1 ? null : {};
        }
        current = current[part];
      });
    });

    const renderTree = (obj: any, indent = ""): string => {
      let result = "";
      if (!obj) return "";
      const keys = Object.keys(obj);
      keys.forEach((key, index) => {
        const isLast = index === keys.length - 1;
        const marker = isLast ? "└── " : "├── ";
        const nextIndent = indent + (isLast ? "    " : "│   ");

        if (obj[key] === null) {
          result += `${indent}${marker}${key}\n`;
        } else {
          result += `${indent}${marker}${key}/\n`;
          result += renderTree(obj[key], nextIndent);
        }
      });
      return result;
    };

    return renderTree(tree).trim();
  };

  // Detect Tech Stacks
  const detectTechnologies = (paths: string[], packageJsonContent?: string, requirementsContent?: string) => {
    const techs = new Set<string>();

    paths.forEach((p) => {
      if (p.endsWith("Cargo.toml")) techs.add("Rust");
      if (p.endsWith("go.mod")) techs.add("Go");
      if (p.endsWith("composer.json")) techs.add("PHP");
      if (p.endsWith("pom.xml") || p.endsWith("build.gradle")) techs.add("Java");
      if (p.endsWith("Dockerfile") || p.endsWith("docker-compose.yml")) techs.add("Docker");

      // File extension scanners
      if (p.endsWith(".py")) techs.add("Python");
      if (p.endsWith(".rs")) techs.add("Rust");
      if (p.endsWith(".go")) techs.add("Go");
      if (p.endsWith(".js") || p.endsWith(".jsx")) techs.add("JavaScript");
      if (p.endsWith(".ts") || p.endsWith(".tsx")) techs.add("TypeScript");
      if (p.endsWith(".rb")) techs.add("Ruby");
      if (p.endsWith(".java")) techs.add("Java");
      if (p.endsWith(".php")) techs.add("PHP");
      if (p.endsWith(".cs")) techs.add("C#");
      if (p.endsWith(".cpp") || p.endsWith(".h")) techs.add("C++");
    });

    // Ingest package.json
    if (packageJsonContent) {
      try {
        const pkg = JSON.parse(packageJsonContent);
        const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };

        if (allDeps["react"]) techs.add("React");
        if (allDeps["next"]) techs.add("Next.js");
        if (allDeps["vue"]) techs.add("Vue");
        if (allDeps["express"]) techs.add("Express");
        if (allDeps["tailwindcss"]) techs.add("Tailwind CSS");
        if (allDeps["drizzle-orm"]) techs.add("Drizzle ORM");
        if (allDeps["prisma"]) techs.add("Prisma ORM");
        if (allDeps["@clerk/nextjs"] || allDeps["@clerk/clerk-react"]) techs.add("Clerk Auth");
        if (allDeps["mongodb"] || allDeps["mongoose"]) techs.add("MongoDB");
        if (allDeps["pg"] || allDeps["postgres"]) techs.add("PostgreSQL");
        if (allDeps["vite"]) techs.add("Vite");
      } catch (e) {
        console.error("package.json parsing error", e);
      }
    }

    // Ingest requirements.txt
    if (requirementsContent) {
      const lines = requirementsContent.split("\n");
      lines.forEach((line) => {
        const name = line.split("==")[0].trim().toLowerCase();
        if (name === "flask") techs.add("Flask");
        if (name === "django") techs.add("Django");
        if (name === "fastapi") techs.add("FastAPI");
        if (name === "numpy") techs.add("NumPy");
        if (name === "pandas") techs.add("Pandas");
        if (name === "tensorflow") techs.add("TensorFlow");
        if (name === "torch") techs.add("PyTorch");
      });
    }

    return Array.from(techs);
  };

  const handleGenerate = async () => {
    if (totalUsage >= 100000) {
      showToast("Credit limit exceeded. Upgrade your plan.", true);
      router.push("/dashboard/billing");
      return;
    }

    const parsed = parseGitHubUrl(repoUrl);
    if (!parsed) {
      showToast("Invalid GitHub repository URL format.", true);
      updateStepStatus("parse", "error");
      return;
    }

    const { owner, repo } = parsed;
    setLoading(true);
    resetSteps();
    updateStepStatus("parse", "success");

    let branch = "main";
    let repoDesc = "";
    let licenseKey = "MIT";
    let starCount = 0;
    let forkCount = 0;
    let fileList: string[] = [];
    let packageJsonText = "";
    let requirementsText = "";

    try {
      // 1. Fetch Repository Metadata
      updateStepStatus("meta", "loading");
      const repoDetailsRes = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
      if (!repoDetailsRes.ok) {
        throw new Error("Repository not found or private.");
      }
      const repoDetails = await repoDetailsRes.json();
      branch = repoDetails.default_branch || "main";
      repoDesc = repoDetails.description || "";
      licenseKey = repoDetails.license?.name || "MIT";
      starCount = repoDetails.stargazers_count || 0;
      forkCount = repoDetails.forks_count || 0;

      setMetadata({
        name: repoDetails.name,
        description: repoDesc,
        stars: starCount,
        forks: forkCount,
        licenseName: licenseKey,
        defaultBranch: branch
      });
      updateStepStatus("meta", "success");

      // 2. Fetch File Tree
      updateStepStatus("tree", "loading");
      const treeRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`
      );
      if (!treeRes.ok) {
        throw new Error("Failed to scan project file tree.");
      }
      const treeData = await treeRes.json();
      const rawTree = treeData.tree || [];
      fileList = rawTree.map((item: any) => item.path);
      setScannedFilesCount(fileList.length);
      updateStepStatus("tree", "success");

      // 3. Scan & Download config files
      updateStepStatus("config", "loading");
      const hasPackageJson = fileList.includes("package.json");
      const hasRequirements = fileList.includes("requirements.txt");

      if (hasPackageJson) {
        try {
          const res = await fetch(
            `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/package.json`
          );
          if (res.ok) {
            packageJsonText = await res.text();
          }
        } catch (e) {
          console.error("Failed to read package.json content", e);
        }
      }

      if (hasRequirements) {
        try {
          const res = await fetch(
            `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/requirements.txt`
          );
          if (res.ok) {
            requirementsText = await res.text();
          }
        } catch (e) {
          console.error("Failed to read requirements.txt content", e);
        }
      }

      const detected = detectTechnologies(fileList, packageJsonText, requirementsText);
      setDetectedTechs(detected);
      updateStepStatus("config", "success");

      // 4. Generate README via Gemini AI
      updateStepStatus("gemini", "loading");
      const directoryTreeText = buildDirectoryTree(fileList);

      const aiPrompt = `
You are a senior software developer who deeply understands codebases. Write a comprehensive, highly customized, and professional GitHub README.md for the following repository:
- Repository Full Name: ${owner}/${repo}
- Repository Name: ${repoDetails.name}
- Extracted GitHub Description: ${repoDesc || "No description provided."}
- Repository Statistics: ${starCount} stars, ${forkCount} forks
- Primary License: ${licenseKey}
- Detected Technologies: ${detected.join(", ")}

Below is the directory structure:
\`\`\`
${directoryTreeText}
\`\`\`

Here are package configuration details:
${packageJsonText ? `package.json dependencies:\n${packageJsonText}\n` : ""}
${requirementsText ? `requirements.txt contents:\n${requirementsText}\n` : ""}

Generate a premium README containing the following sections:
1. Project Title (Display with proper badges for license, stars, forks based on statistics provided)
2. Project Overview (A refined, developer-grade summary explaining the purpose and problem solved, rather than repeating basic details)
3. Key Features (Inferred logically from the directory tree, routes, or components. Group them beautifully)
4. Technologies Used (Clean formatted badges or grid list)
5. Directory Structure (Show a clean, structured directory map with annotations explaining what folders like components, routes, models do, rather than simply listing files)
6. Installation & Setup (Tailor instructions specifically to the detected stack. E.g. Node: 'npm install' + 'npm run dev', Python: 'pip install -r requirements.txt', etc.)
7. Usage instructions (Specific commands or setups inferred from codebase structure)
8. API Endpoints (If you detect api routes, controllers, or route files in the directory structure, list the main endpoint structures, request methods, and simple descriptions)
9. Contributing guidelines
10. License

Avoid any placeholders like "[Add screenshots here]". Instead write a formal placeholder code block:
\`\`\`md
## Screenshots

Add screenshots of your application here.
\`\`\`

Output ONLY the raw markdown content. Do NOT wrap the entire output in markdown block wrappers like \`\`\`markdown or prefix/suffix the response with introductory text. Start directly with the title header '#'.
`;

      const result = await chatSession.sendMessage(aiPrompt);
      const aiResponse = await result.response.text();

      // Clean up markdown block wraps
      let cleanResponse = aiResponse.trim();
      if (cleanResponse.startsWith("```markdown")) {
        cleanResponse = cleanResponse.substring(11);
      } else if (cleanResponse.startsWith("```")) {
        cleanResponse = cleanResponse.substring(3);
      }
      if (cleanResponse.endsWith("```")) {
        cleanResponse = cleanResponse.substring(0, cleanResponse.length - 3);
      }
      cleanResponse = cleanResponse.trim();

      setMarkdownText(cleanResponse);
      updateStepStatus("gemini", "success");
      showToast("README.md generated successfully!");

      // Update credit usage
      setTotalUsage((prev: number) => prev + cleanResponse.length);

      // Save to Database
      await saveInDb({ repoUrl, owner, repo }, "readme-generator", cleanResponse);
    } catch (err: any) {
      console.error(err);
      showToast(err.message || "An error occurred during generation.", true);
      // Mark active loading step as error
      setSteps((prev) =>
        prev.map((step) => (step.status === "loading" ? { ...step, status: "error" } : step))
      );
    } finally {
      setLoading(false);
    }
  };

  const saveInDb = async (form: any, slug: string, aiRes: string) => {
    try {
      await db.insert(AIOutput).values({
        formData: JSON.stringify(form),
        templateSlug: slug,
        aiResponse: aiRes,
        createdBy: user?.primaryEmailAddress?.emailAddress || "Unknown",
        createdAt: moment().format("DD/MM/YYYY"),
      });
    } catch (e) {
      console.error("Database save failed:", e);
    }
  };

  // Copy to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdownText);
      showToast("Copied to clipboard!");
    } catch (err) {
      console.error(err);
      showToast("Failed to copy", true);
    }
  };

  // Download README.md file
  const handleDownload = () => {
    try {
      const element = document.createElement("a");
      const file = new Blob([markdownText], { type: "text/markdown;charset=utf-8" });
      element.href = URL.createObjectURL(file);
      element.download = "README.md";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showToast("README.md downloaded!");
    } catch (err) {
      console.error(err);
      showToast("Failed to download file", true);
    }
  };

  // HTML Compiled representation
  const renderedHtml = useMemo(() => {
    if (!markdownText) return "<p className='text-gray-400 italic'>No preview available. Paste a GitHub repository URL on the left and click Generate.</p>";
    try {
      return marked.parse(markdownText) as string;
    } catch (e) {
      return "<p>Error compiling Markdown.</p>";
    }
  }, [markdownText]);

  return (
    <div className="p-4 md:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      
      {/* Markdown bodies CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .markdown-body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
          font-size: 15px;
          line-height: 1.6;
          color: #c9d1d9;
        }
        .markdown-body h1 {
          font-size: 1.8em;
          border-bottom: 1px solid #30363d;
          padding-bottom: 0.3em;
          margin-top: 24px;
          margin-bottom: 16px;
          font-weight: 600;
          color: #f0f6fc;
        }
        .markdown-body h2 {
          font-size: 1.4em;
          border-bottom: 1px solid #30363d;
          padding-bottom: 0.3em;
          margin-top: 24px;
          margin-bottom: 16px;
          font-weight: 600;
          color: #f0f6fc;
        }
        .markdown-body h3 {
          font-size: 1.15em;
          margin-top: 24px;
          margin-bottom: 16px;
          font-weight: 600;
          color: #f0f6fc;
        }
        .markdown-body p {
          margin-top: 0;
          margin-bottom: 16px;
          color: #c9d1d9;
        }
        .markdown-body ul, .markdown-body ol {
          margin-top: 0;
          margin-bottom: 16px;
          padding-left: 2em;
          color: #c9d1d9;
          list-style-type: disc;
        }
        .markdown-body ol {
          list-style-type: decimal;
        }
        .markdown-body li {
          margin-top: 0.25em;
        }
        .markdown-body code {
          padding: 0.2em 0.4em;
          margin: 0;
          font-size: 85%;
          background-color: rgba(110, 118, 129, 0.4);
          border-radius: 6px;
          font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, monospace;
          color: #ff7b72;
        }
        .markdown-body pre {
          padding: 16px;
          overflow: auto;
          font-size: 85%;
          line-height: 1.45;
          background-color: #161b22;
          border-radius: 6px;
          margin-bottom: 16px;
          border: 1px solid #30363d;
        }
        .markdown-body pre code {
          background: transparent;
          padding: 0;
          color: #e6edf3;
          font-size: 100%;
        }
        .markdown-body a {
          color: #58a6ff;
          text-decoration: none;
        }
        .markdown-body a:hover {
          text-decoration: underline;
        }
        .markdown-body blockquote {
          padding: 0 1em;
          color: #8b949e;
          border-left: 0.25em solid #30363d;
          margin: 0 0 16px 0;
        }
        .markdown-body hr {
          height: 0.25em;
          padding: 0;
          margin: 24px 0;
          background-color: #30363d;
          border: 0;
        }
      `}} />

      {/* Breadcrumb Toolbar */}
      <div className="flex justify-between items-center mb-6">
        <Link href="/dashboard">
          <Button variant="outline" className="flex items-center gap-2 text-black dark:text-white bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Button>
        </Link>
        <span className="text-xs font-mono text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-md border border-gray-200 dark:border-gray-700">
          Flagship Feature: Repository Auto-README
        </span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">
        
        {/* LEFT COLUMN: Input Form & Progress Checklist (5 cols) */}
        <div className="xl:col-span-5 flex flex-col gap-6">
          <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-md">
            <CardContent className="p-6 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-violet-600/10 rounded-lg text-violet-600">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">GitHub Repository Link</h1>
                  <p className="text-xs text-gray-500">Paste your public repo URL to generate README</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <Input
                  placeholder="https://github.com/username/project"
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                  className="border-gray-200 dark:border-gray-800 dark:bg-gray-900 text-sm py-5"
                />
                
                <Button
                  onClick={handleGenerate}
                  disabled={loading || !repoUrl}
                  className="w-full mt-2 bg-violet-600 hover:bg-violet-700 text-white font-medium py-5 rounded-xl transition flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader className="animate-spin w-4 h-4" /> Generating README...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" /> Generate README.md
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Progress / Step Checker */}
          {(loading || steps.some(s => s.status !== "idle")) && (
            <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-md">
              <CardContent className="p-6">
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Analysis Progress</h2>
                <div className="flex flex-col gap-3">
                  {steps.map((step) => (
                    <div key={step.id} className="flex items-center justify-between text-sm py-1">
                      <div className="flex items-center gap-3">
                        {step.status === "success" && (
                          <div className="p-0.5 bg-green-500/10 text-green-500 rounded-full">
                            <Check className="w-4 h-4" />
                          </div>
                        )}
                        {step.status === "loading" && (
                          <Loader className="animate-spin w-4 h-4 text-violet-600" />
                        )}
                        {step.status === "error" && (
                          <div className="p-0.5 bg-red-500/10 text-red-500 rounded-full">
                            <XCircle className="w-4 h-4" />
                          </div>
                        )}
                        {step.status === "idle" && (
                          <div className="w-4 h-4 rounded-full border-2 border-gray-200 dark:border-gray-800" />
                        )}
                        <span className={`transition-all ${step.status === "loading" ? "font-medium text-violet-600 dark:text-violet-400" : "text-gray-600 dark:text-gray-300"}`}>
                          {step.label}
                        </span>
                      </div>
                      
                      {step.status === "success" && (
                        <span className="text-xs text-green-500 font-mono">Done</span>
                      )}
                      {step.status === "loading" && (
                        <span className="text-xs text-violet-600 animate-pulse font-mono">Active</span>
                      )}
                      {step.status === "error" && (
                        <span className="text-xs text-red-500 font-mono">Failed</span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Repo metadata Summary */}
          {metadata && (
            <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-md">
              <CardContent className="p-6 flex flex-col gap-4">
                <div>
                  <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Detected Repository Info</h2>
                  <h3 className="text-lg font-bold text-violet-600 dark:text-violet-400">{metadata.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{metadata.description || "No repository description provided on GitHub."}</p>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center border-y border-gray-100 dark:border-gray-900 py-3 text-xs">
                  <div>
                    <span className="block font-bold text-gray-900 dark:text-white font-mono">{metadata.stars}</span>
                    <span className="text-gray-400 text-[10px]">Stars</span>
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900 dark:text-white font-mono">{metadata.forks}</span>
                    <span className="text-gray-400 text-[10px]">Forks</span>
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900 dark:text-white truncate font-mono" title={metadata.licenseName}>{metadata.licenseName}</span>
                    <span className="text-gray-400 text-[10px]">License</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-bold text-gray-500 uppercase">Tech Stack & Frameworks Detected:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {detectedTechs.length > 0 ? (
                      detectedTechs.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-semibold rounded-md bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                        >
                          {tech}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-gray-500 italic">No frameworks parsed in config.</span>
                    )}
                  </div>
                </div>

                <div className="text-[10px] text-gray-500 flex justify-between items-center mt-1 border-t border-gray-100 dark:border-gray-900 pt-3">
                  <span>File Scan Tree:</span>
                  <span className="font-mono">{scannedFilesCount} files analyzed</span>
                </div>
              </CardContent>
            </Card>
          )}

        </div>

        {/* RIGHT COLUMN: Output Preview & Controls (7 cols) */}
        <div className="xl:col-span-7 flex flex-col gap-6 min-h-[600px]">
          <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-md flex-1 flex flex-col overflow-hidden">
            
            {/* Toolbar */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex flex-wrap justify-between items-center bg-gray-50 dark:bg-gray-900/50 gap-4">
              
              {/* Toggles */}
              <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                <button
                  onClick={() => setPreviewTab("preview")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition ${
                    previewTab === "preview"
                      ? "bg-white dark:bg-gray-950 text-violet-600 dark:text-violet-400 shadow-sm"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" /> Rendered Preview
                </button>
                <button
                  onClick={() => setPreviewTab("code")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition ${
                    previewTab === "code"
                      ? "bg-white dark:bg-gray-950 text-violet-600 dark:text-violet-400 shadow-sm"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <Code className="w-3.5 h-3.5" /> Raw Markdown
                </button>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleCopy}
                  disabled={!markdownText}
                  className="flex gap-1.5 text-xs border-gray-200 dark:border-gray-800 text-black dark:text-white"
                  title="Copy Markdown to Clipboard"
                >
                  <Copy className="w-3.5 h-3.5" /> Copy
                </Button>
                <Button
                  size="sm"
                  onClick={handleDownload}
                  disabled={!markdownText}
                  className="flex gap-1.5 text-xs bg-violet-600 hover:bg-violet-700 text-white"
                  title="Download README.md File"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </Button>
              </div>

            </div>

            {/* Display / Editor Panel */}
            <div className="flex-1 flex flex-col p-6 min-h-[480px]">
              {previewTab === "preview" ? (
                <div
                  className="flex-1 overflow-y-auto max-h-[620px] border border-gray-200 dark:border-gray-800 bg-[#0d1117] p-6 rounded-lg markdown-body"
                  dangerouslySetInnerHTML={{ __html: renderedHtml }}
                />
              ) : (
                <div className="flex-1 flex flex-col gap-2">
                  <span className="text-xs text-gray-500">You can edit the raw markdown below. Changes will reflect in Rendered Preview.</span>
                  <textarea
                    value={markdownText}
                    onChange={(e) => setMarkdownText(e.target.value)}
                    className="flex-1 min-h-[480px] w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-900 p-4 font-mono text-xs text-gray-100 focus:outline-none focus:ring-1 focus:ring-violet-600 focus:border-violet-600 resize-none"
                    placeholder="# Project Title..."
                  />
                </div>
              )}
            </div>

          </Card>
        </div>

      </div>

      {/* Floating Status Notification Toast */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed bottom-5 right-5 text-sm px-4 py-3 rounded-lg shadow-xl border whitespace-nowrap flex items-center gap-2 bg-black text-white z-50 ${
            isErrorToast ? "border-red-500" : "border-violet-500"
          }`}
        >
          {isErrorToast ? <XCircle className="w-4 h-4 text-red-500" /> : <CheckCircle2 className="w-4 h-4 text-violet-500" />}
          {toastMessage}
        </div>
      )}

    </div>
  );
}
