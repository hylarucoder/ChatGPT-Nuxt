<script setup lang="ts">
const router = useRouter()
const currentSession = useRoutedChatSession()
console.log("currentSession", toRaw(currentSession.session))
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
    console.log("watch ", currentSession.session.messages)
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
  <div class="flex flex-1 flex-col">
    <VChatDetailHeader @click="printMessages" />
    <div class="flex-grow overflow-y-scroll p-5" ref="el">
      <VChatMessage
        class="chat-message"
        :key="message.id"
        v-for="message in currentSession.session.messages"
        :message="message"
      />
    </div>
    <VComposeView />
  </div>
</template>
