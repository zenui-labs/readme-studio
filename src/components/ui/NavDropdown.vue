<script setup lang="ts">
import {ChevronDown} from 'lucide-vue-next';
import {onBeforeUnmount, onMounted, ref} from "vue";

defineProps<{
  label: string
}>()

const isOpen = ref(false)
const root = ref<HTMLElement>()
let closeTimer: ReturnType<typeof setTimeout> | undefined

// Desktop mouse: open on hover. Touch and keyboard: toggle on click.
const onPointerEnter = (event: PointerEvent) => {
  if (event.pointerType !== 'mouse') return
  clearTimeout(closeTimer)
  isOpen.value = true
}

const onPointerLeave = (event: PointerEvent) => {
  if (event.pointerType !== 'mouse') return
  closeTimer = setTimeout(() => isOpen.value = false, 120)
}

const onTriggerClick = (event: MouseEvent) => {
  // A mouse click on an already hover-opened menu should keep it open.
  if ((event as PointerEvent).pointerType === 'mouse' && isOpen.value) return
  isOpen.value = !isOpen.value
}

const close = () => {
  isOpen.value = false
}

const onDocumentClick = (event: MouseEvent) => {
  if (!root.value?.contains(event.target as Node)) close()
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') close()
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  clearTimeout(closeTimer)
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div ref="root" class='relative' @pointerenter="onPointerEnter" @pointerleave="onPointerLeave">
    <button
        type="button"
        @click="onTriggerClick"
        :aria-expanded="isOpen"
        aria-haspopup="true"
        class='text-[1rem] font-medium text-gray-700 dark:text-darkText hover:text-brandColor flex items-center gap-2 cursor-pointer transition-all duration-200'>
      {{ label }}
      <ChevronDown :class="`${isOpen ? 'rotate-180' : ''} transition-all duration-200`"/>
    </button>

    <transition
        enter-active-class="transition ease-out duration-150"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
    >
      <!-- pt-2 bridges the gap so the pointer can travel from trigger to menu without closing it -->
      <div v-if="isOpen" class='absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50' @click="close">
        <div class='bg-white dark:text-darkText dark:bg-darkCardBgColor w-max p-1.5 rounded-lg shadow-lg'>
          <slot/>
        </div>
      </div>
    </transition>
  </div>
</template>
