<template>
  <div class="flex flex-col w-full">
    <ChatDetailHeader />
    <div class="flex-grow w-full p-5 overflow-scroll" ref="el">
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

      <ChatMessage
        v-for="message in currentSession.messages"
        :content="message.content"
        :direction="message.direction"
      />
    </div>

    <ComposeView />
  </div>
</template>
<script setup lang="ts">
import { ref, watchEffect, onMounted } from "vue"
import ChatDetailHeader from "~/components/ChatDetailHeader.vue"
import ComposeView from "~/components/ComposeView.vue"
import { useChatStore } from "~/composables/chat"
import ChatMessage from "~/pages/chat/ChatMessage.vue"

const el = ref<HTMLElement | null>(null)
// const { x, y, isScrolling, arrivedState, directions } = useScroll(el, { behavior: "auto" })

const chatStore = useChatStore()
const currentSession = chatStore.currentSession()

const scrollToBottom = () => {
  // y.value = y.value + 1000
  // el.scrollIntoView({ behavior: "smooth" })
}

watchEffect(() => {
  // currentSession.messages
  // scrollToBottom()
  if (el.value) {
    el.value.scrollTop = el.value.scrollHeight
  }
})

onMounted(scrollToBottom)
</script>
