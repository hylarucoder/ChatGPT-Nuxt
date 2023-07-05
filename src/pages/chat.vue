<script setup lang="ts">
import Sidebar from "~/components/VSidebar.vue"
import { useSidebarChatSessions } from "~/composable/chat"
import { useMobileFullScreen } from "~/composable/useMobileDetail"

const chatStore = useSidebarChatSessions()
onBeforeMount(async () => {
  await chatStore.loadAll()
})
const { isMobileFullScreen } = useMobileFullScreen()
</script>

<template>
  <div
    class="flex h-screen w-screen truncate rounded-2xl border border-neutral-200 bg-white text-zinc-800 sm:h-[--window-height] sm:max-h-[--window-height] sm:min-h-[480px] sm:w-[--window-width] md:min-w-[600px] md:max-w-[1200px]"
  >
    <ClientOnly>
      <Sidebar v-show="!isMobileFullScreen" />
      <div class="flex w-screen sm:w-[--window-content-width]">
        <NuxtPage />
      </div>
    </ClientOnly>
  </div>
</template>
