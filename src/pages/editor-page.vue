<script setup lang="ts">
import {computed, onMounted, ref, watch} from 'vue'
import {useStore} from "@stores/useStore"
import MarkdownIt from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItContainer from 'markdown-it-container'
import 'github-markdown-css'
import RootLayout from "@/layouts/RootLayout.vue"
import ComponentLibrary from '@/components/editor-box/ComponentLibrary.vue'
import ComponentManager from '@/components/editor-box/ComponentManager.vue'
import MarkdownEditor from '@/components/editor-box/Editor.vue'
import EditorHeader from '@/components/editor-box/Header.vue'
import MarkdownPreview from '@/components/editor-box/Preview.vue'
import FullScreenPreviewModal from "@components/FullScreenPreviewModal.vue";
import {Code, Download, FileText, Hash, Image, Link, Settings, Shield, Star, Table} from 'lucide-vue-next'

const store = useStore()

const editorContent = ref('')
const addedComponents = ref([])
const addSection = ref(true)
const editorRef = ref()
const currentCursorPosition = ref(0)

const md = new MarkdownIt({
  html: true,
  xhtmlOut: true,
  breaks: true,
  langPrefix: 'language-',
  linkify: true,
  typographer: true,
})
    .use(markdownItAttrs)
    .use(markdownItContainer, 'center')

const enhancedMarkdown = computed(() => {
  const content = editorContent.value
  if (!content) return ''
  return md.render(content)
})

