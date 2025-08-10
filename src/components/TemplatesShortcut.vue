<script setup lang="ts">
import {readmeTemplates} from '@/data/template-data'
import {MoveRight} from 'lucide-vue-next'
import TemplateCard from "@components/templates/template-card.vue";
import {PATHS} from "@/constants/paths";
</script>

<template>
  <section class="max-w-7xl mx-auto pt-10 md:pt-20 py-20 px-6 md:px-4 relative">
    <div class="text-center mb-16">
      <h2 class="text-[2.3rem] md:text-[3rem] dark:text-darkText text-gray-800 font-bold">
        Pre-Built Templates
      </h2>
      <p class="text-gray-500 dark:text-darkSubtext mt-2 text-[1rem]">
        Everything you need to craft a standout GitHub profile or project README that gets noticed
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <TemplateCard
          v-for="template in readmeTemplates?.slice(0,6)"
          :key="template.id"
          :template="template"
      />
    </div>

    <div
        class="absolute bottom-0 flex items-end justify-center left-0 right-0 dark:via-darkBg/90 dark:to-darkBg via-white/90 bg-gradient-to-b from-transparent py-10 to-white h-[40%] z-20">
      <button
          @click="$router.push(PATHS.TEMPLATES)"
          class="py-2.5 cursor-pointer mb-8 bg-brandColor hover:bg-brandColor transition-all duration-300 px-6 text-white rounded-lg text-[1.1rem] flex items-center gap-3 group justify-center">
        More Templates
        <MoveRight class="group-hover:ml-1 transition-all duration-300"/>
      </button>
    </div>

  </section>
</template>
