<template>
  <NuxtLink class="chat-list-card" :to="link" active-class="chat-list-card__active">
    <div class="text-[0.88rem] font-bold truncate">{{ title }}</div>
    <div class="text-neutral-400 flex text-[0.75rem] justify-between mt-2">
      <div class="truncate">{{ count }} 条对话</div>
      <div class="truncate">{{ createdAt }}</div>
    </div>
  </NuxtLink>
</template>
<script lang="ts" setup>
const props = defineProps<{
  title: string
  count: number
  createdAt: string
  link: string
}>()
const title = props.title
</script>

<style>
.chat-list-card {
  @apply bg-white border-white block cursor-grab border-2 mb-3 p-3 rounded-xl hover:bg-gray-200 drop-shadow-sm hover:border-gray-200;
}

.chat-list-card__active {
  @apply border-green-500 !important;
}
</style>
