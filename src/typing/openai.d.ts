type TOpenApiChatCompletionMessage = {
  role: "user" | "system" | "assistant"
  content: string
}

type TOpenApiChatCompletion = {
  messages: TOpenApiChatCompletionMessage
  model: string
  presence_penalty: number
  stream: boolean
  temperature: number
}
