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

      <ChatMessageSend />
      <ChatMessageReceiver />

      <p v-for="message in currentSession.messages">
        {{ message.content }}
      </p>
    </div>

    <ComposeView />
  </div>
</template>
<script setup lang="ts">
import ChatDetailHeader from "~/components/ChatDetailHeader.vue"
import ChatMessageReceiver from "~/components/ChatMessageReceiver.vue"
import ChatMessageSend from "~/components/ChatMessageSend.vue"
import ComposeView from "~/components/ComposeView.vue"
import { useChatStore } from "~/composables/chat"

const chatStore = useChatStore()
const currentSession = chatStore.currentSession()
</script>
