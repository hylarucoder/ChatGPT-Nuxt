const routePrefix = ["/chat/session", "/chat/settings", "/chat/new", "/chat/plugins", "/chat/masks"]
const visible = ref(true)

export const useSidebar = () => {
  const { isMobile } = useDevice()
  const route = useRoute()

  const computeMobileFullScreen = () => {
    if (!isMobile) {
      visible.value = true
      return
    }
    visible.value = !routePrefix.some((prefix) => route.path.startsWith(prefix))
    console.log("hide sidebar", visible.value)
  }

  onMounted(() => {
    computeMobileFullScreen()
  })
  const show = () => {
    visible.value = true
  }
  const hide = () => {
    visible.value = false
  }

  const hideIfMobile = () => {
    if (!isMobile) {
      visible.value = true
      return
    }
    visible.value = false
  }

  return {
    visible,
    hideIfMobile,
    show,
    hide,
  }
}
