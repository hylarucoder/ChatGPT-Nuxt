<script lang="ts" setup>
definePageMeta({
  layout: "custom",
})
const setMainWindowTop = () => {
  console.log("setMainWindowTop")
  window?.electron.setMainWindowTop()
}
</script>
<template>
  <img alt="icon" width="512" style="-webkit-user-select: none" src="/icon-512.png" @click="setMainWindowTop">
</template>
