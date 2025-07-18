<script setup lang="ts">
import Discord from "@/svg-icons/discord.vue";
import Moon from "@/svg-icons/moon.vue";
</script>

<template>
  <nav
      class='absolute top-5 left-1/2 -translate-x-1/2 z-50 backdrop-blur-5xl flex items-center justify-between w-full max-w-[1200px] mx-auto py-2.5 rounded-full px-6'>
    <img src="/logo.svg" alt="logo" class="w-[40px]"/>

    <ul class='flex items-center gap-10 text-gray-700'>
      <li class='text-[1rem] font-medium hover:text-brandColor cursor-pointer transition-all duration-200'>About Us</li>
      <li class='text-[1rem] font-medium hover:text-brandColor cursor-pointer transition-all duration-200'>Types</li>
      <li class='text-[1rem] font-medium hover:text-brandColor cursor-pointer transition-all duration-200'>Privacy
        Policy
      </li>
      <li class='text-[1rem] font-medium hover:text-brandColor cursor-pointer transition-all duration-200'>Contact Us
      </li>
    </ul>

    <div class='flex items-center'>
      <Discord/>
      <Moon/>
    </div>
  </nav>
</template>