<template>
  <div class="pt-[150px] md:pt-[180px] px-4 min-h-screen">

    <div class="text-center mb-12">
      <h2 class="text-[2.3rem] md:text-[3rem] dark:text-darkText text-gray-800 font-bold">
        Pre-Built Templates
      </h2>
      <p class="text-gray-500 dark:text-darkSubtext mt-2 text-[1rem]">
        Everything you need to craft a standout GitHub profile or project README that gets noticed
      </p>
    </div>

    <div class="flex flex-col sm:flex-row sm:items-center justify-center gap-4 mb-12">
      <input
          v-model="searchQuery"
          type="text"
          placeholder="Search templates..."
          class="w-full lg:w-[50%] px-4 dark:border-darkBorder dark:text-darkText focus:!border-brandColor py-3 border border-gray-200 outline-none focus:ring-0 rounded-lg"
      />

      <CustomSelectBox
          v-model="selectedCategory"
          :options="uniqueCategories"
      />
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <TemplateCard
          v-for="template in filteredTemplates"
          :key="template.id"
          :template="template"
          v-if="filteredTemplates?.length"
      />
    </div>

    <p v-if="!filteredTemplates?.length" class="text-base text-center text-gray-700 dark:text-darkSubtext my-24">No
      template found!</p>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import TemplateCard from '@/components/templates/template-card.vue'
import {readmeTemplates} from '@/data/template-data.js'
import CustomSelectBox from "@components/CustomSelectBox.vue";

const searchQuery = ref('')
const selectedCategory = ref('')

const uniqueCategories = [...new Set(readmeTemplates.map(t => t.category))]

const filteredTemplates = computed(() => {
  return readmeTemplates.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.value?.toLowerCase()) ||
        t.description.toLowerCase().includes(searchQuery.value?.toLowerCase()) ||
        t.tags.some(tag => tag.toLowerCase().includes(searchQuery.value?.toLowerCase()))

    const matchesCategory = selectedCategory.value === '' || t.category === selectedCategory.value

    return matchesSearch && matchesCategory
  })
})
</script>
