import { defineComponent } from "vue"
import { toPng } from "html-to-image"
import { HeadIconButton, UCard, UModal, VChatMessage } from "#components"
import { useTrans } from "~/composable/locales"
import { useRoutedChatSession } from "~/composable/chat"

export default defineComponent({
  emits: ["onClose"],
  setup(props, { emit }) {
    console.log("VSharePreview setup")
    const elShare = ref<HTMLElement | null>(null)
    const visible = ref(true)
    // const shareLoading = ref(false)
    const chatSession = useRoutedChatSession()
    const { t } = useTrans()
    const shareChat = () => {
      if (!elShare.value) {
        return
      }
      toPng(elShare.value, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a")
          link.download = `${chatSession.session.topic}.png`
          link.href = dataUrl
          link.click()
        })
        .catch((err) => {
          console.log(err)
        })
    }

    return () => (
      <UModal
        onClose={() => {
          emit("onClose")
        }}
        ui={{
          padding: "p-4 sm:p-0",
          width: "sm:max-w-lg min-w-[600px]",
        }}
        v-model={visible.value}
      >
        <div class="relative flex flex-col space-y-3">
          <div ref={elShare}>
            <UCard
              ui={{
                divide: "divide-y divide-gray-100 dark:divide-gray-800",
                body: {
                  padding: "px-1 py-0 sm:p-0",
                },
                header: {
                  padding: "px-1 py-0 sm:p-0",
                },
              }}
            >
              {{
                header: () => (
                  <div class="relative h-[60px] sm:h-[80px]">
                    <div class="flex h-[60px] w-full items-center justify-between border-gray-200 px-0 py-0 dark:border-gray-600 sm:h-[80px] sm:w-full sm:px-5 sm:py-3.5">
                      <div class="max-w-1/2 truncate text-center sm:text-left">
                        <div class="max-w-1/2 cursor-pointer truncate text-sm font-bold sm:text-lg">
                          {chatSession.session.topic}
                        </div>
                        <div class="text-xs sm:text-sm">
                          {t("Chat.SubTitle", { count: chatSession.session.messagesCount })}
                        </div>
                      </div>
                    </div>
                  </div>
                ),
                default: () => (
                  <div class="h-full flex-grow bg-white p-3 dark:bg-gray-800 sm:p-5">
                    {chatSession.session.messages.map((message) => (
                      <VChatMessage key={message.id} class="chat-message" message={message} />
                    ))}
                  </div>
                ),
              }}
            </UCard>
          </div>
          <div class="absolute right-5 top-2">
            <HeadIconButton
              ping={true}
              icon="i-mdi-download"
              size="1.2em"
              onClick={() => {
                shareChat()
              }}
            />
          </div>
        </div>
      </UModal>
    )
  },
})
