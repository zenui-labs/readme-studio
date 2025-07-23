import { defineStore } from 'pinia';
import { ref } from "vue";
export var useStore = defineStore('useStore', function () {
    var currentStep = ref(1);
    var selectedType = ref('profile');
    var isGenerating = ref(false);
    var generatedContent = ref('');
    var generatedReadme = ref('');
    var repoContent = ref('');
    var githubUserData = ref({});
    var githubRepoData = ref({});
    var hasError = ref(false);
    var errorMessage = ref('');
    function setGeneratedReadme(text) {
        generatedReadme.value = text;
    }
    var handleTypeSelection = function (type) {
        selectedType.value = type;
        hasError.value = false;
        errorMessage.value = '';
    };
    var setRepoContent = function (content) {
        repoContent.value = content;
    };
    var setGithubUserData = function (data) {
        githubUserData.value = data;
    };
    var setGithubRepoData = function (data) {
        githubRepoData.value = data;
    };
    var setError = function (message) {
        hasError.value = true;
        errorMessage.value = message;
    };
    var clearError = function () {
        hasError.value = false;
        errorMessage.value = '';
    };
    return {
        currentStep: currentStep,
        selectedType: selectedType,
        isGenerating: isGenerating,
        generatedContent: generatedContent,
        setGeneratedReadme: setGeneratedReadme,
        generatedReadme: generatedReadme,
        handleTypeSelection: handleTypeSelection,
        repoContent: repoContent,
        setRepoContent: setRepoContent,
        githubUserData: githubUserData,
        setGithubUserData: setGithubUserData,
        githubRepoData: githubRepoData,
        setGithubRepoData: setGithubRepoData,
        hasError: hasError,
        errorMessage: errorMessage,
        setError: setError,
        clearError: clearError,
    };
});
