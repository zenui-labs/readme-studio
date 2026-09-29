import {defineStore} from 'pinia'
import {ref, watch} from "vue";

const DRAFT_KEY = 'readme-draft'

export const useStore = defineStore('useStore', () => {
    const currentStep = ref<number>(1);
    const selectedType = ref<string>('profile');
    const isGenerating = ref<boolean>(false);
    const generatedContent = ref<string>('');
    // The README being edited. Saved locally so a refresh never loses work.
    const generatedReadme = ref<string>(localStorage.getItem(DRAFT_KEY) ?? '')
    const githubUserData = ref<any>({});
    const githubRepoData = ref<any>({});
    const limitErrorModalOpen = ref<boolean>(false);
    const fullScreenModal = ref<boolean>(false);
    // Fullscreen preview shows its own copy, so previewing a template never replaces the draft.
    const previewMarkdown = ref<string>('');
    const isReadmeGenerating = ref<boolean>(false);
    const overloadErrorModalOpen = ref(false);
    const isDarkMode = ref<boolean>(localStorage.getItem('theme') === 'dark');

    watch(isDarkMode, (value) => {
        document.body.classList.toggle('dark', value);
        localStorage.setItem('theme', value ? 'dark' : 'light');
    }, {immediate: true});

    const toggleDarkMode = () => {
        isDarkMode.value = !isDarkMode.value;
    };

    const hasError = ref<boolean>(false);
    const errorMessage = ref<string>('');

    watch(generatedReadme, (value) => {
        try {
            if (value) localStorage.setItem(DRAFT_KEY, value)
            else localStorage.removeItem(DRAFT_KEY)
        } catch {
            // Storage full or blocked: the draft still lives in memory.
        }
    });

    function setGeneratedReadme(text: string) {
        generatedReadme.value = text
    }

    function openPreview(markdown: string) {
        previewMarkdown.value = markdown
        fullScreenModal.value = true
    }

    function closePreview() {
        fullScreenModal.value = false
    }

    const toggleOverloadErrorModalOpen = (value: boolean) => {
        overloadErrorModalOpen.value = value;
    };


    const setIsReadmeGenerating = (value: boolean) => {
        isReadmeGenerating.value = value;
    };

    const handleTypeSelection = (type: string) => {
        selectedType.value = type;
        hasError.value = false;
        errorMessage.value = '';
    };

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
        githubUserData,
        setGithubUserData,
        githubRepoData,
        setGithubRepoData,
        fullScreenModal,
        previewMarkdown,
        openPreview,
        closePreview,
        hasError,
        errorMessage,
        setError,
        clearError,
        toggleLimitErrorModalOpen,
        limitErrorModalOpen,
        isReadmeGenerating,
        setIsReadmeGenerating,
        overloadErrorModalOpen,
        toggleOverloadErrorModalOpen,
        isDarkMode,
        toggleDarkMode,
    }
})