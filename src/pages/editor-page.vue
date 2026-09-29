<script setup lang="ts">
import {computed, onMounted, ref} from 'vue'
import {useStore} from "@stores/useStore"
import RootLayout from "@/layouts/RootLayout.vue"
import ComponentLibrary from '@/components/editor-box/ComponentLibrary.vue'
import ComponentManager from '@/components/editor-box/ComponentManager.vue'
import MarkdownEditor from '@/components/editor-box/Editor.vue'
import EditorHeader from '@/components/editor-box/Header.vue'
import MarkdownPreview from '@/components/editor-box/Preview.vue'
import {joinOutline, OutlineSection, parseOutline} from "@utils/readmeOutline";
import {ReadmeSectionType} from "@/types";

const store = useStore()

const addSection = ref(true)
const editorRef = ref<InstanceType<typeof MarkdownEditor>>()
const currentCursorPosition = ref(0)

// The store holds the README text. Editor, preview, section list, header
// actions and the fullscreen preview all read from it, so they stay in sync.
const content = computed(() => store.generatedReadme)
const sections = computed(() => parseOutline(content.value))

onMounted(() => {
  window.scrollTo({top: 0, behavior: 'smooth'});
})

const handleAddComponent = (component: ReadmeSectionType) => {
  if (editorRef.value) editorRef.value.insertBlockAtCursor(component.template)
  else store.setGeneratedReadme(content.value + component.template)
}

const handleRemoveComponent = (index: number) => {
  store.setGeneratedReadme(joinOutline(sections.value.filter((_, i) => i !== index)))
}

const handleReorderComponents = (newOrder: OutlineSection[]) => {
  store.setGeneratedReadme(joinOutline(newOrder))
}

const handleEditorChange = (text: string) => {
  store.setGeneratedReadme(text)
}

const handleCursorPositionChange = (position: number) => {
  currentCursorPosition.value = position
}

</script>

<template>
  <RootLayout :is-editor-page="true">
    <div class="w-full min-h-screen pt-[130px] max-w-[2000px] mx-auto lg:pt-[170px] mb-[80px] px-5 lg:px-12">

      <EditorHeader
          :content="content"
      />

      <div
          class="flex h-full flex-col lg:flex-row border lg:max-h-[800px] dark:bg-darkCardBgColor dark:border-darkBorder bg-gray-50 border-gray-200 rounded-lg overflow-hidden">

        <div class="w-full lg:w-80 lg:border-r dark:border-darkBorder border-gray-200 flex flex-col">
          <div class="px-4 py-[10px] border-b border-gray-200 dark:border-darkBorder">
            <div
                class="bg-white dark:border-darkBorder dark:bg-darkBg border border-gray-200 p-[3px] w-max overflow-hidden rounded-lg">
              <button
                  @click="addSection = true"
                  :class="`${addSection ? 'bg-brandColor text-white' : 'bg-transparent dark:text-darkSubtext'} py-1.5 text-[0.9rem] capitalize font-medium focus:ring-0 focus:outline-none outline-none rounded-lg cursor-pointer px-3`"
              >
                All Sections
              </button>
              <button
                  @click="addSection = false"
                  :class="`${!addSection ? 'bg-brandColor text-white' : 'bg-transparent dark:text-darkSubtext'} py-1.5 text-[0.9rem] capitalize font-medium focus:ring-0 focus:outline-none outline-none rounded-lg cursor-pointer px-3`"
              >
                Added Sections
              </button>
            </div>
          </div>

          <ComponentLibrary
              v-if="addSection"
              @add-component="handleAddComponent"
          />

          <ComponentManager
              v-else
              :components="sections"
              @remove-component="handleRemoveComponent"
              @reorder-components="handleReorderComponents"
          />
        </div>

        <MarkdownEditor
            ref="editorRef"
            :content="content"
            @update:content="handleEditorChange"
            @cursor-position="handleCursorPositionChange"
        />

        <MarkdownPreview
            :content="content"
        />
      </div>

      <!-- Status bar -->
      <div class="mt-4 px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-darkBorder rounded-lg">
        <div
            class="flex items-center flex-wrap gap-y-5 lg:gap-y-2 justify-between text-sm text-gray-600 dark:text-gray-400">
          <div class="flex items-center gap-4">
            <span>{{ sections.length }} sections</span>
            <span>{{ content.length }} characters</span>
            <span v-if="currentCursorPosition > 0">Cursor: {{ currentCursorPosition }}</span>
          </div>
          <div class="text-xs">
            💡 Tip: Elements are inserted at your cursor position
          </div>
        </div>
      </div>
    </div>
  </RootLayout>
</template>
