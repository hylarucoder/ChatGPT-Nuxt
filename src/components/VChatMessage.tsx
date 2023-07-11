import { defineComponent, PropType, ref } from "vue"
import { MarkdownPreview } from "#components"
import { useRoutedChatSession } from "~/composables/chat"
import { useSettingStore } from "~/composables/settings"
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
      <div
        class={{
          "flex w-full text-zinc-800": true,
          "flex-row-reverse": isSend,
        }}
      >
        <div
          class={{
            "flex w-11/12 flex-col": true,
            "items-start": !isSend,
            "items-end": isSend,
          }}
        >
          <div class="mt-5 flex">
            <div class="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 dark:bg-gray-200">
              <span class="text-l text-center">{isSend ? settings.avatar : currentSession.session.avatar} </span>
            </div>
          </div>
          <div
            ref={messageRef}
            style={{
              textWrap: "wrap",
              userSelect: "text",
              wordBreak: "break-word",
            }}
            class={{
              "mt-1 break-words rounded-md border p-3 text-[0.88rem] dark:border-gray-500": true,
              "border-neutral-200": true,
              "bg-gray-100 dark:bg-gray-700": !isSend,
              "bg-cyan-50 dark:bg-gray-600": isSend,
            }}
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
                    {isHovered.value && (
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
                        {/* <div class="cursor-pointer opacity-50 hover:opacity-80">Retry</div> */}
                      </div>
                    )}
                  </transition>
                  <transition
                    enterFromClass="translate-x-[6%] opacity-0"
                    leaveToClass="translate-x-[6%] opacity-0"
                    enterActiveClass="transition duration-300"
                    leaveActiveClass="transition delay-300 duration-300"
                  >
                    {isHovered.value && (
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
