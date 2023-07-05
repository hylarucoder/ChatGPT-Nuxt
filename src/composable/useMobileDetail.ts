const routePrefix = ["/chat/session", "/chat/settings", "/chat/new", "/chat/plugins", "/chat/masks"]

export const useMobileFullScreen = () => {
  const { isMobile } = useDevice()
  const isMobileFullScreen = ref(false)
  const route = useRoute()

  const computeMobileFullScreen = () => {
    if (!isMobile) {
      isMobileFullScreen.value = false
      return
    }
    isMobileFullScreen.value = routePrefix.some((prefix) => route.path.startsWith(prefix))
  }

  onMounted(() => {
    computeMobileFullScreen()
  })
  watch(
    () => route.path,
    () => {
      computeMobileFullScreen()
    }
  )

  return {
    isMobileFullScreen,
  }
}
