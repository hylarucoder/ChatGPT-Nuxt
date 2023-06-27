<template>
  <div class="z-[2]">
    <div class="cursor-pointer" @click="handleClick">
      <div class="items-center flex justify-center border-neutral-200 rounded-xl border">
        <img :src="modelValue" class="text-[1.13rem] h-5 align-middle w-5 overflow-clip" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue"

defineProps({
  modelValue: {
    type: String,
    default: "",
  },
})

const handleClick = () => {
  emit("click")
  // const newAvatar = ""
  // emit("update:modelValue", newAvatar)
}

const emit = defineEmits(["click", "update:modelValue"])
</script>
