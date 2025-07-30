<script setup lang="ts">
import {ref, computed, watch, onMounted, onBeforeUnmount} from 'vue'
import { useStore } from "@stores/useStore"
import { useRouter } from "vue-router"
import MarkdownIt from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItContainer from 'markdown-it-container'
import {
  Copy,
  Download,
  Loader2,
  Eye,
  Expand,
  Trash2,
  GripVertical,
  Code,
  Image,
  Link,
  ChevronDown,
  List,
  Hash,
  Quote,
  Table,
  Star,
  Shield,
  FileText,
  Settings
} from 'lucide-vue-next'
import 'github-markdown-css'
import RootLayout from "@/layouts/RootLayout.vue";

const store = useStore()
const router = useRouter()

const isCopying = ref(false)
const isDownloading = ref(false)
const isSaving = ref(false)
const editorContent = ref('')
const draggedIndex = ref(-1)
const addSection = ref(true)
const isDropdownOpen = ref(false)

// Component library with predefined README components
const componentLibrary = ref([
  {
    id: 'title',
    name: 'Project Title',
    icon: Hash,
    template: '# Project Title\n\nBrief description of your project.\n\n'
  },
  {
    id: 'badges',
    name: 'Badges',
    icon: Shield,
    template: '[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)\n[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)]()\n[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()\n\n'
  },
  {
    id: 'description',
    name: 'Description',
    icon: FileText,
    template: '## Description\n\nA detailed description of what this project does and who it\'s for.\n\n'
  },
  {
    id: 'installation',
    name: 'Installation',
    icon: Download,
    template: '## Installation\n\n```bash\nnpm install your-package\n```\n\n'
  },
  {
    id: 'usage',
    name: 'Usage',
    icon: Code,
    template: '## Usage\n\n```javascript\nconst example = require(\'your-package\');\nexample.doSomething();\n```\n\n'
  },
  {
    id: 'features',
    name: 'Features',
    icon: Star,
    template: '## Features\n\n- ✨ Feature 1\n- 🚀 Feature 2\n- 🎯 Feature 3\n- 💎 Feature 4\n\n'
  },
  {
    id: 'image',
    name: 'Screenshot',
    icon: Image,
    template: '## Screenshot\n\n![Screenshot](https://via.placeholder.com/800x400?text=Your+Screenshot)\n\n'
  },
  {
    id: 'table',
    name: 'Table',
    icon: Table,
    template: '## Configuration\n\n| Option | Type | Default | Description |\n|--------|------|---------|-------------|\n| option1 | string | "default" | Description of option1 |\n| option2 | boolean | true | Description of option2 |\n\n'
  },
  {
    id: 'links',
    name: 'Links',
    icon: Link,
    template: '## Links\n\n- [Documentation](https://example.com/docs)\n- [Live Demo](https://example.com/demo)\n- [GitHub Repository](https://github.com/username/repo)\n\n'
  },
  {
    id: 'contributing',
    name: 'Contributing',
    icon: Settings,
    template: '## Contributing\n\nContributions are welcome! Please feel free to submit a Pull Request.\n\n1. Fork the project\n2. Create your feature branch (`git checkout -b feature/AmazingFeature`)\n3. Commit your changes (`git commit -m \'Add some AmazingFeature\'`)\n4. Push to the branch (`git push origin feature/AmazingFeature`)\n5. Open a Pull Request\n\n'
  },
  {
    id: 'license',
    name: 'License',
    icon: FileText,
    template: '## License\n\nThis project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.\n\n'
  }
])

// Added components list that user can reorder
const addedComponents = ref([])

// Markdown renderer setup
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

// Computed property for rendered markdown
const enhancedMarkdown = computed(() => {
  const content = store.generatedReadme ? store.generatedReadme :  editorContent.value
  if (!content) return ''
  return md.render(content)
})

// Generate markdown from added components
const generateMarkdownFromComponents = () => {
  return addedComponents.value.map(comp => comp.template).join('')
}

// Update editor content when components change
watch(addedComponents, () => {
    editorContent.value = generateMarkdownFromComponents()
}, { deep: true })

// Parse existing content into components (simplified)
const parseContentIntoComponents = () => {
  // This is a simplified version - you might want to implement more sophisticated parsing
  addedComponents.value = []
}

