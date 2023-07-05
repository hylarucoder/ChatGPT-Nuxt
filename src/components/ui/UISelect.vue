<template>
  <select
    v-model="inputRef.val"
    class="inline-block min-w-fit max-w-xs cursor-pointer items-center rounded-md border border-neutral-200 pb-1 pr-6 pt-1 text-center"
  >
    <option class="h-8 text-sm" v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script lang="ts" setup>
import { reactive, watch } from "vue"

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
