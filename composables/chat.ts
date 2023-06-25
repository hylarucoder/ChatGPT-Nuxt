import { defineStore } from "pinia"

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

export const Models = ["gpt-3.5-turbo", "gpt-4"] as const
export type ChatModel = ModelType

export interface RequestMessage {
  role: MessageRole
  content: string
}

export type Mask = {
  id: number
  avatar: string
  name: string
  hideContext?: boolean
  // context: ChatMessage[]
  context: []
  syncGlobalConfig?: boolean
  modelConfig: ModelConfig
  lang: Lang
  builtin: boolean
}

export type ChatMessage = RequestMessage & {
  date: string
  streaming?: boolean
  isError?: boolean
  id?: number
  model?: ModelType
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
  messages: ChatMessage[]
  stat: ChatStat
  lastUpdate: number
  lastSummarizeIndex: number
  clearContextIndex?: number

  mask: Mask
}

export const useChatStore = defineStore("chat", () => {
  const sessions = ref([
    {
      id: 0,
      topic: "Welcome",
      memoryPrompt: "Welcome to the chat room!",
      messages: [
        {
          role: "system",
          content: "Welcome to the chat room!",
          date: "2021-06-13T15:00:00.000Z",
          streaming: false,
          isError: false,
          id: 0,
        },
        {
          role: "system",
          content: "我好!",
          date: "2021-06-13T15:00:00.000Z",
          streaming: false,
          isError: false,
          id: 0,
        },
      ],
      stat: {},
      lastUpdate: 0,
      lastSummarizeIndex: 0,
      mask: {
        id: 0,
        avatar: "https://cdn.jsdelivr.net/gh/elevenvac/elevenvac.github.io/assets/img/avatar.png",
      },
    },
  ])
  const currentSessionIndex = ref(0)
  const globalId = ref(0)

  const clearSessions = () => {
    sessions.value = []
  }

  const moveSession = (from, to) => {
    const session = sessions.value.splice(from, 1)[0]
    sessions.value.splice(to, 0, session)
  }

  const selectSession = (index) => {
    currentSessionIndex.value = index
  }

  const newSession = (mask) => {
    // Add your implementation for creating a new session with an optional mask
  }

  const deleteSession = (index) => {
    sessions.value.splice(index, 1)
  }

  const currentSession = (): ChatSession => {
    return sessions.value[currentSessionIndex.value]
  }

  const nextSession = (delta) => {
    // Add your logic for navigating to the next session
  }

  const onNewMessage = (message) => {
    // Add your logic for handling a new message
  }

  const onUserInput = async (content) => {
    // Add your logic for handling user input
  }

  const summarizeSession = () => {
    // Add your logic for summarizing the session
  }

  const updateStat = (message) => {
    // Add your logic for updating stats based on a message
  }

  const updateCurrentSession = (updater) => {
    updater(sessions.value[currentSessionIndex.value])
  }

  const updateMessage = (sessionIndex, messageIndex, updater) => {
    const message = sessions.value[sessionIndex]?.messages[messageIndex]
    if (message) {
      updater(message)
    }
  }

  const resetSession = () => {
    // Add your logic for resetting the session
  }

  const getMessagesWithMemory = () => {
    // Add your logic for getting messages with memory
  }

  const getMemoryPrompt = () => {
    // Add your logic for getting a memory prompt
  }

  const clearAllData = () => {
    sessions.value = []
    currentSessionIndex.value = 0
    globalId.value = 0
  }

  return {
    sessions,
    currentSessionIndex,
    globalId,
    clearSessions,
    moveSession,
    selectSession,
    newSession,
    deleteSession,
    currentSession,
    nextSession,
    onNewMessage,
    onUserInput,
    summarizeSession,
    updateStat,
    updateCurrentSession,
    updateMessage,
    resetSession,
    getMessagesWithMemory,
    getMemoryPrompt,
    clearAllData,
  }
})
