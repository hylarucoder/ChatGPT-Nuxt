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
    <div class="flex w-11/12 flex-col" :class="{ 'items-start': !isSend, 'items-end': isSend }" ref="messageRef">
      <div class="mt-5 flex">
        <div class="flex h-8 w-8 items-center justify-center rounded-xl border border-neutral-200">
          <Icon size="1.3em" class="text-center" :name="isSend ? settings.avatar : currentSession.session.avatar" />
        </div>
      </div>
      <div
        style="user-select: text; word-break: break-word"
        class="mt-1 rounded-xl border p-3 text-[0.88rem] sm:w-4/5"
        :class="{
          'border-neutral-200': true,
          'bg-gray-100': !isSend,
          'bg-cyan-50': isSend,
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
                style="word-break: break-word"
                class="absolute -top-8 right-0 flex select-text space-x-2 rounded text-xs text-zinc-800 ease-in"
                v-show="isHovered"
              >
                <div @click="copyToClipboard(message.content)" class="cursor-pointer opacity-50 hover:opacity-80">
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
              <div class="absolute -bottom-8 right-0 text-xs text-neutral-400" v-show="isHovered">
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
