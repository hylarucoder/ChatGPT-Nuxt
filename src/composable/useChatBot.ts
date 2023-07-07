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

    const controller = new AbortController()

    try {
      await fetchEventSource(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...payload,
        }),
        signal: controller.signal,

        async onopen(res) {
          if (res.ok && res.status === 200) {
            console.log("Connection made ", res)
            message.status = "connected"
            onStart(message)
            try {
              const json = await res.json()
              message.errorMessage = JSON.stringify(json.error)
              onError(message)
              controller.abort("Server Error")
            } catch (e) {
              controller.abort("Error parsing response")
            }
          } else if (res.status >= 400 && res.status < 500 && res.status !== 429) {
            message.status = "error"
            message.errorMessage = `server side error ${res.status || res.statusText} ${res.type}`
            onError(message)
            controller.abort("Error parsing response")
            console.log("Client-side error ", res)
          }
        },
        onmessage(ev) {
          console.log("messaging-side error ", ev.data)
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
            message.content = String(e)
            onError(message)
            controller.abort("Error message response")
          }
        },
        onerror(err) {
          message.status = "error"
          message.errorMessage = `error ${err.status || err.statusText || ""} ${err.type || ""}`
          onError(message)
          throw err
        },
      })
    } catch (e) {
      message.content = String(e)
    }
  }

  return {
    message,
    chat,
  }
}
