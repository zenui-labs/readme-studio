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


  <a href="https://ko-fi.com/readmestudio" id="coffee_badge" target="_blank">
    <img src="https://storage.ko-fi.com/cdn/cup-border.png"/>
    Donate
  </a>
</template>