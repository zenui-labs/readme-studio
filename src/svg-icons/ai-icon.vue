<script setup>
const props = defineProps({
  size: {
    type: String,
    default: '1em'
  },
  color: {
    type: String,
    default: 'currentColor'
  }
})
</script>

<template>
  <svg :stroke="color" :fill="color" stroke-width="0" viewBox="0 0 24 24" :height="size" :width="size"
       xmlns="http://www.w3.org/2000/svg">
    <path
        d="M1 11C6.52285 11 11 6.52285 11 1H13C13 6.52285 17.4772 11 23 11V13C17.4772 13 13 17.4772 13 23H11C11 17.4772 6.52285 13 1 13V11Z"></path>
  </svg>
</template>