<script setup lang="ts">
import {useStore} from "@stores/useStore";
import {ChevronDown, Copy, Download, FilePenLine, Loader2, X} from 'lucide-vue-next';
import {useRouter} from "vue-router";
import {computed, onBeforeUnmount, onMounted, ref} from 'vue';
import {renderMarkdown} from "@utils/markdown";
import {PATHS} from "@/constants/paths";

const store = useStore()
const router = useRouter()

const isCopying = ref(false)
const isDownloading = ref(false)
const isDropdownOpen = ref(false)

const html = computed(() => renderMarkdown(store.generatedReadme, store.isDarkMode))

const handleModalClose = () => {
  store.currentStep = 1
  store.generatedReadme = ''
  router.push(PATHS.HOME)
}

const openInEditor = () => {
  store.currentStep = 1
  router.push(PATHS.EDITOR)
}

const copyReadme = () => {
  navigator.clipboard.writeText(store.generatedReadme).then(() => {
    isCopying.value = true
    setTimeout(() => {
      isCopying.value = false
    }, 1000)
  })
}

const downloadReadme = () => {
  isDownloading.value = true

  const blob = new Blob([store.generatedReadme], {type: 'text/markdown;charset=utf-8'});
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'readme-studio-generated.md';
  document.body.appendChild(link);
  link.click();

  setTimeout(() => {
    isDownloading.value = false
    URL.revokeObjectURL(url)
    document.body.removeChild(link)
  }, 1000)
}

let handleClickOutside: (event: MouseEvent) => void

onMounted(() => {
  handleClickOutside = (event: MouseEvent) => {
    if (
        // @ts-ignore
        !event.target.closest('.dropdown_btn') &&
        // @ts-ignore
        !event.target.closest('.dropdown')
    ) {
      isDropdownOpen.value = false
    }
  }
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

</script>

<template>
  <Transition name="fade" appear>
    <div
        v-if="store.currentStep === 4"
        class="fixed top-0 left-0 z-[50000000000000000000000000] w-full h-screen flex justify-center items-center flex-col backdrop-blur-3xl dark:backdrop-blur-2xl bg-black/10 dark:bg-transparent"
    >
      <Transition name="slide-up" appear>
        <div class="w-[95%] md:w-[80%] mt-36">
          <div class='flex flex-wrap items-center justify-end gap-3 mb-3'>

            <button
                @click="openInEditor"
                class='py-2.5 cursor-pointer text-[1rem] font-medium px-4 bg-brandColor text-white rounded-lg hover:bg-brandColor/90 transition-colors duration-300 flex items-center gap-2'>
              <FilePenLine :size="19"/>
              Open in Editor
            </button>

            <div class='relative flex'>
              <button
                  @click="downloadReadme"
                  class="py-2.5 cursor-pointer text-[1rem] font-medium px-4 bg-brandColor text-white rounded-l-lg transition-colors duration-300 flex items-center gap-2.5"
              >
                <component
                    :is="isDownloading ? Loader2 : Download"
                    :size="19"
                    :class="{ 'animate-spin': isDownloading }"
                />
                {{ isDownloading ? 'Downloading...' : 'Download' }}
              </button>

              <span
                  @click="isDropdownOpen = !isDropdownOpen"
                  class='flex dropdown_btn items-center justify-center bg-[#007f6c] w-[45px] rounded-r-lg cursor-pointer text-white'
              >
        <ChevronDown
            :class="isDropdownOpen ? 'rotate-[180deg]' : 'rotate-0'"
            class="transition-all duration-300"
        />
      </span>

              <transition
                  name="dropdown"
                  enter-active-class="transition ease-out duration-150"
                  enter-from-class="opacity-0 -translate-y-2"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition ease-in duration-150"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 -translate-y-2"
              >
                <div
                    v-if="isDropdownOpen"
                    class="bg-white dark:bg-gray-800 absolute top-[105%] p-1 shadow-[0px_0px_5px_0px_rgb(0,0,0,0.1)] dropdown rounded-lg w-full right-0"
                >
                  <button
                      @click="copyReadme"
                      class="py-2.5 cursor-pointer text-[1rem] dark:text-darkText dark:hover:bg-darkCardBgColor font-medium px-6 hover:bg-gray-100 w-full rounded-lg text-gray-800 transition-colors duration-300 flex items-center gap-2.5"
                  >
                    <Copy :size="17"/>
                    {{ isCopying ? 'Copied' : 'Copy' }}
                  </button>
                </div>
              </transition>
            </div>

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
