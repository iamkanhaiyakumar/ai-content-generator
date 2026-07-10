export interface ContentFilterResult {
  flagged: boolean;
  categories: string[];
  reason?: string;
}

const BLOCKED_PATTERNS: { pattern: RegExp; category: string }[] = [
  { pattern: /\b(how\s+to\s+)?(harm|hurt|injure|kill|attack)\s+(yourself|someone|people|others)\b/i, category: "self-harm" },
  { pattern: /\b(making|creating|producing)\s+(weapons?|explosives?|bombs?|drugs?|poison)\b/i, category: "dangerous-content" },
  { pattern: /\b(sexual\s+)?(content|explicit)\s+(involving|with)\s+(minors?|children?|underage)\b/i, category: "child-safety" },
  { pattern: /\b(hate\s+)?speech\s+(against|targeting)\s+(race|religion|ethnicity|gender|orientation)\b/i, category: "hate-speech" },
  { pattern: /\b(instructions?\s+for|guide\s+on)\s+(illegal|unlawful|fraud)\b/i, category: "illegal-activities" },
];

export function filterInputContent(input: string): ContentFilterResult {
  if (!input || input.trim().length === 0) {
    return { flagged: false, categories: [] };
  }

  const flaggedCategories: string[] = [];

  for (const { pattern, category } of BLOCKED_PATTERNS) {
    if (pattern.test(input)) {
      flaggedCategories.push(category);
    }
  }

  return {
    flagged: flaggedCategories.length > 0,
    categories: flaggedCategories,
    reason: flaggedCategories.length > 0
      ? `Input flagged for: ${flaggedCategories.join(", ")}`
      : undefined,
  };
}

export function filterOutputContent(output: string): ContentFilterResult {
  return filterInputContent(output);
}

export const CONTENT_FILTER_WARNING = "Your request was flagged by our content safety filter. Please revise your input and try again.";
