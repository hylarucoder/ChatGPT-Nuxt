<script lang="ts" setup>
import { useRoutedChatSession } from "~/composable/chat"
import { keyMaps, useSettingStore } from "~/composable/settings"

const settingStore = useSettingStore()
const setting = settingStore.settings
const chatSession = useRoutedChatSession()

const handleKeyDown = (event: any) => {
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
  if (chatSession.isEmptyInput.value) {
    return
  }
  const input = chatSession.session.composeInput
  chatSession.onNewMessage(input)
  chatSession.session.composeInput = ""
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
        class="min-h-24 relative h-24 w-full cursor-text break-words rounded-xl border"
        :placeholder="setting.sendKey + ' 发送'"
        v-model="chatSession.session.composeInput"
        @keydown="handleKeyDown"
      />
      <button
        @click="composeNewMessage"
        class="absolute bottom-4 right-4 flex h-10 cursor-pointer items-center justify-center truncate rounded-xl px-4 py-4 text-center text-white"
        :disabled="chatSession.isEmptyInput.value"
        :class="{ 'bg-emerald-400': !chatSession.isEmptyInput.value, 'bg-gray-200': chatSession.isEmptyInput.value }"
      >
        <div class="flex items-center justify-center">
          <VSvgIcon icon="send-white" />
        </div>
        <div class="ml-1 truncate text-[0.75rem]">发送</div>
      </button>
    </div>
  </div>
</template>
