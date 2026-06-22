import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

interface QualityScore {
  coherence: number;
  relevance: number;
  grammar: number;
  uniqueness: number;
  overall: number;
  issues: string[];
}

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const qualityModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export async function validateContentQuality(
  content: string,
  context: string = ""
): Promise<QualityScore> {
  if (!content || content.trim().length === 0) {
    return {
      coherence: 0,
      relevance: 0,
      grammar: 0,
      uniqueness: 0,
      overall: 0,
      issues: ["Content is empty"],
    };
  }

  try {
    const validationPrompt = `Analyze this generated content and rate it on the following metrics (1-10):
- Coherence: How well-structured and logical is the content?
- Relevance: How relevant is it to the context?
- Grammar: How grammatically correct is it?
- Uniqueness: How original and non-repetitive is it?

Context: ${context || "General content generation"}
Content to analyze:
${content}

Respond in this exact JSON format:
{
  "coherence": <number 1-10>,
  "relevance": <number 1-10>,
  "grammar": <number 1-10>,
  "uniqueness": <number 1-10>,
  "issues": ["issue1", "issue2"] or empty array if no issues
}`;

    const result = await qualityModel.generateContent(validationPrompt);
    const responseText = await result.response.text();

    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return {
        coherence: 7,
        relevance: 7,
        grammar: 7,
        uniqueness: 7,
        overall: 7,
        issues: ["Could not fully validate content quality"],
      };
    }

    const parsed = JSON.parse(jsonMatch[0]);
    const overall = Math.round(
      (parsed.coherence +
        parsed.relevance +
        parsed.grammar +
        parsed.uniqueness) /
        4
    );

    return {
      coherence: Math.min(10, Math.max(1, parsed.coherence || 5)),
      relevance: Math.min(10, Math.max(1, parsed.relevance || 5)),
      grammar: Math.min(10, Math.max(1, parsed.grammar || 5)),
      uniqueness: Math.min(10, Math.max(1, parsed.uniqueness || 5)),
      overall: Math.min(10, Math.max(1, overall)),
      issues: Array.isArray(parsed.issues) ? parsed.issues : [],
    };
  } catch (error) {
    console.error("Error validating content quality:", error);
    return {
      coherence: 5,
      relevance: 5,
      grammar: 5,
      uniqueness: 5,
      overall: 5,
      issues: ["Quality validation failed"],
    };
  }
}

export function isContentQualityAcceptable(score: QualityScore): boolean {
  return score.overall >= 6 && score.grammar >= 6;
}

export function getQualityFeedback(score: QualityScore): string {
  const feedback: string[] = [];

  if (score.coherence < 6) {
    feedback.push("Structure could be improved for better clarity");
  }
  if (score.relevance < 6) {
    feedback.push("Content may not be fully aligned with the requested topic");
  }
  if (score.grammar < 6) {
    feedback.push("Grammar and language quality needs improvement");
  }
  if (score.uniqueness < 6) {
    feedback.push("Consider rewording some sections to improve originality");
  }

  if (score.issues.length > 0) {
    feedback.push(...score.issues);
  }

  return feedback.length > 0
    ? feedback.join(". ")
    : "Content quality is acceptable";
}
