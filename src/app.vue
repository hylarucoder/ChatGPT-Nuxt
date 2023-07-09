<script setup lang="ts">
import { appName } from "./constants"
import { useGlobalCssVar } from "~/composables/useGlobalCss"

useHead({
  title: appName,
})

const { isMobile } = useDevice()

const globalCssVar = useGlobalCssVar()

onMounted(() => {
  if (isMobile) {
    useHead({
      meta: [
        {
          name: "viewport",
          content: "initial-scale=1, user-scalable=no, width=device-width, height=device-height, viewport-fit=cover",
        },
      ],
    })
    globalCssVar.setupMobile()
  }
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
