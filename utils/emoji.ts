const commonEmojis: string[] = [
  "😀",
  "😂",
  "😍",
  "❤️",
  "👍",
  "👋",
  "🤔",
  "👀",
  "🍕",
  "🎉",
  "🍔",
  "🥑",
  "🍦",
  "🍩",
  "🥪",
  "🍺",
  "🎸",
  "📷",
  "🎮",
  "💻",
  "🌎",
  "🌻",
  "🏠",
  "🚗",
  "🛵",
  "🎈",
  "🎁",
  "💰",
  "📚",
  "🎤",
  "😎",
  "🤯",
  "🤢",
  "🥳",
  "🤗",
  "😴",
  "👻",
  "💊",
  "🍼",
  "🐶",
  "🐱",
  "🐢",
  "🐬",
  "🦁",
  "🍓",
  "🍇",
  "🍌",
  "🥭",
  "🍎",
  "🍫",
]

function getRandomCommonEmoji() {
  // 从 commonEmojis 数组中随机选择一个 emoji
  const randomIndex = Math.floor(Math.random() * commonEmojis.length)
  return commonEmojis[randomIndex]
}

export function getRandomEmoji(str: string) {
  // 将字符串的每个字符的 Unicode 编码相加
  const total = str.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)

  // 产生一个随机数，以总和作为种子
  const random = Math.floor(Math.random() * (total + 1))

  // 有 100% 的概率返回常见 emoji，否则返回随机生成的 emoji
  const commonEmojiChance = 1
  const shouldReturnCommonEmoji = Math.random() < commonEmojiChance
  if (shouldReturnCommonEmoji) {
    return getRandomCommonEmoji()
  }

  // 使用 Unicode 编码值的算术平均值加上偏移量来获取 emoji
  const offset = 127397
  const code = random + offset
  const emoji = String.fromCodePoint(code)

  return emoji
}
