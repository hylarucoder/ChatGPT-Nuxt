<script lang="ts" setup>
import { ref } from "vue"
import { useChatStore } from "~/composables/chat"

const chatStore = useChatStore()
const settingStore = useSettingStore()
const currentSession = chatStore.routeCurrentSession()

currentSession.composeInput

const setting = settingStore.settings
const keys = useMagicKeys()
const shortCutSend = keys[setting.sendKey.replaceAll(" ", "")]

watch(shortCutSend, (v) => {
  if (v) {
    composeNewMessage()
  }
})

const composeNewMessage = () => {
  if (!currentSession.composeInput.trim()) {
    return
  }
  const input = currentSession.composeInput
  currentSession.composeInput = ""
  chatStore.onNewMessage(currentSession, input)
}
</script>
<template>
  <div class="flex-col p-3 rounded-xl border relative">
    <div class="flex flex-wrap">
      <div class="items-center cursor-pointer flex text-[0.75rem] mb-3 mr-1 py-1 px-3 rounded-2xl border">
        <VSvgIcon icon="bottom" />
      </div>
      <div class="items-center cursor-pointer flex text-[0.75rem] mb-3 mr-1 py-1 px-3 rounded-2xl border">
        <VSvgIcon icon="auto" />
      </div>
      <div class="items-center cursor-pointer flex text-[0.75rem] mb-3 mr-1 py-1 px-3 rounded-2xl border">
        <VSvgIcon icon="prompt" />
      </div>
      <div class="items-center cursor-pointer flex text-[0.75rem] mb-3 mr-1 py-1 px-3 rounded-2xl border">
        <VSvgIcon icon="mask" />
      </div>
      <div class="items-center cursor-pointer flex text-[0.75rem] mb-3 py-1 px-3 rounded-2xl border">
        <VSvgIcon icon="break" />
      </div>
    </div>
    <div class="flex flex-grow">
      <textarea
        class="relative cursor-text h-24 break-words w-full rounded-xl border"
        :placeholder="setting.sendKey + ' 发送'"
        v-model="currentSession.composeInput"
      />
      <button
        @click="composeNewMessage"
        :disabled="!currentSession.composeInput.trim()"
        class="absolute items-center bg-emerald-400 bottom-4 text-white cursor-pointer flex h-10 justify-center right-4 text-center px-4 py-4 rounded-xl truncate"
        :class="{ 'bg-gray-400': !currentSession.composeInput.trim() }"
      >
        <div class="items-center flex justify-center">
          <VSvgIcon icon="send-white" />
        </div>
        <div class="text-[0.75rem] ml-1 truncate">发送</div>
      </button>
    </div>
  </div>
</template>
