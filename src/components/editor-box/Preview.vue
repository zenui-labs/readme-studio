<script setup lang="ts">
import {computed} from 'vue'
import {useStore} from "@stores/useStore";
import {renderMarkdown} from "@utils/markdown";

const props = defineProps<{
  content: string
}>()

const store = useStore()
const html = computed(() => renderMarkdown(props.content, store.isDarkMode))
</script>

<template>
  <div class="flex-1 max-w-[750px] flex flex-col">
    <div class="p-4 py-4.5 border-b border-gray-200 dark:border-darkBorder">
      <h3 class="text-base font-semibold text-gray-800 dark:text-darkSubtext flex items-center gap-2">
        Preview
      </h3>
    </div>

    <div class="flex-1 overflow-y-auto p-4">
      <div
          class="markdown-container h-[500px] bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-darkBorder overflow-y-auto w-full lg:h-full rounded-lg p-5">
        <div
            v-if="html"
            class="markdown-body"
            v-html="html"
        ></div>

        <div
            v-else
            class="flex items-center justify-center h-full text-gray-500 dark:text-gray-400 text-center"
        >
          <div>
            <div class="text-4xl mb-4">📝</div>
            <p class="text-lg font-medium mb-2">Start writing your README</p>
            <p class="text-sm">Use the editor or add components from the library</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.markdown-container::-webkit-scrollbar {
  width: 8px;
}

.markdown-container::-webkit-scrollbar-track {
  background: transparent;
}

.markdown-container::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

.markdown-container::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

.dark .markdown-container::-webkit-scrollbar-thumb {
  background: #475569;
}

.dark .markdown-container::-webkit-scrollbar-thumb:hover {
  background: #64748b;
}
</style>
