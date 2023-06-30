<script lang="ts" setup>
import { ref, computed } from "vue"

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

type EmojiCategory = {
  title: string
  icon: string
  emojis: string[]
}

const searchQuery = ref("")
const recentEmojis = ref<string[]>([])
const selectedCategoryIndex = ref(0)

const emojiCategories: EmojiCategory[] = [
  {
    icon: "mdi:recent",
    title: "Recently",
    emojis: ["🐶", "🐱", "🐭", "🐹", "🐰", "🐻", "🐼", "🐨"],
  },
  {
    icon: "mdi:emoticon-outline",
    title: "Smileys & Emotion",
    emojis: ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😉", "😍", "😘", "😜", "😝", "😋", "😛"],
  },
  {
    icon: "mdi:dog",
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
    icon: "mdi:hamburger",
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
    icon: "mdi:football",
    title: "Activities",
    emojis: ["⚽️", "🏀", "🏈", "⚾️", "🎾", "🏐", "🏉", "🥊", "🏋️‍♀️", "🤸", "🚴‍♀️", "🤹", "🎮", "🎲"],
  },
  {
    icon: "mdi:email-outline",
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
    icon: "mdi:earth",
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
    icon: "mdi:lightning-bolt-outline",
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
    icon: "mdi:flag-variant-outline",
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

const currentCategoryEmojis = computed(() => {
  return emojiCategories[selectedCategoryIndex.value].emojis.filter((emoji) => emoji.includes(searchQuery.value))
})

function selectCategory(index: number) {
  selectedCategoryIndex.value = index
}

const emit = defineEmits(["onSelected"])

function selectEmoji(emoji: string) {
  if (!recentEmojis.value.includes(emoji)) {
    recentEmojis.value.unshift(emoji)
    if (recentEmojis.value.length > 10) {
      recentEmojis.value.pop()
    }
  }
  emit("onSelected", emoji)
}
</script>
<template>
  <div class="rounded-md bg-white shadow-xs w-[320px]">
    <div class="grid grid-cols-9 gap-1">
      <div
        v-for="(category, index) in emojiCategories"
        :key="index"
        class="w-[30px] h-[30px] flex justify-center items-center cursor-pointer rounded hover:bg-gray-200"
        @click="selectCategory(index)"
        :class="{ 'bg-gray-300': selectedCategoryIndex === index }"
      >
        <Icon color="gray" :name="category.icon" size="2em">
          {{ category.title }}
        </Icon>
      </div>
    </div>

    <div class="grid grid-cols-9 gap-1 mt-1">
      <div
        class="w-[30px] h-[30px] flex justify-center items-center hover:bg-gray-200 rounded cursor-pointer"
        v-for="emoji in currentCategoryEmojis"
        :key="emoji"
      >
        <Icon
          :name="emoji"
          size="2em"
          style="font-size: 2em; line-height: 1em; width: 1em; height: 1em"
          @click="selectEmoji(emoji)"
        />
      </div>
    </div>
  </div>
</template>
