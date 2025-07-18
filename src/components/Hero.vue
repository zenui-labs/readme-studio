<script setup lang="ts">
import AiIcon from "@/svg-icons/ai-icon.vue";
</script>

<template>
  <div class="min-h-screen w-full relative bg-white text-center items-center justify-center flex flex-col">
    <!-- Grid background -->
    <div
        class="absolute inset-0 z-0"
        style="
        background-image:
          linear-gradient(to right, #fbfbfb 1px, transparent 1px),
          linear-gradient(to bottom, #fbfbfb 1px, transparent 1px);
        background-size: 30px 30px;
      "
    ></div>

    <!-- Radial highlight at the bottom -->
    <div
        class="absolute inset-0 z-10 pointer-events-none"
        style="
        background: radial-gradient(ellipse 70% 60% at 50% 100%, rgba(0, 173, 149, 0.2) 0%, transparent 100%);
      "
    ></div>

    <div class='z-50 max-w-4xl mx-auto'>
      <h1 class="text-[4.5rem] leading-[90px] font-bold capitalize z-20">Your <span class='text-brandColor uppercase'>Projects</span>
        Deserve Better <span
            class='text-brandColor uppercase'>docs</span>
      </h1>
      <p class='text-[1.1rem] max-w-[800px] mx-auto text-gray-700 mt-1'>Say goodbye to boring templates. Readme Studio
        writes meaningful,
        customized README
        files with the help of
        AI.</p>

      <button
          class='py-2.5 mt-10 cursor-pointer bg-brandColor/80 hover:bg-brandColor transition-all duration-300 px-6 text-white rounded-lg text-[1.1rem] flex items-center gap-3 justify-center w-max mx-auto'>
        <AiIcon/>
        Create
        Readme
      </button>
    </div>

    <p class='text-[0.8rem] absolute bottom-5 opacity-80 left-1/2 -translate-x-1/2'>A product of <a
        href="https://zenui.net"
        target="_blank"
        class='text-brandColor underline'>@zenui</a>
    </p>
  </div>
</template>
