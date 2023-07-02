import en from "./locales/en"
import zh_CN from "./locales/zh_CN"

export default defineI18nConfig(() => ({
  // detectBrowserLanguage: true,
  messages: {
    en,
    zh_CN,
  },
}))
