<script setup lang="ts">
import {AlertCircle, CheckCircle, RefreshCw, RotateCcw} from 'lucide-vue-next'
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

const dataLoadingStepIndex = computed(() => {
  return store.selectedType === 'profile' ? 1 : 1;
})

onMounted(() => {
  const interval = setInterval(() => {
    if (
        store.hasError && currentStep.value === dataLoadingStepIndex.value ||
        store.limitErrorModalOpen
    ) {
      clearInterval(interval);
      return;
    }

    if (currentStep.value < steps.value.length) {
      currentStep.value++;
    } else {
      clearInterval(interval);
    }
  }, 5500);
});

watch(() => currentStep.value, (newValue) => {
  if (store.hasError || store.limitErrorModalOpen) {
    return;
  }

  if (store.selectedType === 'profile') {
    if (newValue === 4) {
      store.currentStep = 4;
      currentStep.value = 0;
    }
  } else {
    if (newValue === 5) {
      store.currentStep = 4;
      currentStep.value = 0;
    }
  }
}, {
  immediate: true,
});


watch(() => store.hasError, (hasError) => {
  if (!hasError) {
    currentStep.value = 0;
  }
})

const handleTryAgain = () => {
  store.currentStep = 2
}

</script>

<template>
  <div class="space-y-4 inline-block mx-auto">
    <div v-for="(step, index) in steps" :key="step" class="flex items-center gap-4">
      <div :class="['flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500',
            store.hasError && index === dataLoadingStepIndex ? 'bg-red-500 text-white' :
            index < currentStep ? 'bg-brandColor text-white' :
            index === currentStep && !store.hasError ? 'bg-brandColor text-white' :
            'bg-gray-200 text-gray-400 dark:text-gray-700 dark:bg-gray-400']">
        <CheckCircle v-if="index < currentStep && !store.hasError" class="w-5 h-5"/>
        <AlertCircle v-else-if="store.hasError && index === dataLoadingStepIndex" class="w-5 h-5"/>
        <RefreshCw v-else-if="index === currentStep && !store.hasError" class="w-5 h-5 animate-spin"/>
        <div v-else class="w-2 h-2 bg-current rounded-full"/>
      </div>
      <div class="flex flex-col">
        <div class='flex items-center gap-2'>
                  <span
                      :class="['text-lg transition-all flex duration-500',
                    store.hasError && index === dataLoadingStepIndex ? 'text-red-600 text-left dark:text-red-400 font-medium' :
                    index <= currentStep ? 'text-gray-800 dark:text-darkText font-medium' :
                    'text-gray-400 dark:text-gray-500']">
          {{ step }}
        </span>
          <button
              @click="handleTryAgain"
              v-if="store.hasError && index === dataLoadingStepIndex"
              class="py-1.5 cursor-pointer bg-red-100 border border-red-400 dark:border-red-900 hover:bg-red-200 dark:bg-red-800/30 dark:hover:bg-red-800/60 transition-all duration-300 px-3 dark:text-white text-red-600 rounded-lg text-[0.9rem] flex items-center gap-2 font-normal justify-center w-max"
          >
            <RotateCcw :size="18"/>
            Try Again
          </button>
        </div>
        <!-- Show error message only on the data loading step -->
        <span v-if="store.hasError && index === dataLoadingStepIndex"
              class="text-sm text-red-500 text-left dark:text-red-400 mt-1">
          {{ store.errorMessage }}
        </span>
      </div>
    </div>
  </div>
</template>