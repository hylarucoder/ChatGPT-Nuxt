<script setup lang="ts">
import MaskCard from "~/components/MaskCard.vue"
import { TPrompts, useMasks } from "~/composable/mask"
import { getRandomEmoji } from "~/utils/emoji"
import { useSidebarChatSessions } from "~/composable/chat"

const router = useRouter()
const chatStore = useSidebarChatSessions()
const masksUse = useMasks()

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

function splitArrayIntoChunks<T>(arr: T[], rows: number, cols: number) {
  const result = []
  let index = 0

  for (let row = 0; row < rows; row++) {
    const rowData = []
    for (let col = 0; col < cols && index < arr.length; col++) {
      rowData.push(arr[index])
      index++
    }
    result.push(rowData)
  }

  return result
}
</script>
<template>
  <div class="flex w-full flex-shrink flex-col items-center overflow-hidden">
    <div class="flex w-full justify-between p-3 text-zinc-800">
      <button
        class="flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-white p-3 text-center hover:bg-gray-200"
        @click="router.back()"
      >
        <div class="flex items-center justify-center">
          <VSvgIcon icon="return" class="h-4 w-4" />
        </div>
        <div class="ml-1 overflow-hidden text-ellipsis text-xs">Return</div>
      </button>
      <button
        class="flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-white p-3 text-center hover:bg-gray-200"
      >
        <div class="ml-1 overflow-hidden text-ellipsis text-xs">Never Show Again</div>
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
        class="flex h-10 w-24 cursor-pointer items-center justify-center truncate rounded-xl border border-neutral-200 bg-white p-3 text-center hover:bg-gray-200"
        @click="router.push('/chat/masks')"
      >
        <div class="flex items-center justify-center">
          <Icon size="1.3em" name="ph:eye" color="#000" />
        </div>
        <div class="ml-1 truncate text-black">查看全部</div>
      </button>
      <button
        class="ml-3 flex h-10 w-24 cursor-pointer items-center justify-center truncate rounded-xl bg-[--primary] p-3 text-center text-white hover:bg-emerald-500"
        @click="newSessionAndNav"
      >
        <div class="flex items-center justify-center">
          <Icon color="#FFF" size="1.4em" name="typcn:flash-outline" />
        </div>
        <div class="ml-1 truncate text-white">直接开始</div>
      </button>
    </div>
    <div class="flex-grow items-center overflow-x-hidden pt-5">
      <div class="mb-3 flex" v-for="(row, index) in splitArrayIntoChunks(masksUse.masks, 8, 18)" :key="index">
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
