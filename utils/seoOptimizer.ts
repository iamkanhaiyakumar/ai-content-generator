import { GoogleGenerativeAI } from "@google/generative-ai";

export interface SEOMetrics {
  keywordDensity: number;
  readabilityScore: number;
  contentLength: number;
  hasMetaDescription: boolean;
  headingStructure: string[];
  suggestions: string[];
  score: number;
}

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const seoModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export async function analyzeSEO(
  content: string,
  keyword: string = ""
): Promise<SEOMetrics> {
  if (!content || content.trim().length === 0) {
    return {
      keywordDensity: 0,
      readabilityScore: 0,
      contentLength: 0,
      hasMetaDescription: false,
      headingStructure: [],
      suggestions: ["Content is empty"],
      score: 0,
    };
  }

  try {
    const seoPrompt = `Analyze this content for SEO optimization. ${keyword ? `Primary keyword: "${keyword}"` : ""}

Content to analyze:
${content.substring(0, 1000)}

Provide a JSON response with:
{
  "keywordDensity": <0-10, how well keyword is distributed>,
  "readabilityScore": <0-10, readability level>,
  "headingStructure": ["H1 analysis", "H2 usage", "hierarchy"],
  "suggestions": [
    "Increase keyword usage",
    "Add subheadings",
    "Improve meta description"
  ],
  "score": <overall SEO score 0-10>
}`;

    const result = await seoModel.generateContent(seoPrompt);
    const responseText = await result.response.text();

    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return {
        keywordDensity: 5,
        readabilityScore: 6,
        contentLength: content.length,
        hasMetaDescription: false,
        headingStructure: [],
        suggestions: ["Could not fully analyze SEO"],
        score: 6,
      };
    }

    const parsed = JSON.parse(jsonMatch[0]);

    return {
      keywordDensity: Math.min(10, Math.max(0, parsed.keywordDensity || 5)),
      readabilityScore: Math.min(10, Math.max(0, parsed.readabilityScore || 5)),
      contentLength: content.length,
      hasMetaDescription: content.length > 150,
      headingStructure: Array.isArray(parsed.headingStructure)
        ? parsed.headingStructure
        : [],
      suggestions: Array.isArray(parsed.suggestions) ? parsed.suggestions : [],
      score: Math.min(10, Math.max(0, parsed.score || 5)),
    };
  } catch (error) {
    console.error("Error analyzing SEO:", error);
    return {
      keywordDensity: 5,
      readabilityScore: 5,
      contentLength: content.length,
      hasMetaDescription: false,
      headingStructure: [],
      suggestions: ["SEO analysis failed"],
      score: 5,
    };
  }
}

export function generateMetaDescription(
  content: string,
  maxLength: number = 160
): string {
  const firstSentence = content
    .split(/[.!?]+/)[0]
    .trim();
  if (firstSentence.length <= maxLength) {
    return firstSentence;
  }
  return firstSentence.substring(0, maxLength - 3) + "...";
}

export function generateSEOTitle(content: string, keyword: string = ""): string {
  let title = content.split(/[.!?]+/)[0].trim();

  if (keyword && !title.toLowerCase().includes(keyword.toLowerCase())) {
    title = keyword + " - " + title;
  }

  if (title.length > 60) {
    title = title.substring(0, 60).trim() + "...";
  }

  return title;
}

export function getSEORecommendations(metrics: SEOMetrics): string[] {
  const recommendations: string[] = [];

  if (metrics.keywordDensity < 3) {
    recommendations.push("Increase keyword usage for better relevance");
  }

  if (metrics.readabilityScore < 6) {
    recommendations.push("Simplify language for better readability");
  }

  if (metrics.contentLength < 300) {
    recommendations.push("Expand content to at least 300 words for SEO impact");
  }

  if (!metrics.hasMetaDescription) {
    recommendations.push("Add a compelling meta description");
  }

  if (metrics.headingStructure.length === 0) {
    recommendations.push("Add proper heading structure (H1, H2, H3)");
  }

  if (metrics.score < 6) {
    recommendations.push(...metrics.suggestions);
  }

  return recommendations.slice(0, 5);
}
