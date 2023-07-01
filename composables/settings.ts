import { defineStore } from "pinia"
import { reactive } from "vue"
import { ALL_MODELS, SubmitKey } from "~/constants/typing"
import { FETCH_COMMIT_URL, StoreKey } from "~/constants"

export interface TSelectOption {
  label: string
  value: string | number
}

export const keyMaps = [
  {
    label: SubmitKey.Enter,
    keys: ["Enter"],
  },
  {
    label: SubmitKey.CtrlEnter,
    keys: ["Control", "Enter"],
  },
  {
    label: SubmitKey.ShiftEnter,
    keys: ["Shift", "Enter"],
  },
  {
    label: SubmitKey.AltEnter,
    keys: ["Alt", "Enter"],
  },
]

// use label as key and value

export const sendKeyOptions: TSelectOption[] = keyMaps.map((keyMap) => {
  return {
    label: keyMap.label,
    value: keyMap.label,
  }
})
export const themeOptions: TSelectOption[] = [
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

export const languageOptions = [
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

export const modelOptions: TSelectOption[] = ALL_MODELS.map((option) => {
  return {
    label: option.label,
    value: option.value,
  }
})

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
    const runtimeConfig = useRuntimeConfig()

    const fetchRemoteLatestCommitDate = () => {
      if (runtimeConfig.public.LATEST_COMMIT_DATE) {
        settings.latestCommitDate = runtimeConfig.public.LATEST_COMMIT_DATE as string
        settings.hasNewVersion = settings.latestCommitDate < settings.remoteLatestCommitDate
      }
      fetch(FETCH_COMMIT_URL)
        .then((response) => response.json())
        .then((data) => {
          const date = data[0].commit.author.date
          settings.remoteLatestCommitDate = date.slice(0, 10).replace(/-/g, "")
        })
        .catch((error) => console.error(error))
    }
    return {
      settings,
      fetchRemoteLatestCommitDate,
    }
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
)
