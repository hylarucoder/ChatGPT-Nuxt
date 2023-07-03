<script lang="ts" setup>
import { useRoutedChatSession } from "~/composable/chat"

const chatSession = useRoutedChatSession()
import { TLocale } from "~/locales/en"

const { t } = useI18n<{ message: TLocale }>({
  useScope: "global",
})
</script>
<template>
  <div class="relative flex items-center justify-between border border-gray-200 px-5 py-3.5">
    <div class="truncate">
      <div class="cursor-pointer truncate text-[1.25rem] font-bold">{{ chatSession.session.topic }}</div>
      <div class="mt-1 text-[0.88rem]">
        {{ t("Chat.SubTitle", { count: chatSession.session.messagesCount }) }}
      </div>
    </div>
    <div class="flex w-[150px]">
      <div class="ml-3">
        <button
          class="flex h-10 w-10 cursor-pointer items-center justify-center truncate rounded-xl border border-neutral-200 p-3 text-center hover:bg-gray-200"
          @click="chatSession.rename()"
        >
          <div class="flex items-center justify-center">
            <VSvgIcon icon="rename" />
          </div>
        </button>
      </div>
      <div class="ml-3">
        <button
          class="flex h-10 w-10 cursor-pointer items-center justify-center truncate rounded-xl border border-neutral-200 p-3 text-center hover:bg-gray-200"
        >
          <div class="flex items-center justify-center">
            <VSvgIcon icon="share" />
          </div>
        </button>
      </div>
      <div class="ml-3">
        <button
          class="flex h-10 w-10 cursor-pointer items-center justify-center truncate rounded-xl border border-neutral-200 p-3 text-center hover:bg-gray-200"
        >
          <div class="flex items-center justify-center">
            <VSvgIcon icon="max" />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