// Add component to the editor
const addComponent = (component) => {
  const newComponent = {
    id: Date.now().toString(),
    ...component
  }
  addedComponents.value.push(newComponent)
}

// Remove component from editor
const removeComponent = (index) => {
  addedComponents.value.splice(index, 1)
}

// Drag and drop functionality
const onDragStart = (event, index) => {
  draggedIndex.value = index
  event.dataTransfer.effectAllowed = 'move'
}

const onDragOver = (event) => {
  event.preventDefault()
  event.dataTransfer.dropEffect = 'move'
}

const onDrop = (event, dropIndex) => {
  event.preventDefault()
  if (draggedIndex.value !== -1 && draggedIndex.value !== dropIndex) {
    const draggedItem = addedComponents.value[draggedIndex.value]
    addedComponents.value.splice(draggedIndex.value, 1)
    addedComponents.value.splice(dropIndex, 0, draggedItem)
  }
  draggedIndex.value = -1
}

// Save changes
const saveChanges = () => {
  isSaving.value = true
  store.generatedReadme = editorContent.value
  setTimeout(() => {
    isSaving.value = false
  }, 1000)
}

// Copy functionality
const copyReadme = () => {
  const content = store.generatedReadme ? store.generatedReadme : editorContent.value
  navigator.clipboard.writeText(content).then(() => {
    isCopying.value = true
    setTimeout(() => {
      isCopying.value = false
    }, 1000)
  })
}

