export default defineComponent({
  setup() {
    const router = useRouter()
    router.push("/chat")

    return () => {
      return null
    }
  },
})
