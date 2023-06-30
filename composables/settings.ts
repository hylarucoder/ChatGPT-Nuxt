import { defineStore } from "pinia"
import { reactive } from "vue"
import { StoreKey } from "~/constants"

export interface TSelectOption {
  label: string
  value: string | number
}

export const keyMaps = [
  {
    label: "Enter",
    keys: ["Enter"],
  },
  {
    label: "Ctrl + Enter",
    keys: ["Control", "Enter"],
  },
  {
    label: "Shift + Enter",
    keys: ["Shift", "Enter"],
  },
  {
    label: "Alt + Enter",
    keys: ["Alt", "Enter"],
  },
]

// use label as key and value

const sendKeyOptions: TSelectOption[] = keyMaps.map((keyMap) => {
  return {
    label: keyMap.label,
    value: keyMap.label,
  }
})
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

const defaultSettings = {
  avatar: "🙂",
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
  latestCommitDate: "",
  remoteLatestCommitDate: "",
  hasNewVersion: false,
}
export const useSettingStore = defineStore(
  StoreKey.Setting,
  () => {
    const settings = reactive(defaultSettings)
    const settingOptions = reactive({
      sendKey: sendKeyOptions,
      theme: themeOptions,
      language: languageOptions,
      model: modelOptions,
    })
    const owner = "hylarucoder"
    const repo = "ChatGPT-Nuxt"
    const branch = "main"
    const url = `https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}&per_page=1`
    const runtimeConfig = useRuntimeConfig()

    const fetchRemoteLatestCommitDate = () => {
      console.log("fetchRemoteLatestCommitDate", runtimeConfig.public)
      if (runtimeConfig.public.LATEST_COMMIT_DATE) {
        settings.latestCommitDate = runtimeConfig.public.LATEST_COMMIT_DATE as string
        settings.hasNewVersion = settings.latestCommitDate < settings.remoteLatestCommitDate
      }
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const date = data[0].commit.author.date
          settings.remoteLatestCommitDate = date.slice(0, 10).replace(/-/g, "")
        })
        .catch((error) => console.error(error))
    }
    return {
      settings,
      settingOptions,
      fetchRemoteLatestCommitDate,
    }
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
)
