import { fetchEventSource } from "@fortaine/fetch-event-source"

export async function fetchStream(
  payload: any,
  callback: (receivedData: string) => void,
  BASE_URL: string,
  TOKEN: string
) {
  const API_URL = `${BASE_URL}/v1/chat/completions`
  let receivedData = ""
  await fetchEventSource(API_URL, {
    method: "POST",
    headers: {
      Accept: "text/event-stream",
      Authorization: `Bearer ${TOKEN}`,
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
        const parsedData = JSON.parse(ev.data)
        let content = parsedData.choices[0].delta.content
        if (content) {
          receivedData += content
          callback(receivedData)
        }
      } catch (e) {
        // TODO: handle error?
        console.log("onmessage error", e)
      }
    },
    onerror(ev) {
      console.log("onerror", ev)
    },
  })
}
