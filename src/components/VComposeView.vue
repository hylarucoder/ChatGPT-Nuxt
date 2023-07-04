<script lang="ts" setup>
import { useRoutedChatSession } from "~/composable/chat"
import { useTrans } from "~/composable/locales"
import { keyMaps, useSettingStore } from "~/composable/settings"

const settingStore = useSettingStore()
const setting = settingStore.settings
const chatSession = useRoutedChatSession()
const { t } = useTrans()

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

const isEmptyInput = (composeInput: string) => {
  return composeInput.trim().length === 0
}

const composeNewMessage = () => {
  const input = chatSession.session.composeInput
  if (isEmptyInput(input)) {
    return
  }
  chatSession.onNewMessage(input)
  chatSession.session.composeInput = ""
}
</script>
<template>
  <div class="relative flex-col rounded-xl border-t p-3">
    <div class="flex flex-wrap">
      <div
        class="mb-3 mr-1 flex cursor-pointer items-center rounded-2xl border px-3 py-1 text-[0.75rem] hover:bg-gray-200"
      >
        <Icon name="bx:bot" size="1.4em" />
      </div>
    </div>
    <div class="flex flex-grow">
      <textarea
        class="min-h-24 relative h-24 w-full cursor-text break-words rounded-xl border"
        :placeholder="`[` + setting.sendKey + ']' + ' to Send'"
        v-model="chatSession.session.composeInput"
        @keydown="handleKeyDown"
      />
      <button
        @click="composeNewMessage"
        class="absolute bottom-4 right-4 flex h-10 cursor-pointer items-center justify-center truncate rounded-xl px-4 py-4 text-center text-white"
        :disabled="isEmptyInput(chatSession.session.composeInput)"
        :class="{
          'bg-emerald-400': !isEmptyInput(chatSession.session.composeInput),
          'bg-gray-200': isEmptyInput(chatSession.session.composeInput),
        }"
      >
        <div class="flex items-center justify-center">
          <Icon name="lucide:send" size="1.0em" />
        </div>
        <div class="ml-1 truncate text-[0.75rem]">
          {{ t("Chat.Send") }}
        </div>
      </button>
    </div>
  </div>
</template>
