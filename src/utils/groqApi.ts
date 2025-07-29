import { GoogleGenerativeAI } from "@google/generative-ai";
import {useStore} from "@stores/useStore";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);

export const generateReadmeWithClaude = async (prompt: string) => {
    const store = useStore();


    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        return result.response.text().trim();
    } catch (error) {
        console.error("Error generating github readme:", error);

        const message = error?.message?.toLowerCase() || "";

        if (
            message.includes("quota") ||
            message.includes("limit") ||
            message.includes("exceeded")
        ) {
            store.toggleLimitErrorModalOpen(true);
        } else {
            store.setError("Something went wrong. Please try again.");
        }
        throw error;
    }
};
