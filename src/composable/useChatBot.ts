import { fetchEventSource } from "@fortaine/fetch-event-source"
import { useSettingStore } from "~/composable/settings"

type TChatCompletionMessage = {
  content: string
  status: "pending" | "connected" | "client error" | "messaging" | "error" | "done"
  errorMessage: string
}

export default function useChatBot() {
  const { settings } = useSettingStore()
  const message = reactive<TChatCompletionMessage>({
    content: "",
    status: "pending",
    errorMessage: "",
  })

  async function chat(
    payload: TOpenApiChatCompletion,
    onStart: (message: TChatCompletionMessage) => void,
    onMessage: (message: TChatCompletionMessage) => void,
    onError: (message: TChatCompletionMessage) => void,
    onDone: (message: TChatCompletionMessage) => void,
  ) {
    const BASE_URL = settings.serverUrl
    const TOKEN = settings.apiKey
    const API_URL = `${BASE_URL}/v1/chat/completions`

    await fetchEventSource(API_URL, {
      method: "POST",
      headers: {
        Accept: "text/event-stream",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        ...payload,
      }),
      // eslint-disable-next-line require-await
      async onopen(res) {
        if (res.ok && res.status === 200) {
          console.log("Connection made ", res)
          message.status = "connected"
          onStart(message)
        } else if (res.status >= 400 && res.status < 500 && res.status !== 429) {
          message.status = "client error"
          message.errorMessage = `Client-side error ${res.status || res.statusText} ${res.type}`
          onError(message)
          console.log("Client-side error ", res)
        }
      },
      onmessage(ev) {
        if (ev.data === "[DONE]") {
          message.status = "done"
          onDone(message)
          return
        }
        if (!ev.data) {
          return
        }
        try {
          const parsedData = JSON.parse(ev.data)
          const content = parsedData.choices[0]?.delta?.content
          if (content) {
            message.content += content
            onMessage(message)
          }
        } catch (e) {
          message.content = String(s)
          onError(message)
        }
      },
      onerror(ev) {
        message.status = "error"
        message.errorMessage = `error ${ev.status || ev.statusText || ""} ${ev.type || ""}`
        onError(message)
      },
    })
  }

  return {
    message,
    chat,
  }
}
