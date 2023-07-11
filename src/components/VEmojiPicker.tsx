type EmojiCategory = {
  title: string
  icon: string
  emojis: string[]
}

const emojiCategories: EmojiCategory[] = [
  {
    icon: "i-mdi-recent",
    title: "Recently",
    emojis: ["🐶", "🐱", "🐭", "🐹", "🐰", "🐻", "🐼", "🐨"],
  },
  {
    icon: "i-mdi-emoticon-outline",
    title: "Smileys & Emotion",
    emojis: ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😉", "😍", "😘", "😜", "😝", "😋", "😛"],
  },
  {
    icon: "i-mdi-dog",
    title: "Animals & Nature",
    emojis: [
      "🐶",
      "🐱",
      "🦁",
      "🐯",
      "🐴",
      "🐭",
      "🐹",
      "🦊",
      "🐻",
      "🐼",
      "🐨",
      "🐮",
      "🐷",
      "🐗",
      "🐔",
      "🐣",
      "🐸",
      "🐟",
      "🐠",
      "🐳",
      "🐬",
      "🐊",
      "🐢",
      "🐍",
      "🦕",
      "🦖",
      "🦜",
    ],
  },
  {
    icon: "i-mdi-hamburger",
    title: "Food & Drink",
    emojis: [
      "🍔",
      "🍟",
      "🍕",
      "🌭",
      "🥪",
      "🍣",
      "🍱",
      "🍛",
      "🍝",
      "🍜",
      "🍲",
      "🍔",
      "🍺",
      "🍻",
      "🍷",
      "🥤",
      "🧊",
      "🍩",
      "🍰",
      "🎂",
      "🍪",
      "🍫",
      "🍬",
      "🍭",
    ],
  },
  {
    icon: "i-mdi-football",
    title: "Activities",
    emojis: ["⚽️", "🏀", "🏈", "⚾️", "🎾", "🏐", "🏉", "🥊", "🏋️‍♀️", "🤸", "🚴‍♀️", "🤹", "🎮", "🎲"],
  },
  {
    icon: "i-mdi-email-outline",
    title: "Objects",
    emojis: [
      "☎️",
      "💻",
      "🖥",
      "🖨",
      "📱",
      "🎧",
      "🎤",
      "📷",
      "📹",
      "💡",
      "🔍",
      "🔐",
      "🚪",
      "💳",
      "💵",
      "🏺",
      "🔑",
      "🧸",
      "🎁",
    ],
  },
  {
    icon: "i-mdi-earth",
    title: "Travel & Places",
    emojis: [
      "🌍",
      "🌎",
      "🌏",
      "🌋",
      "🏜️",
      "🏕️",
      "🏞️",
      "🌅",
      "🌄",
      "🏰",
      "🌉",
      "🎡",
      "🎢",
      "🏟️",
      "🚂",
      "🛵",
      "🛴",
      "🏍️",
      "🚲",
      "🛬",
      "🚀",
    ],
  },
  {
    icon: "i-mdi-lightning-bolt-outline",
    title: "Symbols",
    emojis: [
      "❤️",
      "💔",
      "💭",
      "💬",
      "🔥",
      "🌟",
      "⭐️",
      "🌞",
      "🌚",
      "🌀",
      "🌈",
      "💡",
      "✨",
      "🎉",
      "🎊",
      "🎁",
      "🔨",
      "💣",
      "🚽",
      "🚪",
    ],
  },
  {
    icon: "i-mdi-flag-variant-outline",
    title: "Flags",
    emojis: [
      "🇨🇳",
      "🇺🇸",
      "🇬🇧",
      "🇯🇵",
      "🇰🇷",
      "🇿🇦",
      "🇪🇸",
      "🇫🇷",
      "🇩🇪",
      "🇮🇳",
      "🇲🇾",
      "🇳🇪",
      "🇵🇹",
      "🇷🇺",
      "🇸🇦",
      "🇸🇬",
      "🇹🇷",
      "🇻🇳",
      "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    ],
  },
]

export default defineComponent({
  name: "VEmojiPicker",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["selected"],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      <div class="shadow-xs z-10 w-[320px] rounded-md bg-white">
        <div class="grid grid-cols-9 gap-1">
          {emojiCategories.map((category, index) => (
            <div
              key={index}
              class={`flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded hover:bg-gray-200 ${
                selectedCategoryIndex.value === index ? "bg-gray-300" : ""
              }`}
              onClick={() => selectCategory(index)}
            >
              <span class={["text-2xl text-gray-500", `${category.icon}`]} />
            </div>
          ))}
        </div>

        <div class="mt-1 grid grid-cols-9 gap-1">
          {currentCategoryEmojis.value.map((emoji) => (
            <div
              key={emoji}
              class="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded hover:bg-gray-200"
            >
              <span
                style="font-size: 2em; line-height: 1em; width: 1em; height: 1em"
                onClick={() => selectEmoji(emoji)}
              >
                {emoji}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  },
})
