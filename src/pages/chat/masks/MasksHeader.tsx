import { defineComponent } from "vue"
import { HeadIconButton, VDetailHeader } from "#components"
import { useTrans } from "~/composables/locales"

export const MasksHeader = defineComponent({
  props: {
    count: Number,
  },
  setup(props, { slots }) {
    const { t } = useTrans()
    const router = useRouter()

    return () => (
      <VDetailHeader title={t("Mask.Page.Title")} subtitle={t("Mask.Page.SubTitle", { count: props.count })}>
        {{
          rightIcons: () => (
            <div class="flex w-[150px] justify-end space-x-2">
              <HeadIconButton icon="i-mdi-inbox-arrow-down" size="1.3em" />
              <HeadIconButton icon="i-mdi-inbox-arrow-up" size="1.3em" />
              <HeadIconButton icon="i-mdi-close" size="1.3em" onClick={() => router.back()} />
            </div>
          ),
        }}
      </VDetailHeader>
    )
  },
})
