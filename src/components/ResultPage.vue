<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Your Generated README</h2>
    <VueMarkdown :source="readme" class="prose max-w-none"/>

    <button @click="copy" class="btn mt-4">Copy</button>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useResultStore} from '../stores/resultStore'
import VueMarkdown from 'vue3-markdown-it'

const resultStore = useResultStore()
const readme = ref(resultStore.readme)

function copy() {
  navigator.clipboard.writeText(readme.value)
}
</script>
