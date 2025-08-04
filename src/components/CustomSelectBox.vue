<template>
  <div class="relative w-full text-left sm:w-auto">
    <button
        @click="toggleDropdown"
        class="flex justify-between items-center custom-select-btn w-full min-w-[180px] px-4 py-3 border-gray-200 cursor-pointer hover:outline-brandColor dark:border-darkBorder dark:text-darkText outline-transparent outline-1 transition-all duration-300 border rounded-lg bg-white dark:bg-[#1a1a1a] text-left"
    >
      <span>{{ selectedLabel }}</span>
      <ChevronDown/>
    </button>

    <transition
        name="dropdown"
        enter-active-class="transition ease-out duration-150"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
    >
      <ul
          v-if="isOpen"
          style="scrollbar-width: none"
          class="absolute z-10 mt-1 p-1.5 custom-select-dropdown w-full max-h-60 overflow-auto rounded-xl border border-gray-200 bg-white dark:bg-darkCardBgColor dark:text-darkText dark:border-darkBorder dark:shadow-2xl shadow-lg"
      >
        <li
            @click="selectOption('')"
            class="px-4 py-2 hover:bg-gray-100 rounded-lg dark:hover:bg-[#2b2b2b] cursor-pointer"
        >
          All Categories
        </li>
        <li
            v-for="option in options"
            :key="option"
            @click="selectOption(option)"
            class="px-4 py-2 hover:bg-gray-100 rounded-lg dark:hover:bg-[#2b2b2b] cursor-pointer"
        >
          {{ option }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue'
import {ChevronDown} from 'lucide-vue-next';

const props = defineProps({
  modelValue: String,
  options: Array
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const toggleDropdown = () => isOpen.value = !isOpen.value
const selectOption = (value) => {
  emit('update:modelValue', value)
  isOpen.value = false
}

const selectedLabel = computed(() => {
  return props.modelValue || 'All Categories'
})

onMounted(() => {
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.custom-select-btn') && !event.target.closest('.custom-select-dropdown')) {
      isOpen.value = false
    }
  })
})
</script>
