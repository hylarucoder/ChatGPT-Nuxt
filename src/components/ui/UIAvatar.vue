<template>
  <div class="z-[2]">
    <div class="cursor-pointer" @click="handleClick">
      <div class="flex items-center justify-center rounded-xl border border-neutral-200">
        <img :src="modelValue" class="h-5 w-5 overflow-clip align-middle text-[1.13rem]" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
