<template>
  <button
    class="flex h-10 w-10 cursor-pointer items-center justify-center truncate rounded-md border border-neutral-200 p-3 text-center hover:bg-gray-200 dark:border-gray-500 dark:hover:bg-gray-800"
    @click="$emit('click')"
  >
    <div class="flex items-center justify-center">
      <span :class="icon" class="h-5 w-5" />
    </div>
  </button>
</template>
<script lang="ts" setup>
defineProps<{
  icon: string
  size: string
}>()
defineEmits(["click"])
</script>
