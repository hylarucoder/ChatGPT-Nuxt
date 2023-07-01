import { DEFAULT_INPUT_TEMPLATE } from "~/constants/index"

export const ROLES = ["system", "user", "assistant"]
export type MessageRole = (typeof ROLES)[number]

export const ALL_MODELS = [
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
] as const

export type TModelType = (typeof ALL_MODELS)[number]["label"]

export enum SubmitKey {
  Enter = "Enter",
  CtrlEnter = "Ctrl + Enter",
  ShiftEnter = "Shift + Enter",
  AltEnter = "Alt + Enter",
}

export enum Theme {
  Auto = "auto",
  Dark = "dark",
  Light = "light",
}

export interface TModelConfig {
  model: TModelType
  temperature: number
  maxTokens: number
  presencePenalty: number
  // frequencyPenalty: number
  sendMemory: boolean
  historyMessageCount: number
  compressMessageLengthThreshold: number
  template: string
}

export interface TConfig {
  submitKey: SubmitKey
  avatar: string
  fontSize: number
  theme: Theme
  tightBorder: boolean
  sendPreviewBubble: boolean
  sidebarWidth: number
  disablePromptHint: boolean
  dontShowMaskSplashScreen: boolean
  modelConfig: TModelConfig
}

export const DEFAULT_CONFIG: TConfig = {
  submitKey: SubmitKey.CtrlEnter,
  avatar: "1f603",
  fontSize: 14,
  theme: Theme.Auto as Theme,
  tightBorder: true,
  sendPreviewBubble: false,
  sidebarWidth: 300,
  disablePromptHint: false,
  dontShowMaskSplashScreen: false, // dont show splash screen when create chat

  modelConfig: {
    model: "gpt-3.5-turbo" as TModelType,
    temperature: 0.5,
    maxTokens: 2000,
    presencePenalty: 0,
    frequencyPenalty: 0,
    sendMemory: true,
    historyMessageCount: 4,
    compressMessageLengthThreshold: 1000,
    template: DEFAULT_INPUT_TEMPLATE,
  },
}

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

export type TMask = {
  id: number
  avatar: string
  name: string
  hideContext?: boolean
  context: MessageContext[]
  syncGlobalConfig?: boolean
  lang: Lang
  builtin: boolean
}

export enum TChatDirection {
  // eslint-disable-next-line no-unused-vars
  SEND = "SEND",
  // eslint-disable-next-line no-unused-vars
  RECEIVE = "RECEIVE",
}

export type TChatMessage = RequestMessage & {
  date: string
  streaming?: boolean
  isError?: boolean
  id?: number
  model?: TModelType
  direction: TChatDirection
}

export interface TChatStat {
  tokenCount: number
  wordCount: number
  charCount: number
}

export interface TChatSession {
  id: string
  topic: string
  composeInput: string
  memoryPrompt: string
  messagesCount: number
  messages: TChatMessage[]
  stat: TChatStat
  modelConfig: TModelConfig
  lastUpdate: string
  lastSummarizeIndex: number
  clearContextIndex?: number
  mask: TMask
}
