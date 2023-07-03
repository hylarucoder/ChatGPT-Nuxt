import { defineStore } from "pinia"
import { useSettingStore } from "~/composable/settings"
import { StoreKey } from "~/constants"

interface TPromptsJson {
  cn: string[]
  en: string[]
}

export enum TLang {
  cn,
  en,
}

export interface TPrompts {
  name: string
  description: string
  lang: string
}

export const useMasks = defineStore(StoreKey.Mask, () => {
  const { settings } = useSettingStore()
  const masks = ref<TPrompts[]>([])
  const load = async () => {
    const newMasks = []
    const data = await $fetch<TPromptsJson>("/prompts.json")
    for (const [title, description] of data.cn) {
      newMasks.push({
        name: title,
        description,
        lang: "zh_CN",
      })
    }
    for (const [title, description] of data.en) {
      newMasks.push({
        name: title,
        description,
        lang: "en",
      })
    }
    masks.value.push(...newMasks.filter((m) => m.name))
    masks.value.sort((a, b) => {
      if (a.lang === settings.language) {
        return -1
      } else {
        return 1
      }
    })
  }
  onMounted(() => {
    load().then((r) => {})
  })
  return {
    masks,
    load,
  }
})
