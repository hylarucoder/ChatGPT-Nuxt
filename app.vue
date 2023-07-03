<script setup lang="ts">
import { appName } from "./src/constants"

useHead({
  title: appName,
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  background: #f2f2f2;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  touch-action: pan-x pan-y;
}

html.light {
  background: #f2f2f2;
  color: black;
}

html.dark {
  background: #222;
  color: white;
}
</style>
