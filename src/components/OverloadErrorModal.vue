<template>
  <transition name="fade">
    <div
        v-if="store.overloadErrorModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center px-8 bg-black/60"
    >
      <div class="bg-white dark:bg-darkCardBgColor rounded-xl p-8 max-w-lg w-full shadow-xl">
        <h2 class="text-[1.5rem] dark:text-darkText font-semibold text-gray-900">
          AI Model Overloaded 😓
        </h2>
        <p class="text-gray-600 mt-3 dark:text-darkSubtext">
          Our AI model is currently overloaded due to high demand. Please try again after a few minutes. We appreciate
          your patience.
        </p>

        <div class="mt-12 flex justify-center gap-5">
          <button
              class="py-3 hover:bg-gray-50 w-full lg:w-[50%] dark:border-gray-700/80 dark:text-darkSubtext dark:hover:bg-black/10 cursor-pointer transition-all duration-300 px-10 text-gray-700 border border-gray-200 rounded-lg text-[1.1rem] flex items-center gap-2 justify-center"
              @click="handleClose"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import {useStore} from "@stores/useStore";

const store = useStore();

const handleClose = () => {
  store.toggleOverloadErrorModalOpen(false);
};
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
