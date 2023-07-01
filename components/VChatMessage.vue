<script lang="ts" setup>
import { defineProps } from "vue"
import { TChatDirection } from "~/composables/config/typing"
import { useSettingStore } from "~/composables/settings"

const settingStore = useSettingStore()
const settings = settingStore.settings

defineProps({
  content: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div class="flex w-full text-zinc-800" v-if="direction === TChatDirection.RECEIVE">
    <div class="flex flex-col items-start">
      <div class="mt-5">
        <div class="flex items-center justify-center rounded-xl border border-neutral-200">
          <Icon class="h-5 w-5 overflow-clip align-middle text-[1.13rem]" :name="settings.avatar" />
        </div>
      </div>
      <div
        style="user-select: text; word-break: break-word"
        class="mt-3 rounded-xl border border-neutral-200 bg-gray-100 p-3 text-[0.88rem]"
      >
        <div class="max-w-[800px] break-words text-zinc-800">
          <MarkdownPreview :md="content" />
        </div>
      </div>
    </div>
  </div>
  <div class="flex w-full flex-row-reverse text-zinc-800" v-if="direction === TChatDirection.SEND">
    <div class="flex flex-col items-end text-zinc-800">
      <div class="mt-5">
        <div class="flex items-center justify-center rounded-xl border border-neutral-200">
          <Icon class="h-5 w-5 overflow-clip align-middle text-[1.13rem]" :name="settings.avatar" />
        </div>
      </div>
      <div
        style="user-select: text; word-break: break-word"
        class="mt-3 rounded-xl border border-neutral-200 bg-cyan-50 p-3 text-[0.88rem]"
      >
        <div class="max-w-[800px] break-words text-zinc-800">
          <MarkdownPreview :md="content" />
        </div>
      </div>
    </div>
  </div>
</template>
