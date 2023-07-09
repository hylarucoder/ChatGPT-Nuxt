import { defineComponent } from "vue"
import { useSidebar } from "~/composable/useSidebar"

export default defineComponent({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { slots }) {
    const { show: showSidebar, visible } = useSidebar()
    const { isMobile } = useDevice()
    return () => (
      <div class="relative h-[60px] sm:h-[80px]">
        <div class="flex h-[60px] w-full items-center justify-between border-b border-gray-200 px-0 py-0 dark:border-gray-600 sm:h-[80px] sm:w-full sm:px-5 sm:py-3.5">
          {isMobile && (
            <div class="ml-3 flex text-gray-600">
              <span
                class={{
                  "i-mdi-menu-open": visible.value,
                  "i-mdi-menu-close": !visible.value,
                  "h-6 w-6": true,
                }}
                onClick={() => {
                  showSidebar()
                }}
              />
            </div>
          )}
          {slots?.default?.()}
          {!isMobile && slots?.rightIcons?.()}
          {isMobile && (
            <div class="mr-3 flex text-gray-600">
              <span
                class={{
                  "i-mdi-dots-horizontal": true,
                  "h-6 w-6": true,
                }}
                onClick={() => {
                  showSidebar()
                }}
              />
            </div>
          )}
        </div>
      </div>
    )
  },
})
