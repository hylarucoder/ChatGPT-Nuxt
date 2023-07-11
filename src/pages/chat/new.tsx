import MaskCard from "~/components/MaskCard"
import { useMasks } from "~/composables/mask"
import { useSettingStore } from "~/composables/settings"
import { getRandomEmoji } from "~/utils/emoji"
import { useSidebarChatSessions } from "~/composables/chat"

export default defineComponent({
  setup() {
    const router = useRouter()
    const { settings } = useSettingStore()
    const { t } = useTrans()
    const chatStore = useSidebarChatSessions()
    const masksUse = useMasks()

    const maskRef = ref<HTMLDivElement | null>(null)
    const pageRef = ref<HTMLDivElement | null>(null)

    const newDefaultSession = () => {
      const session = chatStore.createEmptySession()
      router.push({
        path: "/chat/session/" + session.id,
      })
    }

    onBeforeMount(() => {
      if (!settings.maskLaunchPage) {
        newDefaultSession()
      }
    })

    const resizeMaskRows = useThrottleFn(
      ({ width, height }: { width: number; height: number }) => {
        if (!pageRef.value) {
          return
        }
        if (!masksUse.masks || masksUse.masks.length === 0) {
          return
        }
        masksUse.computeMaskRows({
          width,
          height,
        })
        if (!maskRef.value) {
          return
        }
        maskRef.value.scrollLeft = (maskRef.value.scrollWidth - maskRef.value.clientWidth) / 2
      },
      300,
      true,
      true,
    )

    useResizeObserver(pageRef, (entries) => {
      const { width, height } = entries[0].contentRect
      resizeMaskRows({
        width,
        height,
      })
    })

    onMounted(() => {
      if (!pageRef.value) {
        return
      }
      resizeMaskRows({
        width: pageRef.value.clientWidth,
        height: pageRef.value.clientHeight,
      })
    })

    const notShowAndNav = () => {
      settings.maskLaunchPage = false
      newDefaultSession()
    }

    return () => (
      <div ref={pageRef} class="flex flex-grow flex-col items-center overflow-hidden">
        <div class="flex w-full justify-between p-3 text-zinc-800">
          <button
            class="flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-md bg-white p-3 text-center hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200"
            onClick={router.back}
          >
            <div class="flex items-center justify-center">
              <span class="i-mdi-chevron-left h-4" />
            </div>
            <div class="ml-0 overflow-hidden text-ellipsis text-xs">{t("NewChat.Return")}</div>
          </button>
          <button
            class="flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-md bg-white p-3 text-center hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200"
            onClick={notShowAndNav}
          >
            <div class="ml-1 overflow-hidden text-ellipsis text-xs">{t("NewChat.NotShow")}</div>
          </button>
        </div>
        <div class="mb-5 mt-12 flex space-x-1">
          <div class="flex h-16 w-12 items-center justify-center rounded-md border border-neutral-200 bg-white px-3 py-5">
            <span class="text-xl">😆</span>
          </div>
          <div class="flex h-16 w-12 items-center justify-center rounded-md border border-neutral-200 bg-white px-3 py-5">
            <span class="text-xl">🤖</span>
          </div>
          <div class="flex h-16 w-12 items-center justify-center rounded-md border border-neutral-200 bg-white px-3 py-5">
            <span class="text-xl">👹</span>
          </div>
        </div>
        <div class="mb-2 text-[2.00rem] font-bold">{t("NewChat.Title")}</div>
        <div>{t("NewChat.SubTitle")}</div>
        <div class="mb-5 mt-12 flex justify-center space-x-2 text-[0.75rem]">
          <button
            class="flex h-10 cursor-pointer items-center justify-center truncate rounded-md border border-neutral-200 bg-white p-3 text-center hover:bg-gray-200"
            onClick={() => router.push("/chat/masks")}
          >
            <div class="flex items-center justify-center">
              <span class="i-mdi-eye-outline text-lg" />
            </div>
            <div class="ml-1 truncate text-black">{t("NewChat.More")}</div>
          </button>
          <button
            class="ml-3 flex h-10 cursor-pointer items-center justify-center truncate rounded-md bg-[--primary] p-3 text-center text-white hover:bg-green-800"
            onClick={newDefaultSession}
          >
            <div class="flex items-center justify-center">
              <span class="i-mdi-lightning-bolt-outline text-lg" />
            </div>
            <div class="ml-1 truncate text-white">{t("NewChat.Skip")}</div>
          </button>
        </div>
        <div ref={maskRef} class="masks-container pt-5">
          {masksUse.maskRows.map((row, i) => (
            <div key={i} class="mask-row mb-3 flex">
              {row.map((mask, j) => (
                <MaskCard
                  key={j}
                  class="max-w-[200px]"
                  icon={getRandomEmoji(mask.name || "?")}
                  text={mask.name}
                  onClick={() => {
                    const session = chatStore.newSession(undefined, {
                      topic: mask.name,
                      description: mask.description,
                      avatar: getRandomEmoji("a"),
                    })
                    router.push({
                      path: "/chat/session/" + session.id,
                    })
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  },
})
