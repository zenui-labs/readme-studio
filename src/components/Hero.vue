<script setup lang="ts">
import AiIcon from "@/svg-icons/ai-icon.vue";
import RootLayout from "@/layouts/RootLayout.vue";
</script>

<template>
  <RootLayout>
    <div class='max-w-4xl mx-auto my-[100px] md:my-0 px-6 md:px-0'>
      <h1 class="text-[3rem] md:text-[4.5rem] dark:text-darkText leading-[60px] md:leading-[90px] font-bold capitalize z-20">
        Your <span class="text-brandColor uppercase">Projects</span>
        Deserve Better <span class="text-brandColor uppercase">docs</span>
      </h1>
      <p class="text-[1rem] md:text-[1.1rem] max-w-[800px] mx-auto text-gray-700 dark:text-darkSubtext mt-1">
        Say goodbye to boring templates. Readme Studio writes meaningful,
        customized README files with the help of AI.
      </p>

      <router-link
          to="/generate"
          class="py-2.5 mt-10 cursor-pointer bg-brandColor/80 hover:bg-brandColor transition-all duration-300 px-6 text-white rounded-lg text-[1.1rem] flex items-center gap-3 justify-center w-max mx-auto"
      >
        <AiIcon/>
        Create Readme
      </router-link>
    </div>
  </RootLayout>
</template>
