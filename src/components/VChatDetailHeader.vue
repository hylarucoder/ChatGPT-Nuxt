<script lang="ts" setup>
import { useRoutedChatSession } from "~/composable/chat"
import { useTrans } from "~/composable/locales"

const chatSession = useRoutedChatSession()
const { t } = useTrans()
</script>
<template>
  <div class="relative flex w-screen items-center justify-between border-b border-gray-200 px-5 py-3.5 sm:w-full">
    <div class="truncate">
      <div class="cursor-pointer truncate text-[1.25rem] font-bold">{{ chatSession.session.topic }}</div>
      <div class="mt-1 text-[0.88rem]">
        {{ t("Chat.SubTitle", { count: chatSession.session.messagesCount }) }}
      </div>
    </div>
    <div class="flex w-[150px]">
      <div class="ml-3">
        <HeadIconButton icon="i-mdi-circle-edit-outline" @click="chatSession.rename()" size="1.2em" />
      </div>
      <div class="ml-3">
        <HeadIconButton icon="i-mdi-share-all-outline bg-black" size="1.2em" />
      </div>
      <div class="ml-3">
        <HeadIconButton icon="i-mdi-window-maximize" size="1.2em" />
      </div>
    </div>
  </div>
</template>
