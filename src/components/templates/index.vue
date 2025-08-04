<template>
  <div class="max-w-6xl mx-auto px-4 py-10">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold">📁 All Templates</h1>
      <p class="text-gray-600 mt-1">Browse and use any template by opening it in the editor</p>
    </div>

    <!-- Search + Filter -->
    <div class="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
      <input
          v-model="searchQuery"
          type="text"
          placeholder="Search templates..."
          class="w-full sm:w-1/2 px-4 py-2 border rounded-md"
      />

      <select v-model="selectedCategory" class="px-4 py-2 border rounded-md">
        <option value="">All Categories</option>
        <option
            v-for="cat in uniqueCategories"
            :key="cat"
            :value="cat"
        >
          {{ cat }}
        </option>
      </select>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <TemplateCard
          v-for="template in filteredTemplates"
          :key="template.id"
          :template="template"
      />
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import TemplateCard from '@/components/templates/template-card.vue'
import {readmeTemplates} from '@/data/template-data.js'

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
