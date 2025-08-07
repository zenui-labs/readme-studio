<script setup lang="ts">
import {useStore} from "@stores/useStore";
import SelectType from "@components/generation-steps/SelectType.vue";
import ProfileForm from "@components/generation-steps/ProfileForm.vue";
import RepositoryForm from "@components/generation-steps/RepositoryForm.vue";
import ReadmePreview from "@components/generation-steps/ReadmePreview.vue";
import GeneratingScreen from "@components/generation-steps/GeneratingScreen.vue";
import {onMounted} from "vue";
import RootLayout from "@/layouts/RootLayout.vue";

const store = useStore()

const steps = [
  {
    label: 'Select Type',
    slug: 'select_type',
  },
  {
    label: 'Enter Info',
    slug: 'enter_info',
  },
  {
    label: 'Generate',
    slug: 'generate',
  },
  {
    label: 'Preview',
    slug: 'preview',
  }
]

onMounted(() => {
  store.currentStep = 1
})

</script>

<template>
  <RootLayout>
    <div
        class="pt-[150px] md:pt-[200px] pb-24 md:pb-0 min-h-[95vh] px-6 md:px-0 z-10 max-w-[900px] w-full md:min-w-[900px] mx-auto">

      <div class="flex items-center flex-col md:flex-row gap-4 justify-center w-full mb-16">
        <div
            v-for="(step, index) in steps"
            :key="index"
            class="flex items-center justify-center gap-4"
            :class="index !== steps.length - 1 ? 'w-full' : 'w-auto'"
        >
          <!-- Step Circle -->
          <div :class="index === 0 && 'ml-3'">
            <div
                :class="`flex items-center justify-center w-12 h-12 rounded-full font-bold transition-all duration-500 ${
        store.currentStep >= index + 1
          ? 'bg-gradient-to-r from-teal-300 to-brandColor text-white shadow-lg transform scale-110'
          : 'bg-gray-200 dark:bg-gray-700 text-gray-400'
      }`"
            >
              {{ index + 1 }}
            </div>

            <div
                v-if="index !== steps.length - 1"
                :class="`${
          store.currentStep >= index + 1 ? 'bg-brandColor' : 'bg-gray-300 dark:bg-gray-700'
        } flex-1 h-[30px] mx-auto mt-2 md:hidden w-1.5 rounded-full`"
            ></div>
          </div>

          <div
              class="flex flex-col md:flex-row items-center gap-4"
              :class="index !== steps.length - 1 ? 'md:flex-grow pb-9 md:pb-0' : ''"
          >
            <span
                :class="`text-[1rem] font-medium ${
                store.currentStep >= index + 1 ? 'text-brandColor' : 'text-gray-500'
              }`"
            >
              {{ step.label }}
            </span>

            <div
                v-if="index !== steps.length - 1"
                :class="`${
          store.currentStep >= index + 1 ? 'bg-brandColor' : 'bg-gray-300 dark:bg-gray-700'
        } flex-1 h-1.5 rounded-full hidden md:block`"
            ></div>
          </div>
        </div>
      </div>


      <SelectType v-if="store.currentStep === 1"/>
      <ProfileForm v-if="store.currentStep === 2 && store.selectedType === 'profile'"/>
      <RepositoryForm v-if="store.currentStep === 2 && store.selectedType === 'repository'"/>
      <ReadmePreview v-if="store.currentStep === 4"/>
      <GeneratingScreen v-if="store.currentStep === 3"/>
    </div>
  </RootLayout>
</template>