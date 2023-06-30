<script lang="ts" setup>
import { TChatSession } from "~/composables/config/typing"

const props = defineProps<{
  session: TChatSession
}>()
</script>

<style>
.chat-list-card {
  @apply bg-white border-white block cursor-grab border-2 mb-3 p-3 rounded-xl hover:bg-gray-200 drop-shadow-sm hover:border-gray-200;
}

.chat-list-card__active {
  @apply border-green-500 !important;
}
</style>
<template>
  <NuxtLink class="chat-list-card" :to="`/chat/session/` + session.id" active-class="chat-list-card__active">
    <div class="text-[0.88rem] font-bold truncate">{{ session.topic }}</div>
    <div class="text-neutral-400 flex text-[0.75rem] justify-between mt-2">
      <div class="truncate">{{ session.messagesCount }} 条对话</div>
      <div class="truncate">{{ session.lastUpdate }}</div>
    </div>
  </NuxtLink>
</template>
