<script lang="ts" setup>
import { getRandomEmoji } from "~/utils/emoji"

defineProps<{
  icon: string
  text: string
}>()
</script>
<template>
  <div
    class="mr-3 flex cursor-pointer items-center rounded-md border border-neutral-200 bg-white px-3.5 py-3 transition-transform duration-200 hover:scale-110 hover:border-green-600"
  >
    <div class="flex items-center justify-center">
      <Icon size="1.1em" class="h-5 w-5 overflow-clip align-middle text-[1.13rem]" :name="getRandomEmoji(text)" />
    </div>
    <div class="ml-3 truncate text-[0.88rem]">{{ text }}</div>
  </div>
</template>
