<script setup lang="ts">
import { useRoutedChatSession } from "~/composable/chat"

const router = useRouter()
const currentSession = useRoutedChatSession()
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
  () => currentSession.session.messages,
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
const printMessages = () => {
  console.log("currentSession", toRaw(currentSession.session))
}
</script>
<template>
  <div class="flex w-full flex-1 flex-col">
    <VChatDetailHeader @click="printMessages" />
    <div ref="el" class="flex-grow overflow-y-scroll p-5">
      <VChatMessage
        v-for="message in currentSession.session.messages"
        :key="message.id"
        class="chat-message"
        :message="message"
      />
    </div>
    <VComposeView />
  </div>
</template>
