<script setup lang="ts">
import {CheckCircle, ChevronRight, GitBranch, User} from 'lucide-vue-next'
import {useStore} from "@stores/useStore";

const store = useStore()

</script>

<template>
  <div v-if="store.currentStep === 1" class="grid md:grid-cols-2 gap-6">
    <div @click="store.handleTypeSelection('profile')"
         :class="['relative p-6 rounded-2xl backdrop-blur-3xl bg-white/50 border-2 cursor-pointer',
               store.selectedType === 'profile'
                 ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 shadow-xl'
                 : 'border-gray-200 hover:border-purple-300 hover:shadow-lg']">
      <div class="flex items-center justify-between mb-4">
        <div class="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
          <User class="w-6 h-6 text-white"/>
        </div>
        <CheckCircle v-if="store.selectedType === 'profile'" class="w-6 h-6 text-purple-500"/>
      </div>
      <h3 class="text-xl font-semibold text-gray-900 mb-2">Profile README</h3>
      <p class="text-gray-600 mb-4">Create a personalized README for your GitHub profile</p>
      <div class="flex items-center text-purple-600 font-medium">
        Get Started
        <ChevronRight class="w-4 h-4 ml-1"/>
      </div>
    </div>

    <div @click="store.handleTypeSelection('repository')"
         :class="['relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-105',
               store.selectedType === 'repository'
                 ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 shadow-xl'
                 : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-lg']">
      <div class="flex items-center justify-between mb-4">
        <div class="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl">
          <GitBranch class="w-6 h-6 text-white"/>
        </div>
        <CheckCircle v-if="store.selectedType === 'repository'" class="w-6 h-6 text-purple-500"/>
      </div>
      <h3 class="text-xl font-semibold text-gray-900 mb-2">Repository README</h3>
      <p class="text-gray-600 mb-4">Generate README for your GitHub repository</p>
      <div class="flex items-center text-purple-600 font-medium">
        Get Started
        <ChevronRight class="w-4 h-4 ml-1"/>
      </div>
    </div>
  </div>
</template>