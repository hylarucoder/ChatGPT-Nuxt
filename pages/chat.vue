<script setup lang="ts">
import Sidebar from "~/components/VSidebar.vue"
import { useSidebarChatSessions } from "~/composable/chat"

const chatStore = useSidebarChatSessions()
onBeforeMount(async () => {
  await chatStore.loadAll()
  console.log("load all")
})
</script>

<template>
  <div class="flex h-full w-full truncate rounded-2xl border border-neutral-200 bg-white text-zinc-800">
    <ClientOnly>
      <Sidebar />
      <NuxtPage />
    </ClientOnly>
  </div>
</template>
