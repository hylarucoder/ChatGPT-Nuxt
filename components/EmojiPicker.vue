<script lang="ts" setup>
import { ref, computed } from "vue"

type EmojiCategory = {
  title: string
  emojis: string[]
}

const searchQuery = ref("")
const recentEmojis = ref<string[]>([])
const selectedCategoryIndex = ref(0)

const emojiCategories: EmojiCategory[] = [
  {
    title: "Smileys",
    emojis: ["😀", "😃", "😄", "😁", "😆"],
  },
  {
    title: "Animals",
    emojis: ["🐶", "🐱", "🦊", "🐻", "🦁"],
  },
  // Add more categories as needed
]

const currentCategoryEmojis = computed(() => {
  return emojiCategories[selectedCategoryIndex.value].emojis.filter((emoji) => emoji.includes(searchQuery.value))
})

function filterEmojis() {
  selectedCategoryIndex.value = 0
}

function selectCategory(index: number) {
  selectedCategoryIndex.value = index
}

function selectEmoji(emoji: string) {
  if (!recentEmojis.value.includes(emoji)) {
    recentEmojis.value.unshift(emoji)
    if (recentEmojis.value.length > 10) {
      recentEmojis.value.pop()
    }
  }
  // Handle the selected emoji as needed
  console.log("Selected emoji:", emoji)
}
</script>
<template>
  <div class="emoji-picker">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search for emojis"
      class="border border-gray-300 p-2 rounded"
      @input="filterEmojis"
    />

    <div v-if="recentEmojis.length" class="mt-2">
      <h3 class="text-lg font-bold">Recently used</h3>
      <div class="emoji-list flex flex-wrap">
        <button v-for="emoji in recentEmojis" :key="emoji" class="p-1" @click="selectEmoji(emoji)">
          {{ emoji }}
        </button>
      </div>
    </div>

    <div class="tab-container mt-4">
      <button
        v-for="(category, index) in emojiCategories"
        :key="index"
        class="mr-2 p-2 bg-blue-500 text-white rounded"
        @click="selectCategory(index)"
      >
        {{ category.title }}
      </button>
    </div>

    <div class="emoji-container mt-4 grid grid-cols-5 gap-2">
      <button v-for="emoji in currentCategoryEmojis" :key="emoji" class="p-1" @click="selectEmoji(emoji)">
        {{ emoji }}
      </button>
    </div>
  </div>
</template>
