export const appName = "ChatGPT Nuxt"
export const appDescription = "ChatGPT Nuxt"

export const OWNER = "hylarucoder"
export const REPO = "ChatGPT-Nuxt"
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`
export const UPDATE_URL = `${REPO_URL}#keep-updated`
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`
export const RUNTIME_CONFIG_DOM = "danger-runtime-config"
export const DEFAULT_API_HOST = "https://chatgpt1.nextweb.fun/api/proxy"

export enum Path {
  Home = "/chat",
  Chat = "/chat",
  Settings = "/chat/settings",
  NewChat = "/chat/new",
  Masks = "/chat/masks",
  Auth = "/chat/auth",
}

export enum SlotID {
  AppBody = "app-body",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "store-chat",
  Access = "access-control",
  Setting = "store-setting",
  Mask = "store-mask",
  Prompt = "prompt-store",
  Update = "chat-update",
}

export const MAX_SIDEBAR_WIDTH = 500
export const MIN_SIDEBAR_WIDTH = 230
export const NARROW_SIDEBAR_WIDTH = 100

export const ACCESS_CODE_PREFIX = "ak-"

export const LAST_INPUT_KEY = "last-input"

export const REQUEST_TIMEOUT_MS = 60000

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown"

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
}

export const DEFAULT_INPUT_TEMPLATE = `{{input}}` // input / time / model / lang
