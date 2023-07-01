<script lang="ts" setup>
import { defineProps } from "vue"
import { TChatDirection, TChatMessage } from "~/composables/config/typing"
import { useSettingStore } from "~/composables/settings"

const settingStore = useSettingStore()
const settings = settingStore.settings

const props = defineProps<{
  message: TChatMessage
}>()
const isSend = props.message.direction === TChatDirection.SEND
</script>
<template>
  <div class="flex w-full text-zinc-800" :class="{ 'flex-row-reverse': isSend }">
    <div class="flex flex-col" :class="{ 'items-start': !isSend, 'items-end': isSend }">
      <div class="mt-5 flex">
        <div class="flex items-center justify-center rounded-xl border border-neutral-200">
          <Icon class="h-5 w-5 overflow-clip align-middle text-[1.13rem]" :name="settings.avatar" />
        </div>
      </div>
      <div
        style="user-select: text; word-break: break-word"
        class="mt-3 rounded-xl border p-3 text-[0.88rem]"
        :class="{
          'border-neutral-200': true,
          'bg-gray-100': !isSend,
          'bg-cyan-50': isSend,
        }"
      >
        <div class="relative max-w-[800px] break-words text-zinc-800">
          <template v-if="!isSend">
            <div
              style="word-break: break-word"
              class="absolute -top-8 right-0 flex select-text flex-row-reverse rounded text-xs text-zinc-800"
            >
              <div class="cursor-pointer opacity-50 hover:opacity-80">Delete</div>
              <div class="mr-3 cursor-pointer opacity-50 hover:opacity-80">Retry</div>
              <div class="mr-3 cursor-pointer opacity-50 hover:opacity-80">Copy</div>
            </div>
            <div class="absolute -bottom-8 right-0 text-xs text-neutral-400">6/27/2023, 9:49:56 AM</div>
          </template>
          <MarkdownPreview :md="message.content" />
        </div>
      </div>
    </div>
  </div>
</template>
