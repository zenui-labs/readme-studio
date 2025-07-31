<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  content: string
}>()

const emit = defineEmits<{
  'update:content': [content: string]
}>()

const localContent = ref(props.content)

// Watch for external changes
watch(() => props.content, (newContent) => {
  localContent.value = newContent
})

// Emit changes with debouncing
let debounceTimer: number | null = null

const handleInput = () => {
  if (debounceTimer) {
    clearTimeout(debounceTimer)
  }

  debounceTimer = setTimeout(() => {
    emit('update:content', localContent.value)
  }, 300) // 300ms debounce
}

// Handle tab key for indentation
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Tab') {
    event.preventDefault()

    const textarea = event.target as HTMLTextAreaElement
    const start = textarea.selectionStart
    const end = textarea.selectionEnd

    // Insert tab character
    const tabChar = '  ' // 2 spaces instead of tab for better markdown compatibility
    localContent.value = localContent.value.substring(0, start) + tabChar + localContent.value.substring(end)

    // Move cursor
    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = start + tabChar.length
    }, 0)

    handleInput()
  }
}
</script>

<template>
  <div class="flex-1 lg:border-r dark:border-darkBorder border-gray-200 flex flex-col">
    <div class="p-4 py-4.5 border-b border-gray-200 dark:border-darkBorder">
      <h3 class="text-base font-semibold text-gray-800 dark:text-darkSubtext flex items-center gap-2">
        Editor
      </h3>
    </div>

    <div class="flex-1 p-4">
      <textarea
          v-model="localContent"
          @input="handleInput"
          @keydown="handleKeydown"
          class="w-full lg:h-full p-4 h-[500px] bg-white dark:bg-slate-900 border border-gray-200 dark:border-darkBorder rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-brandColor font-mono text-sm text-gray-800 dark:text-gray-200 transition-all duration-200"
          placeholder="Write your markdown here or use the component library to get started..."
          spellcheck="false"
      ></textarea>
    </div>
  </div>
</template>

<style scoped>
/* Custom scrollbar for the textarea */
textarea::-webkit-scrollbar {
  width: 8px;
}

textarea::-webkit-scrollbar-track {
  background: transparent;
}

textarea::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: #94a3b8
}
</style>