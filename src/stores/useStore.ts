import {defineStore} from 'pinia'
import {ref} from "vue";

export const useStore = defineStore('useStore', () => {
    const currentStep = ref<number>(1);
    const selectedType = ref<string>('profile');
    const isGenerating = ref<boolean>(false);
    const generatedContent = ref<string>('');
    const generatedReadme = ref('')
    const repoContent = ref<any>('');
    const githubUserData = ref<any>({});
    const githubRepoData = ref<any>({});
    const limitErrorModalOpen = ref<boolean>(true);

    const hasError = ref<boolean>(false);
    const errorMessage = ref<string>('');

    function setGeneratedReadme(text) {
        generatedReadme.value = text
    }

    const handleTypeSelection = (type: string) => {
        selectedType.value = type;
        hasError.value = false;
        errorMessage.value = '';
    };

    const setRepoContent = (content: any) => {
        repoContent.value = content;
    }

    const setGithubUserData = (data: any) => {
        githubUserData.value = data;
    }

    const setGithubRepoData = (data: any) => {
        githubRepoData.value = data;
    }

    const setError = (message: string) => {
        hasError.value = true;
        errorMessage.value = message;
    }

    const clearError = () => {
        hasError.value = false;
        errorMessage.value = '';
    }

    const toggleLimitErrorModalOpen = (value: boolean) => {
        limitErrorModalOpen.value = value;
    }

    return {
        currentStep,
        selectedType,
        isGenerating,
        generatedContent,
        setGeneratedReadme,
        generatedReadme,
        handleTypeSelection,
        repoContent,
        setRepoContent,
        githubUserData,
        setGithubUserData,
        githubRepoData,
        setGithubRepoData,
        hasError,
        errorMessage,
        setError,
        clearError,
        toggleLimitErrorModalOpen,
        limitErrorModalOpen,
    }
})