import { defineComponent } from "vue"
import HeadIconButton from "~/components/HeadIconButton.vue"
import { useSidebar } from "~/composable/useSidebar"

export default defineComponent({
  name: "VDetailHeader",
  setup(props, { slots }) {
    const { show: showSidebar } = useSidebar()
    const { isMobile } = useDevice()
    return () => (
      <div class="flex items-center justify-between border-b border-gray-200 p-3.5">
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
