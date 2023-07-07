import { defineComponent } from "vue"
import HeadIconButton from "~/components/HeadIconButton.vue"
import { useSidebar } from "~/composable/useSidebar"

export default defineComponent({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { slots }) {
    const { show: showSidebar } = useSidebar()
    const { isMobile } = useDevice()
    return () => (
      <div class="relative flex w-screen items-center justify-between border-b border-gray-200 px-5 py-3.5 sm:w-full">
        {isMobile && (
          <div class="flex">
            <HeadIconButton
              icon="i-mdi-close-octagon-outline"
              size="1.3em"
              onClick={() => {
                showSidebar()
              }}
            />
          </div>
        )}
        {slots?.default?.()}
        {slots?.rightIcons?.()}
      </div>
    )
  },
})
