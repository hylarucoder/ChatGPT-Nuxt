export const useGlobalCssVar = () => {
  const windowWidth = useCssVar("--window-width")
  const windowHeight = useCssVar("--window-height")
  const sidebarWidth = useCssVar("--sidebar-width")

  const setupMobile = () => {
    windowWidth.value = "100vw"
    windowHeight.value = "100vh"
    sidebarWidth.value = "100vw"
  }

  return {
    setupMobile,
  }
}
