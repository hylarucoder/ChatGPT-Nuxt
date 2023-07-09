<script lang="ts" setup>
import { useRoutedChatSession } from "~/composable/chat"
import { useSettingStore } from "~/composable/settings"
import { TChatDirection, TChatMessage } from "~/constants/typing"
import { copyToClipboard } from "~/utils/clipboard"
import { formatDateString } from "~/utils/date"

const { settings } = useSettingStore()

const props = defineProps<{
  message: TChatMessage
}>()

const isSend = props.message.direction === TChatDirection.SEND
const currentSession = useRoutedChatSession()
const messageRef = ref()
const isHovered = useElementHover(messageRef)
</script>
<template>
  <div class="flex w-full text-zinc-800" :class="{ 'flex-row-reverse': isSend }">
    <div ref="messageRef" class="flex w-11/12 flex-col" :class="{ 'items-start': !isSend, 'items-end': isSend }">
      <div class="mt-5 flex">
        <div class="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 dark:bg-gray-200">
          <Icon size="1.3em" class="text-center" :name="isSend ? settings.avatar : currentSession.session.avatar" />
        </div>
      </div>
      <div
        style="text-wrap: wrap; user-select: text; word-break: break-word"
        class="mt-1 break-words rounded-md border p-3 text-[0.88rem] dark:border-gray-500"
        :class="{
          'border-neutral-200': true,
          'bg-gray-100 dark:bg-gray-700': !isSend,
          'bg-cyan-50 dark:bg-gray-600': isSend,
        }"
      >
        <div class="relative max-w-[800px] break-words text-zinc-800">
          <template v-if="!isSend">
            <!-- animation show when hover -->
            <transition
              enter-from-class="translate-x-[5%] opacity-0"
              leave-to-class="translate-x-[5%] opacity-0"
              enter-active-class="transition duration-300"
              leave-active-class="transition duration-300"
            >
              <div
                v-show="isHovered"
                style="word-break: break-word"
                class="absolute -top-8 right-0 flex select-text space-x-2 rounded text-xs text-zinc-800 ease-in"
              >
                <div class="cursor-pointer opacity-50 hover:opacity-80" @click="copyToClipboard(message.content)">
                  Copy
                </div>
                <div
                  class="cursor-pointer opacity-50 hover:opacity-80"
                  @click="currentSession.deleteMessage(message.id!)"
                >
                  Delete
                </div>
                <!--              <div class="cursor-pointer opacity-50 hover:opacity-80">Retry</div>-->
              </div>
            </transition>
            <transition
              enter-from-class="translate-x-[6%] opacity-0"
              leave-to-class="translate-x-[6%] opacity-0"
              enter-active-class="transition duration-300"
              leave-active-class="transition duration-300"
            >
              <div v-show="isHovered" class="absolute -bottom-8 right-0 text-xs text-neutral-400">
                {{ formatDateString(message.date) }}
              </div>
            </transition>
          </template>
          <MarkdownPreview :md="message.content" />
        </div>
      </div>
    </div>
  </div>
</template>
