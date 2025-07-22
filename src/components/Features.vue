<script setup lang="ts">
import {Award, Eye, Github, Zap} from 'lucide-vue-next'
</script>

<template>
  <section class="max-w-7xl mx-auto py-20 px-4 mt-16">
    <!-- Header -->
    <div class="text-center mb-16">
      <h2 class="text-[2.5rem] dark:text-darkText text-gray-800 font-bold">
        Readme Studio Features
      </h2>
      <p class="text-gray-500 dark:text-darkSubtext mt-2 text-[1rem]">
        Everything you need to craft a standout GitHub profile or project README that gets noticed.
      </p>
    </div>

    <!-- Modern Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">

      <!-- Card 1 -->
      <div
          class="group relative overflow-hidden bg-white/50 min-h-[270px] backdrop-blue-2xl rounded-3xl p-8 border border-gray-100 bg-gradient-to-br from-white dark:from-darkBg dark:border-darkBorder dark:to-brandColor to-brandColor/50 col-span-4"
      >
        <div class="relative z-10 h-full flex text-left flex-col">
          <div class="flex-1">
            <h3
                class="text-[1.5rem] dark:text-darkText font-medium mb-4 leading-tight"
            >
              AI-Powered Generation
            </h3>
            <p class="text-gray-700 dark:text-darkSubtext text-base leading-relaxed max-w-[400px]">
              Generate professional README files with a single click using AI — just provide minimal input, and let the
              tool do the magic.
            </p>
          </div>
          <Zap
              class="w-[300px] h-[300px] text-gray-200 dark:opacity-30 opacity-50 absolute -bottom-20 -right-16"
              stroke-width="1"
          />
        </div>
      </div>

      <!-- Card 2 -->
      <div
          class="group relative overflow-hidden bg-white/50 min-h-[270px] border border-gray-100 backdrop-blue-2xl rounded-3xl p-8
               bg-gradient-to-tr from-brandColor/50 dark:border-darkBorder dark:from-brandColor to-white dark:to-darkBg col-span-2"
      >
        <div class="relative z-10 h-full text-left flex flex-col">
          <div class="flex-1">
            <h3
                class="text-[1.5rem] dark:text-darkText font-medium mb-4 leading-tight"
            >
              Custom Badges & Widgets
            </h3>
            <p class="text-gray-700 dark:text-darkSubtext text-base leading-relaxed">
              Add cool badges, visitor counters, tech stack icons, and GitHub stats widgets directly into your README.
            </p>
          </div>
          <Award
              class="w-[200px] h-[200px] text-gray-100 dark:opacity-30 opacity-50 rotate-[-30deg] absolute -bottom-20 -right-16"
              stroke-width="1"
          />
        </div>
      </div>

      <!-- Card 3 -->
      <div
          class="group relative overflow-hidden bg-white/50 min-h-[270px] dark:border-darkBorder border border-gray-100 backdrop-blue-2xl rounded-3xl p-8
               bg-gradient-to-tr from-white to-brandColor/50 dark:to-brandColor dark:from-darkBg col-span-2"
      >
        <div class="relative z-10 h-full flex text-left flex-col">
          <div class="flex-1">
            <h3
                class="text-[1.5rem] dark:text-darkText font-medium mb-4 leading-tight"
            >
              Live Preview & Export
            </h3>
            <p class="text-gray-700 dark:text-darkSubtext text-base leading-relaxed">
              Preview your README in real-time as you build it and export it in markdown format instantly.
            </p>
          </div>
          <Eye
              class="w-[200px] h-[200px] text-gray-100 dark:opacity-30 opacity-40 rotate-[-30deg] absolute -bottom-20 -right-16"
              stroke-width="1"
          />
        </div>
      </div>

      <!-- Card 4 -->
      <div
          class="group relative overflow-hidden bg-white/50 min-h-[270px] dark:border-darkBorder border border-gray-100 backdrop-blue-2xl rounded-3xl p-8
               bg-gradient-to-br from-brandColor/50 dark:from-brandColor dark:to-darkBg to-white col-span-4"
      >
        <div class="relative z-10 h-full text-left flex flex-col">
          <div class="flex-1">
            <h3
                class="text-[1.5rem] dark:text-darkText font-medium mb-4 leading-tight"
            >
              GitHub Integration
            </h3>
            <p class="text-gray-700 dark:text-darkSubtext text-base leading-relaxed max-w-[400px]">
              Pull your GitHub profile data, repositories, and stats automatically to populate your README.
            </p>
          </div>
          <Github
              class="w-[280px] h-[280px] text-gray-100 dark:opacity-20 opacity-50 rotate-[-30deg] absolute -bottom-20 -right-20"
              stroke-width="1"
          />
        </div>
        <div
            class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
      </div>

    </div>
  </section>
</template>
