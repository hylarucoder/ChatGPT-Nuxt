import { DEFAULT_INPUT_TEMPLATE } from "~/constants"

export const ROLES = ["system", "user", "assistant"]
export type MessageRole = (typeof ROLES)[number]

const ENABLE_GPT4 = true

export const ALL_MODELS = [
  {
    name: "gpt-4",
    available: ENABLE_GPT4,
  },
  {
    name: "gpt-4-0314",
    available: ENABLE_GPT4,
  },
  {
    name: "gpt-4-0613",
    available: ENABLE_GPT4,
  },
  {
    name: "gpt-4-32k",
    available: ENABLE_GPT4,
  },
  {
    name: "gpt-4-32k-0314",
    available: ENABLE_GPT4,
  },
  {
    name: "gpt-4-32k-0613",
    available: ENABLE_GPT4,
  },
  {
    name: "gpt-3.5-turbo",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-0301",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-0613",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-16k",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-16k-0613",
    available: true,
  },
  {
    name: "qwen-v1", // 通义千问
    available: false,
  },
  {
    name: "ernie", // 文心一言
    available: false,
  },
  {
    name: "spark", // 讯飞星火
    available: false,
  },
  {
    name: "llama", // llama
    available: false,
  },
  {
    name: "chatglm", // chatglm-6b
    available: false,
  },
] as const

export type ModelType = (typeof ALL_MODELS)[number]["name"]

export enum SubmitKey {
  // eslint-disable-next-line no-unused-vars
  Enter = "Enter",
  // eslint-disable-next-line no-unused-vars
  CtrlEnter = "Ctrl + Enter",
  // eslint-disable-next-line no-unused-vars
  ShiftEnter = "Shift + Enter",
  // eslint-disable-next-line no-unused-vars
  AltEnter = "Alt + Enter",
  // eslint-disable-next-line no-unused-vars
  MetaEnter = "Meta + Enter",
}

export enum Theme {
  // eslint-disable-next-line no-unused-vars
  Auto = "auto",
  // eslint-disable-next-line no-unused-vars
  Dark = "dark",
  // eslint-disable-next-line no-unused-vars
  Light = "light",
}

export const Models = ["gpt-3.5-turbo", "gpt-4"] as const
export type ChatModel = ModelType
export const DEFAULT_CONFIG = {
  submitKey: SubmitKey.CtrlEnter as SubmitKey,
  avatar: "1f603",
  fontSize: 14,
  theme: Theme.Auto as Theme,
  tightBorder: true,
  sendPreviewBubble: false,
  sidebarWidth: 300,

  disablePromptHint: false,

  dontShowMaskSplashScreen: false, // dont show splash screen when create chat

  modelConfig: {
    model: "gpt-3.5-turbo" as ModelType,
    temperature: 0.5,
    max_tokens: 2000,
    presence_penalty: 0,
    frequency_penalty: 0,
    sendMemory: true,
    historyMessageCount: 4,
    compressMessageLengthThreshold: 1000,
    template: DEFAULT_INPUT_TEMPLATE,
  },
}

export type ChatConfig = typeof DEFAULT_CONFIG

// export type ChatConfigStore = ChatConfig & {
//   reset: () => void
//   update: (updater: (config: ChatConfig) => void) => void
// }

export type ModelConfig = ChatConfig["modelConfig"]

export interface RequestMessage {
  role: MessageRole
  content: string
}

export type MessageContext = {
  role: MessageRole
  content: string
}

const ALL_LANG = {
  en: "English",
  cn: "Chinese",
}

export type Lang = keyof typeof ALL_LANG

export type Mask = {
  id: number
  avatar: string
  name: string
  hideContext?: boolean
  context: MessageContext[]
  syncGlobalConfig?: boolean
  modelConfig: ModelConfig
  lang: Lang
  builtin: boolean
}

export type TChatMessage = RequestMessage & {
  date: string
  streaming?: boolean
  isError?: boolean
  id?: number
  model?: ModelType
  direction: "send" | "receive"
}

export interface ChatStat {
  tokenCount: number
  wordCount: number
  charCount: number
}

export interface ChatSession {
  id: number
  topic: string

  memoryPrompt: string
  messages: TChatMessage[]
  stat: ChatStat
  lastUpdate: number
  lastSummarizeIndex: number
  clearContextIndex?: number

  mask: Mask
}
