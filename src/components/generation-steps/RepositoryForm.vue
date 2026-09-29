<script setup lang="ts">
import {AlertCircle, CheckCircle2, Github} from 'lucide-vue-next'
import {useStore} from "@stores/useStore";
import {computed, ref} from "vue";
import {fetchRepoDetails, parseRepoUrl} from "@utils/githubApi";
import {generateReadmeWithClaude} from "@utils/groqApi";
import {buildRepositoryReadmePrompt} from "@/constants/prompts";

const input = ref('')

const store = useStore()

const repoRef = computed(() => parseRepoUrl(input.value))
const error = computed(() => input.value.trim() && !repoRef.value
    ? 'Paste a GitHub repository link, e.g. https://github.com/owner/repo or owner/repo'
    : '')

const handleGenerating = async () => {
  if (!repoRef.value) return
  store.currentStep = 3
  store.isGenerating = true
  try {
    const analysis = await fetchRepoDetails(repoRef.value)
    if (!analysis || store.hasError) return
    const result = await generateReadmeWithClaude(buildRepositoryReadmePrompt(analysis))
    if (result) store.setGeneratedReadme(result)
  } finally {
    store.isGenerating = false
  }
}

</script>

<template>
  <div class="space-y-6">
    <div>
      <label class="block text-[1rem] text-left dark:text-darkText font-medium text-gray-700 mb-2">
        GitHub Public Repository URL
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Github class="h-5 w-5 text-gray-400"/>
        </div>
        <input
            type="text"
            v-model="input"
            :maxlength="300"
            @keydown.enter="handleGenerating"
            placeholder="https://github.com/username/repository"
            :class="['block w-full pl-10 pr-3 py-4 dark:text-darkText border-2 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent transition-all duration-200',
                error ? 'border-red-300 bg-red-50' : 'border-gray-200 dark:bg-darkCardBgColor dark:border-darkBorder bg-white']"
        />
      </div>
      <div v-if="error" class="mt-2 flex items-center text-red-600 text-sm">
        <AlertCircle class="w-4 h-4 mr-1"/>
        {{ error }}
      </div>
      <div v-else-if="repoRef" class="mt-2 flex items-center text-left text-brandColor text-sm">
        <CheckCircle2 class="w-4 h-4 mr-1 flex-shrink-0"/>
        {{ repoRef.owner }}/{{ repoRef.repo }}<template v-if="repoRef.branch"> · branch {{ repoRef.branch }}</template><template v-if="repoRef.path"> · folder {{ repoRef.path }}</template>
      </div>
    </div>

    <button
        :disabled="!repoRef"
        @click="handleGenerating"
        class="w-full bg-brandColor cursor-pointer gap-3 text-white py-4 px-6 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl disabled:opacity-40 dark:disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
    >
      <img src="/ai.svg" alt="ai-icon" class='w-[23px]'/>
      Generate Repository Readme
    </button>
  </div>
</template>