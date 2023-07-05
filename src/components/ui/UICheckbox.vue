<template>
  <input
    type="checkbox"
    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded border-neutral-200 text-center align-middle"
    v-model="inputRef.val"
  />
</template>

<script lang="ts" setup>
import { reactive, watch } from "vue"

const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const inputRef = reactive({
  val: props.modelValue,
  errors: [],
})

const emit = defineEmits(["update:modelValue"])

watch(
  () => inputRef.val,
  (newVal) => {
    emit("update:modelValue", newVal)
  }
)
</script>
