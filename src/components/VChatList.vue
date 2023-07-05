<script setup lang="ts">
import { useSidebarChatSessions } from "~/composable/chat"

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
const draggingItem = ref(null)

const onDragStart = (index: number) => {
  draggingItem.value = sessions[index]
}

const onDrop = (dropIndex: number) => {
  const dragIndex = sessions.indexOf(draggingItem.value)
  if (dragIndex !== dropIndex) {
    sessions.splice(dragIndex, 1)
    sessions.splice(dropIndex, 0, draggingItem.value)
  }
  draggingItem.value = null
}
</script>
<template>
  <div>
    <VChatListCard
      class="cursor-pointer"
      @onDeleteSession="onDeleteSession(session.id)"
      @dragstart="() => onDragStart(index)"
      @dragover.prevent
      @drop="() => onDrop(index)"
      draggable="true"
      v-for="(session, index) in sessions"
      :session="session"
    />
  </div>
</template>
