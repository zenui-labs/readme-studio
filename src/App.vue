<script setup lang="ts">
import LimitErrorModal from "@components/modals/LimitErrorModal.vue";
import OverloadErrorModal from "@components/modals/OverloadErrorModal.vue";
import FullScreenPreviewModal from "@components/modals/FullScreenPreviewModal.vue";
import {computed, watch} from "vue";
import {useRoute} from "vue-router";
import {useStore} from "@stores/useStore";
import {PATHS} from "@/constants/paths";

const store = useStore()
const route = useRoute()

// Lock page scroll while an overlay is open. The generated-README overlay only
// exists on the generator page, so a leftover step 4 must not lock other pages.
const isOverlayOpen = computed(() =>
    store.fullScreenModal || (route.path === PATHS.GENERATOR && store.currentStep === 4))

watch(isOverlayOpen, (open) => {
  document.documentElement.classList.toggle('overflow-hidden', open)
}, {immediate: true})

// Navigating away (including the browser back button) closes the preview.
watch(() => route.path, () => store.closePreview())

</script>

<template>
  <router-view/>
  <LimitErrorModal/>
  <OverloadErrorModal/>
  <FullScreenPreviewModal/>


  <a href="https://ko-fi.com/zenuilabs" id="coffee_badge" target="_blank">
    <img src="https://storage.ko-fi.com/cdn/cup-border.png"/>
    Donate
  </a>
</template>