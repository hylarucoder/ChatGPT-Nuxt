<script lang="ts" setup>
import { TChatSession } from "~/composables/config/typing"

const props = defineProps<{
  session: TChatSession
}>()

const upHere = ref(false)
const emits = defineEmits(["onDeleteSession"])
const onDeleteSession = () => {
  emits("onDeleteSession", props.session.id)
}
</script>

<template>
  <NuxtLink
    class="chat-list-card relative"
    @mouseover="upHere = true"
    @mouseleave="upHere = false"
    :to="`/chat/session/` + session.id"
    active-class="chat-list-card__active"
  >
    <div class="text-[0.88rem] font-bold truncate">{{ session.topic }}</div>
    <div class="text-neutral-400 flex text-[0.75rem] justify-between mt-2">
      <div class="truncate">{{ session.messagesCount }} 条对话</div>
      <div class="truncate">{{ session.lastUpdate }}</div>
    </div>
    <VSvgIcon
      icon="close"
      @click="onDeleteSession"
      class="h-5 w-5 absolute top-2 right-2 text-neutral-400 cursor-pointer opacity-0 transition-opacity duration-200"
      :class="{ 'opacity-100': upHere }"
      v-if="upHere"
    />
  </NuxtLink>
</template>
<style>
.chat-list-card {
  @apply bg-white border-white block cursor-grab border-2 mb-3 p-3 rounded-xl hover:bg-gray-200 drop-shadow-sm hover:border-gray-200;
}

.chat-list-card__active {
  @apply border-green-500 !important;
}
</style>
