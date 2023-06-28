<template>
  <input
    type="checkbox"
    class="items-center cursor-pointer flex h-4 justify-center text-center align-middle w-4 border-neutral-200 rounded"
    v-model="inputRef.val"
  />
</template>

<script lang="ts" setup>
import { defineProps, reactive, defineEmits, watch } from "vue"

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
