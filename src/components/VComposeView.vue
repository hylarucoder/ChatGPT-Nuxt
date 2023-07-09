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

const doMessaging = ref(false)
const composeNewMessage = () => {
  const input = chatSession.session.composeInput
  if (isEmptyInput(input)) {
    return
  }
  doMessaging.value = true
  chatSession.onNewMessage(input)
  chatSession.session.composeInput = ""
  doMessaging.value = false
}
</script>
<template>
  <div class="relative flex-col rounded-md border-t p-3 dark:border-gray-600">
    <div class="flex flex-wrap">
      <div
        class="mb-3 mr-1 flex cursor-pointer items-center rounded-md border px-3 py-1 text-[0.75rem] hover:bg-gray-200 dark:border-gray-600"
      >
        <span class="i-mdi-robot-excited-outline" size="1.4em" />
      </div>
    </div>
    <div class="flex flex-grow">
      <div class="min-h-24 w-full">
        <UTextarea
          v-model="chatSession.session.composeInput"
          autoresize
          :placeholder="`[` + setting.sendKey + ']' + ' to Send'"
          @keydown="handleKeyDown"
        />
      </div>
      <div
        class="absolute bottom-3 right-0 flex h-10 cursor-pointer items-center justify-center truncate rounded-md px-4 py-4 text-center text-white"
      >
        <UButton
          :loading="doMessaging"
          icon="i-lucide-send"
          :disabled="isEmptyInput(chatSession.session.composeInput)"
          @click="composeNewMessage"
        >
          {{ t("Chat.Send") }}
        </UButton>
      </div>
    </div>
  </div>
</template>
