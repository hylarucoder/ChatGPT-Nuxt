<script lang="ts" setup>
const props = defineProps<{
  icon: string
  text?: string
  size?: string
}>()

const hasText = Boolean(props.text)
</script>
<template>
  <button
    class="flex h-10 flex-grow cursor-pointer items-center justify-center truncate rounded-md bg-white p-3 text-center drop-shadow-sm hover:bg-gray-200"
    :class="hasText ? 'w-32' : ''"
  >
    <div class="flex items-center justify-center">
      <span :class="icon" class="h-4 w-4" />
    </div>
    <div v-if="hasText" class="ml-1 truncate text-[0.75rem]">{{ text }}</div>
  </button>
</template>
