import { fetchEventSource } from "@fortaine/fetch-event-source"

const BASE_URL = import.meta.env.VITE_API_BASE_URL
// eslint-disable-next-line no-undef
const API_URL = `${BASE_URL}/v1/chat/completions`

export async function fetchStream(payload: any, callback: () => void) {
  // 设置 POST 请求参数
  let receivedData = ""
  await fetchEventSource(API_URL, {
    method: "POST",
    headers: {
      Accept: "text/event-stream",
    },
    body: JSON.stringify({
      ...payload,
    }),
    async onopen(res) {
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
      if (!ev.data) {
        return
      }
      try {
        console.log("onmessage ev", ev.data)
        const parsedData = JSON.parse(ev.data)
        let content = parsedData.choices[0].delta.content
        if (content) {
          receivedData += content
          // @ts-ignore
          callback(receivedData)
        }
      } catch (e) {
        console.log("onmessage error", e)
      }
    },
    onerror(ev) {
      console.log("onerror", ev)
    },
  })
}
