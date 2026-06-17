/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
 const generationConfig = {
    temperature: 0.5, // Reduced from 1 to 0.5 for stable, high-quality, and factual output
    topP: 0.9,        // Slightly tightened from 0.95 to maintain logical focus
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
 
    export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
  
    
 