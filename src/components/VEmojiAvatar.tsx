import { VEmojiPicker } from "#components"

export default defineComponent({
  name: "EmojiPicker",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const showEmojiPicker = ref(false)
    const selectedEmoji = ref(props.modelValue)

    const selectEmoji = (emoji: string) => {
      selectedEmoji.value = emoji
      showEmojiPicker.value = false
      emit("update:modelValue", emoji)
    }
    const elementRef = ref<HTMLElement | null>(null)

    onClickOutside(elementRef, (event) => {
      if (!showEmojiPicker.value) {
        return
      }
      if (elementRef.value && !elementRef.value.contains(event.target as Node)) {
        showEmojiPicker.value = false
      }
    })

    return () => (
      <div class="relative" ref={elementRef}>
        <span class="text-xl" onClick={() => (showEmojiPicker.value = !showEmojiPicker.value)}>
          {selectedEmoji.value}
        </span>
        {showEmojiPicker.value && (
          <VEmojiPicker
            onSelected={selectEmoji}
            class="absolute right-0 rounded border border-gray-200 bg-white p-2 shadow"
          />
        )}
      </div>
    )
  },
})
