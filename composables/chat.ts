import { defineStore } from "pinia"
import { ref } from "vue"
import { TMask, TChatDirection, TChatSession } from "~/constants/typing"
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
        direction: TChatDirection.SEND,
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

export const useChatStore = defineStore(
  StoreKey.Chat,
  () => {
    const sessionGlobalId = ref(0)
    const sessions = ref([makeEmptySession(1)])
    const settingStore = useSettingStore()
    const settings = settingStore.settings

    const clearSessions = () => {
      sessions.value = []
    }

    const moveSession = (from: any, to: any) => {
      const session = sessions.value.splice(from, 1)[0]
      sessions.value.splice(to, 0, session)
    }

    const newSession = (mask?: TMask): TChatSession => {
      const session = makeEmptySession(sessionGlobalId.value++)
      sessions.value.unshift(session)
      return session
    }

    const deleteSession = (id: string) => {
      // remove session by id
      const index = sessions.value.findIndex((s) => s.id === id)
      sessions.value.splice(index, 1)
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
      }).catch((error) => {
        clearInterval(loadingInterval) // 清除定时器
        console.error("Error occurred:", error)
      })
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
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
)
