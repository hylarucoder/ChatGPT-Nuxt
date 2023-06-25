<template>
  <div class="items-center flex justify-between py-3 px-5 border-gray-200">
    <div class="items-center flex">
      <div class="text-[0.88rem]">
        <div class="font-bold">{{ title }}</div>
        <div class="text-xs" v-if="subtitle">{{ subtitle }}</div>
      </div>
    </div>
    <div class="flex text-[0.75rem] py-1 px-3 pr-3.5 border-neutral-200 rounded-xl">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue"

const props = defineProps({
  title: String,
  subtitle: String,
})
</script>
