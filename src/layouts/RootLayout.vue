<script setup lang="ts">
import Navbar from "@components/Navbar.vue";
import MobileNabar from "@components/MobileNabar.vue";
import Footer from "@components/Footer.vue";

const props = defineProps({
  isEditorPage: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <div class="dark:bg-darkBg">
    <Navbar/>
    <MobileNabar/>

    <div class="z-10 w-full" :class="!isEditorPage && 'max-w-[1200px] mx-auto'">
      <slot/>
    </div>
    <Footer/>
  </div>
</template>