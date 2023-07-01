<template>
  <input
    v-model="inputRef.val"
    :placeholder="placeholder"
    type="number"
    class="h-9 w-20 cursor-text rounded-xl border border-neutral-200 px-3 text-center"
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
