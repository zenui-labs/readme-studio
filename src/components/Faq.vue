<script setup lang="ts">
import {ref} from 'vue'

interface FaqItem {
  question: string
  answer: string
  open: boolean
}

const faqs = ref<FaqItem[]>([
  {
    question: "What is Readme Studio?",
    answer: "Readme Studio is an AI-powered tool that helps you generate professional, visually appealing README files for GitHub profiles and repositories.",
    open: false
  },
  {
    question: "Who can use Readme Studio?",
    answer: "Anyone! Whether you're a developer, open-source maintainer, or student — Readme Studio is perfect for anyone looking to enhance their GitHub presence.",
    open: false
  },
  {
    question: "Do I need coding knowledge to use this?",
    answer: "Not at all. Just fill out a few fields or connect your GitHub account — the tool does the rest.",
    open: false
  },
  {
    question: "Can I preview my README before downloading?",
    answer: "Yes, the tool provides a live preview of your README as you build it.",
    open: false
  },
  {
    question: "Does Readme Studio support social links and badges?",
    answer: "Yes! You can add GitHub stats, Twitter links, visitor counters, tech badges, and more.",
    open: false
  },
  {
    question: "Is the generated README mobile-friendly?",
    answer: "Yes. All templates are responsive and designed to look great on all devices.",
    open: false
  },
  {
    question: "Is my data stored or shared?",
    answer: "No. Readme Studio doesn't store any personal data. Everything is generated in your browser for privacy and speed.",
    open: false
  },
  {
    question: "Can I contribute to Readme Studio?",
    answer: "Not yet — but we plan to open-source parts of the project in the future. Stay tuned on our GitHub.",
    open: false
  }
])

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
  <section class="py-16 px-4 max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-[2.2rem] font-bold text-gray-800">Frequently Asked Questions</h2>
      <p class="text-gray-500 mt-2 text-[1rem]">Everything you need to know about Readme Studio</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
      <div
          v-for="(faq, index) in faqs"
          :key="faq.question"
          class="bg-white border border-gray-200 rounded-xl p-5 transition-all"
      >
        <button
            class="w-full text-left flex cursor-pointer justify-between items-center font-medium text-gray-800"
            @click="toggle(index)"
        >
          <span>{{ faq.question }}</span>
          <svg
              :class="['w-5 h-5 transform transition-transform duration-300', faq.open ? 'rotate-180' : 'rotate-0']"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 9l-7 7-7-7"/>
          </svg>
        </button>

        <div
            :class="['overflow-hidden transition-all duration-300 ease-in-out', faq.open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0']"
        >
          <p class="mt-3 text-gray-600 text-sm text-left leading-relaxed">
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>