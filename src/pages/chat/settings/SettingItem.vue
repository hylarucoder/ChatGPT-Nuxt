<script lang="ts" setup>
defineProps({
  title: String,
  subtitle: String,
})
</script>
<template>
  <div class="flex items-center justify-between border-gray-200 py-3 pl-5 pr-2">
    <div class="flex items-center">
      <div class="text-[0.88rem]">
        <div class="font-bold">
          {{ title }}
        </div>
        <div v-if="subtitle" class="text-xs">
          {{ subtitle }}
        </div>
      </div>
    </div>
    <div class="flex rounded-md border-neutral-200 px-3 py-1 pr-3.5 text-[0.75rem]">
      <slot />
    </div>
  </div>
</template>
