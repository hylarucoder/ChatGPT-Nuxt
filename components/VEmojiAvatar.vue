<script setup lang="ts">
import { ref } from "vue"

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})
const showEmojiPicker = ref(false)
const selectedEmoji = ref(props.modelValue)

const emits = defineEmits(["update:modelValue"])

const selectEmoji = (emoji: string) => {
  selectedEmoji.value = emoji
  showEmojiPicker.value = false
  emits("update:modelValue", emoji)
}
const elementRef = ref<HTMLElement | null>(null)

onClickOutside(elementRef, (event) => {
  // TODO: how to remove listener when component showEmojiPicker removed?
  if (!showEmojiPicker.value) return
  if (elementRef.value && !elementRef.value.contains(event.target)) {
    showEmojiPicker.value = false
  }
})
</script>
<template>
  <div class="relative" ref="elementRef">
    <Icon :name="selectedEmoji" size="1.5em" @click="showEmojiPicker = !showEmojiPicker" />
    <VEmojiPicker
      @onSelected="selectEmoji"
      v-if="showEmojiPicker"
      class="absolute right-0 rounded border border-gray-200 bg-white p-2 shadow"
    />
  </div>
</template>
