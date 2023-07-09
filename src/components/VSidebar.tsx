import { defineComponent } from "vue"
import { IconButton, VChatList } from "#components"
import { useTrans } from "~/composables/locales"
import { useSidebar } from "~/composables/useSidebar"

export default defineComponent({
  setup() {
    const { t } = useTrans()
    const { visible, hideIfMobile } = useSidebar()

    return () => (
      <div
        class={`z-10 h-full w-full flex-shrink-0 transform overflow-auto transition-all duration-300 ease-in-out sm:w-[--sidebar-width] ${
          visible.value ? "left-0" : "left-[-100vw]"
        }`}
      >
        <div class="flex h-full flex-shrink-0 flex-col overflow-hidden bg-cyan-50 p-5 shadow dark:bg-gray-700">
          <div class="relative py-5">
            <div class="text-[1.25rem] font-bold">ChatGPT Nuxt</div>
            <div class="text-[0.75rem]">Build your own AI assistant.</div>

            <div class="absolute right-0 top-2">
              <img src="/nuxt.svg" class="h-16 w-16 opacity-80" />
            </div>
          </div>
          <div class="mb-5 flex space-x-2">
            <nuxt-link class="w-full flex-grow" to={`/chat/masks`} onClick={hideIfMobile}>
              <IconButton class="w-full" icon="i-mdi-robot-happy-outline" text={t(`Mask.Name`)} />
            </nuxt-link>
            <nuxt-link class="w-full flex-grow" to={`/chat/plugins`} onClick={hideIfMobile}>
              <IconButton class="w-full" icon="i-mdi-folder-search-outline" text={t(`Plugin.Name`)} />
            </nuxt-link>
          </div>
          <div class="flex-grow overflow-x-hidden">
            <VChatList />
          </div>
          <div class="flex justify-between pt-5">
            <div class="flex">
              <div>
                <nuxt-link to="/chat/settings" class="cursor-pointer" onClick={hideIfMobile}>
                  <IconButton icon="i-mdi-cog-outline" />
                </nuxt-link>
              </div>
            </div>
            <div>
              <nuxt-link to={`/chat/new`}>
                <IconButton icon="i-mdi-chat-outline" text={t(`Home.NewChat`)} onClick={hideIfMobile} />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    )
  },
})
