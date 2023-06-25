<template>
  <div
    class="bg-white cursor-grab mb-3 p-3 rounded-xl border-2 hover:bg-gray-200"
    :class="props.isActive ? 'border-green-500' : 'border-transparent'"
  >
    <div class="text-[0.88rem] font-bold truncate">{{ title }}</div>
    <div class="text-neutral-400 flex text-[0.75rem] justify-between mt-2">
      <div class="truncate">{{ props.count }} 条对话</div>
      <div class="truncate">{{ props.createdAt }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface PropsType {
  title: string
  count: number
  isActive: boolean
  createdAt: string
}

const props = defineProps<PropsType>()
const title = props.title
</script>
