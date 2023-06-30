<script setup lang="ts">
import { ref, watch, onMounted } from "vue"
import { useChatStore } from "~/composables/chat"

const router = useRouter()
const chatStore = useChatStore()
const currentSession = chatStore.routeCurrentSession()
if (!currentSession) {
  router.push("/chat/new")
}

const el = ref<HTMLElement | null>(null)

const scrollToBottom = () => {
  if (el.value) {
    const scrollHeight = el.value.scrollHeight
    el.value.scrollTo({
      top: scrollHeight,
      behavior: "auto",
    })
  }
}

watch(
  () => currentSession.messages,
  () => {
    nextTick(() => {
      scrollToBottom()
    })
  },
  {
    deep: true,
  }
)

onMounted(() => {
  nextTick(() => {
    scrollToBottom()
  })
})
</script>
<template>
  <div class="flex flex-col flex-1">
    <VChatDetailHeader />
    <div class="flex-grow p-5 overflow-y-scroll" ref="el">
      <VChatMessage
        class="chat-message"
        v-for="message in currentSession.messages"
        :content="message.content"
        :direction="message.direction"
      />
    </div>
    <VComposeView />
  </div>
</template>
