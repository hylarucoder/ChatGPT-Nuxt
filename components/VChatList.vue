<script setup lang="ts">
const router = useRouter()

const chatStore = useChatStore()
const sessions = chatStore.sessions
const onDeleteSession = (id: string) => {
  if (sessions.length === 0) return
  if (sessions.length === 1) {
    return
  }
  const currentSession = useRoutedChatSession()
  chatStore.deleteSession(id)
  if (currentSession.session.id === id) {
    router.push("/chat/session/" + chatStore.sessions[0].id)
  }
}
</script>
<template>
  <div>
    <VChatListCard @onDeleteSession="onDeleteSession(session.id)" v-for="session in sessions" :session="session" />
  </div>
</template>
