<script setup lang="ts">
import LimitErrorModal from "@components/LimitErrorModal.vue";
import OverloadErrorModal from "@components/OverloadErrorModal.vue";
import {watch} from "vue";
import {useStore} from "@stores/useStore";

const store = useStore()

watch(() => store.fullScreenModal, (val) => {
  if (val)
    document.getElementsByTagName('html')[0].classList.add('overflow-hidden')
  else
    document.getElementsByTagName('html')[0].classList.remove('overflow-hidden')
}, {immediate: true, deep: true})

watch(() => store.currentStep, (val) => {
  if (val === 4)
    document.getElementsByTagName('html')[0].classList.add('overflow-hidden')
  else
    document.getElementsByTagName('html')[0].classList.remove('overflow-hidden')
}, {immediate: true, deep: true})

</script>

<template>
  <router-view/>
  <LimitErrorModal/>
  <OverloadErrorModal/>
</template>