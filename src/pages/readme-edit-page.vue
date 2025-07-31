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

const store = useStore()

const editorContent = ref('')
const addedComponents = ref([])
const addSection = ref(true)

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
    'title': {pattern: /^#\s+/, icon: 'Hash'},
    'badges': {pattern: /^\[!\[.*\]\(.*\)\]\(.*\)/, icon: 'Shield'},
    'description': {pattern: /^##\s+(Description|About)/i, icon: 'FileText'},
    'installation': {pattern: /^##\s+(Installation|Install|Setup)/i, icon: 'Download'},
    'usage': {pattern: /^##\s+(Usage|Example|How to use)/i, icon: 'Code'},
    'features': {pattern: /^##\s+(Features|What's included)/i, icon: 'Star'},
    'image': {pattern: /^!\[.*\]\(.*\)/, icon: 'Image'},
    'table': {pattern: /^\|.*\|/, icon: 'Table'},
    'links': {pattern: /^##\s+(Links|Resources)/i, icon: 'Link'},
    'contributing': {pattern: /^##\s+(Contributing|Contribution)/i, icon: 'Settings'},
    'license': {pattern: /^##\s+(License)/i, icon: 'FileText'}
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

watch(addedComponents, () => {
  editorContent.value = generateMarkdownFromComponents()
}, {deep: true})

onMounted(() => {
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
  addedComponents.value.push(newComponent)
}

const handleRemoveComponent = (index) => {
  addedComponents.value.splice(index, 1)
}

const handleReorderComponents = (newOrder) => {
  addedComponents.value = newOrder
}

const handleEditorChange = (content) => {
  editorContent.value = content
  store.generatedReadme = content
}

const handleSaveChanges = () => {
  store.generatedReadme = editorContent.value
}
</script>

<template>
  <RootLayout :is-editor-page="true">
    <div class="w-full min-h-screen mt-[130px] max-w-[2000px] mx-auto lg:mt-[170px] mb-[80px] px-12">

      <EditorHeader
          :content="editorContent"
          @save="handleSaveChanges"
      />

      <div
          class="flex h-full flex-col lg:flex-row border lg:max-h-[800px] dark:bg-darkCardBgColor dark:border-darkBorder bg-gray-50 border-gray-200 rounded-lg">
        <div class="w-80 lg:border-r dark:border-darkBorder border-gray-200 flex flex-col">
          <div class="px-4 py-[10px] border-b border-gray-200 dark:border-darkBorder">
            <div
                class="bg-white dark:border-darkBorder dark:bg-darkBg border border-gray-200 p-[3px] w-max overflow-hidden rounded-lg">
              <button
                  @click="addSection = true"
                  :class="`${addSection ? 'bg-brandColor text-white' : 'bg-transparent dark:text-darkSubtext'} py-1.5 text-[0.9rem] font-medium rounded-lg cursor-pointer px-3`"
              >
                All Sections
              </button>
              <button
                  @click="addSection = false"
                  :class="`${!addSection ? 'bg-brandColor text-white' : 'bg-transparent dark:text-darkSubtext'} py-1.5 text-[0.9rem] capitalize font-medium rounded-lg cursor-pointer px-3`"
              >
                Added sections
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
            :content="editorContent"
            @update:content="handleEditorChange"
        />

        <MarkdownPreview
            :markdown="enhancedMarkdown"
        />
      </div>
    </div>
  </RootLayout>
</template>