<script setup lang="ts">
import {AlertCircle, Github} from 'lucide-vue-next'
import {useStore} from "@stores/useStore";
import {onMounted, ref} from "vue";
import {generateReadmeWithClaude} from "@utils/groqApi";
import {fetchUserProfile} from "@utils/githubApi";
import {buildProfileReadmePrompt} from "@/constants/prompts";

const input = ref('')
const error = ref('')

const store = useStore()

async function handleGenerating() {
  store.currentStep = 3
  const userData = await fetchUserProfile(input.value)
  const prompt = buildProfileReadmePrompt(userData)

  if (store.hasError) return
  const result = await generateReadmeWithClaude(prompt)
  store.setGeneratedReadme(result)
}

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleGenerating()
    }
  })
})

</script>

<template>
  <div class="space-y-6">
    <div>
      <label class="block text-[1rem] text-left font-medium dark:text-darkText text-gray-700 mb-2">
        GitHub Username
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Github class="h-5 w-5 text-gray-400"/>
        </div>
        <input
            type="text"
            v-model="input"
            :maxlength="150"
            placeholder="your-username"
            :class="['block w-full pl-10 pr-3 py-4 border-2 rounded-xl dark:text-darkText dark:bg-darkCardBgColor placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent transition-all duration-200',
                error ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white dark:border-darkBorder']"
        />
      </div>
      <div v-if="error" class="mt-2 flex items-center text-red-600 text-sm">
        <AlertCircle class="w-4 h-4 mr-1"/>
        {{ error }}
      </div>
    </div>

    <button
        :disabled="!input"
        @click="handleGenerating"
        class="w-full bg-brandColor cursor-pointer text-white gap-3 py-4 px-6 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl disabled:opacity-40 dark:disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
    >
      <img src="/ai.svg" alt="ai-icon" class='w-[23px]'/>
      Generate Profile Readme
    </button>
  </div>
</template>