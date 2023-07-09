<template>
  <button
    class="relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-visible rounded-md border border-neutral-200 p-3 text-center hover:bg-gray-200 dark:border-gray-500 dark:hover:bg-gray-800"
    @click="$emit('click')"
  >
    <div class="flex items-center justify-center">
      <span :class="icon" class="h-5 w-5" />
    </div>
    <div
      v-if="ping"
      class="absolute right-0 top-0 mr-[-2px] mt-[-2px] h-2 w-2 animate-ping rounded-full bg-green-500"
    />
  </button>
</template>
<script lang="ts" setup>
defineProps<{
  icon: string
  size: string
  ping?: boolean
}>()
defineEmits(["click"])
</script>
