import { defineStore } from "pinia"
import { ref } from "vue"
import { TMask, TChatDirection, TChatSession, TChatMessage } from "~/constants/typing"
import { useSettingStore } from "~/composables/settings"
import { DEFAULT_INPUT_TEMPLATE, StoreKey } from "~/constants"
import { fetchStream } from "~/constants/api"
import { getUtcNow } from "~/utils/date"

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

const debounce = <T extends (...args: any[]) => any>(func: T, delay: number) => {
  let timerId: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      func.apply(this, args)
    }, delay) as ReturnType<typeof setTimeout>
  }
}

const loadFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    return JSON.parse(localStorage.getItem(key) || "")
  } catch (e) {
    return defaultValue
  }
}

const saveToLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(StoreKey.ChatSession, JSON.stringify(value))
}

export const useChatStore = defineStore(StoreKey.Chat, () => {
  const sessionGid = ref(0)
  const sessions = ref([])
  const settingStore = useSettingStore()
  const settings = settingStore.settings

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
    const chatSessionStore = useChatSessionStore()
    const route = useRoute()
    // chatSessionStore.loadSession(route.params?.sid as string)
    // @ts-ignore
    return <TChatSession>currentSession(route.params?.sid as string)
  }

  const nextSession = (delta: number) => {
    // Add your logic for navigating to the next session
    console.log("nextSession", delta)
  }

  const onNewMessage = (currentSession: TChatSession, message: string) => {
    // latest 4 messages
    const lastMessages = currentSession.messages.slice(-4).map((message) => {
      return {
        role: message.role,
        content: message.content,
      }
    })
    console.log(toRaw(lastMessages))
    const payload = {
      messages: [
        ...lastMessages,
        {
          role: "user",
          content: message,
        },
      ],
      model: "gpt-3.5-turbo",
      presence_penalty: settings.presencePenalty,
      stream: true,
      temperature: settings.temperature,
    }
    // check if the last message
    let latestMessageId: number = 0
    const latestMessage = currentSession.messages[currentSession.messages.length - 1]
    if (latestMessage) {
      latestMessageId = latestMessage.id
    }

    latestMessageId++

    currentSession.messages.push({
      role: "user",
      content: message,
      date: new Date().toISOString(),
      direction: TChatDirection.SEND,
      streaming: false,
      isError: false,
      id: latestMessageId,
    })

    latestMessageId++

    const newMessage = {
      role: "user",
      content: "...",
      date: new Date().toISOString(),
      direction: TChatDirection.RECEIVE,
      streaming: false,
      isError: false,
      id: latestMessageId,
    }
    currentSession.messages.push(newMessage)
    currentSession.messagesCount = currentSession.messages.length
    const nMessage = currentSession.messages[currentSession.messages.length - 1]
    let loadingDots = 0
    const loadingInterval = setInterval(() => {
      loadingDots = (loadingDots + 1) % 3
      const dots = ".".repeat(loadingDots + 1)
      nMessage.content = dots
    }, 500)

    fetchStream(payload, (receivedData: string) => {
      clearInterval(loadingInterval) // 清除定时器
      nMessage.content = receivedData
      // TODO: performance issue
      saveAll()
    }).catch((error) => {
      clearInterval(loadingInterval) // 清除定时器
      console.error("Error occurred:", error)
    })
    saveAll()
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

  // const updateCurrentSession = (updater) => {
  //   updater(sessions.value[currentSessionIndex.value])
  // }
  //
  // const updateMessage = (sessionIndex, messageIndex, updater) => {
  //   const message = sessions.value[sessionIndex]?.messages[messageIndex]
  //   if (message) {
  //     updater(message)
  //   }
  // }

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
    onNewMessage,
    onUserInput,
    summarizeSession,
    updateStat,
    resetSession,
    getMessagesWithMemory,
    getMemoryPrompt,
    clearAllData,
  }
})

export const useChatSessionStore = defineStore(StoreKey.ChatSession, () => {
  const messageGid = ref(0)
  const messages = ref<TChatMessage[]>([])
  const messagesCount = ref(0)
  const settingStore = useSettingStore()
  const globalSettings = settingStore.settings

  const clearMessage = () => {
    messages.value = []
  }

  const deleteMessage = (id: string) => {
    // remove message by id
  }

  const onNewMessage = (message: string) => {
    // latest 4 messages
    const lastMessages = messages.value.slice(-4).map((message) => {
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
      presence_penalty: globalSettings.presencePenalty,
      stream: true,
      temperature: globalSettings.temperature,
    }
    // check if the last message
    let latestMessageId: number = 0
    const latestMessage = messages.value[messages.length - 1]
    if (latestMessage) {
      latestMessageId = latestMessage.id
    }

    latestMessageId++

    messages.value.push({
      role: "user",
      content: message,
      date: new Date().toISOString(),
      direction: TChatDirection.SEND,
      streaming: false,
      isError: false,
      id: latestMessageId,
    })

    latestMessageId++

    const newMessage = {
      role: "user",
      content: "...",
      date: new Date().toISOString(),
      direction: TChatDirection.RECEIVE,
      streaming: false,
      isError: false,
      id: latestMessageId,
    }
    messages.value.push(newMessage)
    messagesCount.value = messages.value.length
    const nMessage = messages.value[messages.value.length - 1]
    let loadingDots = 0
    const loadingInterval = setInterval(() => {
      loadingDots = (loadingDots + 1) % 3
      const dots = ".".repeat(loadingDots + 1)
      nMessage.content = dots
    }, 500)

    fetchStream(payload, (receivedData: string) => {
      clearInterval(loadingInterval) // 清除定时器
      nMessage.content = receivedData
    }).catch((error) => {
      clearInterval(loadingInterval) // 清除定时器
      console.error("Error occurred:", error)
    })
  }

  const onUserInput = async (content: string) => {
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

  return {
    messages,
    messageGid,
    onUserInput,
    summarizeSession,
    updateStat,
    resetSession,
  }
})
