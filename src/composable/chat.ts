import { defineStore } from "pinia"
import { ComputedRef, ref } from "vue"
import { useSettingStore } from "~/composable/settings"
import { DEFAULT_INPUT_TEMPLATE, StoreKey } from "~/constants"
import { fetchStream } from "~/constants/api"
import { TChatDirection, TChatSession, TMask } from "~/constants/typing"
import { getUtcNow } from "~/utils/date"
import { debounce } from "~/utils/debounce"
import { loadFromLocalStorage, saveSessionToLocalStorage, saveToLocalStorage } from "./storage"

function makeEmptySession(s: number, simple: TSimple, mask?: TMask): TChatSession {
  const session: TChatSession = {
    id: s.toString(),
    topic: simple.topic,
    avatar: simple.avatar,
    memoryPrompt: "Welcome to the chat room!",
    composeInput: "",
    latestMessageId: 0,
    messagesCount: 2,
    messages: [],
    stat: {
      tokenCount: 0,
      wordCount: 0,
      charCount: 0,
    },
    lastUpdate: getUtcNow(),
    lastSummarizeIndex: 0,
    mask: mask,
    modelConfig: {
      model: "gpt-3.5-turbo",
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
  if (simple.description) {
    session.messages.push(
      ...[
        {
          role: "system",
          content: simple.description,
          date: getUtcNow(),
          direction: TChatDirection.SEND,
          streaming: false,
          isError: false,
          id: s,
        },
        {
          role: "user",
          content: "OK",
          date: getUtcNow(),
          direction: TChatDirection.RECEIVE,
          streaming: false,
          isError: false,
          id: s,
        },
      ]
    )
  }
  return session
}

type TSimple = {
  avatar: string
  topic: string
  description: string
}

export const useSidebarChatSessions = defineStore(StoreKey.Chat, () => {
  const sessionGid = ref(0)
  const sessions = ref<TChatSession[]>([])

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

  const newSession = (mask?: TMask, simple?: TSimple): TChatSession => {
    const session = makeEmptySession(++sessionGid.value, simple)
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

  const nextSession = (delta: number) => {
    // Add your logic for navigating to the next session
    console.log("nextSession", delta)
  }

  const refreshSession = async (session: TChatSession) => {
    const s = sessions.value.filter((s) => s.id === session.id)[0]
    if (s) {
      s.lastUpdate = getUtcNow()
      s.messagesCount = session.messages.length
      s.topic = session.topic
    }
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
    nextSession,
    clearAllData,
    refreshSession,
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

export const useChatSession = (sid: string): TUseChatSession => {
  const chatStore = useSidebarChatSessions()
  if (cachedChatSession.has(sid)) {
    return cachedChatSession.get(sid) as TUseChatSession
  }
  const { settings } = useSettingStore()
  const loaded = loadFromLocalStorage(StoreKey.ChatSession, {
    sessions: [] as TChatSession[],
    sessionGid: 10000,
  })
  const res = loaded.sessions.filter((s) => s.id === sid)[0]
  const session = reactive<TChatSession>({
    id: sid,
    topic: res.topic,
    avatar: res.avatar,
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
    const nMessage = session.messages[session.messages.length - 1]
    let loadingDots = 0
    const loadingInterval = setInterval(() => {
      loadingDots = (loadingDots + 1) % 3
      nMessage.content = ".".repeat(loadingDots + 1)
    }, 500)
    chatStore.refreshSession(session)

    fetchStream(
      payload,
      (receivedData: string) => {
        clearInterval(loadingInterval) // 清除定时器
        nMessage.content = receivedData
        debounceSave()
      },
      settings.serverUrl,
      settings.apiKey
    ).catch((error) => {
      clearInterval(loadingInterval) // 清除定时器
      // 在聊天中展示 error message
      nMessage.isError = true
      nMessage.content = `Error occurred: ${error}`
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
      chatStore.refreshSession(session)
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

  const result = <TUseChatSession> {
    session,
    onUserInput,
    rename,
    onNewMessage,
    deleteMessage,
    // ... 其他与单个会话相关的方法
  }
  cachedChatSession.set(sid, result)
  return result
}
