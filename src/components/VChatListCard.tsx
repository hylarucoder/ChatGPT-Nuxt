// ChatItem.tsx
import { NuxtLink } from "#components"
import { defineComponent, PropType, ref } from "vue"
import { useTrans } from "~/composable/locales"
import { useSidebar } from "~/composable/useSidebar"
import { TChatSession } from "~/constants/typing"
import { formatDateString } from "~/utils/date"

export default defineComponent({
  props: {
    session: {
      type: Object as PropType<TChatSession>,
      required: true,
    },
  },
  emits: ["onDeleteSession"],
  setup(props, { emit }) {
    const { t } = useTrans()
    const sidebarUsed = useSidebar()

    const upHere = ref(false)
    const onDeleteSession = () => {
      emit("onDeleteSession", props.session.id)
    }

    return () => (
      <NuxtLink
        class="chat-list-card relative"
        to={`/chat/session/${props.session.id}`}
        activeClassName="chat-list-card__active"
        onMouseover={() => (upHere.value = true)}
        onMouseleave={() => (upHere.value = false)}
        onClick={sidebarUsed.hideIfMobile}
      >
        <div class="truncate text-[0.88rem] font-bold">{props.session.topic}</div>
        <div class="mt-2 flex justify-between text-[0.75rem] text-neutral-400">
          <div class="truncate">{t("ChatItem.ChatItemCount", { count: props.session.messagesCount })}</div>
          <div class="truncate">{formatDateString(props.session.lastUpdate)}</div>
        </div>
        {upHere.value && (
          <span
            size="1.3em"
            class={[
              "i-mdi-close-circle-outline absolute right-2 top-2 h-5 w-5 cursor-pointer text-neutral-400 opacity-0 transition-opacity duration-200",
              upHere.value && "opacity-100",
            ]}
            onClick={onDeleteSession}
          />
        )}
      </NuxtLink>
    )
  },
})

/* ChatItem.css */
// .chat-list-card {
//    @apply mb-3 block cursor-grab rounded-md border-2 border-white bg-white p-3 drop-shadow-sm hover:border-gray-200 hover:bg-gray-200 dark:border-gray-800 dark:bg-gray-800;
// }
//
// .chat-list-card__active {
//    @apply border-green-500 dark:bg-gray-800 !important;
// }
