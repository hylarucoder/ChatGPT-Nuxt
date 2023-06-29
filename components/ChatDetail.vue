<template>
  <div class="flex flex-col flex-1">
    <ChatDetailHeader />
    <div class="flex-grow p-5 overflow-scroll" ref="el" id="message-box">
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
import { ref, watch, onMounted } from "vue"
import { useChatStore } from "~/composables/chat"
import ChatMessage from "~/components/ChatMessage.vue"

const router = useRouter()
const chatStore = useChatStore()
const currentSession = chatStore.routeCurrentSession()
if (!currentSession) {
  router.push("/chat/new")
}

const el = ref<HTMLElement | null>(null)
const scrollToBottom = () => {
  if (el.value) {
    el.value.scrollTop = el.value.scrollHeight
  }
}

watch(
  () => currentSession!.messages,
  () => {
    scrollToBottom()
  },
  {
    deep: true,
  }
)

onMounted(scrollToBottom)
</script>
