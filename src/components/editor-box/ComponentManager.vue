<script setup lang="ts">
import {ref} from 'vue'
import {GripVertical, Trash2} from 'lucide-vue-next'
import AiIcon from "@/svg-icons/ai-icon.vue";

const props = defineProps<{
  components: Array<any>
}>()

const emit = defineEmits<{
  removeComponent: [index: number]
  reorderComponents: [components: Array<any>]
}>()

const draggedIndex = ref(-1)
const dragOverIndex = ref(-1)
const isDragging = ref(false)

const onDragStart = (event: DragEvent, index: number) => {
  draggedIndex.value = index
  isDragging.value = true
  event.dataTransfer!.effectAllowed = 'move'
  event.dataTransfer!.setData('text/plain', index.toString())

  const dragElement = event.target as HTMLElement
  const rect = dragElement.getBoundingClientRect()

  const dragImage = dragElement.cloneNode(true) as HTMLElement
  dragImage.style.width = rect.width + 'px'
  dragImage.style.height = rect.height + 'px'
  dragImage.style.transform = 'rotate(5deg)'
  dragImage.style.opacity = '0.8'
  dragImage.style.backgroundColor = 'rgba(59, 130, 246, 0.1)'
  dragImage.style.border = '2px solid rgb(59, 130, 246)'

  dragImage.style.position = 'absolute'
  dragImage.style.top = '-1000px'
  document.body.appendChild(dragImage)

  event.dataTransfer!.setDragImage(dragImage, rect.width / 2, rect.height / 2)

  setTimeout(() => {
    document.body.removeChild(dragImage)
  }, 1)
}

const onDragEnd = (event: DragEvent) => {
  isDragging.value = false
  draggedIndex.value = -1
  dragOverIndex.value = -1
}

const onDragOver = (event: DragEvent, index: number) => {
  event.preventDefault()
  event.dataTransfer!.dropEffect = 'move'

  if (draggedIndex.value !== index && isDragging.value) {
    dragOverIndex.value = index
  }
}

const onDragEnter = (event: DragEvent, index: number) => {
  event.preventDefault()
  if (draggedIndex.value !== index && isDragging.value) {
    dragOverIndex.value = index
  }
}

const onDragLeave = (event: DragEvent) => {
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  const x = event.clientX
  const y = event.clientY

  if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
    dragOverIndex.value = -1
  }
}

const onDrop = (event: DragEvent, dropIndex: number) => {
  event.preventDefault()

  if (draggedIndex.value !== -1 && draggedIndex.value !== dropIndex) {
    const newComponents = [...props.components]
    const [draggedItem] = newComponents.splice(draggedIndex.value, 1)

    const insertIndex = draggedIndex.value < dropIndex ? dropIndex - 1 : dropIndex
    newComponents.splice(insertIndex, 0, draggedItem)

    emit('reorderComponents', newComponents)
  }

  dragOverIndex.value = -1
}

const removeComponent = (index: number) => {
  emit('removeComponent', index)
}

const getItemClasses = (index: number) => {
  const baseClasses = "relative group p-3 bg-white border border-gray-100 dark:bg-gray-900 dark:border-darkBorder hover:bg-brandColor/5 hover:border-brandColor/50 rounded-lg flex items-center gap-3 cursor-move transition-all duration-200 select-none"

  let stateClasses = ""

  if (draggedIndex.value === index) {
    stateClasses += " scale-105 shadow-lg border-brandColor bg-brandColor/10 z-10"
  }

  if (dragOverIndex.value === index && draggedIndex.value !== index && isDragging.value) {
    stateClasses += " border-brandColor bg-brandColor/15 transform translate-y-1 shadow-md"
  }

  return baseClasses + stateClasses
}

const showDropIndicator = (position: 'top' | 'bottom', index: number) => {
  if (!isDragging.value || draggedIndex.value === index) return false

  if (position === 'top') {
    return dragOverIndex.value === index && index > 0
  } else {
    return dragOverIndex.value === index && index === props.components.length - 1
  }
}

