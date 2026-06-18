import { GoogleGenerativeAI } from "@google/generative-ai";

export interface OriginalityResult {
  score: number;
  isOriginal: boolean;
  riskLevel: "low" | "medium" | "high";
  analysis: string;
  suggestions: string[];
}

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const plagarismModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export async function analyzeOriginality(
  content: string
): Promise<OriginalityResult> {
  if (!content || content.trim().length === 0) {
    return {
      score: 10,
      isOriginal: true,
      riskLevel: "low",
      analysis: "Content is empty",
      suggestions: [],
    };
  }

  try {
    const analysisPrompt = `Analyze this content for originality and plagiarism risk. Check for:
1. Common phrases or clichés
2. Patterns that suggest AI-generated or plagiarized content
3. Unique voice and perspective
4. Potential copyright concerns

Content to analyze (first 800 chars):
${content.substring(0, 800)}

Provide a JSON response with:
{
  "score": <0-10, where 10 is completely original>,
  "isOriginal": true/false,
  "riskLevel": "low" | "medium" | "high",
  "analysis": "detailed analysis of originality",
  "suggestions": [
    "Add unique perspective",
    "Replace clichés with fresh phrasing"
  ]
}`;

    const result = await plagarismModel.generateContent(analysisPrompt);
    const responseText = await result.response.text();

    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return {
        score: 7,
        isOriginal: true,
        riskLevel: "low",
        analysis: "Could not fully analyze originality",
        suggestions: ["Review content for unique voice"],
      };
    }

    const parsed = JSON.parse(jsonMatch[0]);

    return {
      score: Math.min(10, Math.max(0, parsed.score || 7)),
      isOriginal: parsed.isOriginal !== false,
      riskLevel: parsed.riskLevel || "low",
      analysis: parsed.analysis || "",
      suggestions: Array.isArray(parsed.suggestions) ? parsed.suggestions : [],
    };
  } catch (error) {
    console.error("Error analyzing originality:", error);
    return {
      score: 5,
      isOriginal: true,
      riskLevel: "medium",
      analysis: "Originality analysis failed",
      suggestions: ["Review content manually"],
    };
  }
}

export function getPlagiarismRiskIndicator(result: OriginalityResult): string {
  if (result.riskLevel === "low") return "Safe to use";
  if (result.riskLevel === "medium")
    return "Review before publishing";
  return "High plagiarism risk - requires revision";
}

export function improveOriginality(content: string): string {
  const clichePatterns: Record<string, string> = {
    "in this day and age": "today",
    "at the end of the day": "ultimately",
    "it goes without saying": "clearly",
    "last but not least": "finally",
    "needless to say": "obviously",
    "for all intents and purposes": "essentially",
    "in my humble opinion": "in my view",
    "the fact of the matter is": "",
  };

  let improved = content;

  Object.entries(clichePatterns).forEach(([cliche, replacement]) => {
    const regex = new RegExp(cliche, "gi");
    improved = improved.replace(regex, replacement);
  });

  return improved.trim();
}

export function calculateSimilarityScore(text1: string, text2: string): number {
  const len1 = text1.length;
  const len2 = text2.length;

  if (len1 === 0 || len2 === 0) return 0;

  const matrix: number[][] = [];

  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = text1[i - 1] === text2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i][j - 1] + 1,
        matrix[i - 1][j] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  const distance = matrix[len1][len2];
  const maxLen = Math.max(len1, len2);
  const similarity = ((maxLen - distance) / maxLen) * 100;

  return Math.max(0, Math.min(100, similarity));
}
