<script lang="ts" setup>
import { useRoutedChatSession } from "~/composable/chat"
import { useTrans } from "~/composable/locales"

const chatSession = useRoutedChatSession()
const { t } = useTrans()
</script>
<template>
  <div class="relative flex items-center justify-between border-b border-gray-200 px-5 py-3.5">
    <div class="truncate">
      <div class="cursor-pointer truncate text-[1.25rem] font-bold">{{ chatSession.session.topic }}</div>
      <div class="mt-1 text-[0.88rem]">
        {{ t("Chat.SubTitle", { count: chatSession.session.messagesCount }) }}
      </div>
    </div>
    <div class="flex w-[150px]">
      <div class="ml-3">
        <HeadIconButton icon="ph:pen-bold" @click="chatSession.rename()" size="1.2em" />
      </div>
      <div class="ml-3">
        <HeadIconButton icon="uil:share" size="1.2em" />
      </div>
      <div class="ml-3">
        <HeadIconButton icon="gg:maximize-alt" size="1.2em" />
      </div>
    </div>
  </div>
</template>
