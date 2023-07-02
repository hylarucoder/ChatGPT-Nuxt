import { defineStore } from "pinia"
import { ComputedRef, ref } from "vue"
import { useSettingStore } from "~/composables/settings"
import { DEFAULT_INPUT_TEMPLATE, StoreKey } from "~/constants"
import { fetchStream } from "~/constants/api"
import { TChatDirection, TChatSession, TMask } from "~/constants/typing"
import { getUtcNow } from "~/utils/date"
import { debounce } from "~/utils/debounce"

function makeEmptySession(s: number): TChatSession {
  const session: TChatSession = {
    id: s.toString(),
    topic: "New Session",
    memoryPrompt: "Welcome to the chat room!",
    composeInput: "",
    messagesCount: 1,
    messages: [
      {
        role: "system",
        content: "Welcome to the chat room!",
        date: "2021-06-13T15:00:00.000Z",
        direction: TChatDirection.RECEIVE,
        streaming: false,
        isError: false,
        id: s,
      },
    ],
    stat: {
      tokenCount: 0,
      wordCount: 0,
      charCount: 0,
    },
    lastUpdate: getUtcNow(),
    lastSummarizeIndex: 0,
    mask: {
      id: s,
      avatar: "🐻",
      name: "Demo",
      context: [],
      lang: "en",
      builtin: true,
    },
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 0.5,
      maxTokens: 2000,
      presencePenalty: 0,
      // frequencyPenalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
      template: DEFAULT_INPUT_TEMPLATE,
    },
  }
  return session
}

interface ChatSessionStorage {
  sessions: TChatSession[]
  sessionGid: number
}

const defaultChatSessionStorage: ChatSessionStorage = {
  sessions: [],
  sessionGid: 10000,
}

export const loadFromLocalStorage = (
  key: string,
  defaultValue: ChatSessionStorage = defaultChatSessionStorage
): ChatSessionStorage => {
  const storedValue = localStorage.getItem(key)
  if (storedValue) {
    try {
      return JSON.parse(storedValue)
    } catch (e) {
      return defaultValue
    }
  }
  return defaultValue
}

const saveToLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(StoreKey.ChatSession, JSON.stringify(value))
}

export const useChatStore = defineStore(StoreKey.Chat, () => {
  const sessionGid = ref(0)
  const sessions = ref<TChatSession[]>([])
  const settingStore = useSettingStore()

  const loadAll = async () => {
    const loaded = loadFromLocalStorage(StoreKey.ChatSession, {
      sessions: [],
      sessionGid: 10000,
    })
    sessions.value = loaded.sessions
    sessionGid.value = loaded.sessionGid
  }

  const saveAll = debounce(() => {
    saveToLocalStorage(StoreKey.ChatSession, {
      sessions: sessions.value,
      sessionGid: sessionGid.value,
    })
  }, 1000)

  const clearSessions = () => {
    sessions.value = []
  }

  const moveSession = (from: any, to: any) => {
    const session = sessions.value.splice(from, 1)[0]
    sessions.value.splice(to, 0, session)
  }

  const newSession = (mask?: TMask): TChatSession => {
    const session = makeEmptySession(++sessionGid.value)
    sessions.value.unshift(session)
    saveAll()
    return session
  }

  const deleteSession = (id: string) => {
    // remove session by id
    const index = sessions.value.findIndex((s) => s.id === id)
    sessions.value.splice(index, 1)
    saveAll()
  }

  const currentSession = (sid: string): TChatSession | undefined => {
    const currentSessions = sessions.value.filter((s) => s.id === sid)
    return currentSessions[0]
  }

  const routeCurrentSession = (): TChatSession => {
    const route = useRoute()
    // @ts-ignore
    return <TChatSession>currentSession(route.params?.sid as string)
  }

  const nextSession = (delta: number) => {
    // Add your logic for navigating to the next session
    console.log("nextSession", delta)
  }

  const onUserInput = async (content: string) => {
    // Add your logic for handling user input
    console.log("nextSession", content)
  }

  const summarizeSession = () => {
    // Add your logic for summarizing the session
  }

  const updateStat = (message: string) => {
    // Add your logic for updating stats based on a message
    console.log("nextSession", message)
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
  }

  return {
    sessions,
    loadAll,
    saveAll,
    clearSessions,
    moveSession,
    newSession,
    deleteSession,
    currentSession,
    routeCurrentSession,
    nextSession,
    onUserInput,
    summarizeSession,
    updateStat,
    resetSession,
    getMessagesWithMemory,
    getMemoryPrompt,
    clearAllData,
  }
})

// share chat session between routes and components
const cachedChatSession = new Map<string, TUseChatSession>()

interface TUseChatSession {
  session: TChatSession
  isEmptyInput: ComputedRef<boolean>
  onUserInput: (content: string) => Promise<void>
  rename: () => void
  onNewMessage: (message: string) => void
  deleteMessage: (id: number) => void
}

export const useRoutedChatSession = (): TUseChatSession => {
  const route = useRoute()
  // @ts-ignore
  const sid = route.params?.sid
  return useChatSession(sid)
}

