import { EventStreamContentType, fetchEventSource } from "@fortaine/fetch-event-source"
import { useSettingStore } from "~/composables/settings"

type TChatCompletionMessage = {
  content: string
  status: "pending" | "connected" | "client error" | "messaging" | "error" | "done"
  errorMessage: string
}

function isJsonString(str: string) {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
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

        async onopen(resp) {
          if (resp.ok && resp.headers.get("content-type") === EventStreamContentType) {
            message.status = "connected"
            onStart(message)
            return // everything's good
          }
          if (resp.status >= 400 && resp.status < 500 && resp.status !== 429) {
            message.status = "error"
            message.errorMessage = `server side error ${resp.status || resp.statusText} ${resp.type}`
            controller.abort("Error parsing response")
            onError(message)
            console.log("Client-side error ", resp)
            return
          }
          const content = await resp.text()
          console.log("Response content ", content)
          try {
            console.log("Error message ", content)
            if (isJsonString(content)) {
              message.errorMessage = content
              controller.abort("Server Error")
              onError(message)
            }
          } catch (e) {
            controller.abort("Error parsing response")
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
            controller.abort("Error message response")
            onError(message)
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
