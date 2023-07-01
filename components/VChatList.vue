<script setup lang="ts">
import { useChatStore } from "~/composables/chat"

const router = useRouter()

const chatStore = useChatStore()
const sessions = chatStore.sessions
const onDeleteSession = (id: string) => {
  // if empty, return
  if (sessions.length === 0) return
  if (sessions.length === 1) {
    // if only one session, return
    return
  }
  const currentSession = chatStore.routeCurrentSession()
  chatStore.deleteSession(id)
  // check if the session is the current session
  if (currentSession.id === id) {
    // navigate to the first session
    // if so, set the current session to the first session
    router.push("/chat/session/" + chatStore.sessions[0].id)
  }
}
</script>
<template>
  <div>
    <VChatListCard @onDeleteSession="onDeleteSession(session.id)" v-for="session in sessions" :session="session" />
  </div>
</template>
