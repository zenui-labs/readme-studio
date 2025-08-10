<script setup lang="ts">
import {ref} from 'vue'
import {ReadmeSections} from "@/data/readme-sections";
import {ReadmeSectionType} from "@/types";

const emit = defineEmits<{
  addComponent: [component: any, cursorPosition?: number]
}>()

const componentLibrary = ref<ReadmeSectionType[]>(ReadmeSections)

const addComponent = (component: ReadmeSectionType) => {
  emit('addComponent', component)
}
</script>

<template>
  <div class="p-4 min-h-[400px] lg:min-h-[600px] max-h-[400px] lg:max-h-[800px] overflow-y-auto">
    <div class="grid grid-cols-2 gap-3">
      <button
          v-for="component in componentLibrary"
          :key="component.id"
          @click="addComponent(component)"
          class="group w-full px-3 py-4 text-left bg-white dark:bg-gray-900 border border-gray-100 dark:border-darkBorder hover:bg-brandColor/10 hover:border-brandColor hover:shadow-md rounded-lg cursor-pointer transition-all duration-200 flex flex-col items-center gap-2.5"
      >
        <component
            :is="component.icon"
            :size="20"
            class="text-brandColor"
        />
        <span class="text-sm font-medium text-gray-700 dark:text-gray-300 text-center leading-tight">
          {{ component.name }}
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
div::-webkit-scrollbar {
  width: 6px;
}

div::-webkit-scrollbar-track {
  background: transparent;
}

div::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

div::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>