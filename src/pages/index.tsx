export default defineComponent({
  setup() {
    const router = useRouter()
    router.push("/chat/masks").then(() => {})

    return () => {
      return null
    }
  },
})
