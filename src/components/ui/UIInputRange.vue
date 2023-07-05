<template>
  <input type="range" :min="min" :max="max" :step="step" v-model="inputRef.val" />
</template>

<script lang="ts" setup>
import { reactive, watch, ref } from "vue"

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 99999,
  },
  step: {
    type: Number,
    default: 1,
  },
})

const inputRef = reactive({
  val: props.modelValue,
  errors: [],
})

const emit = defineEmits(["update:modelValue"])

const min = ref(props.min)
const max = ref(props.max)
const step = ref(props.step)

watch(
  () => inputRef.val,
  (newVal) => {
    emit("update:modelValue", newVal)
  }
)
</script>
