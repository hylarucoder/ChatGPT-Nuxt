import { defineStore } from "pinia"
import { reactive, watch } from "vue"
import { useStorage } from "@vueuse/core"

export interface TSelectOption {
  label: string
  value: string | number
}

const sendKeyOptions: TSelectOption[] = [
  {
    label: "Enter",
    value: "Enter",
  },
  {
    label: "Ctrl + Enter",
    value: "Ctrl + Enter",
  },
  {
    label: "Shift + Enter",
    value: "Shift + Enter",
  },
  {
    label: "Alt + Enter",
    value: "Alt + Enter",
  },
  {
    label: "Meta + Enter",
    value: "Meta + Enter",
  },
]
const themeOptions: TSelectOption[] = [
  {
    label: "Auto",
    value: "Auto",
  },
  {
    label: "Dark",
    value: "Dark",
  },
  {
    label: "Light",
    value: "Light",
  },
]

const languageOptions = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "简体中文",
    value: "cn",
  },
  {
    label: "繁體中文",
    value: "tw",
  },
  {
    label: "Français",
    value: "fr",
  },
  {
    label: "Español",
    value: "es",
  },
  {
    label: "Italiano",
    value: "it",
  },
  {
    label: "Türkçe",
    value: "tr",
  },
  {
    label: "日本語",
    value: "jp",
  },
  {
    label: "Deutsch",
    value: "de",
  },
  {
    label: "Tiếng Việt",
    value: "vi",
  },
  {
    label: "Русский",
    value: "ru",
  },
  {
    label: "Čeština",
    value: "cs",
  },
  {
    label: "한국어",
    value: "ko",
  },
]

const modelOptions: TSelectOption[] = [
  {
    label: "gpt-4",
    value: "gpt-4",
  },
  {
    label: "gpt-4-0314",
    value: "gpt-4-0314",
  },
  {
    label: "gpt-4-32k",
    value: "gpt-4-32k",
  },
  {
    label: "gpt-4-32k-0314",
    value: "gpt-4-32k-0314",
  },
  {
    label: "gpt-4-mobile",
    value: "gpt-4-mobile",
  },
  {
    label: "text-davinci-002-render-sha-mobile",
    value: "text-davinci-002-render-sha-mobile",
  },
  {
    label: "gpt-3.5-turbo",
    value: "gpt-3.5-turbo",
  },
  {
    label: "gpt-3.5-turbo-0301",
    value: "gpt-3.5-turbo-0301",
  },
  {
    label: "qwen-v1",
    value: "qwen-v1",
  },
  {
    label: "ernie",
    value: "ernie",
  },
  {
    label: "spark",
    value: "spark",
  },
  {
    label: "llama",
    value: "llama",
  },
  {
    label: "chatglm",
    value: "chatglm",
  },
]

const STORE_NAME = "settings"
export const useSettingStore = defineStore(STORE_NAME, () => {
  const settings = reactive(
    useStorage(STORE_NAME, {
      avatar: "https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/apple/64/1f603.png",
      sendKey: "Enter",
      theme: "Auto",
      language: "en",
      fontSize: 14,
      previewBubble: false,
      maskLaunchPage: false,
      model: "gpt-4",
      apiKey: "",
      maxTokens: 2000,
      temperature: 0.5,
      presencePenalty: 0.0,
      historyMessagesCount: 4,
      historyMessagesThreshold: 1000,
      historySummary: false,
      disableAutoCompletePrompt: false,
    })
  )
  const settingOptions = reactive({
    sendKey: sendKeyOptions,
    theme: themeOptions,
    language: languageOptions,
    model: modelOptions,
  })

  watch(settings, (newValue, oldValue) => {
    console.log("settings changed new", newValue)
    console.log("settings changed old", oldValue)
    localStorage.setItem(STORE_NAME, JSON.stringify(newValue))
  })

  return {
    settings,
    settingOptions,
  }
})
