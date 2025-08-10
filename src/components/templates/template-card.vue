<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router"
import {useStore} from "@stores/useStore.ts"
import {Check, Copy, Eye, FilePenLine} from 'lucide-vue-next';
import FullScreenPreviewModal from "@components/modals/FullScreenPreviewModal.vue";
import {PATHS} from "@/constants/paths.js";

const props = defineProps({
  template: Object
})

const router = useRouter()
const store = useStore()
const isCopying = ref(false)

const showTemplatePreview = () => {
  store.setGeneratedReadme(props.template.template)
  store.fullScreenModal = true
}

const copyTemplateCode = () => {
  navigator.clipboard.writeText(props.template.template).then(() => {
    isCopying.value = true
    setTimeout(() => {
      isCopying.value = false
    }, 1000)
  })
}

const openEditor = () => {
  store.setGeneratedReadme(props.template.template)
  router.push(PATHS.EDITOR)
}

</script>

<template>
  <div
      class="bg-white rounded-xl p-6 text-left border dark:bg-darkCardBgColor dark:border-darkBorder border-gray-200 flex flex-col h-full">

    <div class="flex-1">
      <h3 class="text-[1.3rem] font-bold dark:text-darkText text-gray-900 mb-3 leading-tight">
        {{ template.name }}
      </h3>

      <div class="flex flex-col">
        <p class="text-sm dark:text-darkSubtext text-gray-500">
          {{ template.description }}
        </p>

        <div class="flex flex-wrap align-end gap-2 mt-5">
          <span class="text-[0.9rem] dark:text-darkSubtext text-gray-800 text-end font-medium">Tags:</span>
          <span
              v-for="tag in template.tags"
              :key="tag"
              class="px-3 py-1 bg-gray-100 dark:text-darkSubtext dark:bg-gray-800 text-gray-800 text-[0.8rem] font-medium rounded-lg"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <div class="flex items-center flex-wrap gap-2 mt-8">
      <button
          class="py-[9px] cursor-pointer text-[1rem] font-medium px-4 bg-brandColor text-white rounded-lg hover:bg-brandColor/90 transition-colors duration-300 flex items-center gap-2"
          @click="openEditor"
      >
        <FilePenLine :size="19"/>
        Open in Editor
      </button>

      <button
          title="Template Preview"
          class="w-max border border-gray-200 text-gray-800 px-3 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors cursor-pointer dark:border-gray-700 dark:text-darkText dark:hover:bg-gray-800 flex-shrink-0"
          @click="showTemplatePreview"
      >
        <Eye :size="21"/>
      </button>

      <button
          title="Copy Template Code"
          class="w-max border border-gray-200 text-gray-800 px-3 py-[11px] rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors dark:border-gray-700 dark:text-darkText dark:hover:bg-gray-800 cursor-pointer flex-shrink-0"
          @click="copyTemplateCode"
      >
        <Check v-if="isCopying" :size="19"/>
        <Copy v-else :size="19"/>
      </button>

    </div>

  </div>

  <FullScreenPreviewModal v-if="store.fullScreenModal"/>

</template>