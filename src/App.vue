<script setup lang="ts">
import LimitErrorModal from "@components/LimitErrorModal.vue";
import OverloadErrorModal from "@components/OverloadErrorModal.vue";
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