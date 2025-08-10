<script setup>
import {useStore} from "@stores/useStore.ts";
import {useRouter} from "vue-router";
import {PATHS} from "@/constants/paths.js";

const store = useStore()
const router = useRouter()

const emit = defineEmits(['update:modelValue'])

const handleClose = () => {
  store.toggleLimitErrorModalOpen(false)
  store.currentStep = 1
  router.push(PATHS.HOME)
}

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <transition name="fade">
    <div
        v-if="store.limitErrorModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center px-8 bg-black/60"
    >
      <div class="bg-white dark:bg-darkCardBgColor rounded-xl p-8 max-w-lg w-full shadow-xl">
        <h2 class="text-[1.5rem] dark:text-darkText font-semibold text-gray-900">
          AI Limit Reached
        </h2>
        <p class="text-gray-600 mt-3 dark:text-darkSubtext">
          You've reached the free AI limit for Readme Studio. We're a small team — your support helps us keep improving.
        </p>
        <p class="text-gray-600 mt-2 dark:text-darkSubtext">
          Consider buying the pro plan or sharing your feedback. Every bit helps ❤️
        </p>

        <div class="mt-12 flex justify-center gap-5">
          <button
              class="py-3 hover:bg-gray-50 dark:border-gray-700/80 dark:text-darkSubtext dark:hover:bg-black/10 cursor-pointer transition-all duration-300 px-10 text-gray-700 border border-gray-200 rounded-lg text-[1.1rem] flex items-center gap-2 justify-center"
              @click="handleClose"
          >
            Close
          </button>
          <a
              href="https://ko-fi.com/zenuilabs"
              target="_blank"
              class="py-2.5 cursor-pointer bg-brandColor/80 hover:bg-brandColor transition-all duration-300 px-6 text-white rounded-lg text-[1.1rem] flex items-center gap-2 justify-center"
          >
            Support Us
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>