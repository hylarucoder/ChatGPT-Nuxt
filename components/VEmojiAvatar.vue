<script setup lang="ts">
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
</script>
<template>
  <div class="relative">
    <Icon :name="selectedEmoji" size="1.5em" @click="showEmojiPicker = !showEmojiPicker" />
    <VEmojiPicker
      @onSelected="selectEmoji"
      v-if="showEmojiPicker"
      class="absolute right-0 p-2 bg-white border border-gray-200 rounded shadow"
    />
  </div>
</template>
