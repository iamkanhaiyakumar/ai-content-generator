export interface WritingStyle {
  id: string;
  name: string;
  description: string;
  prompt: string;
  icon: string;
}

export interface ToneOption {
  id: string;
  name: string;
  description: string;
}

export const WRITING_STYLES: WritingStyle[] = [
  {
    id: "professional",
    name: "Professional",
    description: "Formal, business-appropriate language",
    prompt:
      "Write in a professional, business tone with formal language and proper structure.",
    icon: "briefcase",
  },
  {
    id: "conversational",
    name: "Conversational",
    description: "Friendly, natural, easy to read",
    prompt:
      "Write in a conversational, friendly tone as if talking to a friend. Use natural language and simple explanations.",
    icon: "chat",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Imaginative, engaging, storytelling",
    prompt:
      "Write creatively with engaging storytelling, vivid descriptions, and imaginative language to capture attention.",
    icon: "sparkles",
  },
  {
    id: "technical",
    name: "Technical",
    description: "Precise, detailed, expert-level",
    prompt:
      "Write with technical precision and expert-level detail. Include specific terminology and comprehensive explanations.",
    icon: "code",
  },
  {
    id: "academic",
    name: "Academic",
    description: "Scholarly, research-oriented",
    prompt:
      "Write in an academic style with proper structure, citations, and scholarly language suitable for research or educational purposes.",
    icon: "book-open",
  },
  {
    id: "casual",
    name: "Casual",
    description: "Relaxed, informal, playful",
    prompt:
      "Write in a casual, relaxed, and playful tone. Use colloquialisms and keep the content light and entertaining.",
    icon: "smile",
  },
];

export const TONE_OPTIONS: ToneOption[] = [
  {
    id: "positive",
    name: "Positive",
    description: "Optimistic and encouraging",
  },
  {
    id: "neutral",
    name: "Neutral",
    description: "Balanced and objective",
  },
  {
    id: "persuasive",
    name: "Persuasive",
    description: "Convincing and compelling",
  },
  {
    id: "informative",
    name: "Informative",
    description: "Educational and explanatory",
  },
  {
    id: "entertaining",
    name: "Entertaining",
    description: "Fun and engaging",
  },
  {
    id: "empathetic",
    name: "Empathetic",
    description: "Understanding and supportive",
  },
];

export function getStyleById(styleId: string): WritingStyle | undefined {
  return WRITING_STYLES.find((s) => s.id === styleId);
}

export function getToneById(toneId: string): ToneOption | undefined {
  return TONE_OPTIONS.find((t) => t.id === toneId);
}

export function buildStylePrompt(styleId: string, toneId: string): string {
  const style = getStyleById(styleId);
  const tone = getToneById(toneId);

  if (!style) return "";

  let prompt = style.prompt;

  if (tone) {
    prompt += ` Maintain a ${tone.name.toLowerCase()} and ${tone.description.toLowerCase()} tone throughout.`;
  }

  return prompt;
}

export function validateStyleSelection(styleId: string, toneId: string): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!getStyleById(styleId)) {
    errors.push(`Invalid writing style: ${styleId}`);
  }

  if (!getToneById(toneId)) {
    errors.push(`Invalid tone option: ${toneId}`);
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
