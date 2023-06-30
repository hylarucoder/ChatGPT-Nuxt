<template>
  <div>
    <VChatListCard v-for="session in sessions" :session="session" />
  </div>
</template>
<script setup lang="ts">
import { useChatStore } from "~/composables/chat"

const chatStore = useChatStore()
const sessions = chatStore.sessions
</script>
