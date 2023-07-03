import en from "./src/locales/en"
// write to file
import fs from "fs"
import path from "path"

interface LocaleObject {
  [key: string]: LocaleObject | string
}

type TLocaleKey = keyof LocaleObject

function getLocaleKeys(obj: LocaleObject, parentKey?: string): TLocaleKey[] {
  const keys: TLocaleKey[] = []

  for (const key in obj) {
    const value = obj[key]

    if (typeof value === "object" && value !== null) {
      const nestedParentKey = parentKey ? `${parentKey}.${key}` : key
      const nestedKeys = getLocaleKeys(value, nestedParentKey)
      keys.push(...nestedKeys)
    } else {
      const fullKey = parentKey ? `${parentKey}.${key}` : key
      keys.push(fullKey as TLocaleKey)
    }
  }

  return keys
}

const keys = getLocaleKeys(en)
const headerText = `\
const localeKeys = [
`
const middleText = keys.map((key) => `  "${key}",`).join("\n")
const footerText = `
] as const

export type TLocaleKeys = (typeof localeKeys)[number]
`
const __dirname = path.dirname(new URL(import.meta.url).pathname)

const filePath = path.resolve(__dirname, "../src/locales/schema.ts")
fs.writeFileSync(filePath, headerText + middleText + footerText)
