import { defineStore } from "pinia"
import { useSettingStore } from "~/composables/settings"
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
  const maskRows = ref<TPrompts[][]>([])
  const searchedMasks = ref<TPrompts[]>([])
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
    masks.value.push(...newMasks.filter(m => m.name))
    masks.value.sort((a, b) => {
      if (a.lang === settings.language) {
        return -1
      } else {
        return 1
      }
    })
    searchedMasks.value = masks.value
  }
  const search = ({ q, language }: { q?: string; language?: string }) => {
    if (!q) {
      searchedMasks.value = masks.value
      return
    }
    searchedMasks.value = masks.value.filter((m) => {
      return m.name.includes(q) || m.description.includes(q)
    })
  }
  const computeMaskRows = ({ width, height }: { width: number; height: number }) => {
    if (!masks.value || masks.value.length === 0) { return }
    console.log("doCompute, ", width)

    const maxWidth = width
    const maxHeight = height * 0.6
    // why 120?
    const maskItemWidth = 120
    const maskItemHeight = 50

    const randomMask = () => masks.value[Math.floor(Math.random() * masks.value.length)]
    let maskIndex = 0
    const nextMask = () => masks.value[maskIndex++ % masks.value.length]

    const rows = Math.ceil(maxHeight / maskItemHeight)
    const cols = Math.ceil(maxWidth / maskItemWidth)

    maskRows.value = new Array(rows)
      .fill(0)
      .map((_, _i) => new Array(cols).fill(0).map((_, j) => (j < 1 || j > cols - 2 ? randomMask() : nextMask())))
  }

  onMounted(() => {
    load().then((r) => {})
  })

  return {
    masks,
    maskRows,
    load,
    computeMaskRows,
    searchedMasks,
    search,
  }
})
