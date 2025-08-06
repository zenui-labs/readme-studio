<script setup lang="ts"></script>

<template>
  <section class="py-6 px-6 dark:bg-darkBg md:px-4 relative mx-auto">

    <div
        style="
        background: radial-gradient(
          ellipse 70% 100% at 50% 100%,
          rgba(0, 173, 149, 0.2) 0%,
          transparent 100%
        );
      "
        class="absolute inset-0 z-10 pointer-events-none dark:[background:radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(0,173,149,0.08)_0%,transparent_100%)]"
    ></div>

    <p
        class="text-[0.8rem] opacity-80 text-center text-gray-600 dark:text-gray-400"
    >
      A product of
      <a
          href="https://zenui.net"
          target="_blank"
          class="text-brandColor underline"
      >@zenui</a
      >
    </p>
  </section>
</template>