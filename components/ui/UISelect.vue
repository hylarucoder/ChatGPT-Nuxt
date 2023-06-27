<template>
  <select
    v-model="inputRef.val"
    class="items-center cursor-pointer inline-block h-10 pr-6 pl-3 text-center w-40 border-neutral-200 rounded-xl border"
  >
    <option class="text-sm h-8" v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, reactive, watch, onMounted } from "vue"

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
  val: "",
  errors: [],
})

onMounted(() => {
  inputRef.val = props.modelValue
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
