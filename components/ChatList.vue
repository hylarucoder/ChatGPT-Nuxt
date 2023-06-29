<template>
  <div>
    <ChatListItem
      v-for="c in sessions"
      :title="c.topic"
      :count="c.messages.length"
      :created-at="c.lastUpdate.toString()"
      :link="`/chat/session/` + c.id"
    />
  </div>
</template>
<script setup lang="ts">
import ChatListItem from "~/components/ChatListItem.vue"
import { useChatStore } from "~/composables/chat"

const chatStore = useChatStore()
const sessions = chatStore.sessions
</script>
