<script setup lang="ts">
import { useRoutedChatSession, useSidebarChatSessions } from "~/composable/chat"

const router = useRouter()

const chatStore = useSidebarChatSessions()
const sessions = chatStore.sessions
const onDeleteSession = (id: string) => {
  if (sessions.length === 0) return
  if (sessions.length === 1) {
    return
  }
  const newSession = sessions.filter((session) => session.id !== id)[0]
  console.log("router new Session", newSession.id)
  router.push("/chat/session/" + newSession.id)
  chatStore.deleteSession(id)
}
</script>
<template>
  <div>
    <VChatListCard @onDeleteSession="onDeleteSession(session.id)" v-for="session in sessions" :session="session" />
  </div>
</template>
