import { defineStore } from "pinia"
import { ref } from "vue"
import { TMask, TChatDirection, TChatSession } from "~/composables/config/typing"
import { DEFAULT_INPUT_TEMPLATE, StoreKey } from "~/constants"
import { fetchStream } from "~/constants/api"
import { getUtcNow } from "~/utils/date"

const markdown = `
## Hello Markdown
\`\`\`shell
npm i @uivjs/vue-markdown-preview

\`\`\`
# t

## Project setup
\`\`\`bash
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
\`\`\`bash
yarn lint
\`\`\`

## CSS

\`\`\`css
.markdown-body .task-list-item .handle {
  display: none;
}

.markdown-body .task-list-item-checkbox {
  margin: 0 0.2em 0.25em -1.4em;
  vertical-align: middle;
}

.markdown-body .contains-task-list:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em 0.25em 0.2em;
}
\`\`\`

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

`

function makeDemoSession(s: number): TChatSession {
  return {
    id: s,
    topic: "Welcome",
    memoryPrompt: "Welcome to the chat room!",
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
      {
        role: "user",
        content: markdown,
        date: "2021-06-13T15:00:00.000Z",
        direction: TChatDirection.RECEIVE,
        streaming: false,
        isError: false,
        id: s,
      },
      {
        role: "user",
        content: markdown,
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

  const newSession = (mask?: TMask): TChatSession => {
    console.log(mask)
    let session: TChatSession = {
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
          direction: TChatDirection.SEND,
          id: 0,
        },
        {
          role: "system",
          content: "Welcome to the chat room!",
          date: "2021-06-13T15:00:00.000Z",
          direction: TChatDirection.RECEIVE,
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
      // date to timestamp
      lastUpdate: getUtcNow(),
      lastSummarizeIndex: 0,
      mask: {
        id: 0,
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
    sessions.value.push(session)
    return session
  }

  const deleteSession = (index: number) => {
    sessions.value.splice(index, 1)
  }

  const currentSession = (): TChatSession => {
    return sessions.value[currentSessionIndex.value]
  }

  const nextSession = (delta: number) => {
    // Add your logic for navigating to the next session
    console.log("nextSession", delta)
  }

  const onNewMessage = (message: string) => {
    // input message, send to backend, get response
    // add response message
    const payload = {
      messages: [
        {
          role: "system",
          content: "Welcome to the chat room!",
        },
        {
          role: "user",
          content: "请帮我写一个 100 字的神回复",
        },
      ],
      model: "gpt-3.5-turbo",
      presence_penalty: 0,
      stream: true,
      temperature: 0.5,
    }

    currentSession().messages.push({
      role: "user",
      content: message,
      date: "2021-06-13T15:00:00.000Z",
      direction: TChatDirection.SEND,
      streaming: false,
      isError: false,
      id: 0,
    })
    const newMessage = {
      role: "user",
      content: "...",
      date: "2021-06-13T15:00:00.000Z",
      direction: TChatDirection.RECEIVE,
      streaming: false,
      isError: false,
      id: 0,
    }
    currentSession().messages.push(newMessage)
    const nMessage = currentSession().messages[currentSession().messages.length - 1]

    console.log("nextSession", nMessage)
    fetchStream(payload, (receivedData: string) => {
      nMessage.content = receivedData
      // const chatElements = document.getElementsByClassName("markdown-body")
      // const chatEle = chatElements[chatElements.length - 1]
      // // console.log(chatEle.scrollIntoView)
      // chatEle?.scrollIntoView({
      //   behavior: "smooth",
      //   block: "center",
      // })
      // console.log("Received message:", receivedData)
    }).catch((error) => {
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
