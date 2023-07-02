import { defineStore } from "pinia"
import { StoreKey } from "~/constants"

interface TPromptsJson {
  cn: string[]
  en: string[]
}

enum TLang {
  cn,
  en,
}

export interface TPrompts {
  name: string
  description: string
  lang: TLang
}

export const useMasks = defineStore(StoreKey.Mask, () => {
  const masks = ref<TPrompts[]>([])
  const load = async () => {
    const newMasks = []
    const data = await $fetch<TPromptsJson>("/prompts.json")
    for (const [title, description] of data.cn) {
      newMasks.push({
        name: title,
        description,
        lang: TLang.cn,
      })
    }
    for (const [title, description] of data.en) {
      newMasks.push({
        name: title,
        description,
        lang: TLang.en,
      })
    }
    masks.value.push(...newMasks.filter((m) => m.name))
  }
  onMounted(() => {
    load().then((r) => {})
  })
  return {
    masks,
    load,
  }
})
