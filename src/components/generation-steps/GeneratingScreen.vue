<script setup lang="ts">
import {CheckCircle, RefreshCw, Sparkles} from 'lucide-vue-next'
import {useStore} from "@stores/useStore";
import {ref} from "vue";

const generationStep = ref(0)

const steps = [
  'Analyzing repository structure...',
  'Processing code files...',
  'Generating documentation...',
  'Creating README content...',
  'Finalizing output...'
]

const store = useStore()

</script>

<template>
  <div v-if="store.currentStep === 3" class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 space-y-4">
    <div class="text-center">
      <div class="flex items-center justify-center mb-4">
        <div class="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse">
          <Sparkles class="w-10 h-10 text-white animate-spin"/>
        </div>
      </div>
      <h2 class="text-3xl font-bold text-gray-900 mb-2">Generating Your README</h2>
      <p class="text-gray-600">Please wait while we create your personalized README file</p>
    </div>
    <div v-for="(step, index) in steps" :key="step" class="flex items-center space-x-3">
      <div :class="['flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500',
            index <= generationStep ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white' : 'bg-gray-200 text-gray-400']">
        <CheckCircle v-if="index < generationStep" class="w-5 h-5"/>
        <RefreshCw v-else-if="index === generationStep" class="w-5 h-5 animate-spin"/>
        <div v-else class="w-2 h-2 bg-current rounded-full"/>
      </div>
      <span
          :class="['text-lg transition-all duration-500', index <= generationStep ? 'text-gray-900 font-medium' : 'text-gray-400']">{{
          step
        }}</span>
    </div>
    <div class="mt-8">
      <div class="bg-gray-100 rounded-full h-2 overflow-hidden">
        <div class="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ease-out"
             :style="{ width: `${((generationStep + 1) / steps.length) * 100}%` }"/>
      </div>
      <p class="text-center text-sm text-gray-500 mt-2">
        {{ Math.round(((generationStep + 1) / steps.length) * 100) }}% Complete
      </p>
    </div>
  </div>

</template>