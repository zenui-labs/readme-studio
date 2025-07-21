<script setup lang="ts">
import Navbar from "@components/Navbar.vue";
</script>

<template>
  <div class='relative'>
    <Navbar/>
    <div class="min-h-screen w-full relative bg-white text-center items-center justify-center flex flex-col">
      <div
          class="absolute inset-0 z-0"
          style="
        background-image:
          linear-gradient(to right, #fbfbfb 1px, transparent 1px),
          linear-gradient(to bottom, #fbfbfb 1px, transparent 1px);
        background-size: 30px 30px;
      "
      ></div>

      <div
          class="absolute inset-0 z-10 pointer-events-none"
          style="
        background: radial-gradient(ellipse 70% 60% at 50% 100%, rgba(0, 173, 149, 0.2) 0%, transparent 100%);
      "
      ></div>

      <div class="z-0 max-w-[1200px] mx-auto">
        <slot/>
      </div>

      <p class='text-[0.8rem] absolute bottom-5 opacity-80 left-1/2 -translate-x-1/2'>A product of <a
          href="https://zenui.net"
          target="_blank"
          class='text-brandColor underline'>@zenui</a>
      </p>
    </div>
  </div>
</template>