<script setup lang="ts">
import {useStore} from "@stores/useStore";

const store = useStore()
</script>

<template>
  <div v-if="store.currentStep === 4"
       class='fixed top-0 left-0 z-[20000000000] w-full h-screen flex justify-center items-center flex-col backdrop-blur-3xl'>
    <div class="w-[80%] bg-white h-screen">gadggdasghadsgdgadgdgdsaggggggggggggggggggggggggggggg</div>
  </div>
</template>