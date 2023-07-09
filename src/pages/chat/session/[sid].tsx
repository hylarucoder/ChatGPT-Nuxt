import { HeadIconButton, LazyVSharePreview, VChatMessage, VComposeView, VDetailHeader } from "#components"
import { useRoutedChatSession } from "~/composables/chat"
import { useTrans } from "~/composables/locales"

export default defineComponent({
  setup() {
    const router = useRouter()
    const chatSession = useRoutedChatSession()
    if (!chatSession.session) {
      router.push("/chat/new")
    }
    const { t } = useTrans()

    const el = ref<HTMLElement | null>(null)
    const visibleShareModal = ref(false)

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
      () => chatSession.session.messages,
      () => {
        nextTick(() => {
          scrollToBottom()
        })
      },
      {
        deep: true,
      },
    )

    onMounted(() => {
      nextTick(() => {
        scrollToBottom()
      })
    })

    return () => (
      <div class="flex w-full flex-1 flex-col">
        {visibleShareModal.value && (
          <LazyVSharePreview
            onClose={() => {
              visibleShareModal.value = false
            }}
          />
        )}
        <VDetailHeader
          title={chatSession.session.topic}
          subtitle={t("Chat.SubTitle", { count: chatSession.session.messagesCount })}
        >
          {{
            rightIcons: () => (
              <div class="flex w-[150px] justify-end space-x-2">
                <HeadIconButton icon="i-mdi-circle-edit-outline" size="1.2em" onClick={chatSession.rename} />
                <HeadIconButton
                  icon="i-mdi-share-all-outline"
                  size="1.2em"
                  onClick={() => {
                    visibleShareModal.value = true
                  }}
                />
                <HeadIconButton icon="i-mdi-close" size="1.3em" onClick={() => router.back()} />
              </div>
            ),
          }}
        </VDetailHeader>
        <div ref={el} class="flex-grow overflow-y-scroll bg-white p-3 dark:bg-gray-800 sm:p-5">
          {chatSession.session.messages.map((message) => (
            <VChatMessage key={message.id} class="chat-message" message={message} />
          ))}
        </div>
        <VComposeView />
      </div>
    ) // Add a closing parenthesis here
  },
})
