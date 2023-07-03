<script setup lang="ts">
import Sidebar from "~/components/VSidebar.vue"
import { useSidebarChatSessions } from "~/composable/chat"

const chatStore = useSidebarChatSessions()
onBeforeMount(async () => {
  await chatStore.loadAll()
})
</script>

<template>
  <div
    class="flex h-[--window-height] max-h-[--window-height] min-h-[480px] w-[--window-width] min-w-[600px] max-w-[1200px] truncate rounded-2xl border border-neutral-200 bg-white text-zinc-800"
  >
    <ClientOnly>
      <Sidebar />
      <NuxtPage />
    </ClientOnly>
  </div>
</template>
