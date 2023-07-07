import { defineComponent } from "vue"
import { HeadIconButton, VDetailHeader } from "#components"
import { useTrans } from "~/composable/locales"

export const MasksHeader = defineComponent({
  setup(props, { slots }) {
    const { t } = useTrans()

    return () => (
      <VDetailHeader>
        {{
          default: () => (
            <div class="max-w-1/2 truncate text-center">
              <div class="max-w-1/2 cursor-pointer truncate text-sm font-bold sm:text-lg">{t("Mask.Page.Title")}</div>
              <div class="text-xs sm:text-sm">{t("Mask.Page.SubTitle", { count: props.count })}</div>
            </div>
          ),
          rightIcons: () => (
            <div class="flex w-[150px] justify-end space-x-2">
              <HeadIconButton icon="i-mdi-inbox-arrow-down" size="1.3em" />
              <HeadIconButton icon="i-mdi-inbox-arrow-up" size="1.3em" />
              <HeadIconButton icon="i-mdi-close-octagon-outline" size="1.3em" />
            </div>
          ),
        }}
      </VDetailHeader>
    )
  },
})
