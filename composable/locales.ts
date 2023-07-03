import { TLocale } from "~/locales/en"
import { TLocaleKeys } from "~/locales/schema"

export const useTrans = () => {
  const { t, n, setLocale } = useI18n<{ message: TLocale }>({
    useScope: "global",
  })
  const trans = (key: TLocaleKeys, context?: any) => t(String(key), context)

  return {
    t: trans,
    setLocale,
  }
}
