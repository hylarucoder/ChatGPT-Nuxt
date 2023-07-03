<script lang="ts" setup>
import { defineProps, defineEmits, computed } from "vue"

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  selector: {
    type: String,
    default: "body",
  },
  size: {
    type: String,
    default: "md",
  },
})

const emits = defineEmits(["close", "update:visible"])

function close() {
  console.log("close --->")
  emits("update:visible", false)
  emits("close")
}

const modalClass = computed(() => [
  {
    "max-w-sm": props.size === "sm",
    "max-w-md": props.size === "md",
    "max-w-lg": props.size === "lg",
  },
  "md:w-11/12",
])
</script>

<style scoped>
.bg-modal-overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
<template>
  <teleport :to="selector">
    <div v-if="visible" class="bg-modal-overlay fixed left-0 top-0 z-50 h-full w-full">
      <div class="rounded-lg bg-white md:overflow-hidden" :class="modalClass">
        <div class="flex items-center justify-between px-6 py-4">
          <h3 class="text-2xl font-medium text-gray-700">{{ title }}</h3>
          <button class="text-gray-600 hover:text-gray-800 focus:outline-none" @click="close">&times;</button>
        </div>
        <div class="p-6">
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>
