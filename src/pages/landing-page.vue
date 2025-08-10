<script setup lang="ts">
import RootLayout from "@/layouts/RootLayout.vue";
import Hero from "@components/Hero.vue";
import Features from "@components/Features.vue";
import Faq from "@components/Faq.vue";
import TemplatesShortcut from "@components/TemplatesShortcut.vue";
</script>

<template>
  <Hero/>
  <RootLayout>
    <Features/>
    <Faq/>
    <TemplatesShortcut/>
  </RootLayout>
</template>