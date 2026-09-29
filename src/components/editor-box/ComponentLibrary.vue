<script setup lang="ts">
import {computed, ref} from 'vue'
import {Search} from 'lucide-vue-next'
import {ReadmeSections} from "@/data/readme-sections";
import {ReadmeSectionCategory, ReadmeSectionType} from "@/types";

const emit = defineEmits<{
  addComponent: [component: any, cursorPosition?: number]
}>()

const categories: ReadmeSectionCategory[] = ['Sections', 'Elements', 'Creative']

const query = ref('')

const groups = computed(() => {
  const term = query.value.trim().toLowerCase()
  return categories
      .map(category => ({
        category,
        items: ReadmeSections.filter(section =>
            section.category === category &&
            (!term || section.name.toLowerCase().includes(term) || section.id.includes(term))
        ),
      }))
      .filter(group => group.items.length)
})

const addComponent = (component: ReadmeSectionType) => {
  emit('addComponent', component)
}
</script>

<template>
  <div class="p-4 min-h-[400px] lg:min-h-[600px] max-h-[400px] lg:max-h-[800px] overflow-y-auto">
    <div class="relative mb-4">
      <Search :size="16" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
      <input
          v-model="query"
          type="text"
          placeholder="Search elements..."
          class="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-darkBorder dark:text-darkText rounded-lg outline-none focus:border-brandColor"
      />
    </div>

    <section v-for="group in groups" :key="group.category" class="mb-5 last:mb-0">
      <h4 class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-darkSubtext mb-2.5">
        {{ group.category }}
      </h4>
      <div class="grid grid-cols-2 gap-3">
        <button
            v-for="component in group.items"
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
    </section>

    <p v-if="!groups.length" class="text-sm text-center text-gray-500 dark:text-darkSubtext py-10">
      No elements match "{{ query }}"
    </p>
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