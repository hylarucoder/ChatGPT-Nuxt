<template>
  <button
    class="items-center bg-white cursor-pointer flex flex-grow h-10 justify-center text-center p-3 rounded-xl truncate hover:bg-gray-200 drop-shadow-sm"
    :class="hasText ? 'w-32' : ''"
  >
    <div class="items-center flex justify-center">
      <SvgIcon :icon="icon" />
    </div>
    <div v-if="hasText" class="text-[0.75rem] ml-1 truncate">{{ text }}</div>
  </button>
</template>
<script lang="ts" setup>
import { defineComponent } from "vue"
import SvgIcon from "~/components/SvgIcon.vue"

const props = defineProps<{
  icon: string
  text?: string
}>()

const hasText = Boolean(props.text)

defineComponent({
  name: "IconButton",
})
</script>
