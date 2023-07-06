import en from "./src/locales/en"
// eslint-disable-next-line camelcase
import zh_CN from "./src/locales/zh_CN"

export default defineI18nConfig(() => ({
  messages: {
    en,
    // eslint-disable-next-line camelcase
    zh_CN,
  },
}))
