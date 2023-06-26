import { defineStore } from "pinia"
import { ref } from "vue"
import { ChatSession, Mask } from "~/composables/config/typing"
import { StoreKey } from "~/constants"

function makeDemoSession(s: number): ChatSession {
  return {
    id: s,
    topic: "Welcome",
    memoryPrompt: "Welcome to the chat room!",
    messages: [
      {
        role: "system",
        content: "Welcome to the chat room!",
        date: "2021-06-13T15:00:00.000Z",
        streaming: false,
        isError: false,
        id: s,
      },
      {
        role: "system",
        content: "我好!",
        date: "2021-06-13T15:00:00.000Z",
        streaming: false,
        isError: false,
        id: s,
      },
    ],
    stat: {},
    lastUpdate: 0,
    lastSummarizeIndex: 0,
    mask: {
      id: s,
      avatar: "https://cdn.jsdelivr.net/gh/elevenvac/elevenvac.github.io/assets/img/avatar.png",
    },
  }
}

export const useChatStore = defineStore(StoreKey.Chat, () => {
  const sessions = ref([
    makeDemoSession(1),
    makeDemoSession(2),
    makeDemoSession(3),
    makeDemoSession(4),
    makeDemoSession(5),
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

  const newSession = (mask: Mask): ChatSession => {
    let session = {
      id: globalId.value++,
      topic: "New Session",
      memoryPrompt: "",
      messages: [
        {
          role: "chat",
          content: "Welcome to the chat room!",
          date: "2021-06-13T15:00:00.000Z",
          streaming: false,
          isError: false,
          id: 0,
        },
        {
          role: "system",
          content: "Welcome to the chat room!",
          date: "2021-06-13T15:00:00.000Z",
          streaming: false,
          isError: false,
          id: 0,
        },
      ],
      stat: {},
      lastUpdate: 0,
      lastSummarizeIndex: 0,
      mask: mask,
    }
    sessions.value.push(session)
    return session
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
