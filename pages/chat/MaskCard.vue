<template>
  <div
    class="items-center bg-white cursor-pointer flex mr-3 py-3 px-3.5 border-neutral-200 rounded-xl border hover:bg-gray-200"
  >
    <div class="items-center flex justify-center rounded-xl border">
      <img :src="icon" class="text-[1.13rem] h-5 align-middle w-5 overflow-clip" />
    </div>
    <div class="text-[0.88rem] ml-3 truncate">{{ text }}</div>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  icon: string
  text: string
}>()
</script>
