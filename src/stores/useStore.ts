import {defineStore} from 'pinia'
import {ref} from "vue";

export const useStore = defineStore('useStore', () => {
    const currentStep = ref<number>(1);
    const selectedType = ref<string>('');
    const isGenerating = ref<boolean>(false);
    const generatedContent = ref<string>('');

    const handleTypeSelection = (type: string) => {
        selectedType.value = type;
    };

    return {
        currentStep,
        selectedType,
        isGenerating,
        generatedContent,
        handleTypeSelection
    }
})