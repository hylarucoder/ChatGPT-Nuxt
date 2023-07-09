export default defineComponent({
  setup() {
    const router = useRouter()

    const handleBack = () => {
      router.back()
    }

    return () => (
      <main>
        <div>Not found</div>
        <button onClick={handleBack}>Back</button>
      </main>
    )
  },
})
