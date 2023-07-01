<script lang="ts" setup>
import { defineProps } from "vue"
import { TChatDirection, TChatMessage } from "~/constants/typing"
import { useSettingStore } from "~/composables/settings"

const settingStore = useSettingStore()
const settings = settingStore.settings

const props = defineProps<{
  message: TChatMessage
}>()
const isSend = props.message.direction === TChatDirection.SEND

const chatStore = useChatStore()
const currentStore = chatStore.routeCurrentSession()

const deleteMessage = (id: number) => {
  // check and delete message
  const index = currentStore.messages.findIndex((message) => message.id === id)
  if (index !== -1) {
    currentStore.messages.splice(index, 1)
    currentStore.messagesCount = currentStore.messages.length
  }
}

const copyToClipboard = (content: string) => {
  // copy
  const input = document.createElement("input")
  input.setAttribute("readonly", "readonly")
  input.setAttribute("value", content)
  document.body.appendChild(input)
  input.select()
  input.setSelectionRange(0, 9999)
  document.execCommand("copy")
  document.body.removeChild(input)
}

const messageRef = ref()
const isHovered = useElementHover(messageRef)
</script>
<template>
  <div class="flex w-full text-zinc-800" :class="{ 'flex-row-reverse': isSend }" ref="messageRef">
    <div class="flex flex-col" :class="{ 'items-start': !isSend, 'items-end': isSend }">
      <div class="mt-5 flex">
        <div class="flex h-8 w-8 items-center justify-center rounded-xl border border-neutral-200">
          <Icon size="1.4em" class="text-center" :name="settings.avatar" />
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
            <!-- animation show when hover -->
            <div
              style="word-break: break-word"
              class="absolute -top-8 right-0 flex select-text space-x-2 rounded text-xs text-zinc-800 ease-in"
              v-show="isHovered"
            >
              <div @click="copyToClipboard(message.content)" class="cursor-pointer opacity-50 hover:opacity-80">
                Copy
              </div>
              <div class="cursor-pointer opacity-50 hover:opacity-80" @click="deleteMessage(message.id)">Delete</div>
              <!--              <div class="cursor-pointer opacity-50 hover:opacity-80">Retry</div>-->
            </div>
            <div class="absolute -bottom-8 right-0 text-xs text-neutral-400" v-show="isHovered">{{ message.date }}</div>
          </template>
          <MarkdownPreview :md="message.content" />
        </div>
      </div>
    </div>
  </div>
</template>
