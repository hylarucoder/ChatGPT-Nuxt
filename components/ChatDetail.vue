<template>
  <div class="flex flex-col w-full">
    <ChatDetailHeader />
    <div class="flex-grow w-full p-5 overflow-scroll">
      <div class="flex flex-row-reverse">
        <div class="items-end flex flex-col">
          <div class="mt-5">
            <div class="items-center flex justify-center rounded-xl border">
              <img
                src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f603.png"
                class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
              />
            </div>
          </div>
        </div>
      </div>

      <!--      <ChatMessageSend />-->
      <!--      <ChatMessageReceiver />-->

      <div class="text-zinc-800 flex w-full" v-for="message in currentSession.messages">
        <div class="items-start flex flex-col">
          <div class="mt-5">
            <div class="flex justify-center items-center">
              <SvgIcon icon="chatgpt" />
            </div>
          </div>
          <div
            style="user-select: text; word-break: break-word"
            class="bg-gray-100 text-[0.88rem] mt-3 p-3 border-neutral-200 rounded-xl border"
          >
            <div class="text-zinc-800 break-words">
              <MarkdownPreview :markdown="message.content" />
            </div>
          </div>
        </div>
      </div>

      <div class="text-zinc-800 flex w-full flex-row-reverse" v-for="message in currentSession.messages">
        <div class="items-end text-zinc-800 flex flex-col">
          <div class="mt-5">
            <div class="items-center flex justify-center border-neutral-200 rounded-xl border">
              <img
                src="https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f603.png"
                class="text-[1.13rem] h-5 align-middle w-5 overflow-clip"
              />
            </div>
          </div>
          <div
            style="user-select: text; word-break: break-word"
            class="bg-cyan-50 text-[0.88rem] mt-3 p-3 border-neutral-200 rounded-xl border"
          >
            <div class="text-zinc-800 break-words">
              <MarkdownPreview :markdown="message.content" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <ComposeView />
  </div>
</template>
<script setup lang="ts">
import ChatDetailHeader from "~/components/ChatDetailHeader.vue"
// import ChatMessageReceiver from "~/components/ChatMessageReceiver.vue"
// import ChatMessageSend from "~/components/ChatMessageSend.vue"
import ComposeView from "~/components/ComposeView.vue"
import MarkdownPreview from "~/components/MarkdownPreview"
import { useChatStore } from "~/composables/chat"

const chatStore = useChatStore()
const currentSession = chatStore.currentSession()
</script>
