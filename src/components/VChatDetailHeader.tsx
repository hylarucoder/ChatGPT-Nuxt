import { defineComponent } from "vue"
import { HeadIconButton, VDetailHeader } from "#components"
import { useRoutedChatSession } from "~/composable/chat"
import { useTrans } from "~/composable/locales"

export default defineComponent({
  setup() {
    const chatSession = useRoutedChatSession()
    const { t } = useTrans()
    const router = useRouter()

    return () => (
      <VDetailHeader
        title={chatSession.session.topic}
        subtitle={t("Chat.SubTitle", { count: chatSession.session.messagesCount })}
      >
        {{
          rightIcons: () => (
            <div class="flex w-[150px] justify-end space-x-2">
              <HeadIconButton icon="i-mdi-circle-edit-outline" size="1.2em" onClick={chatSession.rename} />
              <HeadIconButton icon="i-mdi-share-all-outline" size="1.2em" />
              <HeadIconButton icon="i-mdi-close" size="1.3em" onClick={() => router.back()} />
            </div>
          ),
        }}
      </VDetailHeader>
    )
  },
})
