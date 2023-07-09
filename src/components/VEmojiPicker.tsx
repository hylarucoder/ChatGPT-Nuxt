// VEmojiPicker.tsx
import { Icon } from "#components"

type EmojiCategory = {
  title: string
  icon: string
  emojis: string[]
}

const emojiCategories: EmojiCategory[] = [
  // ... (省略了emojiCategories数组的内容，直接复制并粘贴到这里)
]

export default defineComponent({
  name: "VEmojiPicker",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["onSelected"],
  setup(props, { emit }) {
    const searchQuery = ref("")
    const recentEmojis = ref<string[]>([])
    const selectedCategoryIndex = ref(0)

    const currentCategoryEmojis = computed(() => {
      return emojiCategories[selectedCategoryIndex.value].emojis.filter((emoji) => emoji.includes(searchQuery.value))
    })

    const selectCategory = (index: number) => {
      selectedCategoryIndex.value = index
    }

    const selectEmoji = (emoji: string) => {
      if (!recentEmojis.value.includes(emoji)) {
        recentEmojis.value.unshift(emoji)
        if (recentEmojis.value.length > 10) {
          recentEmojis.value.pop()
        }
      }
      emit("selected", emoji)
    }

    return () => (
      <div class="shadow-xs w-[320px] rounded-md bg-white">
        <div class="grid grid-cols-9 gap-1">
          {emojiCategories.map((category, index) => (
            <div
              key={index}
              class={`flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded hover:bg-gray-200 ${
                selectedCategoryIndex.value === index ? "bg-gray-300" : ""
              }`}
              onClick={() => selectCategory(index)}
            >
              <Icon color="gray" name={category.icon} size="2em">
                {category.title}
              </Icon>
            </div>
          ))}
        </div>

        <div class="mt-1 grid grid-cols-9 gap-1">
          {currentCategoryEmojis.value.map((emoji) => (
            <div
              key={emoji}
              class="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded hover:bg-gray-200"
            >
              <Icon
                name={emoji}
                size="2em"
                style="font-size: 2em; line-height: 1em; width: 1em; height: 1em"
                onClick={() => selectEmoji(emoji)}
              />
            </div>
          ))}
        </div>
      </div>
    )
  },
})
