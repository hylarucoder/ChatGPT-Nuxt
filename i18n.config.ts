import en from "./src/locales/en"
import zh_CN from "./src/locales/zh_CN"

export default defineI18nConfig(() => ({
  messages: {
    en,
    zh_CN,
  },
}))
