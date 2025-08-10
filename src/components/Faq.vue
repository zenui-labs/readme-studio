<script setup lang="ts">
import {ref} from 'vue'
import {faqData} from "@/data/faq-data";
import {FaqItem} from "@/types";

const faqs = ref<FaqItem[]>(faqData)

const toggle = (index: number) => {
  faqs.value.forEach((faq, i) => {
    if (i !== index) {
      faq.open = false
    }
  })

  faqs.value[index].open = !faqs.value[index].open
}
</script>

<template>
  <section class="pt-4 md:pt-10 py-10 px-6 md:px-4 max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-[2.5rem] md:text-[3rem] dark:text-darkText font-bold text-gray-800">FAQ</h2>
      <p class="text-gray-500 dark:text-darkSubtext mt-2 text-[1rem]">Everything you need to know about Readme
        Studio</p>
    </div>

    <div class="flex flex-col md:flex-row gap-4">
      <!-- Left Column -->
      <div class="flex flex-col gap-4 md:w-[50%] w-full">
        <div
            v-for="(faq, index) in faqs"
            :key="faq.question"
            v-show="index < 8"
            class="bg-white dark:bg-darkCardBgColor dark:border-darkBorder border border-gray-200 rounded-xl p-5 transition-all"
        >
          <button
              class="w-full text-left flex cursor-pointer justify-between items-center font-medium text-gray-800"
              @click="toggle(index)"
          >
            <span class="dark:text-darkText text-[1.1rem]">{{ faq.question }}</span>
            <svg
                :class="['w-5 h-5 transform transition-transform dark:text-darkText duration-300', faq.open ? 'rotate-180' : 'rotate-0']"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
              :class="[
          'overflow-hidden transition-all duration-300 ease-in-out',
          faq.open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        ]"
          >
            <p class="mt-3 text-gray-600 text-base dark:text-darkSubtext text-left leading-relaxed">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="flex flex-col gap-4 md:w-[50%] w-full">
        <div
            v-for="(faq, index) in faqs"
            :key="faq.question"
            v-show="index >= 7"
            class="bg-white dark:bg-darkCardBgColor dark:border-darkBorder border border-gray-200 rounded-xl p-5 transition-all"
        >
          <button
              class="w-full text-left flex cursor-pointer justify-between items-center font-medium text-gray-800"
              @click="toggle(index)"
          >
            <span class="dark:text-darkText text-[1.1rem]">{{ faq.question }}</span>
            <svg
                :class="['w-5 h-5 transform transition-transform dark:text-darkText duration-300', faq.open ? 'rotate-180' : 'rotate-0']"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
              :class="[
          'overflow-hidden transition-all duration-300 ease-in-out',
          faq.open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        ]"
          >
            <p class="mt-3 text-gray-600 text-base dark:text-darkSubtext text-left leading-relaxed">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>