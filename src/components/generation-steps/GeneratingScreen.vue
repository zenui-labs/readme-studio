<script setup lang="ts">
import {CheckCircle, RefreshCw} from 'lucide-vue-next'
import {useStore} from "@stores/useStore";
import {computed, onMounted, ref, watch} from "vue";

const currentStep = ref(0);
const store = useStore()

const profileSteps = [
  'Analyzing profile structure...',
  'Loading GitHub data...',
  'Creating README content...',
  'Finalizing output...'
]

const repoSteps = [
  'Analyzing repository structure...',
  'Processing code files...',
  'Generating documentation...',
  'Creating README content...',
  'Finalizing output...'
]

const steps = computed(() => {
  return store.selectedType === 'profile' ? profileSteps : repoSteps
})

onMounted(() => {
  const interval = setInterval(() => {
    if (currentStep.value < steps.value.length) {
      currentStep.value++;
    } else {
      clearInterval(interval);
    }
  }, 2000);
});

watch(() => currentStep.value, (newValue) => {
  if (store.selectedType === 'profile') {
    if (newValue === 4) {
      store.currentStep = 4
      currentStep.value = 0
    }
  } else {
    if (newValue === 5) {
      store.currentStep = 4
      currentStep.value = 0
    }
  }
}, {
  immediate: true,
})

</script>

<template>
  <div class="space-y-4 inline-block mx-auto">
    <div v-for="(step, index) in steps" :key="step" class="flex items-center gap-4">
      <div :class="['flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500',
            index <= currentStep ? 'bg-brandColor text-white' : 'bg-gray-200 text-gray-400 dark:text-gray-700 dark:bg-gray-400']">
        <CheckCircle v-if="index < currentStep" class="w-5 h-5"/>
        <RefreshCw v-else-if="index === currentStep" class="w-5 h-5 animate-spin"/>
        <div v-else class="w-2 h-2 bg-current rounded-full"/>
      </div>
      <span
          :class="['text-lg transition-all duration-500', index <= currentStep ? 'text-gray-800 dark:text-darkText font-medium' : 'text-gray-400 dark:text-gray-500']">{{
          step
        }}</span>
    </div>
  </div>
</template>