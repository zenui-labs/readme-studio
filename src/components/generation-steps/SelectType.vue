<script setup lang="ts">
import {CheckCircle, ChevronRight, GitBranch, User} from 'lucide-vue-next'
import {useStore} from "@stores/useStore";

const store = useStore()

const handleReadmeTypeSelection = (type: string) => {
  store.handleTypeSelection(type)
  store.currentStep = 2
}

</script>

<template>
  <div v-if="store.currentStep === 1" class="grid md:grid-cols-2 gap-6">
    <div @click="handleReadmeTypeSelection('profile')"
         :class="['relative p-6 rounded-2xl backdrop-blur-3xl bg-white/50 border-2 cursor-pointer',
               store.selectedType === 'profile'
                 ? 'border-brandColor'
                 : 'border-gray-200 hover:bg-gray-50']">
      <div class="flex items-center gap-4 mb-4">
        <div class="p-3 bg-brandColor rounded-xl">
          <User class="w-6 h-6 text-white"/>
        </div>
        <h3 class="text-xl font-semibold text-gray-900">Profile README</h3>
        <CheckCircle v-if="store.selectedType === 'profile'" class="w-6 h-6 absolute top-4 right-4 text-brandColor"/>
      </div>
      <p class="text-gray-600 text-left max-w-[400px] mb-4">Create a personalized README for your GitHub profile.
        Introduce yourself, highlight your skills, and make your profile stand out with a custom README.</p>
      <button
          class="flex cursor-pointer group items-center text-brandColor/80 hover:text-brandColor w-max font-medium">
        Get Started
        <ChevronRight class="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300"/>
      </button>
    </div>

    <div @click="handleReadmeTypeSelection('repository')"
         :class="['relative p-6 rounded-2xl backdrop-blur-3xl bg-white/50 border-2 cursor-pointer',
               store.selectedType === 'repository'
                 ? 'border-brandColor'
                 : 'border-gray-200 hover:bg-gray-50']">
      <div class="flex items-center gap-4 mb-4">
        <div class="p-3 bg-brandColor rounded-xl">
          <GitBranch class="w-6 h-6 text-white"/>
        </div>
        <h3 class="text-xl font-semibold text-gray-900">Repository README</h3>
        <CheckCircle v-if="store.selectedType === 'repository'" class="w-6 h-6 absolute top-4 right-4 text-brandColor"/>
      </div>
      <p class="text-gray-600 text-left max-w-[400px] mb-4">Generate a README for your GitHub repository.
        Quickly create a professional README to describe your project, features, installation steps, usage, and
        more..</p>
      <button
          class="flex cursor-pointer group items-center text-brandColor/80 hover:text-brandColor w-max font-medium">
        Get Started
        <ChevronRight class="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300"/>
      </button>
    </div>
  </div>
</template>