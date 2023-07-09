import { defineComponent, PropType, ref } from "vue"
import { NuxtLink } from "#components"
import { useTrans } from "~/composables/locales"
import { useSidebar } from "~/composables/useSidebar"
import { TChatSession } from "~/constants/typing"
import { formatDateString } from "~/utils/date"

export default defineComponent({
  props: {
    session: {
      type: Object as PropType<TChatSession>,
      required: true,
    },
  },
  emits: ["deleteSession"],
  setup(props, { emit }) {
    const { t } = useTrans()
    const sidebarUsed = useSidebar()
    const route = useRoute()
    const upHere = ref(false)
    const onDeleteSession = () => {
      emit("deleteSession", props.session.id)
    }

    const isActive = computed(() => {
      return route.path !== `/chat/session/${props.session.id}`
    })

    return () => (
      <NuxtLink
        class={{
          "mb-3 block cursor-grab rounded-md border-2 bg-white p-3 drop-shadow-sm hover:bg-gray-200 dark:border-gray-800 dark:bg-gray-800":
            true,
          "border-white hover:border-gray-200": isActive.value,
          "border-green-500 dark:bg-gray-800": !isActive.value,
        }}
        to={`/chat/session/${props.session.id}`}
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
