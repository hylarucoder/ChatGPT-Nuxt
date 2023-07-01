<template>
  <select
    v-model="inputRef.val"
    class="inline-block h-10 w-40 cursor-pointer items-center rounded-xl border border-neutral-200 pl-3 pr-6 text-center"
  >
    <option class="h-8 text-sm" v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, reactive, watch } from "vue"

export interface UISelectOption {
  label: string
  value: string | number
}

const props = defineProps({
  options: {
    type: Array as () => UISelectOption[],
    required: true,
  },
  placeholder: {
    type: String,
    default: "Select a value",
  },
  modelValue: {
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
    // Do something with the updated value.
  }
)
</script>