const parseReadmeIntoComponents = (readmeContent: string) => {
  const components = []
  const lines = readmeContent.split('\n')
  let currentSection = null
  let currentContent = ''

  const componentMap = {
    'title': {pattern: /^#\s+/, icon: Hash},
    'badges': {pattern: /^\[!\[.*\]\(.*\)\]\(.*\)/, icon: Shield},
    'description': {pattern: /^##\s+(Description|About)/i, icon: FileText},
    'installation': {pattern: /^##\s+(Installation|Install|Setup)/i, icon: Download},
    'usage': {pattern: /^##\s+(Usage|Example|How to use)/i, icon: Code},
    'features': {pattern: /^##\s+(Features|What's included)/i, icon: Star},
    'image': {pattern: /^!\[.*\]\(.*\)/, icon: Image},
    'table': {pattern: /^\|.*\|/, icon: Table},
    'links': {pattern: /^##\s+(Links|Resources)/i, icon: Link},
    'contributing': {pattern: /^##\s+(Contributing|Contribution)/i, icon: Settings},
    'license': {pattern: /^##\s+(License)/i, icon: FileText}
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    let foundSection = null
    for (const [type, config] of Object.entries(componentMap)) {
      if (config.pattern.test(line)) {
        foundSection = type
        break
      }
    }

    if (foundSection) {
      if (currentSection && currentContent.trim()) {
        components.push({
          id: Date.now().toString() + Math.random(),
          name: getComponentName(currentSection),
          icon: componentMap[currentSection]?.icon || 'FileText',
          template: currentContent.trim() + '\n\n'
        })
      }

      currentSection = foundSection
      currentContent = line + '\n'
    } else {
      currentContent += line + '\n'
    }
  }

  if (currentSection && currentContent.trim()) {
    components.push({
      id: Date.now().toString() + Math.random(),
      name: getComponentName(currentSection),
      icon: componentMap[currentSection]?.icon || 'FileText',
      template: currentContent.trim() + '\n\n'
    })
  }

  return components
}

const getComponentName = (type: string) => {
  const nameMap = {
    'title': 'Project Title',
    'badges': 'Badges',
    'description': 'Description',
    'installation': 'Installation',
    'usage': 'Usage',
    'features': 'Features',
    'image': 'Screenshot',
    'table': 'Table',
    'links': 'Links',
    'contributing': 'Contributing',
    'license': 'License'
  }
  return nameMap[type] || 'Custom Section'
}

const generateMarkdownFromComponents = () => {
  return addedComponents.value.map(comp => comp.template).join('')
}

let isManualEdit = false
watch(addedComponents, () => {
  if (!isManualEdit) {
    editorContent.value = generateMarkdownFromComponents()
  }
}, {deep: true})

onMounted(() => {
  window.scrollTo({top: 0, behavior: 'smooth'});

  if (store.generatedReadme) {
    const parsedComponents = parseReadmeIntoComponents(store.generatedReadme)
    addedComponents.value = parsedComponents
    editorContent.value = store.generatedReadme
  }
})

const handleAddComponent = (component) => {
  const newComponent = {
    id: Date.now().toString(),
    ...component
  }

  const cursorPos = currentCursorPosition.value
  const textBeforeCursor = editorContent.value.substring(0, cursorPos)

  let insertIndex = 0
  let currentPos = 0

  for (let i = 0; i < addedComponents.value.length; i++) {
    const componentTemplate = addedComponents.value[i].template
    const componentIndex = editorContent.value.indexOf(componentTemplate, currentPos)

    if (componentIndex !== -1 && componentIndex < cursorPos) {
      insertIndex = i + 1
      currentPos = componentIndex + componentTemplate.length
    } else {
      break
    }
  }

  addedComponents.value.splice(insertIndex, 0, newComponent)

  if (editorRef.value && editorRef.value.insertTextAtCursor) {
    editorRef.value.insertTextAtCursor(component.template)
    isManualEdit = true
  }
}

const handleRemoveComponent = (index) => {
  addedComponents.value.splice(index, 1)
}

const handleReorderComponents = (newOrder) => {
  addedComponents.value = newOrder
  editorContent.value = generateMarkdownFromComponents()
  isManualEdit = false
}

const handleEditorChange = (content) => {
  editorContent.value = content
  store.generatedReadme = content
  isManualEdit = true
}

const handleCursorPositionChange = (position) => {
  currentCursorPosition.value = position
}

watch(() => store.fullScreenModal, () => {
  document.getElementsByTagName('html')[0].style.overflow = store.fullScreenModal ? 'hidden' : 'auto'
}, {immediate: true})

</script>

<template>
  <RootLayout :is-editor-page="true">
    <div class="w-full min-h-screen pt-[130px] max-w-[2000px] mx-auto lg:pt-[170px] mb-[80px] px-5 lg:px-12">

      <EditorHeader
          :content="editorContent"
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
              :components="addedComponents"
              @remove-component="handleRemoveComponent"
              @reorder-components="handleReorderComponents"
          />
        </div>

        <MarkdownEditor
            ref="editorRef"
            :content="editorContent"
            @update:content="handleEditorChange"
            @cursor-position="handleCursorPositionChange"
        />

        <MarkdownPreview
            :markdown="enhancedMarkdown"
        />

        <FullScreenPreviewModal v-if="store.fullScreenModal"/>
      </div>

      <!-- Status bar -->
      <div class="mt-4 px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-darkBorder rounded-lg">
        <div
            class="flex items-center flex-wrap gap-y-5 lg:gap-y-2 justify-between text-sm text-gray-600 dark:text-gray-400">
          <div class="flex items-center gap-4">
            <span>{{ addedComponents.length }} components</span>
            <span>{{ editorContent.length }} characters</span>
            <span v-if="currentCursorPosition > 0">Cursor: {{ currentCursorPosition }}</span>
          </div>
          <div class="text-xs">
            💡 Tip: Components will be inserted at your cursor position
          </div>
        </div>
      </div>
    </div>
  </RootLayout>
</template>

<style scoped>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

.status-bar {
  background: linear-gradient(90deg, rgba(249, 250, 251, 0.8) 0%, rgba(243, 244, 246, 0.8) 100%);
}

.dark .status-bar {
  background: linear-gradient(90deg, rgba(17, 24, 39, 0.8) 0%, rgba(31, 41, 55, 0.8) 100%);
}
</style>