<script lang="ts" setup>
import { useTrans } from "~/composable/locales"
import { useSidebar } from "~/composable/useSidebar"
import { TChatSession } from "~/constants/typing"
import { formatDateString } from "~/utils/date"

const { t } = useTrans()

const props = defineProps<{
  session: TChatSession
}>()
const sidebarUsed = useSidebar()

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
    @click="sidebarUsed.hide()"
    active-class="chat-list-card__active"
  >
    <div class="truncate text-[0.88rem] font-bold">{{ session.topic }}</div>
    <div class="mt-2 flex justify-between text-[0.75rem] text-neutral-400">
      <div class="truncate">{{ t("ChatItem.ChatItemCount", { count: session.messagesCount }) }}</div>
      <div class="truncate">{{ formatDateString(session.lastUpdate) }}</div>
    </div>
    <span
      size="1.3em"
      @click="onDeleteSession"
      class="i-mdi-close-circle-outline absolute right-2 top-2 h-5 w-5 cursor-pointer text-neutral-400 opacity-0 transition-opacity duration-200"
      :class="{ 'opacity-100': upHere }"
      v-if="upHere"
    />
  </NuxtLink>
</template>
<style>
.chat-list-card {
  @apply mb-3 block cursor-grab rounded-md border-2 border-white bg-white p-3 drop-shadow-sm hover:border-gray-200 hover:bg-gray-200;
}

.chat-list-card__active {
  @apply border-green-500 !important;
}
</style>
