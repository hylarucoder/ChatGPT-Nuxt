import { StoreKey } from "~/constants"
import { TChatSession } from "~/constants/typing"

interface ChatSessionStorage {
  sessions: TChatSession[]
  sessionGid: number
}

const defaultChatSessionStorage: ChatSessionStorage = {
  sessions: [],
  sessionGid: 10000,
}

export const loadSessionFromLocalStorage = (sid: string): TChatSession | null => {
  const chatSessionStorage = loadFromLocalStorage(StoreKey.ChatSession, defaultChatSessionStorage)
  const session = chatSessionStorage.sessions.find(s => s.id === sid)
  if (session) {
    return session
  }
  return null
}
export const saveSessionToLocalStorage = (newSession: TChatSession): void => {
  const chatSessionStorage = loadFromLocalStorage(StoreKey.ChatSession, defaultChatSessionStorage)

  const existingSessionIndex = chatSessionStorage.sessions.findIndex(s => s.id === newSession.id)

  if (existingSessionIndex !== -1) {
    chatSessionStorage.sessions[existingSessionIndex] = newSession
    console.log("find", chatSessionStorage.sessions[existingSessionIndex])
  } else {
    chatSessionStorage.sessions.push(newSession)
    console.log("reuse", chatSessionStorage.sessions[existingSessionIndex])
  }

  saveToLocalStorage(StoreKey.ChatSession, chatSessionStorage)
}
export const loadFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  const storedValue = localStorage.getItem(key)
  if (storedValue) {
    try {
      return JSON.parse(storedValue)
    } catch (e) {
      return defaultValue
    }
  }
  return defaultValue
}

export const saveToLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value))
}
