<script setup lang="ts">
import {useStore} from "@stores/useStore";
import {Copy, Download, Loader2, X} from 'lucide-vue-next';
import {useRouter} from "vue-router";
import VueMarkdown from 'vue3-markdown-it'
import 'github-markdown-css';
import {ref} from 'vue';

const store = useStore()
const router = useRouter()

const isCopying = ref(false)
const isDownloading = ref(false)

const handleModalClose = () => {
  store.currentStep = 1
  router.push('/')
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
</script>


<template>
  <Transition name="fade" appear>
    <div
        v-if="store.currentStep === 4"
        class="fixed top-0 left-0 z-[20000000000] w-full h-screen flex justify-center items-center flex-col backdrop-blur-3xl dark:backdrop-blur-2xl bg-black/10 dark:bg-transparent"
    >
      <Transition name="slide-up" appear>
        <div
            class="w-[80%] mt-36"
        >

          <div class='flex items-center justify-end gap-3 mb-3'>
            <button
                @click="copyReadme"
                class='py-2.5 cursor-pointer text-[1rem] font-medium px-6 bg-brandColor text-white rounded-lg hover:bg-brandColor/90 transition-colors duration-300 flex items-center gap-2.5'>
              <component :is="Copy" :size="19"/>
              {{ isCopying ? 'Copied' : 'Copy' }}
            </button>

            <button
                @click="downloadReadme"
                class='py-2.5 cursor-pointer text-[1rem] font-medium px-6 bg-brandColor text-white rounded-lg hover:bg-brandColor/90 transition-colors duration-300 flex items-center gap-2.5'>
              <component :is="isDownloading ? Loader2 : Download" :size="19" class="animate-spin" v-if="isDownloading"/>
              <component :is="isDownloading ? Loader2 : Download" :size="19" v-else/>
              {{ isDownloading ? 'Downloading...' : 'Download' }}
            </button>

            <button
                @click="handleModalClose"
                class='py-2.5 cursor-pointer text-[1rem] font-medium px-4 bg-white dark:bg-slate-800 dark:text-darkText text-black rounded-lg hover:text-brandColor transition-colors duration-300'>
              <X/>
            </button>
          </div>


          <div style="scrollbar-width: none"
               class='bg-white dark:bg-slate-800 h-screen overflow-y-auto p-6 pb-[150px] rounded-t-xl'>
            <div class="markdown-container dark:prose-invert">
              <VueMarkdown :source="store.generatedReadme" class="markdown-body"/>
            </div>
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

<!-- Global styles for markdown content -->
<style>
.markdown-container .markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 100%;
  margin: 0;
  text-align: left !important;
  font-size: 16px;
  line-height: 1.6;
  word-wrap: break-word;
}

.markdown-container .markdown-body h1,
.markdown-container .markdown-body h2,
.markdown-container .markdown-body h3,
.markdown-container .markdown-body h4,
.markdown-container .markdown-body h5,
.markdown-container .markdown-body h6 {
  text-align: left !important;
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}

.markdown-container .markdown-body p {
  text-align: left !important;
  margin-bottom: 16px;
}

.markdown-container .markdown-body ul,
.markdown-container .markdown-body ol {
  text-align: left !important;
  padding-left: 2em;
  margin-bottom: 16px;
}

.markdown-container .markdown-body li {
  text-align: left !important;
}

.markdown-container .markdown-body blockquote {
  text-align: left !important;
  margin: 0;
  padding: 0 1em;
  color: #6a737d;
  border-left: 0.25em solid #dfe2e5;
}

.markdown-container .markdown-body pre {
  text-align: left !important;
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 6px;
  margin-bottom: 16px;
}

.markdown-container .markdown-body code {
  text-align: left !important;
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  background-color: rgba(175, 184, 193, 0.2);
  border-radius: 3px;
}

.markdown-container .markdown-body table {
  text-align: left !important;
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 16px;
}

.markdown-container .markdown-body td,
.markdown-container .markdown-body th {
  text-align: left !important;
  padding: 6px 13px;
  border: 1px solid #dfe2e5;
}

.markdown-container .markdown-body th {
  font-weight: 600;
  background-color: #f6f8fa;
}

.dark .markdown-container .markdown-body {
  background-color: #0f172a;
  color: #f1f5f9;
  border-radius: 12px !important;
  padding: 20px !important;
}

.dark .markdown-container .markdown-body pre {
  background-color: #1e293b;
  color: #e2e8f0;
}

.dark .markdown-container .markdown-body code {
  background-color: rgba(255, 255, 255, 0.1);
  color: #facc15;
}

.dark .markdown-container .markdown-body blockquote {
  border-left-color: #334155;
  color: #cbd5e1;
}

.dark .markdown-container .markdown-body table th {
  background-color: #1e293b;
  color: #e2e8f0;
}


</style>