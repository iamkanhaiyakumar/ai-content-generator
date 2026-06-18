import { GoogleGenerativeAI } from "@google/generative-ai";

export interface SafetyCheckResult {
  isSafe: boolean;
  score: number;
  categories: {
    harmful: boolean;
    biased: boolean;
    inappropriate: boolean;
    discriminatory: boolean;
  };
  issues: string[];
  recommendations: string[];
}

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const safetyModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export async function checkContentSafety(content: string): Promise<SafetyCheckResult> {
  if (!content || content.trim().length === 0) {
    return {
      isSafe: true,
      score: 10,
      categories: {
        harmful: false,
        biased: false,
        inappropriate: false,
        discriminatory: false,
      },
      issues: [],
      recommendations: [],
    };
  }

  try {
    const safetyPrompt = `Analyze this content for safety and appropriateness issues. Check for:
1. Harmful content (violence, dangerous instructions, etc.)
2. Biased language (racial, gender, age bias, etc.)
3. Inappropriate content (explicit, adult content, etc.)
4. Discriminatory language (targeting protected groups, etc.)

Content to analyze:
${content}

Respond in this exact JSON format:
{
  "isSafe": true/false,
  "score": <number 1-10, where 10 is completely safe>,
  "categories": {
    "harmful": true/false,
    "biased": true/false,
    "inappropriate": true/false,
    "discriminatory": true/false
  },
  "issues": ["issue1", "issue2"] or empty array,
  "recommendations": ["suggestion1", "suggestion2"] or empty array
}`;

    const result = await safetyModel.generateContent(safetyPrompt);
    const responseText = await result.response.text();

    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return {
        isSafe: true,
        score: 7,
        categories: {
          harmful: false,
          biased: false,
          inappropriate: false,
          discriminatory: false,
        },
        issues: ["Could not fully analyze content safety"],
        recommendations: ["Review content manually"],
      };
    }

    const parsed = JSON.parse(jsonMatch[0]);

    return {
      isSafe: parsed.isSafe !== false,
      score: Math.min(10, Math.max(1, parsed.score || 7)),
      categories: {
        harmful: parsed.categories?.harmful || false,
        biased: parsed.categories?.biased || false,
        inappropriate: parsed.categories?.inappropriate || false,
        discriminatory: parsed.categories?.discriminatory || false,
      },
      issues: Array.isArray(parsed.issues) ? parsed.issues : [],
      recommendations: Array.isArray(parsed.recommendations)
        ? parsed.recommendations
        : [],
    };
  } catch (error) {
    console.error("Error checking content safety:", error);
    return {
      isSafe: true,
      score: 5,
      categories: {
        harmful: false,
        biased: false,
        inappropriate: false,
        discriminatory: false,
      },
      issues: ["Safety check failed"],
      recommendations: ["Review content manually"],
    };
  }
}

export function getSafetyWarnings(result: SafetyCheckResult): string[] {
  const warnings: string[] = [];

  if (result.categories.harmful) {
    warnings.push("Content may contain harmful material");
  }
  if (result.categories.biased) {
    warnings.push("Content may contain biased language");
  }
  if (result.categories.inappropriate) {
    warnings.push("Content may be inappropriate");
  }
  if (result.categories.discriminatory) {
    warnings.push("Content may contain discriminatory language");
  }

  if (result.issues.length > 0) {
    warnings.push(...result.issues);
  }

  return warnings;
}

export function requiresReview(result: SafetyCheckResult): boolean {
  return result.score < 7 || !result.isSafe;
}

export function filterProfanity(content: string): string {
  const profanityList = [
    /\b(badword1|badword2)\b/gi,
  ];

  let filtered = content;
  profanityList.forEach((regex) => {
    filtered = filtered.replace(regex, (match) => "*".repeat(match.length));
  });

  return filtered;
}
