import { defineStore } from "pinia"
import { ref } from "vue"
import { ChatSession, Mask } from "~/composables/config/typing"
import { DEFAULT_INPUT_TEMPLATE, StoreKey } from "~/constants"

const markdown = `
## Hello Markdown
\`\`\`shell
npm i @uivjs/vue-markdown-preview

\`\`\`
# t

## Project setup
\`\`\`
yarn install
\`\`\`

### Compiles and hot-reloads for development
\`\`\`
yarn serve
\`\`\`

### Compiles and minifies for production
\`\`\`
yarn build
\`\`\`

### Lints and fixes files
\`\`\`
yarn lint
\`\`\`

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

`

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
        content: markdown,
        date: "2021-06-13T15:00:00.000Z",
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
    lastUpdate: 0,
    lastSummarizeIndex: 0,
    mask: {
      id: s,
      avatar: "https://cdn.jsdelivr.net/gh/elevenvac/elevenvac.github.io/assets/img/avatar.png",
      name: "Demo",
      context: [],
      lang: "en",
      builtin: true,
      modelConfig: {
        model: "gpt-3.5-turbo",
        temperature: 0.5,
        max_tokens: 2000,
        presence_penalty: 0,
        frequency_penalty: 0,
        sendMemory: true,
        historyMessageCount: 4,
        compressMessageLengthThreshold: 1000,
        template: DEFAULT_INPUT_TEMPLATE,
      },
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

  const moveSession = (from: any, to: any) => {
    const session = sessions.value.splice(from, 1)[0]
    sessions.value.splice(to, 0, session)
  }

  const selectSession = (index: any) => {
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
      stat: {
        tokenCount: 0,
        wordCount: 0,
        charCount: 0,
      },
      lastUpdate: 0,
      lastSummarizeIndex: 0,
      mask: mask,
    }
    sessions.value.push(session)
    return session
  }

  const deleteSession = (index: number) => {
    sessions.value.splice(index, 1)
  }

  const currentSession = (): ChatSession => {
    return sessions.value[currentSessionIndex.value]
  }

  const nextSession = (delta: number) => {
    // Add your logic for navigating to the next session
    console.log("nextSession", delta)
  }

  const onNewMessage = (message: string) => {
    // Add your logic for handling a new message
    console.log("nextSession", message)
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
    // updateCurrentSession,
    // updateMessage,
    resetSession,
    getMessagesWithMemory,
    getMemoryPrompt,
    clearAllData,
  }
})
