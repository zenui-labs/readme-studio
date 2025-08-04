<template>
  <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
    <!-- Header with icon and save button -->
    <div class="flex items-start justify-between mb-4">
      <!-- Template icon/category indicator -->
      <div
          class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
        {{ getInitials(template.name) }}
      </div>

      <!-- Save button -->
      <button
          class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
          :class="isSaved ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
          @click="toggleSave"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
        </svg>
        {{ isSaved ? 'Saved' : 'Save' }}
      </button>
    </div>

    <!-- Template info -->
    <div class="mb-4">
      <div class="flex items-center gap-2 text-sm text-gray-500 mb-2">
        <span class="font-medium">{{ template.category }}</span>
        <span>•</span>
        <span>{{ getTimeAgo() }}</span>
      </div>

      <h3 class="text-xl font-bold text-gray-900 mb-3 leading-tight">
        {{ template.name }}
      </h3>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
            v-for="tag in template.tags.slice(0, 3)"
            :key="tag"
            class="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg"
        >
          {{ tag }}
        </span>
        <span
            v-if="template.tags.length > 3"
            class="px-3 py-1 bg-gray-100 text-gray-500 text-sm font-medium rounded-lg"
        >
          +{{ template.tags.length - 3 }} more
        </span>
      </div>
    </div>

    <!-- Footer with description and action -->
    <div class="flex items-end justify-between">
      <div>
        <div class="text-lg font-bold text-gray-900 mb-1">
          {{ getComplexityLevel() }}
        </div>
        <div class="text-sm text-gray-500">
          {{ template.description.length > 40 ? template.description.substring(0, 40) + '...' : template.description }}
        </div>
      </div>

      <button
          class="ml-4 bg-gray-900 text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors flex-shrink-0"
          @click="openEditor"
      >
        Use Template
      </button>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router"
import {useStore} from "@stores/useStore.ts"

const props = defineProps({
  template: Object
})

const router = useRouter()
const store = useStore()
const isSaved = ref(false)

const openEditor = () => {
  store.setGeneratedReadme(props.template.template)
  router.push('/editor')
}

const toggleSave = () => {
  isSaved.value = !isSaved.value
  // Add your save logic here
}

const getInitials = (name) => {
  return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase()
}

const getTimeAgo = () => {
  // Mock time ago - replace with actual logic
  const timeOptions = ['2 days ago', '1 week ago', '3 days ago', '5 days ago', '1 day ago']
  return timeOptions[Math.floor(Math.random() * timeOptions.length)]
}

const getComplexityLevel = () => {
  // Determine complexity based on tags or other criteria
  const tagCount = props.template.tags.length
  if (tagCount <= 2) return 'Beginner'
  if (tagCount <= 4) return 'Intermediate'
  return 'Advanced'
}
</script>