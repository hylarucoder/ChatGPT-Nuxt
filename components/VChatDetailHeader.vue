<script lang="ts" setup>
const currentChat = useRoutedChatSession()
</script>
<template>
  <div class="relative flex items-center justify-between border border-gray-200 px-5 py-3.5">
    <div class="truncate">
      <div class="cursor-pointer truncate text-[1.25rem] font-bold">{{ currentChat.session.topic }}</div>
      <div class="mt-1 text-[0.88rem]">与 ChatGPT 的 {{ currentChat.session.messagesCount }} 条对话</div>
    </div>
    <div class="flex w-[150px]">
      <div class="ml-3">
        <button
          class="flex h-10 w-10 cursor-pointer items-center justify-center truncate rounded-xl border border-neutral-200 p-3 text-center hover:bg-gray-200"
          @click="currentChat.rename()"
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
