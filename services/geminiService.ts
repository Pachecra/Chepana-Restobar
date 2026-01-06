import { GoogleGenAI } from "@google/genai";

// Initialize the API client
// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
// Assume this variable is pre-configured, valid, and accessible.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askAboutLocation = async (query: string): Promise<{ text: string, mapUri?: string }> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: query,
      config: {
        tools: [{ googleMaps: {} }],
        toolConfig: {
            retrievalConfig: {
                latLng: {
                    latitude: 49.4122, // Heidelberg coordinates
                    longitude: 8.7100
                }
            }
        }
      },
    });

    const candidate = response.candidates?.[0];
    const groundingChunks = candidate?.groundingMetadata?.groundingChunks;
    
    // Extract map URI if available
    let mapUri: string | undefined = undefined;
    if (groundingChunks && groundingChunks.length > 0) {
       // Look for a chunk that has map data
       const mapChunk = groundingChunks.find(c => c.web?.uri?.includes('google.com/maps') || (c as any).maps?.uri);
       if (mapChunk) {
           mapUri = mapChunk.web?.uri || (mapChunk as any).maps?.uri;
       }
    }

    return {
      text: response.text || "Ich konnte leider keine Informationen finden.",
      mapUri
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return { text: "Entschuldigung, ich habe gerade Schwierigkeiten, eine Verbindung herzustellen." };
  }
};