<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  GripVertical,
  Trash2
} from 'lucide-vue-next'

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

// Drag and drop functionality
const onDragStart = (event: DragEvent, index: number) => {
  draggedIndex.value = index
  isDragging.value = true
  event.dataTransfer!.effectAllowed = 'move'

  // Add drag image styling
  const dragElement = event.target as HTMLElement
  dragElement.classList.add('dragging')

  setTimeout(() => {
    dragElement.classList.add('drag-opacity')
  }, 0)
}

const onDragEnd = (event: DragEvent) => {
  isDragging.value = false
  draggedIndex.value = -1
  dragOverIndex.value = -1

  const dragElement = event.target as HTMLElement
  dragElement.classList.remove('dragging', 'drag-opacity')
}

const onDragOver = (event: DragEvent, index: number) => {
  event.preventDefault()
  event.dataTransfer!.dropEffect = 'move'

  if (draggedIndex.value !== index) {
    dragOverIndex.value = index
  }
}

const onDragLeave = () => {
  dragOverIndex.value = -1
}

const onDrop = (event: DragEvent, dropIndex: number) => {
  event.preventDefault()

  if (draggedIndex.value !== -1 && draggedIndex.value !== dropIndex) {
    const newComponents = [...props.components]
    const draggedItem = newComponents[draggedIndex.value]

    // Remove dragged item
    newComponents.splice(draggedIndex.value, 1)

    // Insert at new position (adjust index if needed)
    const insertIndex = draggedIndex.value < dropIndex ? dropIndex - 1 : dropIndex
    newComponents.splice(insertIndex, 0, draggedItem)

    emit('reorderComponents', newComponents)
  }

  dragOverIndex.value = -1
}

const removeComponent = (index: number) => {
  emit('removeComponent', index)
}

// Dynamic classes for drag states
const getItemClasses = (index: number) => {
  const baseClasses = "p-3 bg-white border-gray-100 dark:bg-gray-900 dark:border-darkBorder hover:bg-brandColor/10 border hover:border-brandColor rounded-lg flex items-center gap-3 cursor-move transition-all duration-200"

  let additionalClasses = ""

  if (draggedIndex.value === index) {
    additionalClasses += " scale-105 shadow-lg border-brandColor bg-brandColor/5"
  }

  if (dragOverIndex.value === index && draggedIndex.value !== index) {
    additionalClasses += " border-brandColor bg-brandColor/10 transform translate-y-1"
  }

  return baseClasses + additionalClasses
}

// Show drop indicator
const showDropIndicator = (index: number) => {
  return dragOverIndex.value === index && draggedIndex.value !== index && isDragging.value
}
</script>

<template>
  <div class="p-4 min-h-[400px] lg:min-h-[600px] max-h-[400px] lg:max-h-[800px] overflow-y-auto">
    <div class="space-y-2">
      <!-- Drop indicator at the top -->
      <div
          v-if="isDragging && dragOverIndex === 0"
          class="h-1 bg-brandColor rounded-full mx-4 transition-all duration-200 animate-pulse"
      ></div>

      <div
          v-for="(component, index) in components"
          :key="component.id"
          class="relative"
      >
        <!-- Drop indicator above current item -->
        <div
            v-if="showDropIndicator(index) && index > 0"
            class="h-1 bg-brandColor rounded-full mx-4 mb-2 transition-all duration-200 animate-pulse"
        ></div>

        <div
            :draggable="true"
            @dragstart="onDragStart($event, index)"
            @dragend="onDragEnd"
            @dragover="onDragOver($event, index)"
            @dragleave="onDragLeave"
            @drop="onDrop($event, index)"
            :class="getItemClasses(index)"
        >
          <GripVertical
              :size="16"
              class="text-gray-400 transition-colors duration-200"
              :class="{ 'text-brandColor': draggedIndex === index }"
          />

          <div class='flex items-center justify-center gap-2 flex-grow'>
            <component
                :is="component.icon"
                :size="16"
                class="text-brandColor"
            />
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ component.name }}
            </span>
          </div>

          <button
              @click.stop="removeComponent(index)"
              class="text-red-500 cursor-pointer hover:text-red-700 p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
          >
            <Trash2 :size="16"/>
          </button>
        </div>

        <!-- Drop indicator below current item -->
        <div
            v-if="showDropIndicator(index) && index < components.length - 1"
            class="h-1 bg-brandColor rounded-full mx-4 mt-2 transition-all duration-200 animate-pulse"
        ></div>
      </div>

      <!-- Drop indicator at the bottom -->
      <div
          v-if="isDragging && dragOverIndex === components.length - 1"
          class="h-1 bg-brandColor rounded-full mx-4 transition-all duration-200 animate-pulse"
      ></div>

      <div
          v-if="components.length === 0"
          class="text-center py-8 text-gray-500 dark:text-gray-400"
      >
        No components added yet
      </div>
    </div>
  </div>
</template>

<style scoped>
.dragging {
  cursor: grabbing !important;
}

.drag-opacity {
  opacity: 0.5;
}

/* Smooth transitions for drag operations */
.transition-drag {
  transition: transform 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease;
}

/* Enhanced hover effects */
.component-item:hover .grip-handle {
  color: #10b981;
}

/* Animation for drop indicators */
@keyframes pulse-indicator {
  0%, 100% {
    opacity: 0.7;
    transform: scaleY(1);
  }
  50% {
    opacity: 1;
    transform: scaleY(1.2);
  }
}

.animate-pulse {
  animation: pulse-indicator 1s ease-in-out infinite;
}
</style>