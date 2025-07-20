<script setup lang="ts">
import {CheckCircle, RefreshCw} from 'lucide-vue-next'
import {useStore} from "@stores/useStore";
import {onMounted, ref, watch} from "vue";

const currentStep = ref(0);
const store = useStore()

const steps = [
  'Analyzing repository structure...',
  'Processing code files...',
  'Generating documentation...',
  'Creating README content...',
  'Finalizing output...'
]

onMounted(() => {
  const interval = setInterval(() => {
    if (currentStep.value < steps.length) {
      currentStep.value++;
    } else {
      clearInterval(interval);
    }
  }, 2000);
});

watch(() => currentStep.value, (newValue) => {
  if (newValue === 5) {
    store.currentStep = 4
    currentStep.value = 0
  }
}, {
  immediate: true,
})

</script>

<template>
  <div v-if="store.currentStep === 3" class="space-y-4 inline-block mx-auto">
    <div v-for="(step, index) in steps" :key="step" class="flex items-center gap-4">
      <div :class="['flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500',
            index <= currentStep ? 'bg-brandColor text-white' : 'bg-gray-200 text-gray-400']">
        <CheckCircle v-if="index < currentStep" class="w-5 h-5"/>
        <RefreshCw v-else-if="index === currentStep" class="w-5 h-5 animate-spin"/>
        <div v-else class="w-2 h-2 bg-current rounded-full"/>
      </div>
      <span
          :class="['text-lg transition-all duration-500', index <= currentStep ? 'text-gray-800 font-medium' : 'text-gray-400']">{{
          step
        }}</span>
    </div>
  </div>
</template>