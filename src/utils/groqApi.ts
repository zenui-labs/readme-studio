import {GoogleGenerativeAI} from "@google/generative-ai";
import {useStore} from "@stores/useStore";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);

export const generateReadmeWithClaude = async (prompt: string) => {
    const store = useStore();

    store.setIsReadmeGenerating(true);

    try {
        const model = genAI.getGenerativeModel({model: "gemini-2.5-flash"});
        const result = await model.generateContent(prompt);
        const text = result.response.text().trim();
        // An empty answer is a failure, not a README.
        if (!text) throw new Error('Empty response');
        return text;
    } catch (error) {
        const message = error?.message?.toLowerCase() || "";

        if (
            message.includes("resource_exhausted") ||
            message.includes("overloaded")
        ) {
            store.toggleOverloadErrorModalOpen(true);
        } else if (
            message.includes("quota") ||
            message.includes("limit") ||
            message.includes("exceeded")
        ) {
            store.toggleLimitErrorModalOpen(true);
        } else {
            store.setError("Something went wrong. Please try again.");
        }
    } finally {
        store.setIsReadmeGenerating(false);
    }
};
