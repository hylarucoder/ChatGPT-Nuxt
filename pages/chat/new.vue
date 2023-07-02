<script setup lang="ts">
import MaskCard from "~/components/MaskCard.vue"
import { getRandomEmoji } from "~/utils/emoji"
import { ref } from "vue"
import { useSidebarChatSessions } from "~/composable/chat"

const router = useRouter()
const chatStore = useSidebarChatSessions()

const newSessionAndNav = (mask: TPrompts) => {
  const session = chatStore.newSession(undefined, {
    topic: mask.name,
    description: mask.description,
    avatar: getRandomEmoji("a"),
  })
  router.push({
    path: "/chat/session/" + session.id,
  })
}

const masksByRow = ref<TPrompts[][]>([])

interface TPromptsJson {
  cn: string[][]
  en: string[][]
}

enum TLang {
  cn,
  en,
}

interface TPrompts {
  name: string
  description: string
  lang: TLang
}

const { data, pending, error, refresh } = await useFetch("/prompts.json", {
  lazy: true,
  server: false,
})
console.log("data, pending", data, pending, error, refresh)

function convertToMasksByRow(promptsJson: TPromptsJson, numRows: number = 8): TPrompts[][] {
  const masksByRow: TPrompts[][] = []
  const maxLength = Math.max(promptsJson.cn.length, promptsJson.en.length)
  const numCols = Math.ceil(maxLength / numRows)

  for (let i = 0; i < numRows; i++) {
    masksByRow[i] = []
    for (let j = 0; j < numCols; j++) {
      const index = i + numRows * j
      if (index < promptsJson.cn.length) {
        if (!promptsJson.cn[index][0]) {
          continue
        }
        masksByRow[i].push({
          name: promptsJson.cn[index][0],
          description: promptsJson.cn[index][1] || "",
          lang: TLang.cn,
        })
      }
      if (index < promptsJson.en.length) {
        if (!promptsJson.en[index][0]) {
          continue
        }

        masksByRow[i].push({
          name: promptsJson.en[index][0],
          description: promptsJson.en[index][1] || "",
          lang: TLang.en,
        })
      }
    }
  }

  return masksByRow
}

onMounted(async () => {
  if (!data.value) {
    await refresh()
  }
  if (data.value) {
    console.log(data.value)
    masksByRow.value = convertToMasksByRow(data.value)
    console.log(toRaw(masksByRow.value))
  }
})
</script>
<template>
  <div class="flex w-full flex-shrink flex-col items-center">
    <div class="flex w-full justify-between p-3">
      <button
        @click="router.back()"
        class="flex h-10 cursor-pointer items-center justify-center truncate rounded-xl bg-white p-3 text-center"
      >
        <div class="flex items-center justify-center">
          <VSvgIcon icon="return" class="h-4 w-4" />
        </div>
        <div class="ml-1 truncate text-[0.75rem]">返回</div>
      </button>
    </div>
    <div class="mb-5 mt-12 flex space-x-1">
      <div class="flex h-16 w-12 items-center justify-center rounded-2xl border border-neutral-200 bg-white px-3 py-5">
        <Icon name="😆" size="1.4em" />
      </div>
      <div class="flex h-16 w-12 items-center justify-center rounded-2xl border border-neutral-200 bg-white px-3 py-5">
        <Icon name="🤖" size="1.4em" />
      </div>
      <div class="flex h-16 w-12 items-center justify-center rounded-2xl border border-neutral-200 bg-white px-3 py-5">
        <Icon name="👹" size="1.4em" />
      </div>
    </div>
    <div class="mb-2 text-[2.00rem] font-bold">挑选一个面具</div>
    <div>现在开始，与面具背后的灵魂思维碰撞</div>
    <div class="mb-5 mt-12 flex justify-center space-x-2 text-[0.75rem]">
      <button
        class="ml-3 flex h-10 w-24 cursor-pointer items-center justify-center truncate rounded-xl bg-emerald-400 p-3 text-center text-white hover:bg-emerald-500"
        @click="newSessionAndNav"
      >
        <div class="flex items-center justify-center">
          <VSvgIcon icon="lightning" class="" style="color: white" />
        </div>
        <div class="ml-1 truncate text-white">直接开始</div>
      </button>
      <button
        class="flex h-10 w-24 cursor-pointer items-center justify-center truncate rounded-xl border border-neutral-200 bg-white p-3 text-center hover:bg-gray-200"
        @click="router.push('/chat/masks')"
      >
        <div class="flex items-center justify-center">
          <VSvgIcon icon="eye" class="h-4 w-4" />
        </div>
        <div class="ml-1 truncate text-black">查看全部</div>
      </button>
    </div>
    <div class="flex-grow items-center overflow-x-hidden pt-5">
      <div class="mb-3 flex" v-for="(row, index) in masksByRow" :key="index">
        <MaskCard
          @click="
            newSessionAndNav({
              name: mask.name,
              description: mask.description,
              lang: mask.lang,
            })
          "
          v-for="mask in row"
          :key="mask.name"
          :icon="getRandomEmoji(mask.name || '?')"
          :text="mask.name"
        />
      </div>
    </div>
  </div>
</template>
