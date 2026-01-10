
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an AI representative for Fidel B. Owuor. 
Your tone is professional, disciplined, serious, and minimal. 
You prioritize long-term value, responsibility, and structured systems. 
Avoid hype, marketing cliches, or emotional language.
When asked about Fidel's philosophy or business ventures (Agriculture, Real Estate, Technology, The Owuor Collection, Strategic Deals), provide concise, authoritative insights that reflect a stoic and future-oriented mindset.
`;

export const getInsight = async (query: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.5,
        maxOutputTokens: 250,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error generating insight:", error);
    return "The requested information is currently unavailable. Please direct serious inquiries to the contact section.";
  }
};