const showInsertionLine = (index: number) => {
  return isDragging.value &&
      dragOverIndex.value === index &&
      draggedIndex.value !== index &&
      draggedIndex.value !== -1
}
</script>

<template>
  <div class="p-4 min-h-[400px] lg:min-h-[600px] max-h-[400px] lg:max-h-[800px] overflow-y-auto">
    <div class="space-y-3">
      <div
          v-if="isDragging && dragOverIndex === 0 && draggedIndex !== 0"
          class="h-0.5 bg-gradient-to-r from-brandColor to-blue-400 rounded-full mx-2 shadow-sm animate-pulse"
      ></div>

      <div
          v-for="(component, index) in components"
          :key="component.id"
          class="relative"
      >
        <div
            v-if="showInsertionLine(index) && index > 0"
            class="h-0.5 bg-gradient-to-r from-brandColor to-blue-400 rounded-full mx-2 mb-3 shadow-sm animate-pulse"
        ></div>

        <div
            :draggable="true"
            @dragstart="onDragStart($event, index)"
            @dragend="onDragEnd"
            @dragover="onDragOver($event, index)"
            @dragenter="onDragEnter($event, index)"
            @dragleave="onDragLeave"
            @drop="onDrop($event, index)"
            :class="getItemClasses(index)"
        >
          <div class="flex-shrink-0 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <GripVertical
                :size="16"
                class="text-gray-400 group-hover:text-brandColor transition-colors duration-200"
                :class="{
                  'text-brandColor': draggedIndex === index,
                  'animate-pulse': draggedIndex === index
                }"
            />
          </div>

          <div class='flex items-center gap-2 flex-grow min-w-0'>
            <div
                class="flex-shrink-0 p-1.5 rounded-full bg-brandColor/10 group-hover:bg-brandColor/20 transition-colors">
              <component
                  v-if="component.icon"
                  :is="component.icon"
                  :size="16"
                  class="text-brandColor"
              />
              <AiIcon v-else size="0.8em" color="#008c78"/>
            </div>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
              {{ component.name }}
            </span>
          </div>

          <button
              @click.stop="removeComponent(index)"
              class="flex-shrink-0 p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100"
          >
            <Trash2 :size="16"/>
          </button>
        </div>

        <div
            v-if="showInsertionLine(index) && index < components.length - 1"
            class="h-0.5 bg-gradient-to-r from-brandColor to-blue-400 rounded-full mx-2 mt-3 shadow-sm animate-pulse"
        ></div>
      </div>

      <div
          v-if="isDragging && dragOverIndex === components.length - 1 && draggedIndex !== components.length - 1"
          class="h-0.5 bg-gradient-to-r from-brandColor to-blue-400 rounded-full mx-2 shadow-sm animate-pulse"
      ></div>

      <div
          v-if="components.length === 0"
          class="text-center py-12 text-gray-500 dark:text-gray-400"
      >
        <div class="mb-4">
          <component :is="'FileText'" :size="48" class="mx-auto text-gray-300 dark:text-gray-600"/>
        </div>
        <p class="text-lg font-medium mb-2">No components added yet</p>
        <p class="text-sm">Add components from the library to start building your README</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
div::-webkit-scrollbar {
  width: 6px;
}

div::-webkit-scrollbar-track {
  background: transparent;
}

div::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

div::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

@keyframes dragPulse {
  0%, 100% {
    opacity: 0.7;
    transform: scaleY(1);
  }
  50% {
    opacity: 1;
    transform: scaleY(1.1);
  }
}

.animate-pulse {
  animation: dragPulse 1.5s ease-in-out infinite;
}

.cursor-move:active {
  cursor: grabbing !important;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

.group:hover .opacity-0 {
  opacity: 1;
}

button:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

.z-10 {
  z-index: 10;
}

@keyframes shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

.bg-gradient-to-r {
  background-size: 200% 100%;
  animation: shimmer 2s ease-in-out infinite;
}
</style>