// Download functionality
const downloadReadme = () => {
  isDownloading.value = true
  const content = store.generatedReadme ? store.generatedReadme : editorContent.value
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
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

let handleClickOutside: (event: MouseEvent) => void;

onMounted(() => {
  handleClickOutside = (event: MouseEvent) => {
    if (
        // @ts-ignore
        !event.target.closest('.editor_dropdown_btn') &&
        // @ts-ignore
        !event.target.closest('.editor_dropdown')
    ) {
      isDropdownOpen.value = false;
    }
  };
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

</script>

<template>
  <RootLayout :is-editor-page="true">
    <div class="w-full min-h-screen mt-[130px] max-w-[2000px] mx-auto lg:mt-[170px] mb-[80px] px-12">
            <!-- Header Controls -->
              <div class="flex flex-col lg:flex-row lg:items-center justify-end mb-4 gap-3">
                <button
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
                    <component :is="isDownloading ? Loader2 : Download" :size="19" :class="{ 'animate-spin': isDownloading }"/>
                    {{ isDownloading ? 'Downloading...' : 'Download' }}
                  </button>

                  <span @click="isDropdownOpen = !isDropdownOpen" class='flex editor_dropdown_btn items-center justify-center bg-[#007f6c] w-[45px] rounded-r-lg cursor-pointer text-white'>
                    <ChevronDown :class="isDropdownOpen ? 'rotate-[180deg]' : 'rotate-0'" class="transition-all duration-300"/>
                  </span>

                  <div v-if="isDropdownOpen" class="bg-white dark:bg-gray-800 absolute top-[110%] p-1 shadow-[0px_0px_5px_0px_rgb(0,0,0,0.1)] editor_dropdown rounded-lg w-full right-0">
                    <button
                        @click="copyReadme"
                        class="py-2.5 cursor-pointer text-[1rem] dark:text-darkText dark:hover:bg-darkCardBgColor font-medium px-6 hover:bg-gray-100 w-full rounded-lg text-gray-800 transition-colors duration-300 flex items-center gap-2.5"
                    >
                      <component :is="Copy" :size="17"/>
                      {{ isCopying ? 'Copied' : 'Copy' }}
                    </button>
                  </div>
                </div>
            </div>

            <!-- Main Content Area -->
            <div class="flex h-full flex-col lg:flex-row border lg:max-h-[800px] dark:bg-darkCardBgColor dark:border-darkBorder bg-gray-50 border-gray-200 rounded-lg">
                <div class="w-80 lg:border-r dark:border-darkBorder border-gray-200 flex flex-col">
                  <!-- Component Library -->
                    <div class="px-4 py-[10px] border-b border-gray-200 dark:border-darkBorder">
                      <div class="bg-white dark:border-darkBorder dark:bg-darkBg border border-gray-200 p-[3px] w-max overflow-hidden rounded-lg">
                        <button @click="addSection = true" :class="`${addSection ? 'bg-brandColor text-white' : 'bg-transparent dark:text-darkSubtext'} py-1.5 text-[0.9rem] font-medium rounded-lg cursor-pointer px-3`">All Sections</button>
                        <button @click="addSection = false" :class="`${!addSection ? 'bg-brandColor text-white' : 'bg-transparent dark:text-darkSubtext'} py-1.5 text-[0.9rem] capitalize font-medium rounded-lg cursor-pointer px-3`">Added sections</button>
                      </div>
                    </div>
                    <div :class="`p-4 min-h-[400px] lg:min-h-[600px] max-h-[400px] lg:max-h-[800px] overflow-y-auto gap-3 ${addSection && 'grid grid-cols-2'}`">
                      <button
                          v-if="addSection"
                          v-for="component in componentLibrary"
                          :key="component.id"
                          @click="addComponent(component)"
                          class="w-full p-3 text-left bg-white dark:bg-gray-900 border-gray-100 dark:border-darkBorder hover:bg-brandColor/10 border hover:border-brandColor relative group rounded-lg cursor-pointer transition-colors duration-200 flex flex-col items-center gap-3"
                      >
                        <component :is="component.icon" :size="18" class="text-brandColor"/>
                        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ component.name }}</span>
                      </button>

                      <div v-else class="space-y-2">
                        <div
                            v-for="(component, index) in addedComponents"
                            :key="component.id"
                            :draggable="true"
                            @dragstart="onDragStart($event, index)"
                            @dragover="onDragOver"
                            @drop="onDrop($event, index)"
                            class="p-3 bg-white border-gray-100 dark:bg-gray-900 dark:border-darkBorder hover:bg-brandColor/10 border hover:border-brandColor rounded-lg flex items-center gap-3 cursor-move transition-colors duration-200"
                        >
                          <GripVertical :size="16" class="text-gray-400"/>
                          <div class='flex items-center justify-center gap-2 flex-grow'>
                            <component :is="component.icon" :size="16" class="text-brandColor"/>
                            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ component.name }}</span>
                          </div>
                          <button
                              @click="removeComponent(index)"
                              class="text-red-500 cursor-pointer hover:text-red-700 transition-colors duration-200"
                          >
                            <Trash2 :size="16"/>
                          </button>
                        </div>
                        <div
                            v-if="addedComponents.length === 0"
                            class="text-center py-8 text-gray-500 dark:text-gray-400"
                        >
                          No components added yet
                        </div>
                      </div>
                    </div>
                </div>

                <!-- Center - Code Editor -->
                <div class="flex-1 lg:border-r dark:border-darkBorder border-gray-200 flex flex-col">
                  <div class="p-4 py-4.5 border-b border-gray-200 dark:border-darkBorder">
                    <h3 class="text-base font-semibold text-gray-800 dark:text-darkSubtext flex items-center gap-2">
                       Editor
                    </h3>
                  </div>
                  <div class="flex-1 p-4">
                  <textarea
                      v-model="editorContent"
                      class="w-full lg:h-full p-4 h-[500px] bg-white dark:bg-slate-900 border border-gray-200 dark:border-darkBorder rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-brandColor font-mono text-sm text-gray-800 dark:text-gray-200"
                      placeholder="Write your markdown here..."
                  ></textarea>
                  </div>
                </div>

                <!-- Right Sidebar - Live Preview -->
                <div class="flex-1 flex flex-col">
                  <div class="p-4 py-4.5 border-b border-gray-200 dark:border-darkBorder">
                    <h3 class="text-base font-semibold text-gray-800 dark:text-darkSubtext flex items-center gap-2">
                      Preview
                    </h3>
                  </div>
                  <div class="flex-1 overflow-y-auto p-4">
                    <div class="markdown-container h-[500px] bg-white dark:bg-[#0f172a] overflow-y-auto w-full lg:h-full rounded-lg p-4 dark:prose-invert">
                      <div
                          class="markdown-body"
                          v-html="enhancedMarkdown"
                      ></div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
  </RootLayout>
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

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

.dark ::-webkit-scrollbar-thumb {
  background: #475569;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #64748b;
}
</style>

<!-- Enhanced global styles for markdown content -->
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