export const loadSessionFromLocalStorage = (sid: string): TChatSession | null => {
  const chatSessionStorage = loadFromLocalStorage(StoreKey.ChatSession, defaultChatSessionStorage)
  const session = chatSessionStorage.sessions.find((s) => s.id === sid)
  if (session) {
    return session
  }
  return null
}

export const saveSessionToLocalStorage = (newSession: TChatSession): void => {
  const chatSessionStorage = loadFromLocalStorage(StoreKey.ChatSession, defaultChatSessionStorage)

  const existingSessionIndex = chatSessionStorage.sessions.findIndex((s) => s.id === newSession.id)

  if (existingSessionIndex !== -1) {
    chatSessionStorage.sessions[existingSessionIndex] = newSession
    console.log("find", chatSessionStorage.sessions[existingSessionIndex])
  } else {
    chatSessionStorage.sessions.push(newSession)
    console.log("reuse", chatSessionStorage.sessions[existingSessionIndex])
  }

  saveToLocalStorage(StoreKey.ChatSession, chatSessionStorage)
}

export const useChatSession = (sid: string): TUseChatSession => {
  if (cachedChatSession.has(sid)) {
    return cachedChatSession.get(sid) as TUseChatSession
  }
  const loaded = loadFromLocalStorage(StoreKey.ChatSession, {
    sessions: [] as TChatSession[],
    sessionGid: 10000,
  })
  const res = loaded.sessions.filter((s) => s.id === sid)[0]
  const session = reactive<TChatSession>({
    id: sid,
    topic: res.topic,
    latestMessageId: res.latestMessageId || 1000,
    messages: [],
    composeInput: res.composeInput,
    memoryPrompt: res.memoryPrompt,
    messagesCount: res.messagesCount,
    modelConfig: res.modelConfig,
    stat: res.stat,
    lastUpdate: res.lastUpdate,
    lastSummarizeIndex: res.lastSummarizeIndex,
    clearContextIndex: res.clearContextIndex,
    mask: res.mask,
  })
  session.messages.push(...res.messages)

  const debounceSave = debounce(
    () => {
      console.log("toRaw message before saving", toRaw(session.messages))
      saveSessionToLocalStorage(toRaw(session))
    },
    1000,
    false
  )

  const isEmptyInput = computed(() => {
    return session.composeInput.trim().length === 0
  })

  const onNewMessage = (message: string) => {
    // latest 4 messages
    const lastMessages = session.messages.slice(-4).map((message) => {
      return {
        role: message.role,
        content: message.content,
      }
    })
    const payload = {
      messages: [
        ...lastMessages,
        {
          role: "user",
          content: message,
        },
      ],
      model: "gpt-3.5-turbo",
      presence_penalty: session.modelConfig.presencePenalty,
      stream: true,
      temperature: session.modelConfig.temperature,
    }
    const latestMessage = session.messages[session.messages.length - 1]
    if (latestMessage) {
      session.latestMessageId = latestMessage.id!
    }

    session.latestMessageId++
    session.messages.push({
      role: "user",
      content: message,
      date: new Date().toISOString(),
      direction: TChatDirection.SEND,
      streaming: false,
      isError: false,
      id: session.latestMessageId,
    })
    session.latestMessageId++
    const newMessage = {
      role: "user",
      content: "...",
      date: new Date().toISOString(),
      direction: TChatDirection.RECEIVE,
      streaming: false,
      isError: false,
      id: session.latestMessageId,
    }
    session.messages.push(newMessage)
    session.messagesCount = session.messages.length
    console.log("session.messages", toRaw(session.messages))
    const nMessage = session.messages[session.messages.length - 1]
    let loadingDots = 0
    const loadingInterval = setInterval(() => {
      loadingDots = (loadingDots + 1) % 3
      nMessage.content = ".".repeat(loadingDots + 1)
    }, 500)

    fetchStream(payload, (receivedData: string) => {
      clearInterval(loadingInterval) // 清除定时器
      nMessage.content = receivedData
      debounceSave()
    }).catch((error) => {
      clearInterval(loadingInterval) // 清除定时器
      console.error("Error occurred:", error)
    })
  }

  const onUserInput = async (content: string) => {
    // Add your logic for handling user input
    console.log("nextSession", content)
  }

  const rename = () => {
    const name = prompt("请输入会话名称", session.topic)
    if (name) {
      const oldName = session.topic
      session.topic = name || oldName
    }
  }

  const deleteMessage = (id: number) => {
    // check and delete message
    const index = session.messages.findIndex((message) => message.id === id)
    if (index !== -1) {
      session.messages.splice(index, 1)
      session.messagesCount = session.messages.length
      console.log("--->", toRaw(session.messages))
    }
    // chatStore.saveAll()
  }

  const result = {
    session,
    isEmptyInput,
    onUserInput,
    rename,
    onNewMessage,
    deleteMessage,
    // ... 其他与单个会话相关的方法
  }
  cachedChatSession.set(sid, result)
  return result
}
