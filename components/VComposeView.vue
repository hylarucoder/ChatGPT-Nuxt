<script lang="ts" setup>
import { useChatStore } from "~/composables/chat"

const chatStore = useChatStore()
const settingStore = useSettingStore()
const currentSession = chatStore.routeCurrentSession()

currentSession.composeInput

const setting = settingStore.settings

const handleKeyDown = (event) => {
  const targetKeyMap = keyMaps.find((keyMap) => keyMap.label === setting.sendKey)

  if (targetKeyMap) {
    const allKeysMatched = targetKeyMap.keys.every((key) => event.getModifierState(key) || event.key === key)

    if (allKeysMatched) {
      event.preventDefault()
      composeNewMessage()
    }
  }
}

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
  <div class="relative flex-col rounded-xl border p-3">
    <div class="flex flex-wrap">
      <div class="mb-3 mr-1 flex cursor-pointer items-center rounded-2xl border px-3 py-1 text-[0.75rem]">
        <VSvgIcon icon="bottom" />
      </div>
      <div class="mb-3 mr-1 flex cursor-pointer items-center rounded-2xl border px-3 py-1 text-[0.75rem]">
        <VSvgIcon icon="auto" />
      </div>
      <div class="mb-3 mr-1 flex cursor-pointer items-center rounded-2xl border px-3 py-1 text-[0.75rem]">
        <VSvgIcon icon="prompt" />
      </div>
      <div class="mb-3 mr-1 flex cursor-pointer items-center rounded-2xl border px-3 py-1 text-[0.75rem]">
        <VSvgIcon icon="mask" />
      </div>
      <div class="mb-3 flex cursor-pointer items-center rounded-2xl border px-3 py-1 text-[0.75rem]">
        <VSvgIcon icon="break" />
      </div>
    </div>
    <div class="flex flex-grow">
      <textarea
        class="relative h-24 w-full cursor-text break-words rounded-xl border"
        :placeholder="setting.sendKey + ' 发送'"
        v-model="currentSession.composeInput"
        @keydown="handleKeyDown"
      />
      <button
        @click="composeNewMessage"
        :disabled="!currentSession.composeInput.trim()"
        class="absolute bottom-4 right-4 flex h-10 cursor-pointer items-center justify-center truncate rounded-xl bg-emerald-400 px-4 py-4 text-center text-white"
        :class="{ 'bg-gray-400': !currentSession.composeInput.trim() }"
      >
        <div class="flex items-center justify-center">
          <VSvgIcon icon="send-white" />
        </div>
        <div class="ml-1 truncate text-[0.75rem]">发送</div>
      </button>
    </div>
  </div>
</template>
