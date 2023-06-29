<template>
  <div
    class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border hover:bg-gray-200"
  >
    <div class="items-center flex justify-center">
      <Icon class="text-[1.13rem] h-5 align-middle w-5 overflow-clip" :name="getRandomEmoji(text)" />
    </div>
    <div class="text-[0.88rem] ml-3 truncate">{{ text }}</div>
  </div>
</template>
<script lang="ts" setup>
import { getRandomEmoji } from "~/utils/emoji"

defineProps<{
  icon: string
  text: string
}>()
</script>
