<script setup lang="ts">
import {useStore} from "@stores/useStore";
import {X} from 'lucide-vue-next';
import {computed, onBeforeUnmount, onMounted} from 'vue';
import {renderMarkdown} from "@utils/markdown";

const store = useStore()

const html = computed(() => renderMarkdown(store.previewMarkdown, store.isDarkMode))

const handleModalClose = () => {
  store.closePreview()
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && store.fullScreenModal) handleModalClose()
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))

</script>

<template>
  <Transition name="fade" appear>
    <div
        v-if="store.fullScreenModal"
        class="fixed top-0 left-0 z-[50000000000000000000000000] w-full h-screen flex justify-center items-center flex-col backdrop-blur-3xl dark:backdrop-blur-2xl bg-black/10 dark:bg-transparent"
    >
      <Transition name="slide-up" appear>
        <div class="w-[95%] md:w-[80%] mt-36">
          <div class='flex items-center justify-end gap-3 mb-3'>
            <button
                @click="handleModalClose"
                class='py-2.5 cursor-pointer text-[1rem] font-medium px-4 bg-white dark:bg-slate-800 dark:text-darkText text-black rounded-lg hover:text-brandColor transition-colors duration-300'>
              <X/>
            </button>
          </div>

          <div style="scrollbar-width: none"
               class='bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-darkBorder h-screen overflow-y-auto p-6 md:p-10 pb-[150px] rounded-t-xl'>
            <div class="markdown-body mx-auto max-w-[1012px]" v-html="html"></div>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.slide-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
