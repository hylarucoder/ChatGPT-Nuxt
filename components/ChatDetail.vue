<template>
  <div class="flex flex-col w-full">
    <ChatDetailHeader />
    <div class="flex-grow w-full p-5 overflow-scroll" ref="el" id="message-box">
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
import ChatMessage from "~/pages/chat/ChatMessage.vue"

// eslint-disable-next-line no-undef
const route = useRoute()
// eslint-disable-next-line no-undef
const router = useRouter()
const chatStore = useChatStore()
const currentSession = chatStore.currentSession(route.params.sid)
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
