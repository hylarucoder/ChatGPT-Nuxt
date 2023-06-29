<template>
  <div class="flex flex-col w-full">
    <ChatDetailHeader />
    <div class="flex-grow w-full p-5 overflow-scroll" ref="el">
      <ChatMessage
        class="chat-message"
        v-for="message in currentSession.messages"
        :content="message.content"
        :direction="message.direction"
      />
    </div>

    <ComposeView />
  </div>
</template>
<script setup lang="ts">
import { ref, watchEffect, onMounted } from "vue"
import { useChatStore } from "~/composables/chat"
import ChatMessage from "~/pages/chat/ChatMessage.vue"

const el = ref<HTMLElement | null>(null)

const chatStore = useChatStore()
const currentSession = chatStore.currentSession()

const scrollToBottom = () => {
  if (el.value) {
    el.value.scrollTop = el.value.scrollHeight
  }
}

watchEffect(() => {
  currentSession.messages
  scrollToBottom()
})

onMounted(scrollToBottom)
</script>
