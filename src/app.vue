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

<style lang="scss">
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

.masks-container {
  flex-grow: 1;
  width: 100%;
  overflow: auto;

  $linear: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

  -webkit-mask-image: $linear;
  mask-image: $linear;

  .mask-row {
    @for $i from 1 to 10 {
      &:nth-child(#{$i * 2}) {
        margin-left: 60px;
      }
    }
  }
}
</style>
