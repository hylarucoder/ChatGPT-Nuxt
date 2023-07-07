import { defineComponent } from "vue"
import { HeadIconButton, VDetailHeader } from "#components"
import { useRoutedChatSession } from "~/composable/chat"
import { useTrans } from "~/composable/locales"

export default defineComponent({
  setup() {
    const chatSession = useRoutedChatSession()
    const { t } = useTrans()

    return () => (
      <VDetailHeader>
        {{
          default: () => (
            <div class="max-w-1/2 truncate text-center sm:text-left">
              <div class="max-w-1/2 cursor-pointer truncate text-sm font-bold sm:text-lg">
                {chatSession.session.topic}
              </div>
              <div class="text-xs sm:text-sm">{t("Chat.SubTitle", { count: chatSession.session.messagesCount })}</div>
            </div>
          ),
          rightIcons: () => (
            <div class="flex w-[150px] justify-end space-x-2">
              <HeadIconButton icon="i-mdi-circle-edit-outline" size="1.2em" onClick={chatSession.rename} />
              <HeadIconButton icon="i-mdi-share-all-outline bg-black" size="1.2em" />
              <HeadIconButton icon="i-mdi-window-maximize" size="1.2em" />
            </div>
          ),
        }}
      </VDetailHeader>
    )
  },
})
