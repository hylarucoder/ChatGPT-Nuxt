import { VChatListCard } from "#components"
import { useSidebarChatSessions } from "~/composables/chat"

export default defineComponent({
  components: {
    VChatListCard,
  },
  setup() {
    const router = useRouter()

    const chatStore = useSidebarChatSessions()
    const sessions = chatStore.sessions
    const onDeleteSession = (id: string) => {
      if (sessions.length === 0) {
        return
      }
      if (sessions.length === 1) {
        return
      }
      const newSession = sessions.filter((session) => session.id !== id)[0]
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

    return () => (
      <div>
        {sessions.map((session, index) => (
          <VChatListCard
            key={session.id}
            session={session}
            class="cursor-pointer"
            onDeleteSession={() => onDeleteSession(session.id)}
            onDragstart={() => onDragStart(index)}
            onDragover={(e: DragEvent) => e.preventDefault()}
            onDrop={() => onDrop(index)}
            draggable="true"
          />
        ))}
      </div>
    )
  },
})
