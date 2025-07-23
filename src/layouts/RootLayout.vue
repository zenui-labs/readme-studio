<script setup lang="ts">
import Navbar from "@components/Navbar.vue";
import MobileNabar from "@components/MobileNabar.vue";
</script>

<template>
  <Navbar/>
  <MobileNabar/>
  <div
      class="min-h-screen w-full dark:bg-darkBg relative bg-white text-center items-center justify-center flex flex-col">

    <!-- Grid background -->
    <div
        class="absolute inset-0 z-0
    [background-image:linear-gradient(to_right,_#fbfbfb_1px,_transparent_1px),linear-gradient(to_bottom,_#fbfbfb_1px,_transparent_1px)]
    dark:[background-image:linear-gradient(to_right,_#1b1b1e_1px,_transparent_1px),linear-gradient(to_bottom,_#1b1b1e_1px,_transparent_1px)]
    [background-size:30px_30px]"
    ></div>


    <!-- Radial highlight at the bottom -->
    <div
        style="
        background: radial-gradient(
          ellipse 70% 60% at 50% 100%,
          rgba(0, 173, 149, 0.2) 0%,
          transparent 100%
        );
      "
        class="absolute inset-0 z-10 pointer-events-none dark:[background:radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(0,173,149,0.08)_0%,transparent_100%)]"
    ></div>

    <div class="z-10 w-full max-w-[1200px] mx-auto">
      <slot/>
    </div>

    <p
        class="text-[0.8rem] absolute bottom-5 opacity-80 left-1/2 -translate-x-1/2 text-gray-600 dark:text-gray-400"
    >
      A product of
      <a
          href="https://zenui.net"
          target="_blank"
          class="text-brandColor underline"
      >@zenui</a
      >
    </p>
  </div>
</template>