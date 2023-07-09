// MessageItem.tsx
import { defineComponent, PropType, ref } from "vue"
import { Icon, MarkdownPreview } from "#components"
import { useRoutedChatSession } from "~/composable/chat"
import { useSettingStore } from "~/composable/settings"
import { TChatDirection, TChatMessage } from "~/constants/typing"
import { copyToClipboard } from "~/utils/clipboard"
import { formatDateString } from "~/utils/date"

export default defineComponent({
  props: {
    message: {
      type: Object as PropType<TChatMessage>,
      required: true,
    },
  },
  setup(props) {
    const { settings } = useSettingStore()
    const isSend = props.message.direction === TChatDirection.SEND
    const currentSession = useRoutedChatSession()
    const messageRef = ref()
    const isHovered = useElementHover(messageRef)

    return () => (
      <div class="flex w-full text-zinc-800" class={[isSend && "flex-row-reverse"]}>
        <div class="flex w-11/12 flex-col" class={[!isSend ? "items-start" : "items-end"]}>
          <div class="mt-5 flex">
            <div class="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 dark:bg-gray-200">
              <Icon size="1.3em" class="text-center" name={isSend ? settings.avatar : currentSession.session.avatar} />
            </div>
          </div>
          <div
            ref={messageRef}
            style={{
              textWrap: "wrap",
              userSelect: "text",
              wordBreak: "break-word",
            }}
            class="mt-1 break-words rounded-md border p-3 text-[0.88rem] dark:border-gray-500"
            class={["border-neutral-200", !isSend ? "bg-gray-100 dark:bg-gray-700" : "bg-cyan-50 dark:bg-gray-600"]}
          >
            <div class="relative max-w-[800px] break-words text-zinc-800">
              {!isSend && (
                <>
                  {/* animation show when hover */}
                  <transition
                    enterFromClass="translate-x-[5%] opacity-0"
                    leaveToClass="translate-x-[5%] opacity-0"
                    enterActiveClass="transition duration-300"
                    leaveActiveClass="transition delay-300 duration-300"
                  >
                    {isHovered && (
                      <div
                        style={{ wordBreak: "break-word" }}
                        class="absolute -top-8 right-0 flex select-text space-x-2 rounded text-xs text-zinc-800 ease-in"
                      >
                        <div
                          class="cursor-pointer opacity-50 hover:opacity-80"
                          onClick={() => copyToClipboard(props.message.content)}
                        >
                          Copy
                        </div>
                        <div
                          class="cursor-pointer opacity-50 hover:opacity-80"
                          onClick={() => currentSession.deleteMessage(props.message.id!)}
                        >
                          Delete
                        </div>
                        {/*<div class="cursor-pointer opacity-50 hover:opacity-80">Retry</div>*/}
                      </div>
                    )}
                  </transition>
                  <transition
                    enterFromClass="translate-x-[6%] opacity-0"
                    leaveToClass="translate-x-[6%] opacity-0"
                    enterActiveClass="transition duration-300"
                    leaveActiveClass="transition delay-300 duration-300"
                  >
                    {isHovered && (
                      <div class="absolute -bottom-8 right-0 text-xs text-neutral-400">
                        {formatDateString(props.message.date)}
                      </div>
                    )}
                  </transition>
                </>
              )}
              <MarkdownPreview md={props.message.content} />
            </div>
          </div>
        </div>
      </div>
    )
  },
})
