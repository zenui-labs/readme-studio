<script setup lang="ts">
import {computed, ref} from 'vue'
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
const dropPosition = ref<'before' | 'after'>('before')

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
  dragImage.style.transform = 'rotate(2deg)'
  dragImage.style.opacity = '0.9'
  dragImage.style.backgroundColor = 'rgba(59, 130, 246, 0.1)'
  dragImage.style.border = '2px solid rgb(59, 130, 246)'
  dragImage.style.borderRadius = '8px'
  dragImage.style.boxShadow = '0 8px 25px -5px rgba(0, 0, 0, 0.3)'

  dragImage.style.position = 'absolute'
  dragImage.style.top = '-2000px'
  document.body.appendChild(dragImage)

  event.dataTransfer!.setDragImage(dragImage, rect.width / 2, rect.height / 2)

  setTimeout(() => {
    if (document.body.contains(dragImage)) {
      document.body.removeChild(dragImage)
    }
  }, 1)
}

const onDragEnd = (event: DragEvent) => {
  isDragging.value = false
  draggedIndex.value = -1
  dragOverIndex.value = -1
  dropPosition.value = 'before'
}

const onDragOver = (event: DragEvent, index: number) => {
  event.preventDefault()
  event.dataTransfer!.dropEffect = 'move'

  if (draggedIndex.value === index || !isDragging.value) return

  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  const y = event.clientY
  const middle = rect.top + rect.height / 2

  dragOverIndex.value = index
  dropPosition.value = y < middle ? 'before' : 'after'
}

const onDragEnter = (event: DragEvent, index: number) => {
  event.preventDefault()
  if (draggedIndex.value !== index && isDragging.value) {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
    const y = event.clientY
    const middle = rect.top + rect.height / 2

    dragOverIndex.value = index
    dropPosition.value = y < middle ? 'before' : 'after'
  }
}

const onDragLeave = (event: DragEvent) => {
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  const x = event.clientX
  const y = event.clientY

  if (x < rect.left - 10 || x > rect.right + 10 || y < rect.top - 10 || y > rect.bottom + 10) {
    dragOverIndex.value = -1
    dropPosition.value = 'before'
  }
}

const onDrop = (event: DragEvent, dropIndex: number) => {
  event.preventDefault()

  if (draggedIndex.value === -1 || draggedIndex.value === dropIndex) {
    dragOverIndex.value = -1
    dropPosition.value = 'before'
    return
  }

  const newComponents = [...props.components]
  const draggedItem = newComponents[draggedIndex.value]

  newComponents.splice(draggedIndex.value, 1)

  let insertIndex = dropIndex

  if (draggedIndex.value < dropIndex) {
    insertIndex = dropIndex - 1
  }

  if (dropPosition.value === 'after') {
    insertIndex = insertIndex + 1
  }

  insertIndex = Math.max(0, Math.min(insertIndex, newComponents.length))

  newComponents.splice(insertIndex, 0, draggedItem)

  emit('reorderComponents', newComponents)

  dragOverIndex.value = -1
  dropPosition.value = 'before'
}

const removeComponent = (index: number) => {
  emit('removeComponent', index)
}

const getItemClasses = (index: number) => {
  const baseClasses = "relative group p-3 bg-white border border-gray-100 dark:bg-gray-900 dark:border-darkBorder hover:bg-brandColor/5 hover:border-brandColor/30 rounded-lg flex items-center gap-3 cursor-move transition-all duration-150 select-none"

  let stateClasses = ""

  if (draggedIndex.value === index) {
    stateClasses += " scale-[1.02] shadow-lg border-brandColor bg-brandColor/10 z-20 opacity-80"
  }

  if (dragOverIndex.value === index && draggedIndex.value !== index && isDragging.value) {
    if (dropPosition.value === 'before') {
      stateClasses += " border-t-4 border-t-brandColor"
    } else {
      stateClasses += " border-b-4 border-b-brandColor"
    }
  }

  return baseClasses + stateClasses
}

const showDropIndicator = computed(() => (index: number, position: 'before' | 'after') => {
  return isDragging.value &&
      dragOverIndex.value === index &&
      draggedIndex.value !== index &&
      dropPosition.value === position
})
</script>

<template>
  <div class="p-4 min-h-[400px] lg:min-h-[600px] max-h-[400px] lg:max-h-[800px] overflow-y-auto">
    <div class="space-y-2">
      <div
          v-for="(component, index) in components"
          :key="component.id"
          class="relative"
      >
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
          <div
              class="flex-shrink-0 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150">
            <GripVertical
                :size="16"
                class="text-gray-400 group-hover:text-brandColor transition-colors duration-150"
                :class="{
                  'text-brandColor animate-pulse': draggedIndex === index
                }"
            />
          </div>

          <div class='flex items-center gap-2 flex-grow min-w-0'>
            <div
                class="flex-shrink-0 p-1.5 rounded-full bg-brandColor/10 group-hover:bg-brandColor/20 transition-colors duration-150">
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
              class="flex-shrink-0 p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-all duration-150 opacity-0 group-hover:opacity-100 focus:opacity-100"
              tabindex="-1"
          >
            <Trash2 :size="16"/>
          </button>
        </div>
      </div>

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

@keyframes pulse-fast {
  0%, 100% {
    opacity: 0.7;
    transform: scaleY(1);
  }
  50% {
    opacity: 1;
    transform: scaleY(1.2);
  }
}

.animate-pulse-fast {
  animation: pulse-fast 1s ease-in-out infinite;
}

.cursor-move:active {
  cursor: grabbing !important;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.group:hover .opacity-0 {
  opacity: 1;
}

button:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

.z-20 {
  z-index: 20;
}

.bg-gradient-to-r {
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}

@keyframes shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-pulse-fast,
  .bg-gradient-to-r {
    animation: none;
  }

  .transition-all {
    transition: none;
  }
}
</style>