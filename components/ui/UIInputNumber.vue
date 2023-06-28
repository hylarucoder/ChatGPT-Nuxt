<template>
  <input
    v-model="inputRef.val"
    :placeholder="placeholder"
    type="number"
    class="cursor-text h-9 px-3 text-center w-20 border-neutral-200 rounded-xl border"
  />
</template>

<script lang="ts" setup>
import { defineProps, watch, reactive, defineEmits } from "vue"

const props = defineProps({
  modelValue: {
    type: Number,
  },
  placeholder: {
    type: String,
    default: "",
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