/* Enhanced heading styles */
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

.markdown-container .markdown-body h1 {
  font-size: 2em;
  border-bottom: 1px solid #eaecef;
  padding-bottom: 0.3em;
}

.markdown-container .markdown-body h2 {
  font-size: 1.5em;
  border-bottom: 1px solid #eaecef;
  padding-bottom: 0.3em;
}

/* Paragraph and text styles */
.markdown-container .markdown-body p {
  text-align: left !important;
  margin-bottom: 16px;
}

/* List styles */
.markdown-container .markdown-body ul,
.markdown-container .markdown-body ol {
  text-align: left !important;
  padding-left: 2em;
  margin-bottom: 16px;
}

.markdown-container .markdown-body li {
  text-align: left !important;
  margin-bottom: 0.25em;
}

/* Blockquote styles */
.markdown-container .markdown-body blockquote {
  text-align: left !important;
  margin: 0 0 16px 0;
  padding: 0 1em;
  color: #6a737d;
  border-left: 0.25em solid #dfe2e5;
}

/* Code and pre styles */
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
  font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', monospace;
}

.markdown-container .markdown-body pre code {
  background-color: transparent;
  padding: 0;
}

/* Table styles */
.markdown-container .markdown-body table {
  text-align: left !important;
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 16px;
  display: block;
  overflow: auto;
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

/* Image styles */
.markdown-container .markdown-body img {
  max-width: 100%;
  height: auto;
  margin: 16px 0;
  border-radius: 6px;
}

/* Link styles */
.markdown-container .markdown-body a {
  color: #0366d6;
  text-decoration: none;
}

.markdown-container .markdown-body a:hover {
  text-decoration: underline;
}

/* Horizontal rule */
.markdown-container .markdown-body hr {
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: #e1e4e8;
  border: 0;
}

/* Badge and shield styles (common in GitHub READMEs) */
.markdown-container .markdown-body img[src*="shields.io"],
.markdown-container .markdown-body img[src*="badge"] {
  display: inline-block;
  margin: 2px;
  vertical-align: middle;
}

/* Center align divs - This is crucial for GitHub README formatting */
.markdown-container .markdown-body div[align="center"] {
  text-align: center !important;
}

.markdown-container .markdown-body div[align="center"] * {
  text-align: center !important;
}

.markdown-container .markdown-body div[align="center"] p,
.markdown-container .markdown-body div[align="center"] div,
.markdown-container .markdown-body div[align="center"] img {
  text-align: center !important;
  margin-left: auto;
  margin-right: auto;
}

/* Support for HTML attributes from markdown-it-attrs */
.markdown-container .markdown-body [align="center"] {
  text-align: center !important;
}

.markdown-container .markdown-body [align="left"] {
  text-align: left !important;
}

.markdown-container .markdown-body [align="right"] {
  text-align: right !important;
}

/* Container support for markdown-it-container */
.markdown-container .markdown-body .center {
  text-align: center !important;
}

/* Dark mode styles */
.dark .markdown-container .markdown-body {
  background-color: #0f172a;
  color: #f1f5f9;
  border-radius: 12px !important;
  padding: 20px !important;
}

.dark .markdown-container .markdown-body h1,
.dark .markdown-container .markdown-body h2 {
  border-bottom-color: #30363d;
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

.dark .markdown-container .markdown-body tr table th {
  background-color: #1e293b;
  color: #e2e8f0;
  border-color: #30363d;
}

.dark .markdown-body table tbody tr {
  background-color: #141b27;
  color: #e2e8f0;
  border-color: #30363d;
}

.dark .markdown-container .markdown-body table td {
  border-color: #30363d;
}

.dark .markdown-container .markdown-body a {
  color: #58a6ff;
}

.dark .markdown-container .markdown-body hr {
  background-color: #30363d;
}

/* Fix for HTML content rendering */
.markdown-container .markdown-body div,
.markdown-container .markdown-body span,
.markdown-container .markdown-body section,
.markdown-container .markdown-body article {
  display: block;
}

.markdown-container .markdown-body br {
  display: block;
  margin: 8px 0;
  content: " ";
}

/* Enhanced support for GitHub README common patterns */
.markdown-container .markdown-body p img:only-child {
  display: block;
  margin: 0 auto;
}
</style>