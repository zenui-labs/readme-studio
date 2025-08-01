<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue'
import {Pencil} from "lucide-vue-next";
import router from "@/router";
import {useStore} from "@stores/useStore";

const isDarkMode = ref(false)
const store = useStore()

function detectThemeFromBodyClass() {
  isDarkMode.value = document.body.classList.contains('dark')
}

function detectThemeFromLocalStorage() {
  const theme = localStorage.getItem('theme')
  if (theme === 'dark') {
    isDarkMode.value = true
  } else if (theme === 'light') {
    isDarkMode.value = false
  } else {
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
}

let observer: MutationObserver | null = null

function setupBodyClassObserver() {
  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        detectThemeFromBodyClass()
      }
    })
  })

  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['class']
  })
}

function handleCreateReadme() {
  router.push('/editor')
  store.generatedReadme = ''
}

function handleStorageChange(event: StorageEvent) {
  if (event.key === 'theme') {
    detectThemeFromLocalStorage()
  }
}

onMounted(() => {
  detectThemeFromBodyClass()

  setupBodyClassObserver()

  window.addEventListener('storage', handleStorageChange)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
  window.removeEventListener('storage', handleStorageChange)
})
</script>


<template>
  <div class='max-w-4xl mx-auto my-[150px] md:my-0 px-6 md:px-0'>

    <div class="mb-3 flex items-center justify-center">
      <a v-if="isDarkMode"
         href="https://www.producthunt.com/products/readme-studio?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-readme&#0045;studio"
         target="_blank"><img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=996454&theme=dark&t=1753507824462"
          alt="Readme&#0032;Studio - Your&#0032;AI&#0032;Readme&#0032;generator | Product Hunt"
          class="dark:border dark:border-gray-700 rounded-lg w-[180px]"/></a>

      <a v-else
         href="https://www.producthunt.com/products/readme-studio?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-readme&#0045;studio"
         target="_blank"><img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=996454&theme=light&t=1753506088862"
          alt="Readme&#0032;Studio - Your&#0032;AI&#0032;Readme&#0032;generator | Product Hunt"
          class="w-[180px]"/></a>
    </div>

    <h1 class="text-[3rem] md:text-[4.5rem] dark:text-darkText leading-[60px] md:leading-[90px] font-bold capitalize z-20">
      Welcome To The New Era
      of Github <span class="text-brandColor uppercase">docs</span>
    </h1>
    <p class="text-[1rem] md:text-[1.1rem] max-w-[800px] mx-auto text-gray-700 dark:text-darkSubtext mt-2">
      Let AI do the writing. Readme Studio creates meaningful, professional READMEs tailored to your project and fully
      editable.
    </p>

    <div class='flex flex-col md:flex-row items-center mt-14 gap-5 w-max mx-auto'>
      <button
          @click="handleCreateReadme"
          class="py-2.5 cursor-pointer border-brandColor border dark:bg-slate-900/20 bg-gray-50/40 hover:bg-brandColor/10 transition-all duration-300 px-6 text-brandColor rounded-lg text-[1.1rem] flex items-center gap-2 justify-center"
      >
        <Pencil :size="18"/>
        Create Readme
      </button>
      <router-link
          to="/generate"
          class="py-2.5 cursor-pointer bg-brandColor/80 hover:bg-brandColor transition-all duration-300 px-6 text-white rounded-lg text-[1.1rem] flex items-center gap-2 justify-center"
      >
        <img src="/ai.svg" alt="ai-icon" class='w-[20px]'/>
        Generate Readme
      </router-link>
    </div>
  </div>
</template>
