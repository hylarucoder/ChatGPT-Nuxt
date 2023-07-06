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
    visible.value = routePrefix.some(prefix => route.path.startsWith(prefix))
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

  return {
    visible,
    show,
    hide,
  }
}
