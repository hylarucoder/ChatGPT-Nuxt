<template>
  <button
    class="items-center bg-white cursor-pointer flex flex-grow h-10 justify-center mr-3 text-center w-32 p-3 rounded-xl truncate"
  >
    <div class="items-center flex justify-center">
      <Icon :name="icon" color="black" />
    </div>
    <div class="text-[0.75rem] ml-1 truncate">{{ text }}</div>
  </button>
</template>
<script lang="ts" setup>
import { defineComponent } from "vue"

const props = defineProps<{
  icon: string
  text: string
}>()

defineComponent({
  name: "IconButton",
})
</script>
