import { fetchEventSource } from "@fortaine/fetch-event-source"

const BASE_URL = import.meta.env.VITE_API_BASE_URL
// eslint-disable-next-line no-undef
const API_URL = `${BASE_URL}/v1/chat/completions`

const payload = {
  messages: [
    {
      role: "system",
      content: "Welcome to the chat room!",
    },
    {
      role: "user",
      content: "Say Hello!",
    },
  ],
  model: "gpt-3.5-turbo",
  presence_penalty: 0,
  stream: true,
  temperature: 0.5,
}

export async function fetchStream(callback) {
  // 设置 POST 请求参数
  console.log("fetchStream")
  let receivedData = ""
  await fetchEventSource(API_URL, {
    method: "POST",
    headers: {
      Accept: "text/event-stream",
    },
    body: JSON.stringify({
      ...payload,
    }),
    onopen(res) {
      if (res.ok && res.status === 200) {
        console.log("Connection made ", res)
      } else if (res.status >= 400 && res.status < 500 && res.status !== 429) {
        console.log("Client-side error ", res)
      }
    },
    onmessage(ev) {
      if ("[DONE]" == ev.data) {
        return
      }
      const parsedData = JSON.parse(ev.data)
      let content = parsedData.choices[0].delta.content
      if (content) {
        receivedData += content
        callback(receivedData)
      }
    },
    onerror(ev) {
      console.log("onerror", ev)
    },
  })
}
