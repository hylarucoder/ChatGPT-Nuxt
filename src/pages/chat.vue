<script setup lang="ts">
import Sidebar from "~/components/VSidebar.vue"
import { useSidebarChatSessions } from "~/composable/chat"
import { useSidebar } from "~/composable/useSidebar"

const chatStore = useSidebarChatSessions()
onBeforeMount(async () => {
  await chatStore.loadAll()
})
const { visible } = useSidebar()
</script>

<template>
  <div
    class="flex h-screen w-screen truncate rounded-md border border-neutral-200 bg-white text-zinc-800 sm:h-[--window-height] sm:max-h-[--window-height] sm:min-h-[480px] sm:w-[--window-width] md:min-w-[600px] md:max-w-[1200px]"
  >
    <ClientOnly>
      <Sidebar v-show="visible" />
      <div class="flex w-screen sm:w-[--window-content-width]">
        <NuxtPage />
      </div>
    </ClientOnly>
  </div>
</template>
