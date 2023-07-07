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
            <div class="truncate">
              <div class="cursor-pointer truncate text-[1.25rem] font-bold">{chatSession.session.topic}</div>
              <div class="mt-1 text-[0.88rem]">{t("Chat.SubTitle", { count: chatSession.session.messagesCount })}</div>
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
