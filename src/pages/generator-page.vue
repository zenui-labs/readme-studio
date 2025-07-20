<script setup lang="ts">
import Navbar from "@components/Navbar.vue";
import {useStore} from "@stores/useStore";
import SelectType from "@components/generation-steps/SelectType.vue";
import ProfileForm from "@components/generation-steps/ProfileForm.vue";
import RepositoryForm from "@components/generation-steps/RepositoryForm.vue";
import ReadmePreview from "@components/generation-steps/ReadmePreview.vue";
import GeneratingScreen from "@components/generation-steps/GeneratingScreen.vue";

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

</script>

<template>
  <div class='relative'>
    <Navbar/>
    <div class="min-h-screen w-full relative bg-white text-center items-center justify-center flex flex-col">
      <div
          class="absolute inset-0 z-0"
          style="
        background-image:
          linear-gradient(to right, #fbfbfb 1px, transparent 1px),
          linear-gradient(to bottom, #fbfbfb 1px, transparent 1px);
        background-size: 30px 30px;
      "
      ></div>

      <div
          class="absolute inset-0 z-10 pointer-events-none"
          style="
        background: radial-gradient(ellipse 70% 60% at 50% 100%, rgba(0, 173, 149, 0.2) 0%, transparent 100%);
      "
      ></div>

      <div class='z-10 max-w-[1200px] mx-auto'>

        <div class="flex items-center gap-4 justify-center w-full mb-16">
          <div
              v-for="(step, index) in steps"
              :key="index"
              class="flex items-center gap-4"
              :class="index !== steps.length - 1 ? 'w-full' : 'w-auto'"
          >
            <!-- Step Circle -->
            <div
                :class="`flex items-center justify-center w-12 h-12 rounded-full font-bold transition-all duration-500 ${
        store.currentStep >= index + 1
          ? 'bg-gradient-to-r from-teal-300 to-brandColor text-white shadow-lg transform scale-110'
          : 'bg-gray-200 text-gray-400'
      }`"
            >
              {{ index + 1 }}
            </div>

            <div
                class="flex items-center gap-4"
                :class="index !== steps.length - 1 ? 'flex-grow' : ''"
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
          store.currentStep >= index + 1 ? 'bg-brandColor' : 'bg-gray-300'
        } flex-1 h-1.5 rounded-full`"
              ></div>
            </div>
          </div>
        </div>


        <SelectType/>
        <ProfileForm/>
        <RepositoryForm/>
        <ReadmePreview/>
        <GeneratingScreen/>
      </div>

      <p class='text-[0.8rem] absolute bottom-5 opacity-80 left-1/2 -translate-x-1/2'>A product of <a
          href="https://zenui.net"
          target="_blank"
          class='text-brandColor underline'>@zenui</a>
      </p>
    </div>
  </div>
</template>