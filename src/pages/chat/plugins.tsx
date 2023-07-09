import { defineComponent } from "vue"
import { HeadIconButton, VDetailHeader } from "#components"
import { useTrans } from "~/composable/locales"

const PagePlugin = defineComponent({
  props: {
    count: Number,
  },
  setup(props, { slots }) {
    const { t } = useTrans()
    const router = useRouter()

    return () => (
      <div class="flex w-screen flex-1 flex-col">
        <VDetailHeader title={t("Plugin.Page.Title")} subtitle={t("Plugin.Page.SubTitle", { count: props.count })}>
          {{
            rightIcons: () => (
              <div class="flex w-[150px] justify-end space-x-2">
                <HeadIconButton icon="i-mdi-close" size="1.3em" onClick={() => router.back()} />
              </div>
            ),
          }}
        </VDetailHeader>
        <div class="direction-vertical h-full w-full text-center text-lg">Coming soon...</div>
      </div>
    )
  },
})

export default PagePlugin
