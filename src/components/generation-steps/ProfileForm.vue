<script setup lang="ts">
import {AlertCircle, Github, RefreshCw} from 'lucide-vue-next'
import {useStore} from "@stores/useStore";
import {ref} from "vue";
import AiIcon from "@/svg-icons/ai-icon.vue";

const selectedType = ref('')
const input = ref('')
const error = ref('')
const isGenerating = ref(false)

const store = useStore()

const validateUsername = (username: string) => {
  return /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/.test(username.trim())
}

const handleGenerating = () => {
  store.currentStep = 3
}

</script>

<template>
  <div v-if="store.currentStep === 2 && store.selectedType === 'profile'" class="space-y-6">
    <div>
      <label class="block text-[1rem] text-left font-medium text-gray-700 mb-2">
        GitHub Username
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Github class="h-5 w-5 text-gray-400"/>
        </div>
        <input
            type="text"
            v-model="input"
            placeholder="your-username"
            :class="['block w-full pl-10 pr-3 py-4 border-2 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent transition-all duration-200',
                error ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white']"
            :disabled="isGenerating"
        />
      </div>
      <div v-if="error" class="mt-2 flex items-center text-red-600 text-sm">
        <AlertCircle class="w-4 h-4 mr-1"/>
        {{ error }}
      </div>
    </div>

    <button
        :disabled="isGenerating"
        @click="handleGenerating"
        class="w-full bg-brandColor cursor-pointer text-white py-4 px-6 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
    >
      <RefreshCw v-if="isGenerating" class="w-5 h-5 animate-spin"/>
      <AiIcon/>
      <span>{{ isGenerating ? 'Generating Readme...' : 'Generate Readme' }}</span>
    </button>
  </div>
</template>