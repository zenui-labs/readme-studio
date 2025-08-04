<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from 'vue'
import {ChevronDown, Copy, Download, Expand, Loader2} from 'lucide-vue-next'
import {useStore} from "@stores/useStore";

const props = defineProps<{
  content: string
}>()

const isCopying = ref(false)
const isDownloading = ref(false)
const isDropdownOpen = ref(false)

const store = useStore()

const copyReadme = async () => {
  try {
    await navigator.clipboard.writeText(props.content)
    isCopying.value = true
    setTimeout(() => {
      isCopying.value = false
    }, 1000)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

const downloadReadme = () => {
  isDownloading.value = true
  const blob = new Blob([props.content], {type: 'text/markdown;charset=utf-8'})
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = 'readme-studio-generated.md'
  document.body.appendChild(link)
  link.click()

  setTimeout(() => {
    isDownloading.value = false
    URL.revokeObjectURL(url)
    document.body.removeChild(link)
  }, 1000)
}

const openFullscreenPreview = () => {
  store.fullScreenModal = true
}

let handleClickOutside: (event: MouseEvent) => void

onMounted(() => {
  handleClickOutside = (event: MouseEvent) => {
    if (
        // @ts-ignore
        !event.target.closest('.editor_dropdown_btn') &&
        // @ts-ignore
        !event.target.closest('.editor_dropdown')
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
  <div class="flex flex-col lg:flex-row lg:items-center justify-end mb-4 gap-3">
    <button
        @click="openFullscreenPreview"
        class="py-2.5 cursor-pointer w-max text-[1rem] font-medium px-4 bg-brandColor text-white rounded-lg transition-colors duration-300 flex items-center gap-2.5"
    >
      <Expand :size="19"/>
      Fullscreen Preview
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
          class='flex editor_dropdown_btn items-center justify-center bg-[#007f6c] w-[45px] rounded-r-lg cursor-pointer text-white'
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
            class="bg-white dark:bg-gray-800 absolute top-[110%] p-1 shadow-[0px_0px_5px_0px_rgb(0,0,0,0.1)] editor_dropdown rounded-lg w-[45%] md:w-full left-0"
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
  </div>
</template>