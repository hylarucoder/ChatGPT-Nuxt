import { TPrompts } from "./mask"

export function useMaskGroup(masks: TPrompts[]) {
  const groups = ref<TPrompts[][]>()

  const computeGroup = () => {
    const appBody = document.getElementById("app-body")
    if (!appBody || masks.length === 0) return

    const rect = appBody.getBoundingClientRect()
    const maxWidth = rect.width
    const maxHeight = rect.height * 0.6
    const maskItemWidth = 150
    const maskItemHeight = 50

    const randomMask = () => masks[Math.floor(Math.random() * masks.length)]
    let maskIndex = 0
    const nextMask = () => masks[maskIndex++ % masks.length]

    const rows = Math.ceil(maxHeight / maskItemHeight)
    const cols = Math.ceil(maxWidth / maskItemWidth)

    const newGroups = new Array(rows)
      .fill(0)
      .map((_, _i) => new Array(cols).fill(0).map((_, j) => (j < 1 || j > cols - 2 ? randomMask() : nextMask())))

    groups.value = newGroups
  }

  watchEffect(() => {
    computeGroup()

    window.addEventListener("resize", computeGroup)
    return () => window.removeEventListener("resize", computeGroup)
  })

  return { groups, computeGroup }
}
