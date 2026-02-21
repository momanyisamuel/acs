import { GoogleGenAI, Type } from "@google/genai";
import { ActivityPlanResponse } from "../types";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const generateActivityPlan = async (
  topic: string,
  targetGroup: string
): Promise<ActivityPlanResponse | null> => {
  if (!apiKey) {
    console.warn("No API Key provided for Gemini Service");
    return null;
  }

  try {
    const prompt = `Create a detailed community support or therapeutic activity plan for ${targetGroup} related to "${topic}". The activity should be suitable for individuals with developmental disabilities or special needs.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            targetGroup: { type: Type.STRING },
            duration: { type: Type.STRING },
            goals: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            materials: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            steps: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  description: { type: Type.STRING },
                  time: { type: Type.STRING }
                }
              }
            }
          }
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text) as ActivityPlanResponse;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};